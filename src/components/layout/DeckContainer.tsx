import { GenerateDeckLink } from "@/data/functions/generateDeckLink"
import Link from "next/link"

export default function DeckContainer() {
  const link = GenerateDeckLink({ cardIds: [26000000, 26000001, 26000002, 26000003, 26000004, 26000005, 26000006, 26000007], idCardTower: 159000002 });

  return (
    <div className="grid grid-cols-8 p-2 bg-slate-700">
      <Link href={link} >DECK</Link>
    </div>
  )
}