import Background from "./Background";
import Footer from "./Footer";
import Layout from "./Layout";
import Navbar from "./Navbar";

interface LayoutContainerProps {
  children?: React.ReactNode;
  className?: string;
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function LayoutContainer( props: LayoutContainerProps ) {
  return (
    <Background>
      <Navbar searchParams={props.searchParams} />
      <Layout>
        {props.children}
      </Layout>
      <Footer /> 
    </Background>
  );
};