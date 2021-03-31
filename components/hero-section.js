import Image from 'next/image';
import styled from 'styled-components';

const SectionWrapper = styled.section`
  padding-top: var(--space-xl);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-md);

  @media (max-width: 640px) {
    padding-top: var(--space-md);
  }
`;

const LogoImageWrapper = styled.div`
  justify-self: center;
  align-self: center;
  width: 300px;
  height: 300px;
  border-radius: var(--radius-sm);
`;

const HeroInfoWrapper = styled.div`
  justify-self: center;
  align-self: center;
  text-align: center;
`;

function HeroSection() {
  return (
    <SectionWrapper>
      <LogoImageWrapper>
        <Image
          src="/images/logo.jpeg"
          alt="No Era Penal Logo"
          width={300}
          height={300}
          priority
        />
      </LogoImageWrapper>
      <HeroInfoWrapper>
        <h1>No Era Penal</h1>
        <p>
          A pair of handsome, smart, funny looking guys dedicated to Futbol and
          Futbol only. We have just started a podcast, which can be found on
          Spotify, and Apple Podcasts, along with a blog where we will be
          writing about everything Futbol.
        </p>
      </HeroInfoWrapper>
    </SectionWrapper>
  );
}

export default HeroSection;
