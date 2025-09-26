import { clashRegularFont } from "@/fonts";

interface ButtonCloseProps {
  onClose: () => void;
}

export default function ButtonClose({ onClose }: ButtonCloseProps) {
  return (
    <button 
        onClick={onClose} 
        aria-label="Fechar" 
      >
      <div className="flex w-5 h-5 p-3 justify-center items-center rounded-sm shadow-md bg-radial-[at_25%_25%] from-red-400 to-red-700 to-75%">
        <span className={`text-slate-100 text-lg ${clashRegularFont.className}`}>x</span>
      </div>
    </button>
  )
}