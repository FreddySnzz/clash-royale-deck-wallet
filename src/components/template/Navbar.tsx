"use client";

import { useState } from "react";
import * as motion from "motion/react-client"
import Sidebar from "./Sidebar";
import ButtonHamburgerMenu from "../buttons/ButtonHambungerMenu";
import useScrollDirection from "@/data/hooks/useScrollDetect";
import { LogoWrapped } from "../Logo";
import { ThemeToggle } from "../buttons/ButtonThemeToggleButton";

export default function Navbar() {
  const { isScrolled, scrollDirection, isAtTop } = useScrollDirection();
  const [expanded, setExpanded] = useState(false);

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
        className="fixed flex items-center justify-between w-full h-auto p-2 bg-slate-900 z-48"
      >
        <LogoWrapped />
        <div className="flex items-center">
          <ThemeToggle />
          <ButtonHamburgerMenu toggleExpanded={toggleExpanded} />
        </div>
      </motion.header>

      {/* <div className="flex p-2 m-4 rounded w-full bg-blue-600 z-50">
        SEARCH BAR
      </div> */}

      <Sidebar open={expanded} onClose={() => setExpanded(false)} />
    </>
  );
}
