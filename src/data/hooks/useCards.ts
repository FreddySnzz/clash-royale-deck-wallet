import { useCachedResource } from "@/data/hooks/useCachedResource";
import { statsRoyaleAPIExternalService } from "@/services/royale-api.service";
import { CardDto } from "../dtos/card.dto";

export function useCards() {
  return useCachedResource<CardDto[]>({
    key: "cards",
    fetcher: statsRoyaleAPIExternalService.getAllCards,
    cacheTime: 1000 * 60 * 60,
  });
}
