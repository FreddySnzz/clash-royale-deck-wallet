'use client';

import { MdSaveAlt } from "react-icons/md";
import { RiGitRepositoryFill } from "react-icons/ri";
import openLinkOnButton from "@/data/functions/openNewWindowButton";
import ButtonFooterContact from "../buttons/ButtonFooterContact";
import { Logo } from "../Logo";
import { NetworkLinks } from "@/data/constants/networkUrl";
import { useCards } from "@/data/hooks/useCards";

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
};

export default function Footer({ className }: FooterProps) {
  const { loading } = useCards();

  return (
    <footer className={`${ loading ? 'hidden' : ''} w-full bg-slate-950 p-6 ${className}`}>
      <div className="mt-2">
        <Logo />

        <div className="text-gray-400">
          <br />
          <span>
            {`Este conteúdo não é afiliado, endossado, patrocinado, ou especialmente aprovado pela Supercell, e a Supercell não é responsável por isso. 
            Para mais informações, veja a`}
          </span>
          <span className="font-bold hover:text-blue-500 cursor-pointer" onClick={() => openLinkOnButton('https://www.supercell.com/fan-content-policy')}>
            {` Política de Conteúdo da Supercell para fãs`}
          </span>
          <span>
            {`.`}
          </span>
        </div>
      </div>

      <div>
        <div className="flex flex-col mt-6">
          <p className="font-black text-amber-500">
            MINHAS REDES
          </p>
          <div className="flex mt-2 text-gray-400">
            <div className="flex flex-col">
              <span onClick={() => openLinkOnButton(NetworkLinks.GitHub)} className="cursor-pointer hover:text-blue-500">
                GitHub
              </span>
              <span onClick={() => openLinkOnButton(NetworkLinks.LinkedIn)} className="cursor-pointer hover:text-blue-500">
                LinkedIn
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-6">
          <p className="font-black text-amber-500">
            DOWNLOAD
          </p>
          <div className="flex text-center mt-2 text-gray-400 hover:text-blue-500">
            <MdSaveAlt className="text-xl mr-2 " />
            <span onClick={() => console.log("SAVE APP ON HOME SCREEN")} className="cursor-pointer">
              Salve o Website na sua Tela Principal
            </span>
          </div>
          <div className="flex text-center mt-2 text-gray-400 hover:text-blue-500">
            <RiGitRepositoryFill className="text-xl mr-2 " />
            <span onClick={() => openLinkOnButton('https://github.com/FreddySnzz/clash-royale-deck-wallet')} className="cursor-pointer">
              Repositório do Projeto
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <hr className="mt-4 border-muted-foreground"/>
        <div className="pt-4">
          <p className="text-xs mb-2 font-semibold text-muted-foreground">
            <span className="mr-1">
              &copy; 2025 |
            </span>
            <span className="cursor-pointer hover:italic" onClick={() => openLinkOnButton(NetworkLinks.Portfolio)}>
              Fredson Luiz 
            </span>
            <span>
              {` — Todos os direitos reservados.`}
            </span>
          </p>
          <div className="mt-2">
            <ButtonFooterContact />
          </div>
        </div>

        <div className="text-center text-sm text-gray-700 mt-6 mb-4">
          <span>Feito com muito carinho por um fã. ❤️</span>
        </div>
      </div>
    </footer>
  );
};