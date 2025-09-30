import Background from "./Background";
import Footer from "./Footer";
import LayoutContent from "./LayoutContent";
import Navbar from "./Navbar";

export default function LayoutContainer({ children }: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <Background>
      <Navbar />
      <LayoutContent>
        {children}
      </LayoutContent>
      <Footer />
    </Background>
  );
}
