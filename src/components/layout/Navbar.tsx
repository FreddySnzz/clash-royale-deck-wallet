"use client";

import { useState } from "react";
import * as motion from "motion/react-client"
import Sidebar from "./Sidebar";
import ButtonHamburgerMenu from "../buttons/ButtonHambungerMenu";
import useScrollDirection from "@/data/hooks/useScrollDetect";
import { LogoWrapped } from "../Logo";
import { ThemeToggle } from "../buttons/ButtonThemeToggleButton";
import { Searchbar } from "./Searchbar";
import { useCardsContext } from "@/data/context/CardsContext";

export default function Navbar({ searchParams }: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { isScrolled, scrollDirection } = useScrollDirection();
  const [expanded, setExpanded] = useState(false);
  const { loading } = useCardsContext();

  const toggleExpanded = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <>
      <motion.header
        animate={{
          y: isScrolled && scrollDirection === "down" ? -100 : 0,
          opacity: isScrolled && scrollDirection === "down" ? 0 : 1,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`${ loading ? 'hidden' : ''} fixed flex flex-col items-center w-full h-auto p-2 bg-slate-900 z-48`}
      >
        <div className="flex items-center justify-between w-full">
          <LogoWrapped />
          <div className="flex items-center">
            <ThemeToggle />
            <ButtonHamburgerMenu toggleExpanded={toggleExpanded} />
          </div>
        </div>
        <Searchbar searchParams={searchParams} />
      </motion.header>

      <Sidebar open={expanded} onClose={() => setExpanded(false)} />
    </>
  );
}
