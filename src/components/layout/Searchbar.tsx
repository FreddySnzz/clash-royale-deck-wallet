"use client";

import Link from "next/link";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { IoSearchOutline } from "react-icons/io5";
import { useCardsContext } from "@/data/context/CardsContext";
import { normalizeText } from "@/data/functions/removeAccent";
import RenderIcons from "../icons/RenderIcons";
import { useQueryParams } from "@/data/hooks/useQueryParams";
import { SearchParams } from "@/types/PageProps";

export function Searchbar({ searchParams }: {
  searchParams?: SearchParams;
}) {
  const router = useRouter();
  const { cards } = useCardsContext();
  
  const { search } = useQueryParams<"search">(searchParams || {}, {
    search: "",
  });

  const [searchText, setSearchText] = useState(search);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleSearch = (e?: React.FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault();
    if (searchText.trim()) {
      router.push(`/cards?search=${encodeURIComponent(searchText)}`);
      setSearchText('')
    } else {
      router.push(`/cards`);
      setSearchText('')
    }
  };

  const filteredCards = useMemo(() => {
    if (!searchText) return [];

    return cards.filter((card) =>
      normalizeText(card.name.toLowerCase()).includes(normalizeText(searchText)) || 
      card?.englishName?.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [cards, searchText]);

  useEffect(() => {
    setSearchText(search);
  }, [search]);

  return (
    <form className="flex flex-col w-full" onSubmit={handleSearch}>
      <div className="flex rounded-lg w-full mb-2 bg-slate-700 overflow-hidden shadow-sm shadow-black/60">
        <input
          type="text"
          placeholder="Procure por jogador, deck ou carta..."
          value={searchText}
          onChange={handleChange}
          className="grow focus:outline-0 focus:text-gray-300 text-slate-400 p-1 ml-1 text-sm"
        />
        <button 
          className="flex h-full p-2 bg-slate-600 cursor-pointer active:bg-slate-500 shadow-sm shadow-black/30"
        >
          <IoSearchOutline className="text-slate-200" />
        </button>
      </div>

      { searchText && (
        <div className="grid grid-cols-2 gap-2 max-h-64 rounded overflow-auto overflow-x-hidden">
          {filteredCards.length > 0 ? (
            filteredCards.map((card) => (
              <Link 
                key={card.id} 
                href={`cards?search=${card.name}&id=${card.id}`}
                onClick={() => setSearchText('')}
              >
                <div
                  className="flex gap-2 items-center p-1 bg-slate-800 rounded shadow-md text-slate-200"
                >
                  <RenderIcons src={card.imagesUrl.badge}/>
                  <span>
                    {card.name}
                  </span>
                </div>
              </Link>
            ))
          ) : (
            <p className="w-screen text-slate-400 p-2">
              Nenhuma carta encontrada.
            </p>
          )}
        </div>
      )}
    </form>
  );
}
