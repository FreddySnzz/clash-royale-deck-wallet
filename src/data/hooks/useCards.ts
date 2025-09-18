import { useEffect, useState } from "react";
import { clashRoyaleAPIExternalService } from "@/services/royale-api.service";
import { CardInterface } from "@/types/Card.type";

export function useCards() {
  const [cards, setCards] = useState<CardInterface[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchCards() {
      try {
        const data = await clashRoyaleAPIExternalService.getAllCards();
        setCards(data);
      } catch (err) {
        console.error("Erro ao buscar cartas:", err);
        setError(err instanceof Error ? err : new Error("Erro desconhecido"));
      } finally {
        setLoading(false);
      }
    }

    fetchCards();
  }, []);

  return { cards, loading, error };
}
