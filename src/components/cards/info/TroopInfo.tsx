import RenderIcons from "@/components/icons/RenderIcons"
import { iconsRoyale } from "@/data/constants/iconsUrl"
import { CardDto } from "@/data/dtos/card.dto"
import { clashRegularFont } from "@/fonts"

interface TroopCardInfoProps {
  card: CardDto
};

export function TroopCardInfo({ card }: TroopCardInfoProps) {
  console.log(card)
  return (
    <>
      <div className={`flex items-center mb-2 justify-between p-1 rounded-md bg-slate-800 ${clashRegularFont.className}`}>
        <div className="flex items-center">
          <RenderIcons type='icon' src={iconsRoyale.hitpoints} alt="hitpoints" />
          <span className="text-slate-500 text-shadow-sm ml-1">
            Vida
          </span>
        </div>
        <span className="text-slate-100 text-shadow-sm text-shadow-black mr-1">
          {card.summonCharacterData?.hitPoints} {`(nv. 1)`}
        </span>
      </div>

      <div className={`flex items-center mb-2 justify-between p-1 rounded-md bg-slate-800 ${clashRegularFont.className}`}>
        <div className="flex items-center">
          <RenderIcons type='icon' src={iconsRoyale.damage} alt="damage" />
          <span className="text-slate-500 text-shadow-sm ml-1">
            Dano
          </span>
        </div>
        <span className="text-slate-100 text-shadow-sm text-shadow-black mr-1">
          {card.summonCharacterData?.damage} {`(nv. 1)`}
        </span>
      </div>

      <div className={`flex items-center mb-2 justify-between p-1 rounded-md bg-slate-800 ${clashRegularFont.className}`}>
        <div className="flex items-center">
          <RenderIcons type='icon' src={iconsRoyale.hitspeed} alt="hitspeed" />
          <span className="text-slate-500 text-shadow-sm ml-1">
            Velocidade de ataque
          </span>
        </div>
        <span className="text-slate-100 text-shadow-sm text-shadow-black mr-1">
          {Number(card.summonCharacterData?.hitSpeed)/1000}seg
        </span>
      </div>

      <div className={`flex items-center mb-2 justify-between p-1 rounded-md bg-slate-800 ${clashRegularFont.className}`}>
        <div className="flex items-center">
          <RenderIcons type='icon' src={iconsRoyale.range} alt="range" />
          <span className="text-slate-500 text-shadow-sm ml-1">
            Alcance
          </span>
        </div>
        <span className="text-slate-100 text-shadow-sm text-shadow-black mr-1">
          {Number(card.summonCharacterData?.range)/1000}
        </span>
      </div>

      <div className={`flex items-center mb-2 justify-between p-1 rounded-md bg-slate-800 ${clashRegularFont.className}`}>
        <div className="flex items-center">
          <RenderIcons type='icon' src={iconsRoyale.speed} alt="speed" />
          <span className="text-slate-500 text-shadow-sm ml-1">
            Velocidade
          </span>
        </div>
        <span className="text-slate-100 text-shadow-sm text-shadow-black mr-1">
          {card.summonCharacterData?.speed}
        </span>
      </div>
      
      <div className={`flex items-center justify-between p-1 rounded-md bg-slate-800 ${clashRegularFont.className}`}>
        <div className="flex items-center">
          <RenderIcons type='icon' src={iconsRoyale.target} alt="targets" />
          <span className="text-slate-500 text-shadow-sm ml-1">
            Alvos
          </span>
        </div>
        <span className="text-slate-100 text-shadow-sm text-shadow-black mr-1">
          {card.summonCharacterData?.targets}
        </span>
      </div>
    </>
  )
}