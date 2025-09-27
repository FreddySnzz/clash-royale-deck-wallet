"use client";

import { useMemo } from "react";
import CardShowcase from "./CardShowcase";
import Loading from "../Loading";
import { useCardsContext } from "@/data/context/CardsContext";
import CardNotFound from "./CardNotFound";
import { normalizeText } from "@/data/functions/removeAccent";
import { useQueryParams } from "@/data/hooks/useQueryParams";

export default function Cards({ searchParams }: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { cards, loading, error } = useCardsContext();

  const { search, id } = useQueryParams<"search" | "id">(searchParams || {}, {
    search: "",
    id: "",
  });

  const filteredCards = useMemo(() => {
    if (id) {
      return cards.filter((card) =>
        card.id?.toString().includes(id.toString())
      );
    };

    if (search) {
      return cards.filter((card) =>
        normalizeText(card.name.toLowerCase()).includes(normalizeText(search)) || 
        card?.englishName?.toLowerCase().includes(search.toLowerCase())
      );
    };

    return cards;
  }, [cards, search, id]);

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