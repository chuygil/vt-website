import { useRouter } from 'next/router';
import styled, { css } from 'styled-components';
import { useDialog } from '@context/mobile-dialog-toggle';

const CustomLinkWrapper = styled.a`
  ${({ isMobileLink }) => css`
    width: 100%;
    display: inline-flex;
    align-items: center;
    padding: var(--space-sm) 0;

    > span {
      margin-left: ${isMobileLink ? 'var(--space-sm)' : '0px'};
    }
  `}
`;

function CustomLink({ children, href, isMobileLink = false }) {
  let router = useRouter();
  let dialog = useDialog();

  return (
    <CustomLinkWrapper
      href="#"
      onClick={e => {
        e.preventDefault();
        dialog.close();
        router.push(href);
      }}
      isMobileLink={isMobileLink}
    >
      {children}
    </CustomLinkWrapper>
  );
}

export default CustomLink;
