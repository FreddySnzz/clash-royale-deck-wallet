'use client'

import Link from "next/link";
import { useState } from "react";
import { clashRegularFont } from "@/fonts"
import { useCardsContext } from "@/data/context/CardsContext";
import RenderIcons from "./icons/RenderIcons";
import { ParseDeckLink } from "@/data/functions/parseDeckLink";
import { iconsRoyale } from "@/data/constants/iconsUrl";
import Card from "./cards/Card";
import { buildDeck } from "@/data/functions/deckBuilder";
import Loading from "./Loading";
import BuilderDeck from "./BuilderDeckContainer";
import { GenerateDeckLink } from "@/data/functions/generateDeckLink";
import ModalCardInfo from "./layout/ModalCardInfo";
import { CardDto } from "@/data/dtos/card.dto";

import { userDecks } from "@/data/__mocks__/Deck.mock"; // mock

export default function DecksShowcase() {
  const { cards, loading } = useCardsContext();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<CardDto>();
  
  const toggleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleCardClick = (card: CardDto) => {
    setSelectedCard(card);
    setIsOpen(true)
  };

  const handleEditDeck = () => {
    console.log("EDITAR DECK"),
    <BuilderDeck />
  };

  if (loading) return <Loading />;
  
  return (
    <div>
      {!userDecks.length && (
        <div className="flex justify-center items-center min-h-[70vh] text-slate-200 font-bold">
          <span>
            Nenhum deck salvo!
          </span>
        </div>
      )}

      {userDecks.map((deck, index) => {
        const parsedData = ParseDeckLink(deck.link);

        if (!parsedData) {
          return (
            <div 
              key={index} 
              className="flex justify-center items-center min-h-[10vh] bg-slate-700 rounded-lg shadow-md shadow-black/20 mb-4 text-red-600 font-bold"
            >
              <span>
                Deck com link inválido!
              </span>
            </div>
          );
        };

        const deckBuild = buildDeck(cards, parsedData);
        const deckLink = GenerateDeckLink({
          cardIds: parsedData.cardIds,
          idCardTower: parsedData.towerId
        });

        if (deckBuild) {
          return (
            <div 
              key={deck.id} 
              className="p-4 bg-slate-700 rounded-lg shadow-md shadow-black/20 mb-4"
            >
              <Link href={'/edit-deck'}>  
                <div className={`flex justify-center items-center bg-slate-600 rounded-lg 
                  p-2 mb-4 shadow-sm shadow-black/20 ${clashRegularFont.className}`
                }>
                  <span className={`text-slate-200 text-shadow-sm ${deck.name.length <= 30 ? "text-lg" : "text-md py-1 text-shadow-lg"} text-shadow-black/50`}>
                    {deck.name}
                  </span>
                </div>
              </Link>
        
              <div className="grid grid-cols-4">
                {deckBuild.cards?.map((card, index) => {
                  const isEvoCard = (index === 0 || index === 1) && card.imagesUrl?.evoCard;
                  const cardType = isEvoCard ? "evoWithCost" : "withCost";
                  
                  return (
                    <div key={card.id} className="flex items-center justify-center">
                      <Card type={cardType} size="md" card={card} onClick={() => handleCardClick(card)} />
                    </div>
                  );
                })}
              </div>

              <div className="flex justify-center items-center gap-4 mt-2">
                <span className={`text-slate-300 text-md text-shadow-sm text-shadow-black/50 ${clashRegularFont.className}`}>
                  Tropa da Torre
                </span>
                <Card type="withCost" size="sm" card={deckBuild.tower} onClick={() => handleCardClick(deckBuild.tower)} />
              </div>

              <div className="flex justify-evenly items-center mt-4 m-2 p-2 rounded-lg bg-slate-600 shadow-sm shadow-black/20">
                <div className="flex gap-1 overflow-hidden">
                  <RenderIcons src={iconsRoyale.elixirDrop} type="icon" alt="elixirDrop" className="scale-500" />
                  <span className="text-slate-200 font-bold">
                    {deckBuild.averageCost.toFixed(1)}
                  </span>
                </div>

                <Link href={'/edit-deck'} className="z-45">
                  <RenderIcons src={iconsRoyale.changeCards} type="icon" alt="editDeck" className="scale-150" />
                </Link>
          
                {deckLink &&
                  <Link href={deckLink} className="z-45">
                    <RenderIcons src={iconsRoyale.copyDeck} type="icon" alt="copy-deck-icon" className="w-4"/>
                  </Link>
                }
              </div>
            </div>
          );
        };
      })}

      { isOpen && selectedCard && <ModalCardInfo card={selectedCard} isOpen={isOpen} onClose={toggleIsOpen} /> }
    </div>
  );
};