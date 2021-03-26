import Link from 'next/link';
import styled from 'styled-components';
import { Dialog } from '@reach/dialog';
import { motion } from 'framer-motion';
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

const MobileNavList = styled(motion.ul)`
  list-style: none;
  padding-left: 0;

  > li {
    margin-bottom: var(--space-md);
  }
`;

const MobileLinkWrapper = styled.a`
  display: block;
  font-size: var(--font-lg);
  font-weight: var(--font-semibold);
  padding: var(--space-sm) 0;
`;

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

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
          <MenuClose />
        </Button>
      </DialogHeading>
      <nav>
        <MobileNavList variants={container} initial="hidden" animate="visible">
          <motion.li variants={item}>
            <Link href="/" passHref>
              <MobileLinkWrapper>Home</MobileLinkWrapper>
            </Link>
          </motion.li>
          <motion.li variants={item}>
            <Link href="/podcast" passHref>
              <MobileLinkWrapper>Podcast</MobileLinkWrapper>
            </Link>
          </motion.li>
          <motion.li variants={item}>
            <Link href="/blog" passHref>
              <MobileLinkWrapper>Blog</MobileLinkWrapper>
            </Link>
          </motion.li>
        </MobileNavList>
      </nav>
    </DialogWrapper>
  );
}

export default MobileDialog;
