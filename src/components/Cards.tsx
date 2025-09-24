'use client';

import CardWithCost from "./CardWithCost";
import { AiOutlineLoading } from "react-icons/ai";
import { clashRegularFont } from "@/fonts";
import { useCards } from "@/data/hooks/useCards";
import CardShowcase from "./CardShowcase";
import Loading from "./Loading";

export default function Cards() {
  const { cards, loading, error } = useCards();

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen w-screen">
        <span className="text-red-500 font-bold">
          Ocorreu um erro ao buscar as cartas: {error.message}
        </span>
      </div>
    );
  };

  return loading ? 
    (
      <Loading />
    ) : (
      <main>
        <div className="p-4">
          {cards.map((card) => (
            <div key={card.id}>
              <CardShowcase card={card} />
            </div>
          ))}
        </div>
      </main>
    );
};