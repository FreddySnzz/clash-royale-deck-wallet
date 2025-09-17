'use client';

import ElixirDrop from "@/components/icons/ElixirDrop";

interface CardWithCostProps {
  cardImage: string;
  cost: number;
}

export default function CardWithCost({ cardImage, cost }: CardWithCostProps) {
  return (
    <div className="flex gap-2 p-2">
      <div className="relative">
        <img src={cardImage} alt="cardImage" className="w-20 h-30" />
        <div className="absolute top-[-20] left-[-40]">
          <ElixirDrop cost={cost} />
        </div>
      </div>
    </div>
  );
}
