import { iconsRoyale } from "@/data/constants/iconsUrl";
import RenderIcons from "./icons/RenderIcons";
import { clashRegularFont } from "@/fonts";

interface TrophyAmountProps {
  amount: number
};

export default function TrophyAmount({ amount }: TrophyAmountProps) {
  return (
    <div className="flex items-center justify-center gap-2">
      <RenderIcons src={iconsRoyale.trophy} type="icon" alt="trophy-icon" className="drop-shadow-sm drop-shadow-black/40" />
      <span className={`text-slate-200 text-shadow-sm text-shadow-black/60 ${clashRegularFont.className}`}>
        {amount}
      </span>
    </div>
  );
};