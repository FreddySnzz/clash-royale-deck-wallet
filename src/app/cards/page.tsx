import Cards from "@/components/cards/Cards";
import LayoutContainer from "@/components/layout/LayoutContainer";
import { PageProps } from "@/data/interfaces/PageProps";

export default function CardsPage({ searchParams }: PageProps) {
  return (
    <LayoutContainer searchParams={searchParams}>
      <Cards searchParams={searchParams} />
    </LayoutContainer>
  );
}
