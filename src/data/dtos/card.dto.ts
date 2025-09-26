interface SummonCharacterDataDto {
  hitPoints?: number,
  hitSpeed?: number,
  range?: number,
  speed?: string,
  targets?: string,
  damage?: number,
  deployTime?: number,
  loadTime?: number,
  buffWhenNotAttackingData?: {
    damageReduction?: number,
  };
};

interface ProjectileDataDto {
  damage?: number,
  crownTowerDamagePercent?: number,
  buffTime?: number,
  radius?: number,
  targets?: string
};

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
  summonCharacterData?: SummonCharacterDataDto,
  projectileWaves?: number,
  radius?: number,
  projectileData?: ProjectileDataDto,
  areaEffectObjectData?: {
    hitPolifeDurationints?: number,
    lifeDuration?: number,
    radius?: number,
    damage?: number,
    onlyEnemies?: boolean,
    hitsGround?: boolean,
    hitsAir?: boolean,
    projectileData?: ProjectileDataDto,
  },
  statCharacterData?: {
    hitpoints?: number,
    hitSpeed?: number,
    loadTime?: number,
    range?: number,
    targets?: string,
    projectileData?: ProjectileDataDto,
  },
  evolvedSpellsData?: {
    evoDescription?: string,
    summonCharacterData?: SummonCharacterDataDto,
  };
  imagesUrl: {
    card: string,
    evoCard: string,
    usage: string,
    evoUsage: string,
    render: string,
    evoRender: string,
    badge: string
  };
  englishName?: string,
};
