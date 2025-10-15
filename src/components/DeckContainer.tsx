'use client'

import Link from "next/link";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { clashRegularFont } from "@/fonts"
import { useCardsContext } from "@/data/context/CardsContext";
import RenderIcons from "./icons/RenderIcons";
import { ParseDeckLink } from "@/data/functions/parseDeckLink";
import { iconsRoyale } from "@/data/constants/iconsUrl";
import Card from "./cards/Card";
import { buildDeck } from "@/data/functions/deckBuilder";
import Loading from "./Loading";
import { FaSave } from "react-icons/fa";

interface DeckContainerProps {
  deckLink?: string
};

export default function DeckContainer({ deckLink }: DeckContainerProps) {
  const { cards, loading } = useCardsContext();
  const [deckName, setDeckName] = useState('Deck name');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDeckName(event.target.value);
  };

  if (loading) return <Loading />;

  if (deckLink) {
    const parsedData = ParseDeckLink(deckLink);
    
    if (parsedData) {
      const deckBuild = buildDeck(cards, parsedData);
  
      if (deckBuild) {
        return (
          <div className="p-2 bg-slate-700 rounded-lg shadow-md shadow-black/20 mb-4">
            <div className="p-2">
              <h1 className={`p-2 text-center text-slate-200 text-lg text-shadow-sm text-shadow-black/50 bg-slate-600 rounded-lg ${clashRegularFont.className}`}>
                Deck name
              </h1>
            </div>
      
            <div className="grid grid-cols-4">
              {deckBuild.cards?.map((card, index) => {
                const isEvoCard = (index === 0 || index === 1) && card.imagesUrl?.evoCard;
                const cardType = isEvoCard ? "evoWithCost" : "withCost";
    
                return (
                  <div key={card.id} className="flex items-center justify-center">
                    <Card type={cardType} size="md" card={card} className="cursor-pointer" />
                  </div>
                );
              })}
            </div>
    
            <div className="flex justify-center items-center gap-4 mt-2">
              <span className={`text-slate-300 text-md text-shadow-sm text-shadow-black/50 ${clashRegularFont.className}`}>
                Tropa da Torre
              </span>
              <Card type="withCost" size="sm" card={deckBuild.tower} />
            </div>
    
            <div className="flex justify-evenly items-center mt-4 m-2 p-2 rounded-lg bg-slate-600">
              <div className="flex gap-1 overflow-hidden">
                <RenderIcons src={iconsRoyale.elixirDrop} type="icon" alt="elixirDrop" className="scale-500" />
                <span className="text-slate-200 font-bold">
                  {deckBuild.averageCost.toFixed(1)}
                </span>
              </div>
        
              {/* DEVE SER GERADO UM NOVO LINK */}
              {deckLink &&
                <Link href={deckLink} className="z-45">
                  <RenderIcons src={iconsRoyale.copyDeck} type="icon" alt="copy-deck-icon" />
                </Link>
              }
            </div>
          </div>
        );
      };
    };
  } else {
    let newDeck: number[] = [];

    for (let i = 0; i < 8; i++) {
      newDeck.push(i);
    };

    return (
     <div className="p-2 bg-slate-700 rounded-lg shadow-md shadow-black/20 mb-4">
        <div className="p-2">
          <input 
            type="text"
            placeholder="Deck name"
            value={deckName}
            onChange={handleChange}
            className={`p-2 mb-4 text-center w-full text-lg text-shadow-sm text-shadow-black/50 focus:outline-0 focus:text-slate-200 text-slate-200
              bg-slate-600 rounded-lg ${clashRegularFont.className}
            `}
          />
        </div>

        <div className="grid grid-cols-4">
          {newDeck.map((index) => {
            return (
              <div key={index} className="flex items-center justify-center">
                <Image 
                  src={'/random_card.png'} 
                  alt="randomCardImage" 
                  width={80}
                  height={120}
                />
              </div>
            );
          })}
        </div>

        <div className="flex justify-center items-center gap-4 mt-2">
           <span className={`text-slate-300 text-md text-shadow-sm text-shadow-black/50 ${clashRegularFont.className}`}>
             Tropa da Torre
           </span>
           <Image 
              src={'/random_card.png'} 
              alt="randomTowerCardImage" 
              width={80}
              height={120}
            />
         </div>

         <div className="flex justify-evenly items-center mt-4 m-2 p-2 rounded-lg bg-slate-600">
          <div className="flex gap-1 overflow-hidden">
            <RenderIcons src={iconsRoyale.elixirDrop} type="icon" alt="elixirDrop" className="scale-500" />
            <span className="text-slate-200 font-bold">
              0.0
            </span>
          </div>

          <div className="flex gap-1 overflow-hidden items-center text-slate-200">
            <FaSave className="text-xl" />
            <button 
              onClick={() => console.log("SALVAR DECK")}
              className="font-bold"
            >
              Salvar Deck
            </button>
          </div>
        </div>
      </div>
    );
  };
};