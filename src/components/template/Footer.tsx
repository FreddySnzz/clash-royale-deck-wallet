'use client';

import { MdSaveAlt } from "react-icons/md";
import openLinkOnButton from "@/data/functions/openNewWindowButton";
import ButtonFooterContact from "../buttons/ButtonFooterContact";
import { Logo } from "../Logo";

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
};

export default function Footer({ className }: FooterProps) {
  return (
    <footer className={`w-full bg-slate-950 p-6 ${className}`}>
      <div className="mt-2">
        <Logo />

        <div className="text-gray-400">
          <br />
          <span>
            {`This content is not affiliated with, endorsed, sponsored, 
            or specifically approved by Supercell and Supercell is not responsible for it. For more information see`}
          </span>
          <span className="font-bold hover:text-slate-900" onClick={() => openLinkOnButton('https://www.supercell.com/fan-content-policy')}>
            {` Supercell's Fan Content Policy`}
          </span>
          <span>
            {`.`}
          </span>
        </div>
      </div>

      <div className="container">
        <div className="flex flex-col mt-6">
          <p className="font-black text-amber-500">
            FOLLOW ME
          </p>
          <div className="flex flex-col mt-2 text-gray-400">
            <span onClick={() => openLinkOnButton('https://github.com/FreddySnzz')}>
              GitHub
            </span>
            <span onClick={() => openLinkOnButton('https://www.linkedin.com/in/fredson-luiz/')}>
              LinkedIn
            </span>
          </div>
        </div>
        <div className="flex flex-col mt-6">
          <p className="font-black text-amber-500">
            DOWNLOAD
          </p>
          <div className="flex text-center mt-2 text-gray-400">
            <MdSaveAlt className="text-xl mr-2 " />
            <span onClick={() => console.log("SAVE APP ON HOME SCREEN")}>
              Save website on your home screen
            </span>
          </div>
        </div>
      </div>

      <div className="container flex flex-col">
        <hr className="mt-4 bg-muted-foreground"/>
        <div className="pt-4">
          <p className="text-sm font-semibold text-muted-foreground">
            <span className="mr-1">
              &copy; 2025 |
            </span>
            <span className="cursor-pointer" onClick={() => openLinkOnButton('https://portfolio-freddy-snzz.vercel.app/')}>
              Fredson Luiz 
            </span>
            <span>
              {` — All Rights Reserved.`}
            </span>
          </p>
          <div className="mt-2">
            <ButtonFooterContact />
          </div>
        </div>

        <div className="text-center text-sm text-gray-700 mt-6 mb-4">
          <span>Feito com muito carinho. ❤️</span>
        </div>
      </div>
    </footer>
  );
};