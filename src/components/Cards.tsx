'use client';

import { useEffect, useState } from "react";
import { royaleService } from "@/services/royale-api.service";
import CardWithCost from "./CardWithCost";
import { AiOutlineLoading } from "react-icons/ai";
import { clashRegularFont } from "@/fonts";

export default function Cards() {
  const [cards, setCards] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function fetchCards() {
      try {
        const data = await royaleService.getAllCards();
        setCards(data.items);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar cartas:", error);
        setLoading(false);
      };
    };

    fetchCards();
  }, []);

  return loading 
    ? (
      <div className="flex justify-center items-center gap-2 h-screen w-screen">
        <AiOutlineLoading className="animate-spin text-slate-950 dark:text-slate-200" />
        <span className={`text-slate-950 dark:text-slate-200 ${clashRegularFont.className}`}>Carregando...</span>
      </div>
    )
    : (
    <main className="mt-24">
      <div>
        <ul>
          {cards.map((card) => (
            <li key={card.id}>
              <p className={`font-bold text-white text-xl text-shadow-lg text-shadow-black`}>{card.name}</p>
              <div className="flex">
                <CardWithCost 
                  cardImage={card.iconUrls.medium} 
                  cost={card.elixirCost}
                />
                { card.iconUrls.evolutionMedium && 
                  <CardWithCost 
                    cardImage={card.iconUrls.evolutionMedium} 
                    cost={card.elixirCost}
                  /> 
                }
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
};