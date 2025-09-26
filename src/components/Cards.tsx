'use client';

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import CardShowcase from "./CardShowcase";
import Loading from "./Loading";
import { useCardsContext } from "@/data/context/CardsContext";
import CardNotFound from "./CardNotFound";
import { normalizeText } from "@/data/functions/removeAccent";

export default function Cards() {
  const { cards, loading, error } = useCardsContext();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const searchQueryById = searchParams.get("id") || "";

  const filteredCards = useMemo(() => {
    if (searchQueryById) {
      return cards.filter((card) =>
        card.id?.toString().includes(searchQueryById.toString())
      );
    };

    if (searchQuery) {
      return cards.filter((card) =>
        normalizeText(card.name.toLowerCase()).includes(normalizeText(searchQuery)) || 
        card?.englishName?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    };

    return cards;
  }, [cards, searchQuery, searchQueryById]);

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