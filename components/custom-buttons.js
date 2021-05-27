import styled from 'styled-components';

const PrimaryButtonWrapper = styled.a`
  width: 100%;
  display: inline-flex;
  justify-content: center;
  background-color: #000000;
  color: #ffffff;
  padding: var(--space-md) var(--space-lg);
  border-radius: var(--radius-md);
  white-space: nowrap;
  text-align: center;
`;

export function PrimaryButton({ children, href }) {
  return (
    <PrimaryButtonWrapper href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </PrimaryButtonWrapper>
  );
}
