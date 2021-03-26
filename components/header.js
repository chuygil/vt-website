import Link from 'next/link';
import styled from 'styled-components';
import { useTheme } from 'next-themes';
import useHasMounted from '@hooks/use-has-mounted';
import { useDialog } from '@context/mobile-dialog-toggle';
import Button from './buttons';
import CustomLink from './custom-link';
import MobileDialog from './mobile-dialog';
import { Sun, Moon, Menu } from './icons';

const HeaderWrapper = styled.header`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div button {
    margin-left: -0.5rem;
  }
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

const MenuButtonWrapper = styled.div`
  display: none;

  > button {
    margin-right: -0.5rem;
  }

  @media (max-width: 640px) {
    display: flex;
  }
`;

function Header() {
  let { theme, setTheme } = useTheme();
  let hasMounted = useHasMounted();
  let dialog = useDialog();

  return (
    <HeaderWrapper>
      <div>
        {hasMounted ? (
          <Button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            isIconButton
          >
            {theme === 'light' ? <Moon /> : <Sun />}
          </Button>
        ) : null}
      </div>

      <NavWrapper>
        <NavList>
          <li>
            <CustomLink href="/">Home</CustomLink>
          </li>
          <li>
            <CustomLink href="/blog">Blog</CustomLink>
          </li>
          <li>
            <CustomLink href="/podcast">Podcast</CustomLink>
          </li>
        </NavList>
      </NavWrapper>

      <MenuButtonWrapper>
        <Button type="button" onClick={dialog.open} isIconButton>
          <Menu />
        </Button>
      </MenuButtonWrapper>

      <MobileDialog />
    </HeaderWrapper>
  );
}

export default Header;
