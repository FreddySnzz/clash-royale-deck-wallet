import Cards from "@/components/cards/Cards";
import LayoutContainer from "@/components/layout/LayoutContainer";
import type { SearchParams } from "@/types/PageProps";

export default function CardsPage({ searchParams }: {
  searchParams?: SearchParams;
}) {
  return (
    <LayoutContainer searchParams={searchParams}>
      <Cards searchParams={searchParams} />
    </LayoutContainer>
  );
}
