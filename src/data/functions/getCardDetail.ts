import { CardDto } from "../dtos/card.dto";

export function getCardDetails(cards: CardDto[], cardId: number): CardDto | undefined {
  return cards.find(card => card.id === cardId);
};
