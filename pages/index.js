import Feature from "../components/Feature";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import Team from "../components/Team";

export default function Home() {
  return (
    <>
      <SeoHead title="Boffins: Level Up With Us" />
      <Layout>
        <Hero />
        <Feature />
        <Team />
      </Layout>
    </>
  );
}
