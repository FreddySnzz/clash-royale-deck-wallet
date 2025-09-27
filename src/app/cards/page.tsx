import Cards from "@/components/cards/Cards";
import LayoutContainer from "@/components/layout/LayoutContainer";

interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function CardsPage({ searchParams }: PageProps) {
  return (
    <LayoutContainer>
      <Cards searchParams={searchParams}/>
    </LayoutContainer>
  );
}
