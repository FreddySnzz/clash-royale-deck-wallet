'use client'

import { leaguesIcons } from "@/data/constants/iconsUrl";
import { handleContextMenu } from "@/data/functions/preventeContextMenu";
import TrophyAmount from "./TrophyAmount";
import Tittle from "./layout/Tittle";

export default function LeaguesShowcase() {
  return (
    <div className="min-h-screen min-w-screen p-4">
      <h1 className="text-center mb-4 text-slate-600 text-xs font-bold">*ANTIGA CAMINHADA DE TROFÉUS*</h1>
      <div className="flex flex-col items-center justify-center">
        <Tittle tittle="Desafiante I" />
        <img src={leaguesIcons.challengerOne} alt="challenger-one-image" draggable={false} onContextMenu={handleContextMenu} />
        <TrophyAmount amount={4000} />
      </div>

      <hr className="bg-slate-700 my-8" />

      <div className="flex flex-col items-center justify-center mb-8">
        <Tittle tittle="Desafiante II" />
        <img src={leaguesIcons.challengerTwo} alt="challenger-two-image" draggable={false} onContextMenu={handleContextMenu} />
        <TrophyAmount amount={4300} />
      </div>

      <hr className="bg-slate-700 my-8" />

      <div className="flex flex-col items-center justify-center mb-8">
        <Tittle tittle="Desafiante III" />
        <img src={leaguesIcons.challengerThree} alt="challenger-three-image" draggable={false} onContextMenu={handleContextMenu} />
        <TrophyAmount amount={4600} />
      </div>

      <hr className="bg-slate-700 my-8" />

      <div className="flex flex-col items-center justify-center mb-8">
        <Tittle tittle="Mestre I" />
        <img src={leaguesIcons.MasterOne} alt="master-one-image" draggable={false} onContextMenu={handleContextMenu} />
        <TrophyAmount amount={5000} />
      </div>

      <hr className="bg-slate-700 my-8" />

      <div className="flex flex-col items-center justify-center mb-8">
        <Tittle tittle="Mestre II" />
        <img src={leaguesIcons.MasterTwo} alt="master-two-image" draggable={false} onContextMenu={handleContextMenu} />
        <TrophyAmount amount={5300} />
      </div>

      <hr className="bg-slate-700 my-8" />

      <div className="flex flex-col items-center justify-center mb-8">
        <Tittle tittle="Mestre III" />
        <img src={leaguesIcons.MasterThree} alt="master-three-image" draggable={false} onContextMenu={handleContextMenu} />
        <TrophyAmount amount={5600} />
      </div>

      <hr className="bg-slate-700 my-8" />

      <div className="flex flex-col items-center justify-center mb-8">
        <Tittle tittle="Campeão" />
        <img src={leaguesIcons.Champion} alt="champion-image" draggable={false} onContextMenu={handleContextMenu} />
        <TrophyAmount amount={6000} />
      </div>

      <hr className="bg-slate-700 my-8" />

      <div className="flex flex-col items-center justify-center mb-8">
        <Tittle tittle="Grande Campeão" />
        <img src={leaguesIcons.grandChampion} alt="grand-champion-image" draggable={false} onContextMenu={handleContextMenu} />
        <TrophyAmount amount={6300} />
      </div>

      <hr className="bg-slate-700 my-8" />

      <div className="flex flex-col items-center justify-center mb-8">
        <Tittle tittle="Campeão Real" />
        <img src={leaguesIcons.royalChampion} alt="champion-royal-image" draggable={false} onContextMenu={handleContextMenu} />
        <TrophyAmount amount={6600} />
      </div>

      <hr className="bg-slate-700 my-8" />

      <div className="flex flex-col items-center justify-center">
        <Tittle tittle="Maior Campeão" />
        <img src={leaguesIcons.ultimateChampion} alt="ultimate-champion-image" draggable={false} onContextMenu={handleContextMenu} />
        <TrophyAmount amount={7000} />
      </div>
    </div>
  );
};