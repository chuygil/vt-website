import styled from 'styled-components';

const SectionWrapper = styled.section`
  padding-top: var(--space-md);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-md);
`;

const LogoImageWrapper = styled.div`
  justify-self: center;
  align-self: center;
  position: relative;
  width: 300px;
  height: 300px;
  overflow: hidden;
  border-radius: var(--radius-sm);

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
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
        <img src="/images/logo.jpeg" alt="No Era Penal Logo" />
      </LogoImageWrapper>
      <HeroInfoWrapper>
        <h1>No Era Penal</h1>
        <p>
          A pair of handsome, smart, funny looking guys dedicated to Futbol and
          Futbol only.
        </p>
      </HeroInfoWrapper>
    </SectionWrapper>
  );
}

export default HeroSection;
