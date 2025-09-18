import { api } from ".";
import { CardInterface, CardListInterface } from "@/types/Card.type";
import { PlayerInterface } from "@/types/Player.type";

export const clashRoyaleAPIExternalService = {
  getAllCards: async (): Promise<CardInterface[]> => {
    const data = await api.get<CardListInterface>("cards");
    return [...data.items, ...data.supportItems];
  },
  getPlayerByTag: (playerTag: string) => api.get<PlayerInterface>(`players/${playerTag}`)
};
