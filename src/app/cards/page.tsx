import Cards from "@/components/cards/Cards";
import LayoutContainer from "@/components/layout/LayoutContainer";

export default function CardsPage({ searchParams }: any) {
  const searchQuery = searchParams?.search ?? "";
  const searchQueryById = searchParams?.id ?? "";

  return (
    <LayoutContainer>
      <Cards searchText={searchQuery} cardId={searchQueryById} />
    </LayoutContainer>
  );
}
