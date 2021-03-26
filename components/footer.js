import styled from 'styled-components';
import { ExternalLink } from './icons';

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-md) 0;

  @media (max-width: 640px) {
    flex-direction: column;
  }

  > ul {
    list-style: none;
    padding-left: 0;
    display: flex;
  }

  > ul li {
    margin-left: var(--space-md);
  }
`;

const ExternalLinkWrapper = styled.a`
  display: flex;
  align-items: center;
  padding: var(--space-sm);
`;

function Footer() {
  return (
    <FooterWrapper>
      <p>© 2021 No Era Penal</p>
      <ul>
        <li>
          <ExternalLinkWrapper
            href="https://www.instagram.com/noerapenal1219/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Instagram</span>
            <ExternalLink />
          </ExternalLinkWrapper>
        </li>
        <li>
          <ExternalLinkWrapper
            href="https://open.spotify.com/show/738ARhlH2fyOGKT26X9ukl?si=2ZjWvaYlRxCkinyuH6UYMw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Spotify</span>
            <ExternalLink />
          </ExternalLinkWrapper>
        </li>
      </ul>
    </FooterWrapper>
  );
}

export default Footer;
