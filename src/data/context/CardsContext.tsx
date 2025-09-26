"use client";

import { createContext, useContext, useState } from "react";
import { statsRoyaleAPIExternalService } from "@/services/royale-api.service";
import { CardDto } from "../dtos/card.dto";
import { useCachedResource } from "../hooks/useCachedResource";

type CardsContextType = {
  cards: CardDto[];
  loading: boolean;
  updating: boolean;
  error: Error | null;
};

const CardsContext = createContext<CardsContextType | null>(null);

export function CardsProvider({ children }: { children: React.ReactNode }) {
  const { data: cards, loading, updating, error } = useCachedResource<CardDto[]>({
    key: "cards",
    fetcher: statsRoyaleAPIExternalService.getAllCards,
    cacheTime: 1000 * 60 * 60, // 1h
  });

  return (
    <CardsContext.Provider value={{
      cards: cards || [],
      loading,
      updating,
      error
    }}>
      {children}
    </CardsContext.Provider>
  );
}

export function useCardsContext() {
  const ctx = useContext(CardsContext);
  if (!ctx) throw new Error("useCardsContext precisa do CardsProvider");
  return ctx;
};
