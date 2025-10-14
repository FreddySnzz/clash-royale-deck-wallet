import { CardDto } from "@/data/dtos/card.dto";
import { handleContextMenu } from "@/data/functions/preventeContextMenu";

interface CardEvoProps {
  card: CardDto;
  onClick?: () => void
}

export default function CardEvo({ card, onClick }: CardEvoProps) {
  return (
    <div className="relative" onClick={onClick}>
      <img 
        src={card.imagesUrl.evoCard} 
        alt="evoCardImage" 
        className="w-30 h-44 object-cover" 
        draggable={false}
        onContextMenu={handleContextMenu}
      />
      <span className={`absolute top-[165] left-[-10] w-screen font-black
        bg-gradient-to-r from-[#9315e4] via-[#dea9ff] to-[#9315e4] bg-clip-text text-transparent animate-gradient-x`}
      >
        Versão Evoluída
      </span>
    </div>
  );
}
