import Cards from "@/components/cards/Cards";
import LayoutContainer from "@/components/layout/LayoutContainer";

export default async function CardsPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | undefined }> }) {
  const params = await searchParams;

  const searchQuery = params?.search ?? "";
  const searchQueryById = params?.id ?? "";

  return (
    <LayoutContainer>
      <Cards searchText={searchQuery} cardId={searchQueryById} />
    </LayoutContainer>
  );
}
