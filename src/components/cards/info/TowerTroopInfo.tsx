import { iconsRoyale } from "@/data/constants/iconsUrl"
import { CardDto } from "@/data/dtos/card.dto"
import { handleContextMenu } from "@/data/functions/preventeContextMenu"
import { clashRegularFont } from "@/fonts"

interface TowerTroopCardInfoProps {
  card: CardDto
};

export function TowerTroopCardInfo({ card }: TowerTroopCardInfoProps) {
  console.log(card)
  return (
    <>
      <div className={`flex items-center mb-2 justify-between p-1 rounded-md bg-slate-800 ${clashRegularFont.className}`}>
        <div className="flex items-center">
          <img src={iconsRoyale.hitpoints} alt="hitpoints" className="w-5 h-5" draggable={false} onContextMenu={handleContextMenu}/>
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
          <img src={iconsRoyale.damage} alt="damage" className="w-5 h-5" draggable={false} onContextMenu={handleContextMenu}/>
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
          <img src={iconsRoyale.hitspeed} alt="hitspeed" className="w-5 h-5" draggable={false} onContextMenu={handleContextMenu}/>
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
          <img src={iconsRoyale.range} alt="range" className="w-5 h-5" draggable={false} onContextMenu={handleContextMenu}/>
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
          <img src={iconsRoyale.speed} alt="speed" className="w-5 h-5" draggable={false} onContextMenu={handleContextMenu}/>
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
          <img src={iconsRoyale.target} alt="targets" className="w-5 h-5" draggable={false} onContextMenu={handleContextMenu}/>
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