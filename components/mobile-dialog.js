import Link from 'next/link';
import styled from 'styled-components';
import { Dialog } from '@reach/dialog';
import { useDialog } from '@context/mobile-dialog-toggle';
import Button from './buttons';
import { MenuClose } from './icons';
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
  justify-content: flex-end;

  > button {
    margin-right: -0.5rem;
  }
`;

const MobileNavList = styled.ul`
  list-style: none;
  padding-left: 0;

  > li {
    margin-bottom: var(--space-lg);
  }
`;

const MobileLinkWrapper = styled.a`
  font-size: var(--font-lg);
  font-weight: var(--font-semibold);
  padding: var(--space-md) 0;
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
        <Button onPress={dialog.close} isIconButton>
          <MenuClose width={24} height={24} />
        </Button>
      </DialogHeading>
      <nav>
        <MobileNavList>
          <li>
            <Link href="/" passHref>
              <MobileLinkWrapper>Home</MobileLinkWrapper>
            </Link>
          </li>
          <li>
            <Link href="/podcast" passHref>
              <MobileLinkWrapper>Podcast</MobileLinkWrapper>
            </Link>
          </li>
          <li>
            <Link href="/blog" passHref>
              <MobileLinkWrapper>Blog</MobileLinkWrapper>
            </Link>
          </li>
        </MobileNavList>
      </nav>
    </DialogWrapper>
  );
}

export default MobileDialog;
