'use client'

import Link from "next/link";
import { clashRegularFont } from "@/fonts"
import { useCardsContext } from "@/data/context/CardsContext";
import RenderIcons from "./icons/RenderIcons";
import { ParseDeckLink } from "@/data/functions/parseDeckLink";
import { iconsRoyale } from "@/data/constants/iconsUrl";
import Card from "./cards/Card";
import { buildDeck } from "@/data/functions/deckBuilder";
import Loading from "./Loading";
import BuilderDeck from "./BuilderDeck";

import { userDecks } from "@/data/__mocks__/Deck.mock";
import { GenerateDeckLink } from "@/data/functions/generateDeckLink";

export default function DeckContainer() {
  const { cards, loading } = useCardsContext();

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
              className="p-2 bg-slate-700 rounded-lg shadow-md shadow-black/20 mb-4 cursor-pointer"
              onClick={handleEditDeck}
            >
              <div className="p-2">
                <h1 className={`p-2 text-center text-slate-200 text-lg text-shadow-sm text-shadow-black/50 bg-slate-600 rounded-lg ${clashRegularFont.className}`}>
                  {deck.name}
                </h1>
              </div>
        
              <div className="grid grid-cols-4">
                {deckBuild.cards?.map((card, index) => {
                  const isEvoCard = (index === 0 || index === 1) && card.imagesUrl?.evoCard;
                  const cardType = isEvoCard ? "evoWithCost" : "withCost";

                  return (
                    <div key={card.id} className="flex items-center justify-center">
                      <Card type={cardType} size="md" card={card} />
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
          
                {deckLink &&
                  <Link href={deckLink} className="z-49">
                    <RenderIcons src={iconsRoyale.copyDeck} type="icon" alt="copy-deck-icon" />
                  </Link>
                }
              </div>
            </div>
          );
        };
      })}
    </div>
  );
};