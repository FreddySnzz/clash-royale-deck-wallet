import ElixirDrop from "@/components/icons/ElixirDrop";
import { capitalizeWord } from "@/data/functions/capitalizeWord";
import { clashRegularFont } from "@/fonts";
import { CardInterface } from "@/types/Card.type";
import RarityCardColorText from "./RarityCardColor";

interface CardShowcaseProps {
  card: CardInterface
};

export default function CardShowcase({ card }: CardShowcaseProps) {
  return (
    <div className="flex flex-col rounded-4xl bg-zinc-400 dark:bg-slate-700 shadow-md shadow-black/20 mb-8">
      <p className={`text-slate-100 text-shadow-md text-2xl text-shadow-black mt-8 text-center ${clashRegularFont.className}`}>
        {card.name}
      </p>
      <div className="flex justify-center gap-8">
        <div className="relative">
          <img src={card.iconUrls.medium} alt="cardImage" className="w-40 h-60" />
          <span className="absolute top-[225] left-[23] w-full font-bold text-slate-600 dark:text-slate-100">
            Normal version
          </span>
          { card.elixirCost && 
            <div className="absolute top-[5] left-[-30]">
              <ElixirDrop cost={card.elixirCost} size="lg" />
            </div>
          }
        </div>
        { card.iconUrls.evolutionMedium && 
          <div>
            <img src={card.iconUrls.evolutionMedium} alt="cardImage" className="w-40 h-60" />
            <span className={`relative top-[-15] left-[13] w-full font-bold 
              bg-gradient-to-r from-[#9315e4] via-[#dea9ff] to-[#9315e4] bg-clip-text text-transparent animate-gradient-x`}
            >
              Evolution version
            </span>
          </div>
        }
      </div>
      <div className="mt-2 mb-8 text-center">
        {/* <div className="flex text-center">
          <span className={`text-white text-shadow-md text-shadow-black/50 ${clashRegularFont.className}`}>
            Cost
          </span>
          <span className={`ml-1 text-white text-shadow-md text-shadow-black/50 ${clashRegularFont.className}`}>
            {card.elixirCost}
          </span>
        </div> */}
        <RarityCardColorText rarity={capitalizeWord(card.rarity)} />
        <span className={`ml-1 text-white text-shadow-md text-shadow-black/50 ${clashRegularFont.className}`}>
          card
        </span>
      </div>
    </div>
  );
}
