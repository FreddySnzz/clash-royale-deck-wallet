import Cards from "@/components/cards/Cards";
import LayoutContainer from "@/components/layout/LayoutContainer";

interface CardsPageProps {
  searchParams?: {
    search?: string;
    id?: string;
  };
};

export default function CardsPage({ searchParams }: CardsPageProps) {
  const searchQuery = searchParams?.search ?? "";
  const searchQueryById = searchParams?.id ?? "";

  return (
    <LayoutContainer>
      <Cards searchText={searchQuery} cardId={searchQueryById}/>
    </LayoutContainer>
  );
}
