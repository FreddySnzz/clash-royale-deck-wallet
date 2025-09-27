import DeckWallet from "@/components/layout/DeckWallet";
import LayoutContainer from "@/components/layout/LayoutContainer";
import type { SearchParams } from "@/types/PageProps";

export default function Home({ searchParams }: {
  searchParams?: SearchParams;
}) {
  return (
    <LayoutContainer searchParams={searchParams}>
      <DeckWallet /> 
    </LayoutContainer>
  );
}
