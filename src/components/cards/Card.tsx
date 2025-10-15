import ElixirDrop from "@/components/icons/ElixirDrop";
import { CardDto } from "@/data/dtos/card.dto";
import { handleContextMenu } from "@/data/functions/preventeContextMenu";

interface CardProps {
  card: CardDto;
  size: 'sm' | 'md' | 'lg',
  type: 'withCost' | 'evoWithCost' | 'withoutCost',
  onClick?: () => void,
  className?: string
  isSelected?: boolean;
  isDisabled?: boolean;
};

export default function Card({ 
  card, 
  onClick, 
  size, 
  type, 
  className,
  isSelected = false, 
  isDisabled = false 
 }: CardProps) {
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

  const filterClasses = isSelected 
    ? "ring-2 rounded ring-green-500 scale-90 transition-transform duration-150"
    : isDisabled 
      ? "grayscale opacity-50 cursor-not-allowed"
      : "hover:scale-105 transition-transform duration-150"; 


  if (type === 'withCost') {
    return (
      <div className={`relative ${className} ${isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'}`} onClick={isDisabled ? undefined : onClick}>
        <img 
          src={card.imagesUrl.card} 
          draggable={false}
          onContextMenu={handleContextMenu}
          alt="cardImage" 
          className={`${cardSize} object-cover ${filterClasses}`}
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
      <div className={`relative ${className} ${isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'}`} onClick={isDisabled ? undefined : onClick}>
        <img 
          src={card.imagesUrl.evoCard} 
          draggable={false}
          onContextMenu={handleContextMenu}
          alt="cardImage" 
          className={`${cardSize} object-cover ${filterClasses}`}
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
      <div className={`relative ${className} ${isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'}`} onClick={isDisabled ? undefined : onClick}>
        <img 
          src={card.imagesUrl.card} 
          alt="cardImage" 
          draggable={false}
          onContextMenu={handleContextMenu}
          className={`${cardSize} object-cover ${filterClasses}`}
        />
      </div>
    );
  };
}
