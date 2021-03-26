import Image from 'next/image';
import styled from 'styled-components';

const LogoImageWrapper = styled.div`
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

function HeroSection() {
  return (
    <section>
      <LogoImageWrapper>
        <img src="/images/logo.jpeg" alt="No Era Penal Logo" />
      </LogoImageWrapper>
    </section>
  );
}

export default HeroSection;
