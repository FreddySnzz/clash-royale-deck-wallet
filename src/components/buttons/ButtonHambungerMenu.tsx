import { IoMenu } from "react-icons/io5";

interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  toggleExpanded: () => void;
}

export default function ButtonHamburgerMenu({
  toggleExpanded,
}: SidebarProps) {
  return (
    <button
      onClick={toggleExpanded}
      aria-label="Abrir menu"
      className="p-2 text-gray-200 hover:bg-slate-800 rounded-lg active:bg-slate-800"
    >
      <IoMenu size={28} />
    </button>
  );
};