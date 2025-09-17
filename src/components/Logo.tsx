import { GiCardExchange } from "react-icons/gi";
import { clashRegularFont } from "@/fonts"

export function Logo() {
  return (
    <div className={`flex items-center text-gray-200 gap-1 text-shadow-black text-shadow-sm ${clashRegularFont.className}`}>
      <GiCardExchange className="text-4xl mr-1"/>
      <span className="text-lg ">
        {`DECK`} 
      </span>
      <span className="text-lg text-amber-500">
        {`ROYALE`}
      </span>
      <span className="text-lg">
        {`WALLET`}
      </span>
    </div>
  );
};

export function LogoWrapped() {
  return (
    <div className={`flex items-center text-gray-200 gap-1 text-shadow-black text-shadow-sm ${clashRegularFont.className}`}>
      <GiCardExchange className="text-5xl mr-1"/>
      <div className="flex flex-col">
        <p className="flex gap-1 text-lg">
          <span>
            {`DECK`} 
          </span>
          <span className="text-amber-500">
            {`ROYALE`}
          </span>
        </p>
        <p className="text-lg">
          {`WALLET`}
        </p>
      </div>
    </div>
  );
};