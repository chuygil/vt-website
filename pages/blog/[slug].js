import BlockContent from '@sanity/block-content-to-react';
import styled from 'styled-components';
import Layout from '@components/layout';
import { Calendar } from '@components/icons';

const PostWrapper = styled.article`
  > h1 {
    margin-bottom: var(--space-sm);
  }

  > p {
    display: flex;
    align-items: center;
  }

  > p span {
    margin-left: var(--space-sm);
  }
`;

const Divider = styled.div`
  width: 100%;
  padding: var(--space-md) 0;
  position: relative;

  &::after {
    position: absolute;
    content: '';
    background-color: var(--color-fg);
    width: 10%;
    height: 1px;
    top: 0;
    left: 0;
  }
`;

function Post({ title, body, publishedAt, author }) {
  return (
    <Layout title={title}>
      <PostWrapper>
        <h1>{title}</h1>
        <p>
          <Calendar />
          <span>{publishedAt}</span>
          <span>{author}</span>
        </p>
        <Divider />
        <div>
          <BlockContent blocks={body} />
        </div>
      </PostWrapper>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  let pageSlug = context.query.slug;

  if (!pageSlug) {
    return {
      notFound: true,
    };
  }

  let query = encodeURIComponent(
    `*[ _type == "post" && slug.current == "${pageSlug}" ]`
  );
  let url = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v1/data/query/production?query=${query}`;

  let result = await fetch(url).then(res => res.json());
  let post = result.result[0];

  if (!post) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: {
        title: post.title,
        body: post.body,
        publishedAt: post.publishedAt,
        author: post.author,
      },
    };
  }
}

export default Post;
