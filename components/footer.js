import styled from 'styled-components';
import { ExternalLink } from './icons';

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-md) 0;

  @media (max-width: 640px) {
    flex-direction: column;
    position: relative;
    margin-top: var(--space-xl);

    &::before {
      position: absolute;
      content: '';
      background-color: var(--color-gray-primary);
      width: 100px;
      height: 1px;
      top: 0;
      left: calc(50% - (100px / 2));
    }
  }

  > p {
    margin-bottom: 0;
  }

  > ul {
    list-style: none;
    padding-left: 0;
    display: flex;

    @media (max-width: 640px) {
      flex-direction: column;
      align-items: center;
    }
  }

  > ul li {
    margin-left: var(--space-md);

    @media (max-width: 640px) {
      margin-left: 0;
      margin-bottom: var(--space-md);
    }
  }
`;

const ExternalLinkWrapper = styled.a`
  display: flex;
  align-items: center;
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
        <li>
          <ExternalLinkWrapper
            href="https://podcasts.apple.com/us/podcast/no-era-penal/id1559433275"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Apple Podcasts</span>
            <ExternalLink />
          </ExternalLinkWrapper>
        </li>
      </ul>
    </FooterWrapper>
  );
}

export default Footer;
