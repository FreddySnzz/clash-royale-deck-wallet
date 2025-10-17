'use client'

import Card from "@/components/cards/Card";
import { useToast } from "@/data/context/ToastContext";
import Loading from "@/components/Loading";
import { useCardsContext } from "@/data/context/CardsContext";
import { FaDownload } from "react-icons/fa6";
import { ChangeEvent, useState } from "react";
import { ValidateDeckLink } from "@/data/functions/validateDeckLink";
import Tittle from "./layout/Tittle";
import DeckContainer from "./DeckContainer";
import { GenerateDeckLink } from "@/data/functions/generateDeckLink";

interface BuilderDeckContainerProps {
  link?: string;
  mode?: 'create' | 'edit';
};

export default function BuilderDeckContainer({ mode = 'create', link }: BuilderDeckContainerProps) {
  const { cards, loading } = useCardsContext();
  const { showToast } = useToast();
  const [deckLink, setDeckLink] = useState('');
  const [deckVerified, setDeckVerified] = useState(false);
  
  const [selectedCardIds, setSelectedCardIds] = useState<number[]>([]);
  const MAX_CARDS = 8;
  const isSelectionComplete = selectedCardIds.length >= MAX_CARDS;

  const handleCardSelection = (cardId: number) => {
    if (selectedCardIds.includes(cardId)) {
      setSelectedCardIds(selectedCardIds.filter(id => id !== cardId));
    } else if (selectedCardIds.length < MAX_CARDS) {
      setSelectedCardIds([...selectedCardIds, cardId]);
    };
  };

  if (isSelectionComplete) {
    var deckLinkGenerated = GenerateDeckLink({
      cardIds: selectedCardIds,
      idCardTower: 159000000
    });
    console.log(deckLinkGenerated)
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDeckLink(event.target.value);
  };

  const handleSubmitDeck = (e?: React.FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault();

    const validateDeckLink = ValidateDeckLink(deckLink);

    if (!validateDeckLink) return showToast("Deck inválido. Verifique o link do deck.", "error");

    setDeckVerified(true);
  };
  
  if (loading) return <Loading />;

  return (
    <div className="flex flex-col p-4">
      <div className="mb-2"> 
        <div className="mt-2 text-center">
          <Tittle tittle="Crie manualmente, ou cole abaixo o link:" className="text-lg" />
        </div>
        <form className="flex flex-col w-full my-4" onSubmit={handleSubmitDeck}>
          <div className="flex rounded-lg w-full mb-2 bg-slate-500 overflow-hidden shadow-sm shadow-black/60">
            <input 
              type="text" 
              placeholder="https://link.clashroyale.com/pt/?clashroyale..." 
              value={deckLink}
              onChange={handleChange}
              className="grow focus:outline-0 focus:text-black text-slate-200 p-3 ml-1"
            />
            <button 
              className="flex items-center p-3 bg-slate-500 cursor-pointer active:bg-slate-500 shadow-sm shadow-black/30"
            >
              <FaDownload className="text-slate-200" />
            </button>
          </div>
        </form>
        { deckVerified ? <DeckContainer deckLink={deckLink} /> : <DeckContainer deckLink={deckLinkGenerated === undefined ? '' : deckLinkGenerated} /> }
      </div>
      <div className="grid grid-cols-8 p-2 bg-slate-700 rounded-lg">
        {cards.map((card) => {
          if (card?.id) {
            const isSelected = selectedCardIds.includes(card.id);
            const isDisabled = isSelectionComplete && !isSelected;
  
            // não pode selecionar mais de UM campeão, e nem colocar cartas de torre entre as de campo
  
            return (
              <Card 
                key={card.id} 
                type="withoutCost" 
                size="sm" 
                card={card} 
                isSelected={isSelected} 
                isDisabled={isDisabled}
                onClick={() => handleCardSelection(card.id!)}
              />
            );
          };
        })}
      </div>
    </div>
  );
};