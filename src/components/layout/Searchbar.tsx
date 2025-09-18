import { ChangeEvent, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

export function Searchbar() {
  const [searchText, setSearchText] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="flex rounded-lg w-full mb-1 bg-slate-700 overflow-hidden shadow-sm shadow-black/60">
      <input 
        type="text" 
        placeholder="Procure por jogador, deck ou carta..." 
        value={searchText}
        onChange={handleChange}
        className="grow focus:outline-0 focus:text-gray-300 text-slate-400 p-1 ml-1 text-sm"
      />
      <div className="flex h-full p-2 bg-slate-600 cursor-pointer active:bg-slate-500 shadow-sm shadow-black/30">
        <button className="cursor-pointer">
          <IoSearchOutline className="text-slate-200"/>
        </button>
      </div>
    </div>
  )
}