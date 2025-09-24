interface GenerateDeckLinkProps {
  idCard1: number,
  idCard2: number,
  idCard3: number,
  idCard4: number,
  idCard5: number,
  idCard6: number,
  idCard7: number,
  idCard8: number,
  idCardTower: number,
};

export function GenerateDeckLink(props: GenerateDeckLinkProps) {
  const normalizedLink = `https://link.clashroyale.com/pt/?clashroyale://copyDeck?deck=
    ${props.idCard1};${props.idCard2};${props.idCard3};${props.idCard4};${props.idCard5};${props.idCard6};${props.idCard7};${props.idCard8}
    &l=Royals&slots=0;0;0;0;0;0;0;0&tt=${props.idCardTower}`;

  return normalizedLink;
};