import styled from 'styled-components';
import { Dialog } from '@reach/dialog';
import { useDialog } from '@context/mobile-dialog-toggle';
import Button from './buttons';
import CustomLink from './custom-link';
import { MenuClose, Home, Microphone, Pencil } from './icons';
import '@reach/dialog/styles.css';

const DialogWrapper = styled(Dialog)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: var(--space-md);
  background-color: var(--color-bg);
  color: var(--color-fg);
`;

const DialogHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > span {
    position: relative;
    font-size: var(--font-md);
    font-weight: var(--font-semibold);

    &::after {
      position: absolute;
      content: '';
      background-color: var(--color-fg);
      width: 100%;
      height: 3px;
      bottom: -5px;
      left: 0;
    }
  }

  > button {
    margin-right: -0.5rem;
  }
`;

const MobileNavList = styled.ul`
  list-style: none;
  padding-left: 0;

  > li {
    margin-bottom: var(--space-md);
  }
`;

function MobileDialog() {
  let dialog = useDialog();

  return (
    <DialogWrapper
      isOpen={dialog.showDialog}
      onDismiss={dialog.close}
      aria-label="Mobile navigation dialog"
    >
      <DialogHeading>
        <span>No Era Penal</span>
        <Button onClick={dialog.close} isIconButton>
          <MenuClose />
        </Button>
      </DialogHeading>
      <nav>
        <MobileNavList>
          <li>
            <CustomLink href="/" isMobileLink>
              <Home />
              <span>Home</span>
            </CustomLink>
          </li>
          <li>
            <CustomLink href="/podcast" isMobileLink>
              <Microphone />
              <span>Podcast</span>
            </CustomLink>
          </li>
          <li>
            <CustomLink href="/blog" isMobileLink>
              <Pencil />
              <span>Blog</span>
            </CustomLink>
          </li>
        </MobileNavList>
      </nav>
    </DialogWrapper>
  );
}

export default MobileDialog;
