import ButtonHamburgerMenu from "../buttons/ButtonHambungerMenu";
import { LogoWrapped } from "../Logo";

export default function Navbar() {
  return (
    <header className={`fixed flex flex-col w-full h-auto p-4 z-50 bg-slate-900`}>
      <div className="flex items-center justify-between">
        <LogoWrapped />
        <ButtonHamburgerMenu />
      </div>
      <div className="bg-red-600 rounded mt-2">
        SEARCH BAR
      </div>
    </header>
  );
};