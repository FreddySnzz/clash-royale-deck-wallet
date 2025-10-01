
import { Deck, ParsedDeckIds } from "@/types/Deck.type";
import { CardDto } from "../dtos/card.dto";
import { getCardDetails } from "./getCardDetail";

export function buildDeck(
  cardsPool: CardDto[], 
  parsed: ParsedDeckIds
): Deck | null {
  const tower = getCardDetails(cardsPool, parsed.towerId);
  if (!tower) return null;

  const cards = parsed.cardIds
    .map(id => getCardDetails(cardsPool, id))
    .filter((card): card is CardDto => !!card);

  if (cards.length !== 8) return null;

  const totalCost = cards.reduce((sum, card) => sum + (card.elixirCost ?? 0), 0);
  const averageCost = parseFloat((totalCost / cards.length).toFixed(1));

  return {
    cards,
    tower,
    averageCost
  };
}
