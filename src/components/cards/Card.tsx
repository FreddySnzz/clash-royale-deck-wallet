import ElixirDrop from "@/components/icons/ElixirDrop";
import { CardDto } from "@/data/dtos/card.dto";

interface CardProps {
  card: CardDto;
  size: 'sm' | 'md' | 'lg',
  type: 'withCost' | 'evoWithCost' | 'withoutCost',
  onClick?: () => void
};

export default function Card({ card, onClick, size, type }: CardProps) {
  let cardSize: string;
  let elixirDropPosition: string;

  switch (size) {
    case 'sm':
      elixirDropPosition = ''
      cardSize = 'w-10 h-15'
      break;
    case 'md':
      elixirDropPosition = 'top-[-23] left-[-40]'
      cardSize = 'w-20 h-30'
      break;
    case 'lg':
      elixirDropPosition = 'top-[-13] left-[-35]'
      cardSize = 'w-30 h-44'
      break;
    default:
      elixirDropPosition = 'top-[-20] left-[-35]'
      cardSize = 'w-20 h-30'
      break;
  };

  if (type === 'withCost') {
    return (
      <div className="relative" onClick={onClick}>
        <img 
          src={card.imagesUrl.card} 
          alt="cardImage" 
          className={`${cardSize} object-cover`} 
        />
        {card.elixirCost && 
          <div className={`absolute ${elixirDropPosition}`}>
            <ElixirDrop cost={card.elixirCost} size={`${size === 'md' ? 'md' : 'lg'}`} />
          </div>
        }
      </div>
    );
  } else if (type === 'evoWithCost') { 
    return (
      <div className="relative" onClick={onClick}>
        <img 
          src={card.imagesUrl.evoCard} 
          alt="cardImage" 
          className={`${cardSize} object-cover`} 
        />
        {card.elixirCost && 
          <div className={`absolute ${elixirDropPosition}`}>
            <ElixirDrop cost={card.elixirCost} size={`${size === 'md' ? 'md' : 'lg'}`} />
          </div>
        }
      </div>
    );
  } else {
    return (
      <div className="relative" onClick={onClick}>
        <img 
          src={card.imagesUrl.card} 
          alt="cardImage" 
          className={`${cardSize} object-cover`} 
        />
      </div>
    );
  };
}
