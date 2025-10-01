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

export default function DeckContainer() {
  const { cards, loading } = useCardsContext();

  const link = 'https://link.clashroyale.com/pt/?clashroyale://copyDeck?deck=26000000;26000001;26000002;26000003;26000004;26000005;26000006;26000007&l=Royals&slots=0;0;0;0;0;0;0;0&tt=159000001';
  const parsed = ParseDeckLink(link);

  if (loading) return <Loading />;

  if (parsed) {
    const deck = buildDeck(cards, parsed);
    if (deck) {
      return (
        <div className="p-2 bg-slate-700 rounded-lg shadow-md shadow-black/20">
          <h1 className={`p-2 text-slate-200 text-lg text-shadow-sm text-shadow-black/50 ${clashRegularFont.className}`}>
            DECK NAME
          </h1>
    
          <div className="grid grid-cols-4">
            {deck.cards?.map((card) => (
              <div key={card?.id} className="flex items-center justify-center">
                <Card type="withCost" size="md" card={card} />
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center gap-4 mt-2">
            <span className={`text-slate-300 text-md text-shadow-sm text-shadow-black/50 ${clashRegularFont.className}`}>
              Tropa da Torre
            </span>
            <Card type="withCost" size="sm" card={deck.tower} />
          </div>

          <div className="flex justify-evenly items-center mt-4 m-2 p-2 rounded-lg bg-slate-600">
            <div className="flex gap-1 overflow-hidden">
              <RenderIcons src={iconsRoyale.elixirDrop} type="icon" alt="elixirDrop" className="scale-500" />
              <span className="text-slate-200 font-bold">
                {deck.averageCost}
              </span>
            </div>
      
            <Link href={link}>
              <RenderIcons src={iconsRoyale.copyDeck} type="icon" alt="copy-deck-icon" />
            </Link>
          </div>
        </div>
      );
    };
  };
};