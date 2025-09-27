import Cards from "@/components/cards/Cards";
import LayoutContainer from "@/components/layout/LayoutContainer";

export default function CardsPage({ searchParams }: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <LayoutContainer searchParams={searchParams}>
      <Cards searchParams={searchParams} />
    </LayoutContainer>
  );
}
