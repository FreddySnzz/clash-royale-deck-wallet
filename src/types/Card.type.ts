export interface CardInterface {
  id: number;
  name: string;
  maxLevel: number;
  maxEvolutionLevel?: number;
  elixirCost?: number;
  iconUrls: {
    medium: string;
    evolutionMedium?: string;
  };
  rarity: string;
};

export interface CardListInterface {
  items: CardInterface[];
  supportItems: CardInterface[];
}