'use client'

import Card from "@/components/cards/Card";
import Loading from "@/components/Loading";
import { useCardsContext } from "@/data/context/CardsContext";
import { FaDownload } from "react-icons/fa6";
import DeckContainer from "./DeckContainer";
import { ChangeEvent, useState } from "react";

export default function BuilderDeck() {
  const { cards, loading } = useCardsContext();
  const [deckLink, setDeckLink] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDeckLink(event.target.value);
  };
  
  // const handleEditDeck = () => {
  //   <DeckContainer />
  // };
  
  if (loading) return <Loading />;

  return (
    <div className="flex flex-col p-2">
      <div className="mb-2"> 
        <form className="flex flex-col w-full my-4">
          <div className="flex rounded-lg w-full mb-2 bg-slate-500 overflow-hidden shadow-sm shadow-black/60">
            <input 
              type="text" 
              placeholder="Cole o link do seu deck..." 
              value={deckLink}
              onChange={handleChange}
              className="grow focus:outline-0 focus:text-black text-slate-200 p-3 ml-1"
            />
            <button 
              className="flex items-center p-3 bg-slate-500 cursor-pointer active:bg-slate-500 shadow-sm shadow-black/30"
              onClick={() => console.log('ALOW')}
            >
              <FaDownload className="text-slate-200" />
            </button>
          </div>
        </form>
        <DeckContainer />
      </div>

      {/* <span className="text-sm">Ou selecione manualmente suas cartas</span> */}

      <div className="grid grid-cols-8 p-2 bg-slate-700 rounded-lg">
        {cards.map((card) => 
          <Card key={card.id} type="withoutCost" size="sm" card={card} />
        )}
      </div>
    </div>
  )
}