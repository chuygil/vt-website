import { useRef } from 'react';
import styled, { css } from 'styled-components';
import { useLink } from '@react-aria/link';
import { useFocusRing } from '@react-aria/focus';

const PrimaryButtonWrapper = styled.a`
  ${({ isFocusVisible }) => css`
    width: 100%;
    display: inline-flex;
    justify-content: center;
    background-color: #000000;
    color: #ffffff;
    padding: var(--space-md) var(--space-lg);
    border-radius: var(--radius-md);
    text-align: center;
    outline: none;
    box-shadow: ${isFocusVisible ? '0 0 0 3px var(--color-outline)' : 'none'};
  `}
`;

export function PrimaryButton(props) {
  let { children, href } = props;
  let ref = useRef();
  let { linkProps } = useLink(props, ref);
  let { focusProps, isFocusVisible } = useFocusRing();

  return (
    <PrimaryButtonWrapper
      {...linkProps}
      {...focusProps}
      ref={ref}
      isFocusVisible={isFocusVisible}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </PrimaryButtonWrapper>
  );
}
