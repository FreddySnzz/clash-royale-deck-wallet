export interface PlayerInterface {
  tag: string;
  name: string;
  expLevel: number;
  trophies: number;
  bestTrophies: number;
  wins: number;
  losses: number;
  battleCount: number;
  threeCrownWins: number;
  challengeCardsWon: number;
  challengeMaxWins: number;
  tournamentCardsWon: number;
  tournamentBattleCount: number;
  role: string;
  donations: number;
  donationsReceived: number;
  totalDonations: number;
  warDayWins: number;
  clanCardsCollected: number;
  clan: {
    tag: string;
    name: string;
    badgeId: number;
  };
  arena: {
    id: number;
    name: string;
  };
  leagueStatistics: {
    currentSeason: {
      trophies: number;
      bestTrophies: number;
    };
    previousSeason: {
      id: string;
      trophies: number;
      bestTrophies: number;
    };
    bestSeason: {
      id: string;
      trophies: number;
    };
  };
  badges: {
    name: string;
    level: number;
    maxLevel: number;
    progress: number;
    target?: number;
    iconUrls: {
      large: string;
    };
  }[];
  achievements: {
    name: string;
    stars: number;
    value: number;
    target: number;
    info: string;
    completionInfo: null;
  }[];
  cards: {
    name: string;
    id: number;
    level: number;
    starLevel?: number;
    maxLevel: number;
    evolutionLevel?: number;
    maxEvolutionLevel?: number;
    rarity: string;
    count: number;
    elixirCost: number;
    iconUrls: {
      medium: string;
      evolutionMedium?: string;
    };
  }[];
  supportCards: {
    name: string;
    id: number;
    level: number;
    maxLevel: number;
    rarity: string;
    count: number;
    iconUrls: {
      medium: string;
    };
  }[];
  currentDeck: {
    name: string;
    id: number;
    level: number;
    starLevel?: number;
    maxLevel: number;
    evolutionLevel?: number;
    maxEvolutionLevel?: number;
    rarity: string;
    count: number;
    elixirCost: number;
    iconUrls: {
      medium: string;
      evolutionMedium?: string;
    };
  }[];
  currentDeckSupportCards: {
    name: string;
    id: number;
    level: number;
    maxLevel: number;
    rarity: string;
    count: number;
    iconUrls: {
      medium: string;
    };
  }[];
  currentFavouriteCard: {
    name: string;
    id: number;
    maxLevel: number;
    elixirCost: number;
    iconUrls: {
      medium: string;
    };
    rarity: string;
  };
  starPoints: number;
  expPoints: number;
  legacyTrophyRoadHighScore: number;
  currentPathOfLegendSeasonResult: {
    leagueNumber: number;
    trophies: number;
    rank: null;
  };
  lastPathOfLegendSeasonResult: {
    leagueNumber: number;
    trophies: number;
    rank: null;
  };
  bestPathOfLegendSeasonResult: {
    leagueNumber: number;
    trophies: number;
    rank: null;
  };
  progress: {
    [key: string]: {
      arena: {
        id: number;
        name: string;
      };
      trophies: number;
      bestTrophies: number;
    };
  };
  totalExpPoints: number;
}