import { useState } from "react";
import { capitalizeWord } from "@/data/functions/capitalizeWord";
import { clashRegularFont } from "@/fonts";
import { CardDto } from "@/data/dtos/card.dto";
import ModalCardInfo from "../layout/ModalCardInfo";
import RarityCardColorText from "./RarityCardColor";
import ElixirDrop from "@/components/icons/ElixirDrop";

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
        <div className="relative" onClick={toggleIsOpen}>
          <img src={card.imagesUrl.card} alt="cardImage" className="w-30 h-40 object-cover" />
          { card.elixirCost && 
            <div className="absolute top-[-20] left-[-35]">
              <ElixirDrop cost={card.elixirCost} size="lg" />
            </div>
          }
        </div>
        { card.imagesUrl.evoCard && 
          <div className="relative" onClick={toggleIsOpen}>
            <img src={card.imagesUrl.evoCard} alt="evoCardImage" className="w-30 h-40 object-cover" />
            <span className={`relative top-[0] left-[0] w-full font-bold 
              bg-gradient-to-r from-[#9315e4] via-[#dea9ff] to-[#9315e4] bg-clip-text text-transparent animate-gradient-x`}
            >
              Versão Evoluída
            </span>
          </div>
        }
      </div>

      <ModalCardInfo card={card} isOpen={isOpen} onClose={toggleIsOpen} />
        
      <div className="my-8 text-center">
        <RarityCardColorText rarity={capitalizeWord(card.rarity)} />
        <span className={`ml-1 text-white text-shadow-md text-shadow-black/50 ${clashRegularFont.className}`}>
          card
        </span>
      </div>
    </section>
  );
}
