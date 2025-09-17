import * as motion from "motion/react-client";
import { AnimatePresence, MotionConfig } from "motion/react";
import { MdSunny } from "react-icons/md";
import { HiMiniMoon } from "react-icons/hi2";
import useAppData from "@/data/hooks/useAppData";

export function ThemeToggle() {
  const { theme, toggleTheme } = useAppData();

  return (
    <MotionConfig transition={{ duration: 0.2 }}>
      <button
        onClick={toggleTheme}
        className="p-3 rounded-lg flex items-center justify-center"
      >
        <AnimatePresence mode="wait" initial={false}>
          {theme === "dark" ? (
            <motion.div
              key="moon"
              initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
              className="flex items-center justify-center"
            >
              <HiMiniMoon className="text-xl text-slate-200" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
              className="flex items-center justify-center"
            >
              <MdSunny className="text-xl text-yellow-500" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </MotionConfig>
  );
}
