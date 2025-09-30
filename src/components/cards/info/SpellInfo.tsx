import { clashRegularFont } from "@/fonts"
import { iconsRoyale } from "@/data/constants/iconsUrl"
import { CardDto } from "@/data/dtos/card.dto"
import RenderIcons from "@/components/icons/RenderIcons"

interface SpellCardInfoProps {
  card: CardDto
};

export function SpellCardInfo({ card }: SpellCardInfoProps) {
  console.log(card)
  function calculateTowerDamage(damage: number, crownTowerDamagePercent: number) {
    crownTowerDamagePercent = crownTowerDamagePercent * (-1) / 100;
    return ((damage * crownTowerDamagePercent - damage) * (-1)).toFixed(0);
  };

  return (
    <>
      { card.projectileWaves &&
        <div className={`flex items-center mb-2 justify-between p-1 rounded-md bg-slate-800 ${clashRegularFont.className}`}>
          <div className="flex items-center">
            <RenderIcons type='icon' src={iconsRoyale.count} alt="attacks-count" />
            <span className="text-slate-500 text-shadow-sm ml-1">
              Ondas de ataque
            </span>
          </div>
          <span className="text-slate-100 text-shadow-sm text-shadow-black mr-1">
            {Number(card.projectileWaves)}x
          </span>
        </div>
      }

      { card.radius &&
        <div className={`flex items-center mb-2 justify-between p-1 rounded-md bg-slate-800 ${clashRegularFont.className}`}>
          <div className="flex items-center">
            <RenderIcons type='icon' src={iconsRoyale.radius} alt="radius" />
            <span className="text-slate-500 text-shadow-sm ml-1">
              Raio
            </span>
          </div>
          <span className="text-slate-100 text-shadow-sm text-shadow-black mr-1">
            {Number(card.radius) / 1000}
          </span>
        </div>
      }
      
      { card.projectileData &&
        <>
          <div className={`flex items-center mb-2 justify-between p-1 rounded-md bg-slate-800 ${clashRegularFont.className}`}>
            <div className="flex items-center">
              <RenderIcons type='icon' src={iconsRoyale.damage} alt="damage" />
              <span className="text-slate-500 text-shadow-sm ml-1">
                Dano
              </span>
            </div>
            <span className="text-slate-100 text-shadow-sm text-shadow-black mr-1">
              {Number(card.projectileData?.damage)} {`(nv. 1)`}
            </span>
          </div>

          <div className={`flex items-center mb-2 justify-between p-1 rounded-md bg-slate-800 ${clashRegularFont.className}`}>
            <div className="flex items-center">
              <RenderIcons type='icon' src={iconsRoyale.crownTowerDamage} alt="damageToCrown" />
              <span className="text-slate-500 text-shadow-sm ml-1">
                Dano à Torres
              </span>
            </div>
            <span className="text-slate-100 text-shadow-sm text-shadow-black mr-1">
              {calculateTowerDamage(Number(card.projectileData?.damage), Number(card.projectileData?.crownTowerDamagePercent))} {`(nv. 1)`}
            </span>
          </div>
          
          <div className={`flex items-center mb-2 justify-between p-1 rounded-md bg-slate-800 ${clashRegularFont.className}`}>
            <div className="flex items-center">
              <RenderIcons type='icon' src={iconsRoyale.radius} alt="radius" />
              <span className="text-slate-500 text-shadow-sm ml-1">
                Raio
              </span>
            </div>
            <span className="text-slate-100 text-shadow-sm text-shadow-black mr-1">
              {Number(card.projectileData?.radius) / 1000}
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
              {card.projectileData?.targets}
            </span>
          </div>
        </>
      }

      { card.areaEffectObjectData &&
        <>
          <div className={`flex items-center mb-2 justify-between p-1 rounded-md bg-slate-800 ${clashRegularFont.className}`}>
            <div className="flex items-center">
              <RenderIcons type='icon' src={iconsRoyale.duration} alt="duration" />
              <span className="text-slate-500 text-shadow-sm ml-1">
                Duração
              </span>
            </div>
            <span className="text-slate-100 text-shadow-sm text-shadow-black mr-1">
              {Number(card.areaEffectObjectData?.lifeDuration) / 1000}seg
            </span>
          </div>

          <div className={`flex items-center mb-2 justify-between p-1 rounded-md bg-slate-800 ${clashRegularFont.className}`}>
            <div className="flex items-center">
              <RenderIcons type='icon' src={iconsRoyale.zapFreeze} alt="effect-duration" />
              <span className="text-slate-500 text-shadow-sm ml-1">
                Duração de paralisação 
              </span>
            </div>
            <span className="text-slate-100 text-shadow-sm text-shadow-black mr-1">
              {Number(card.areaEffectObjectData?.projectileData?.buffTime) / 1000}seg
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
              {Number(card.areaEffectObjectData?.projectileData?.damage)} {`(nv. 1)`}
            </span>
          </div>

          <div className={`flex items-center mb-2 justify-between p-1 rounded-md bg-slate-800 ${clashRegularFont.className}`}>
            <div className="flex items-center">
              <RenderIcons type='icon' src={iconsRoyale.crownTowerDamage} alt="damage-to-crown" />
              <span className="text-slate-500 text-shadow-sm ml-1">
                Dano à Torres
              </span>
            </div>
            <span className="text-slate-100 text-shadow-sm text-shadow-black mr-1">
              {calculateTowerDamage(Number(card.areaEffectObjectData?.projectileData?.damage), Number(card.areaEffectObjectData?.projectileData?.crownTowerDamagePercent))} {`(nv. 1)`}
            </span>
          </div>
        </>
      }
    </>
  );
};