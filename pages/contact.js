import styled from 'styled-components';
import Layout from '@components/layout';
import { PrimaryButton } from '@components/custom-buttons';

const LinkListWrapper = styled.ul`
  list-style: none;
  padding-left: 0;

  > li {
    margin-bottom: var(--space-md);
  }
`;

function Contact() {
  return (
    <Layout title="Contact">
      <section>
        <h1>Contact</h1>
        <LinkListWrapper>
          <li>
            <PrimaryButton href="https://twitter.com/NoEraPenalMedia">
              No Era Penal Twitter
            </PrimaryButton>
          </li>
          <li>
            <PrimaryButton href="https://www.instagram.com/noerapenal1219/">
              No Era Penal Instagram
            </PrimaryButton>
          </li>
          <li>
            <PrimaryButton href="https://twitter.com/vtirado12">
              Vicente Twitter
            </PrimaryButton>
          </li>
          <li>
            <PrimaryButton href="https://twitter.com/carrasmarcel1">
              Marcel Twitter
            </PrimaryButton>
          </li>
          <li>
            <PrimaryButton href="mailto:noerapenalmedia@gmail.com">
              Email
            </PrimaryButton>
          </li>
        </LinkListWrapper>
      </section>
    </Layout>
  );
}

export default Contact;
