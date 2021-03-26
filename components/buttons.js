import { useRef } from 'react';
import styled, { css } from 'styled-components';
import { useButton } from '@react-aria/button';
import { useFocusRing } from '@react-aria/focus';

const BaseButton = styled.button`
  ${({ isFocusVisible }) => css`
    display: inline-flex;
    padding: var(--space-sm);
    outline: none;
    box-shadow: ${isFocusVisible ? '0 0 0 3px var(--color-outline)' : 'none'};
    border-radius: var(--radius-sm);
  `}
`;

const IconButton = styled(BaseButton)`
  background: transparent;
  color: var(--color-fg);
  border: 1px solid transparent;
  cursor: pointer;

  &:hover {
    color: var(--color-gray-primary);
  }
`;

function Button(props) {
  let { children, onClick, type = 'button', isIconButton = false } = props;

  let ref = useRef();
  let { buttonProps } = useButton(props, ref);
  let { isFocusVisible, focusProps } = useFocusRing();

  if (isIconButton) {
    return (
      <IconButton
        type={type}
        onClick={onClick}
        {...buttonProps}
        {...focusProps}
        isFocusVisible={isFocusVisible}
        ref={ref}
      >
        {children}
      </IconButton>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      {...buttonProps}
      {...focusProps}
      isFocusVisible={isFocusVisible}
      ref={ref}
    >
      {children}
    </button>
  );
}

export default Button;
