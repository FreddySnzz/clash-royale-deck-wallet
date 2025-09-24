import { AiOutlineLoading } from "react-icons/ai";
import { clashRegularFont } from "@/fonts";

export default function Loading() {
  return (
    <div className="fixed top-0 left-0 flex justify-center items-center gap-2 h-screen w-screen z-50">
      <AiOutlineLoading className="animate-spin text-slate-950 dark:text-slate-200" />
      <span className={`text-slate-950 dark:text-slate-200 ${clashRegularFont.className}`}>Carregando...</span>
    </div>
  )
}