import { ParsedDeckIds } from "@/types/Deck.type";

export function ParseDeckLink(deckLink: string): ParsedDeckIds | null {
  try {
    const url = new URL(deckLink);
    const params = url.searchParams;

    const deckString = params.get("clashroyale://copyDeck?deck");
    const towerIdString = params.get("tt");

    if (!deckString || !towerIdString) return null;

    const cardIds = deckString.split(";").map(Number).filter(n => !isNaN(n));
    const towerId = Number(towerIdString);

    if (cardIds.length !== 8 || isNaN(towerId)) return null;

    return { cardIds, towerId };
  } catch {
    return null;
  };
};
