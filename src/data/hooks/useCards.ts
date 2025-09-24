import { useEffect, useState } from "react";
import { statsRoyaleAPIExternalService } from "@/services/royale-api.service";
import { CardDto } from "../dtos/card.dto";

export function useCards() {
  const [cards, setCards] = useState<CardDto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchCards() {
      try {
        const data = await statsRoyaleAPIExternalService.getAllCards();
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
