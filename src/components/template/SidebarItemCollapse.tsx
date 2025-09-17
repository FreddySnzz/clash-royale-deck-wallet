import { useState } from "react";
import { 
  FaAngleDown,
  FaAngleUp,
} from "react-icons/fa6";

interface SidebarItemCollapseProps {
  title: string,
  children: React.ReactNode
};

export function SidebarItemCollapse({ title, children }: SidebarItemCollapseProps) {
  const [expanded, setExpanded] = useState(false);
  
  const toggleExpanded = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <div>
      <button
        onClick={toggleExpanded}
        className="flex w-full items-center justify-between cursor-pointer focus:outline-none"
        aria-expanded={expanded}
      >
        <span className="font-black text-lg text-slate-500">
          {title}
        </span>
        {expanded ? <FaAngleUp className="text-gray-400" /> : <FaAngleDown className="text-gray-400" />}
      </button>
      { expanded && children }
    </div>
  );
};