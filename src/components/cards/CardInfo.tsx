import ElixirDrop from "@/components/icons/ElixirDrop";
import { motion, AnimatePresence } from "framer-motion";
import { capitalizeWord } from "@/data/functions/capitalizeWord";
import { clashRegularFont } from "@/fonts";
import { CardDto } from "@/data/dtos/card.dto";
import { useState } from "react";
import ModalCardInfo from "../layout/ModalCardInfo";
import RarityCardColorText from "./RarityCardColor";

interface CardInfoProps {
  card: CardDto
};

export default function CardInfo({ card }: CardInfoProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div 
      onClick={toggleIsOpen}
      className="flex flex-col rounded-4xl bg-zinc-400 dark:bg-slate-700 shadow-md shadow-black/20 mb-8"
    >
      <p className={`text-slate-100 text-shadow-md text-2xl text-shadow-black mt-8 mb-4 text-center ${clashRegularFont.className}`}>
        {card.name}
      </p>

      <div className="flex items-center justify-center">
        <img src={card.imagesUrl.render} alt="renderImage" />
      </div>

      <ModalCardInfo card={card} isOpen={isOpen} onClose={() => setIsOpen(false)} />

      {/* <div className="flex justify-center gap-8">
        <div className="relative">
          <img src={card.imagesUrl.card} alt="cardImage" className="w-40 h-60" />
          <span className="absolute top-[225] left-[23] w-full font-bold text-slate-600 dark:text-slate-100">
            Normal version
          </span>
          { card.elixirCost && 
            <div className="absolute top-[5] left-[-30]">
              <ElixirDrop cost={card.elixirCost} size="lg" />
            </div>
          }
        </div>
        { card.imagesUrl.evoCard && 
          <div>
            <img src={card.imagesUrl.evoCard} alt="cardImage" className="w-40 h-60" />
            <span className={`relative top-[-15] left-[13] w-full font-bold 
              bg-gradient-to-r from-[#9315e4] via-[#dea9ff] to-[#9315e4] bg-clip-text text-transparent animate-gradient-x`}
            >
              Evolution version
            </span>
          </div>
        }
      </div> */}
      <div className="my-8 text-center">
        <RarityCardColorText rarity={capitalizeWord(card.rarity)} />
        <span className={`ml-1 text-white text-shadow-md text-shadow-black/50 ${clashRegularFont.className}`}>
          card
        </span>
      </div>
    </div>
  );
}
