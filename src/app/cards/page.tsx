import Cards from "@/components/cards/Cards";
import LayoutContainer from "@/components/layout/LayoutContainer";

export default function CardsPage({ searchParams }: { searchParams?: { [key: string]: string | string[] } }) {
  const searchQuery = Array.isArray(searchParams?.search) ? searchParams?.search[0] : searchParams?.search ?? "";
  const searchQueryById = Array.isArray(searchParams?.id) ? searchParams?.id[0] : searchParams?.id ?? "";

  return (
    <LayoutContainer>
      <Cards searchText={searchQuery} cardId={searchQueryById} />
    </LayoutContainer>
  );
}
