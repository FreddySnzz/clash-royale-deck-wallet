'use client';

import { useEffect, useState } from "react";
import { royaleService } from "@/services/royale-api.service";

import ElixirDrop from "@/components/icons/ElixirDrop";
import CardWithCost from "./CardWithCost";

export default function Cards() {
  const [cards, setCards] = useState<any[]>([]);

  useEffect(() => {
    async function fetchCards() {
      try {
        const data = await royaleService.getAllCards();
        setCards(data.items);
      } catch (error) {
        console.error("Erro ao buscar cartas:", error);
      };
    };

    fetchCards();
  }, []);

  return (
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
  );
}