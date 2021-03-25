import Link from 'next/link';
import styled from 'styled-components';
import { useTheme } from 'next-themes';
import useHasMounted from '@hooks/use-has-mounted';
import { Sun, Moon } from './icons';

const HeaderWrapper = styled.header`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavWrapper = styled.nav`
  @media (max-width: 640px) {
    display: none;
  }
`;

const NavList = styled.ul`
  list-style: none;
  padding-left: 0;
  display: flex;

  > li {
    margin-left: var(--space-md);
  }
`;

function Header() {
  let { theme, setTheme } = useTheme();
  let hasMounted = useHasMounted();
  return (
    <HeaderWrapper>
      <div>
        {hasMounted ? (
          <button
            type="button"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            {theme === 'light' ? <Moon /> : <Sun />}
          </button>
        ) : null}
      </div>

      <NavWrapper>
        <NavList>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about-us">
              <a>About Us</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/podcast">
              <a>Podcast</a>
            </Link>
          </li>
        </NavList>
      </NavWrapper>
    </HeaderWrapper>
  );
}

export default Header;
