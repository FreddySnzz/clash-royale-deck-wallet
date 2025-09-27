import Background from "./Background";
import Footer from "./Footer";
import Layout from "./Layout";
import Navbar from "./Navbar";

export default function LayoutContainer({
  children,
  className,
  searchParams,
}: {
  children?: React.ReactNode;
  className?: string;
  searchParams?: { [key: string]: string | string[] | undefined }; 
}) {
  return (
    <Background>
      <Navbar searchParams={searchParams ?? {}} />
      <Layout className={className}>
        {children}
      </Layout>
      <Footer />
    </Background>
  );
}
