'use client'

import Card from "@/components/cards/Card";
import Loading from "@/components/Loading";
import { useCardsContext } from "@/data/context/CardsContext";

export default function BuilderDeck() {
  const { cards, loading } = useCardsContext();

  if (loading) return <Loading />;

  return (
    <div className="bg-red-500">
      <span>CONSTRUA SEU DECK</span>
      <div className="grid grid-cols-8 p-2 bg-slate-700">
        { cards.map((card) => 
          <Card key={card.id} type="withoutCost" size="sm" card={card} />
        )}
      </div>
    </div>
  )
}