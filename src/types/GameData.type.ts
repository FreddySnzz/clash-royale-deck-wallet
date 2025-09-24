interface SummonCharacterDataInterface {
  name: string;
  base?: string;
  rarity?: string;
  sightRange?: number;
  deployTime?: number;
  speed?: number;
  hitpoints?: number;
  hitSpeed?: number;
  loadTime?: number;
  damage?: number;
  range?: number;
  attacksGround?: boolean;
  collisionRadius?: number;
  dashMaxRange?: number;
  jumpSpeed?: number;
  tid?: string;
  source?: string;
  tidTarget?: string;
  tidSpeed?: string;
  [key: string]: any;
}

interface StatCharacterDataInterface extends SummonCharacterDataInterface {
  onStartingActionData?: {
    maxChargeCount?: number;
    rechargeTime?: number;
  };
}

export interface SpellInterface {
  name: string;
  highresImageFilename?: string;
  unlockArena?: string;
  rarity?: string;
  manaCost?: number;
  tid: string;
  tidInfo?: string;
  id?: number;
  tidType?: string;
  summonNumber?: number;
  summonDeployDelay?: number;
  summonRadius?: number;
  summonCharacterData?: SummonCharacterDataInterface;
  statCharacterData?: StatCharacterDataInterface;
  englishName?: string;
}

export interface RoyaleAPIResponseInterface {
  items: {
    spells: SpellInterface[];
    arenas: unknown[]; 
    gameModes: unknown[];
    rarities: unknown[]; 
    badges: unknown[]; 
    explevels: unknown[]; 
    clanLeagues: unknown[]; 
    regions: unknown[];
  };
}
