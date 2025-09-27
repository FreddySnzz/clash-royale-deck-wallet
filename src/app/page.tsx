import DeckWallet from "@/components/layout/DeckWallet";
import LayoutContainer from "@/components/layout/LayoutContainer";

export default function Home({ searchParams }: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  return (
    <LayoutContainer searchParams={searchParams}>
      <DeckWallet/> 
    </LayoutContainer>
  );
}
