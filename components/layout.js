import styled from 'styled-components';
import Header from './header';
import Footer from './footer';
import SEO from './seo';

const Wrapper = styled.div`
  max-width: var(--space-body);
  margin: 0 auto;
  padding: 0 var(--space-sm);
`;

const MainWrapper = styled.main`
  width: 100%;
  min-height: calc(100vh - 64px);
`;

function Layout({ children, title }) {
  return (
    <Wrapper>
      <SEO title={title} />
      <Header />
      <MainWrapper>{children}</MainWrapper>
      <Footer />
    </Wrapper>
  );
}

export default Layout;
