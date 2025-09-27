import Background from "./Background";
import Footer from "./Footer";
import Layout from "./Layout";
import Navbar from "./Navbar";

export default function LayoutContainer({ children, className }: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <Background>
      <Navbar />
      <Layout className={className}>
        {children}
      </Layout>
      <Footer />
    </Background>
  );
}
