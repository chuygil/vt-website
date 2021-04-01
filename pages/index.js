import Layout from '@components/layout';
import HeroSection from '@components/hero-section';
import BioSection from '@components/bio-section';

function Index() {
  return (
    <Layout title="Home">
      <HeroSection />
      <BioSection />
    </Layout>
  );
}

export default Index;
