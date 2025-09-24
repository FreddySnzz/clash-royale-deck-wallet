"use client";

import { motion, AnimatePresence } from "framer-motion";
import { clashRegularFont } from "@/fonts";
import { CardDto } from "@/data/dtos/card.dto";
import { iconsRoyale } from "@/data/constants/iconsUrl";
import { useLockBodyScroll } from "@/data/hooks/useBodyLockScroll";
import ButtonClose from "../buttons/ButtonClose";

interface ModalCardInfoProps {
  isOpen: boolean;
  card: CardDto;
  onClose: () => void;
}

export default function ModalCardInfo({ isOpen, onClose, card }: ModalCardInfoProps) {
  console.log(card)
  useLockBodyScroll(isOpen);

  return (
    <AnimatePresence>
      { isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-slate-950/90 z-49"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-0 z-49 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="relative bg-white dark:bg-slate-900 rounded-xl shadow-lg p-6 w-[90%]">
              <div className="flex justify-end">
                <ButtonClose onClose={onClose} />
              </div>
              
              <h1 className={`text-slate-100 text-shadow-md text-2xl text-shadow-black mb-4 text-center ${clashRegularFont.className}`}>
                {card.name}
              </h1>
              <h3 className={`text-xs text-slate-400 text-center mb-8 ${clashRegularFont.className}`}>
                {card.cardDescription}
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

                <div className={`flex items-center mb-2 justify-between p-1 rounded-md bg-slate-800 ${clashRegularFont.className}`}>
                  <div className="flex items-center">
                    <img src={iconsRoyale.hitpoints} alt="hitpoints" className="w-5 h-5" />
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
                    <img src={iconsRoyale.damage} alt="damage" className="w-5 h-5" />
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
                    <img src={iconsRoyale.hitspeed} alt="hitspeed" className="w-5 h-5" />
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
                    <img src={iconsRoyale.range} alt="range" className="w-5 h-5" />
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
                    <img src={iconsRoyale.speed} alt="speed" className="w-5 h-5" />
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
                    <img src={iconsRoyale.target} alt="targets" className="w-5 h-5" />
                    <span className="text-slate-500 text-shadow-sm ml-1">
                      Alvos
                    </span>
                  </div>
                  <span className="text-slate-100 text-shadow-sm text-shadow-black mr-1">
                    {card.summonCharacterData?.targets}
                  </span>
                </div>
              </div>

              <div className="flex justify-center mb-4">
                <img
                  src={card.imagesUrl.usage}
                  alt="Gif animado"
                  loading="lazy"
                  className="rounded-xl w-80 h-60"
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
