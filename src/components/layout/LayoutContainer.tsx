import Background from "./Background";
import Footer from "./Footer";
import Layout from "./Layout";
import Navbar from "./Navbar";
import type { SearchParams } from "@/types/PageProps";

interface LayoutContainerProps {
  children?: React.ReactNode;
  className?: string;
  searchParams?: SearchParams;
}

export default function LayoutContainer( props: LayoutContainerProps ) {
  return (
    <Background>
      <Navbar />
      <Layout>
        {props.children}
      </Layout>
      <Footer /> 
    </Background>
  );
};