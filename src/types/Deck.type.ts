import { CardDto } from "@/data/dtos/card.dto";

export interface Deck {
  cards: CardDto[];
  tower: CardDto;
  averageCost: number;
}

export interface GenerateDeckLinkProps {
  cardIds: number[];
  idCardTower: number;
  lang?: string;
  slots?: string[];
}

export interface ParsedDeckIds {
  cardIds: number[];
  towerId: number;
}