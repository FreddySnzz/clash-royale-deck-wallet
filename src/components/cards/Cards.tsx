"use client";

import { useMemo } from "react";
import CardShowcase from "./CardShowcase";
import Loading from "../Loading";
import { useCardsContext } from "@/data/context/CardsContext";
import CardNotFound from "./CardNotFound";
import { normalizeText } from "@/data/functions/removeAccent";
import { useQueryParams } from "@/data/hooks/useQueryParams";

interface CardsProps {
  searchText?: string;
  cardId?: string;
};

export default function Cards({ searchText, cardId }: CardsProps) {
  const { cards, loading, error } = useCardsContext();

  const filteredCards = useMemo(() => {
    if (cardId) {
      return cards.filter((card) =>
        card.id?.toString().includes(cardId.toString())
      );
    };

    if (searchText) {
      return cards.filter((card) =>
        normalizeText(card.name.toLowerCase()).includes(normalizeText(searchText)) || 
        card?.englishName?.toLowerCase().includes(searchText.toLowerCase())
      );
    };

    return cards;
  }, [cards, searchText, cardId]);

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen w-screen">
        <span className="text-red-600 font-black">
          Ocorreu um erro ao buscar as cartas: {error.message}
        </span>
      </div>
    );
  };

  if (loading) return <Loading />;

  return (
    <main>
      <div className="p-6">
        { filteredCards.length > 0 ? (
          filteredCards.map((card) => (
            <div key={card.id}>
              <CardShowcase card={card} />
            </div>
          ))
        ) : <CardNotFound /> }
      </div>
    </main>
  );
};