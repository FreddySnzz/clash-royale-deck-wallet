import { clashRegularFont } from "@/fonts"

interface RarityCardColorTextProps {
  rarity: string
};

export default function RarityCardColorText({ rarity }: RarityCardColorTextProps) {
  let textColor;

  switch (rarity) {
    case 'Common':
      rarity = "Comum";
      textColor = "text-[#D1D5D8] text-shadow-sm text-shadow-black/50"
      break
    case 'Rare':
      rarity = "Rara";
      textColor = "text-[#FF8000] text-shadow-sm text-shadow-black/50"
      break
    case 'Epic':
      rarity = "Épica";
      textColor = "text-[#A335EE] text-shadow-sm text-shadow-black/50"
      break
    case 'Legendary':
      rarity = "Lendária";
      textColor = "bg-gradient-to-r from-purple-500 via-green-500 to-purple-500 bg-clip-text text-transparent animate-gradient-x"
      break
    case 'Champion':
      rarity = "Campeão";
      textColor = "bg-gradient-to-r from-[#DBBD0C] via-green-300 to-[#DBBD0C] bg-clip-text text-transparent animate-gradient-x"
      break
    default:
      break
  };

  return (
    <span className={`${textColor} ${clashRegularFont.className}`}>
      {rarity}
    </span>
  );
};