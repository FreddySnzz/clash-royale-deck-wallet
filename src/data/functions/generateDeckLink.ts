interface GenerateDeckLinkProps {
  cardIds: number[];
  idCardTower: number;
};

export function GenerateDeckLink(props: GenerateDeckLinkProps) {
  const deckIds = props.cardIds.slice(0, 8); 
  const cardIdString = deckIds.join(';');
  const normalizedLink = `https://link.clashroyale.com/pt/?clashroyale://copyDeck?deck=${cardIdString}&l=Royals&slots=0;0;0;0;0;0;0;0&tt=${props.idCardTower}`;

  return normalizedLink;
};