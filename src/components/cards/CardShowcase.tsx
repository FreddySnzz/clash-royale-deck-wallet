import { useState } from "react";
import { capitalizeWord } from "@/data/functions/capitalizeWord";
import { clashRegularFont } from "@/fonts";
import { CardDto } from "@/data/dtos/card.dto";
import ModalCardInfo from "../layout/ModalCardInfo";
import RarityCardColorText from "./RarityCardColor";
import Card from "./Card";
import CardEvo from "./CardEvo";

interface CardShowcaseProps {
  card: CardDto
};

export default function CardShowcase({ card }: CardShowcaseProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <section 
      id={card.name}
      className="flex flex-col rounded-4xl bg-zinc-500/50 dark:bg-slate-700 shadow-md shadow-black/20 mb-8"
    >
      <p className={`text-slate-100 text-shadow-md text-2xl text-shadow-black mt-8 mb-4 text-center ${clashRegularFont.className}`}>
        {card.name}
      </p>

      <div className="flex justify-center gap-8">
        <Card type="withCost" size="lg" card={card} onClick={toggleIsOpen} />
        { card.imagesUrl.evoCard && 
          <CardEvo card={card} onClick={toggleIsOpen} />
        }
      </div>

      <ModalCardInfo card={card} isOpen={isOpen} onClose={toggleIsOpen} />
        
      <div className="flex gap-2 my-8 justify-center">
        <span className={`text-white text-shadow-md text-shadow-black/50 ${clashRegularFont.className}`}>
          Carta
        </span>
        <RarityCardColorText rarity={capitalizeWord(card.rarity)} />
      </div>
    </section>
  );
}
