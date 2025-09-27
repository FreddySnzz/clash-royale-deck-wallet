import { clashRegularFont } from "@/fonts";

export default function CardNotFound() {
  return (
    <div className="fixed top-0 left-0 flex justify-center items-center gap-2 h-screen w-screen z-50">
      <span className={`text-slate-950 dark:text-slate-200 ${clashRegularFont.className}`}>Nenhuma carta encontrada.</span>
    </div>
  );
};