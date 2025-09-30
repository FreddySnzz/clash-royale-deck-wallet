import ElixirDrop from "@/components/icons/ElixirDrop";
import { CardDto } from "@/data/dtos/card.dto";

interface CardProps {
  card: CardDto;
  size: 'sm' | 'md' | 'lg',
  type: 'withCost' | 'withoutCost',
  onClick?: () => void
}

export default function Card({ card, onClick, size, type }: CardProps) {
  let cardSize;

  switch (size) {
    case 'sm':
      cardSize = 'w-10 h-15'
      break;
    case 'md':
      cardSize = 'w-20 h-30'
      break;
    case 'lg':
      cardSize = 'w-30 h-44'
      break;
    default:
      cardSize = 'w-20 h-30'
      break;
  };

  if (type === 'withCost') {
    return (
      <div className="relative" onClick={onClick}>
        <img src={card.imagesUrl.card} alt="cardImage" className={`${cardSize} object-cover`} />
        { card.elixirCost && 
          <div className="absolute top-[-20] left-[-35]">
            <ElixirDrop cost={card.elixirCost} size="lg" />
          </div>
        }
      </div>
    );
  } else {
    return (
      <div className="relative" onClick={onClick}>
        <img src={card.imagesUrl.card} alt="cardImage" className={`${cardSize} object-cover`} />
      </div>
    );
  };
}
