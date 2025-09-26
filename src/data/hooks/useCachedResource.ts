import { useEffect, useState } from "react";
import { openDB, DBSchema } from "idb";

interface CacheDB extends DBSchema {
  store: {
    key: string;
    value: { data: any; expiry: number };
  };
}

const DB_NAME = "cacheDB";
const STORE_NAME = "store";
const DB_VERSION = 1;

async function getDB() {
  return openDB<CacheDB>(DB_NAME, DB_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    },
  });
}

type UseCachedResourceOptions<T> = {
  key: string;
  fetcher: () => Promise<T>;
  cacheTime?: number;
};

export function useCachedResource<T>({
  key,
  fetcher,
  cacheTime = 1000 * 60 * 60,
}: UseCachedResourceOptions<T>) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function load() {
      if (typeof window === "undefined") return;

      try {
        const db = await getDB();
        const cached = await db.get(STORE_NAME, key);

        if (cached && Date.now() < cached.expiry) {
          setData(cached.data);
          setLoading(false);

          setUpdating(true);
          fetcher()
            .then(async (fresh) => {
              setData(fresh);
              await db.put(STORE_NAME, { data: fresh, expiry: Date.now() + cacheTime }, key);
            })
            .catch((err) => console.error("Erro ao atualizar cache:", err))
            .finally(() => setUpdating(false));

          return;
        };

        const fresh = await fetcher();
        setData(fresh);
        await db.put(STORE_NAME, { data: fresh, expiry: Date.now() + cacheTime }, key);
      } catch (err) {
        console.error("Erro ao carregar recurso:", err);
        setError(err instanceof Error ? err : new Error("Erro desconhecido"));
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [key, fetcher, cacheTime]);

  return { data, loading, updating, error };
}
