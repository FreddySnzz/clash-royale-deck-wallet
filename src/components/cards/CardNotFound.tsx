import { clashRegularFont } from "@/fonts";

export default function CardNotFound() {
  return (
    <div className="flex justify-center items-center gap-2 min-h-[70vh]">
      <span className={`text-slate-950 dark:text-slate-200 ${clashRegularFont.className}`}>
        Nenhuma carta encontrada.
      </span>
    </div>
  );
};