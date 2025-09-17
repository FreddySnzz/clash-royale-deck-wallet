import Background from "@/components/Background";
import Cards from "@/components/Cards";
import Footer from "@/components/template/Footer";
import Layout from "@/components/template/Layout";
import Navbar from "@/components/template/Navbar";

export default function Home() {
  return (
    <Background>
      <Navbar />
      <Layout>
        <Cards />
      </Layout>
      <Footer /> 
    </Background>
  );
}
