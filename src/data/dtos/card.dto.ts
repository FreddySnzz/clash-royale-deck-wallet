export interface CardDto {
  id?: number,
  name: string,
  elixirCost?: number,
  unlockArena?: string,
  rarity: string,
  type: string,
  cardDescription: string,
  summonQtd?: number,
  summonRadius?: number,
  summonCharacterData?: {
    hitPoints?: number,
    hitSpeed?: number,
    range?: number,
    speed?: string,
    targets?: string,
    damage?: number
  },
  statCharacterData?: {
    hitpoints: number,
    hitSpeed: number,
    loadTime: number,
    range: number,
    targets: string,
    projectileData?: {
      damage: number,
    };
  },
  evolvedSpellsData?: {
    evoDescription?: string,
    summonCharacterData?: {
      buffWhenNotAttackingData?: {
        damageReduction?: number,
      };
    };
  };
  imagesUrl: {
    card: string,
    evoCard: string,
    usage: string,
    evoUsage: string,
    render: string,
    evoRender: string
  };
};
