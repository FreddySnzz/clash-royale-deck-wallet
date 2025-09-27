import DeckWallet from "@/components/layout/DeckWallet";
import LayoutContainer from "@/components/layout/LayoutContainer";
import { PageProps } from "@/data/interfaces/PageProps";

export default function Home({ searchParams }: PageProps) {
  return (
    <LayoutContainer searchParams={searchParams}>
      <DeckWallet /> 
    </LayoutContainer>
  );
}
