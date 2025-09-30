"use client";

import { motion, AnimatePresence } from "framer-motion";
import { clashRegularFont } from "@/fonts";
import { CardDto } from "@/data/dtos/card.dto";
import { useLockBodyScroll } from "@/data/hooks/useBodyLockScroll";
import ButtonClose from "../buttons/ButtonClose";
import { TroopCardInfo } from "../cards/info/TroopInfo";
import { ConstructionCardInfo } from "../cards/info/ConstructionInfo";
import { SpellCardInfo } from "../cards/info/SpellInfo";
import { TowerTroopCardInfo } from "../cards/info/TowerTroopInfo";

interface ModalCardInfoProps {
  isOpen: boolean;
  card: CardDto;
  onClose: () => void;
}

export default function ModalCardInfo({ isOpen, onClose, card }: ModalCardInfoProps) {
  useLockBodyScroll(isOpen);

  const renderCardTypeComponent = (card: CardDto) => {
    switch (card.type) {
      case "Feitiço":
        return <SpellCardInfo card={card} />;
      case "Tropa":
        return <TroopCardInfo card={card} />;
      case "Tropa de Torre":
        return <TowerTroopCardInfo card={card} />;
      case "Construção":
        return <ConstructionCardInfo card={card} />;
      default:
        return <div>Tipo de carta não suportado</div>;
    }
  };

  return (
    <AnimatePresence>
      { isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-slate-950/90 z-48 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          >
            <motion.div 
              className="relative bg-white dark:bg-slate-900 rounded-xl shadow-lg p-6 w-[90%] z-49"
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }} 
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-end">
                <ButtonClose onClose={onClose} />
              </div>
              
              <h1 className={`text-slate-100 text-shadow-md text-2xl text-shadow-black mb-4 text-center ${clashRegularFont.className}`}>
                {card.name}
              </h1>
              <h3 className={`text-xs text-slate-400 text-center mb-8 ${clashRegularFont.className}`}>
                {card.cardDescription.replace(/\\q/g, '"').split('\\n').map((line, index) => (
                  <span key={index}>
                    {line}
                    <br/>
                  </span>
                ))}
              </h3>
              
              <div className="flex flex-col text-xs mb-4">
                <div className={`flex mb-2 justify-between p-1 rounded-md bg-slate-800 ${clashRegularFont.className}`}>
                  <span className="text-slate-500 text-shadow-sm ml-1">
                    Encontrado
                  </span>
                  <span className="text-slate-100 text-shadow-sm text-shadow-black mr-1">
                    {card.unlockArena}
                  </span>
                </div>

                <div className={`flex mb-2 justify-between p-1 rounded-md bg-slate-800 ${clashRegularFont.className}`}>
                  <span className="text-slate-500 text-shadow-sm ml-1">
                    Tipo
                  </span>
                  <span className="text-slate-100 text-shadow-sm text-shadow-black mr-1">
                    {card.type}
                  </span>
                </div>

                {renderCardTypeComponent(card)}

              </div>
              { card.imagesUrl.usage && 
                <div className="flex justify-center mb-4">
                  <img
                    src={card.imagesUrl.usage}
                    alt="preview_usage.gif"
                    loading="lazy"
                    className="rounded-xl w-85 h-50"
                  />
                </div>
              }
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
