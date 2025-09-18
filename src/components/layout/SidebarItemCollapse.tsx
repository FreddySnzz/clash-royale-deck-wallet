"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaAngleDown } from "react-icons/fa6";

interface SidebarItemCollapseProps {
  title: string;
  children: React.ReactNode;
}

export function SidebarItemCollapse({ title, children }: SidebarItemCollapseProps) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => setExpanded((prev) => !prev);

  return (
    <div className="w-full">
      <button
        onClick={toggleExpanded}
        className="flex w-full items-center justify-between cursor-pointer focus:outline-none"
        aria-expanded={expanded}
      >
        <span className="font-black text-lg text-slate-500">{title}</span>

        <motion.div
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FaAngleDown className="text-gray-400" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pl-4 pt-2">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
