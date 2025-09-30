import { 
  FaTimes, 
  FaUser,
  FaMagic
} from "react-icons/fa";
import { TbCardsFilled } from "react-icons/tb";
import { RiUserSearchLine } from "react-icons/ri";
import SidebarItem from "./SidebarItem";
import { SidebarItemCollapse } from "./SidebarItemCollapse";
import { useLockBodyScroll } from "@/data/hooks/useBodyLockScroll";
import Link from "next/link";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  useLockBodyScroll(open);

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/70 transition-opacity z-49 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-slate-900 shadow-lg transform transition-transform duration-700 z-50
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-4">
          <Link href={'/'}>
            <h2 className="text-slate-100 font-bold text-lg my-2">
              Menu Principal
            </h2>
          </Link>
          <button onClick={onClose} aria-label="Fechar menu">
            <FaTimes className="text-slate-100 text-xl" />
          </button>
        </div>

        <nav className="flex flex-col p-4 gap-2">
          <SidebarItemCollapse title="Decks">
            <SidebarItem icon={<FaMagic />} label="Criar deck" href="/cards/create-deck" />
          </SidebarItemCollapse>
          <SidebarItemCollapse title="Jogador">
          <SidebarItem icon={<FaUser />} label="Seu Perfil" href="/profile" />
          <SidebarItem icon={<RiUserSearchLine />} label="Procurar Usuário" href="/search-user" />
          </SidebarItemCollapse>
          <SidebarItemCollapse title="Wiki">
            <SidebarItem icon={<TbCardsFilled />} label="Todas as Cartas" href="/cards" />
          </SidebarItemCollapse>
        </nav>
      </aside>
    </>
  );
}
