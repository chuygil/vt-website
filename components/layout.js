import styled from 'styled-components';
import { DialogProvider } from '@context/mobile-dialog-toggle';
import Header from './header';
import Footer from './footer';
import SEO from './seo';

const Wrapper = styled.div`
  max-width: var(--space-body);
  margin: 0 auto;
  padding: 0 var(--space-md);
`;

const MainWrapper = styled.main`
  width: 100%;
  min-height: calc(100vh - 64px);
`;

function Layout({ children, title }) {
  return (
    <Wrapper>
      <SEO title={title} />
      <DialogProvider>
        <Header />
      </DialogProvider>
      <MainWrapper>{children}</MainWrapper>
      <Footer />
    </Wrapper>
  );
}

export default Layout;
