import Link from "next/link";

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
};

export default function SidebarItem({ icon, label, href }: SidebarItemProps) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 p-1 rounded-lg text-gray-300 hover:bg-slate-800 hover:text-white transition"
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}
