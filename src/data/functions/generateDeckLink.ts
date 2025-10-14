import { GenerateDeckLinkProps } from "@/types/Deck.type";

export function GenerateDeckLink({ 
  cardIds, 
  idCardTower, 
  lang = "pt", 
  slots = Array(8).fill("0") 
}: GenerateDeckLinkProps) {
  try {
    const deckIds = cardIds.slice(0, 8); 
    const cardIdString = deckIds.join(";");
  
    return `https://link.clashroyale.com/${lang}/?clashroyale://copyDeck?deck=${cardIdString}&l=Royals&slots=${slots.join(";")}&tt=${idCardTower}`;
  } catch(error) {
    console.log("Erro na geração de link!")
  };
};
