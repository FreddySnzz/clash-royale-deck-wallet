export const api = {
  get: async <T>(endpoint: string): Promise<T> => {
    const res = await fetch(`/api/${endpoint}`, { cache: "no-store" });
    
    if (!res.ok) throw new Error(`Erro ao buscar ${endpoint}`);
    return res.json();
  },
};