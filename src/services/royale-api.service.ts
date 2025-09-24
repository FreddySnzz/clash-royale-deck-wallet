import { api } from ".";
import { CardDto } from "@/data/dtos/card.dto";
import { Spell } from "@/data/schemas/stats-royale-api.schema";
import { cardImages } from "@/data/constants/cardUrl";

export const statsRoyaleAPIExternalService = {
  getAllCards: async (): Promise<CardDto[]> => {
    const data = await api.get<any>("cards");
    const json = await api.get<any>("game");

    return data.items.spells
      .filter((spell: Spell) => !spell.notVisible)
      .map((spell: Spell): any => ({
        id: spell.id,
        name: spell.tidType ? json[spell.tid] : '',
        elixirCost: spell.manaCost,
        unlockArena: spell.unlockArena,
        rarity: spell.rarity,
        type: spell.tidType ? json[spell.tidType] : '',
        cardDescription: spell.tidInfo ? json[spell.tidInfo] : '',
        summonQtd: spell.summonNumber,
        summonRadius: spell.summonRadius,
        summonCharacterData: spell.summonCharacterData && {
          hitPoints: spell.summonCharacterData?.hitpoints,
          hitSpeed: spell.summonCharacterData?.hitSpeed,
          range: spell.summonCharacterData?.range,
          speed: spell.summonCharacterData?.tidSpeed ? json[spell.summonCharacterData?.tidSpeed] : '',
          targets: spell.summonCharacterData?.tidTarget ? json[spell.summonCharacterData?.tidTarget] : '',
          damage: spell.summonCharacterData?.damage,
        },
        statCharacterData: spell.statCharacterData && {
          hitpoints: spell.statCharacterData?.hitpoints,
          hitSpeed: spell.statCharacterData?.hitSpeed,
          loadTime: spell.statCharacterData?.loadTime,
          range: spell.statCharacterData?.range,
          targets: spell.statCharacterData?.tidTarget,
          projectileData: {
            damage: spell.statCharacterData?.projectileData?.damage,
          }
        },
        imagesUrl: cardImages[spell.name as keyof typeof cardImages]
      }
    ));
  },
};