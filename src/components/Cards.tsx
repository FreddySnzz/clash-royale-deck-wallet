'use client';

import CardWithCost from "./CardWithCost";
import { AiOutlineLoading } from "react-icons/ai";
import { clashRegularFont } from "@/fonts";
import { useCards } from "@/data/hooks/useCards";

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
      <div className="fixed top-0 left-0 flex justify-center items-center gap-2 h-screen w-screen z-50">
        <AiOutlineLoading className="animate-spin text-slate-950 dark:text-slate-200" />
        <span className={`text-slate-950 dark:text-slate-200 ${clashRegularFont.className}`}>Carregando...</span>
      </div>
    ) : (
      <main className="mt-24">
        <div>
          <ul>
            {cards.map((card) => (
              <li key={card.id}>
                <p className={`font-bold text-white text-xl text-shadow-lg text-shadow-black`}>{card.name}</p>
                <div className="flex">
                  <CardWithCost 
                    cardImage={card.iconUrls.medium} 
                    cost={card?.elixirCost}
                  />
                  { card.iconUrls.evolutionMedium && 
                    <CardWithCost 
                      cardImage={card.iconUrls.evolutionMedium} 
                      cost={card?.elixirCost}
                    /> 
                  }
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    );
};