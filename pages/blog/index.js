import Link from 'next/link';
import styled from 'styled-components';
import Layout from '@components/layout';

const PostList = styled.ul`
  list-style: none;
  padding-left: 0;

  > li {
    font-size: var(--font-md);
    font-weight: var(--font-semibold);
    color: var(--color-gray-primary);
    margin-bottom: var(--space-md);
  }

  > li span {
    font-size: var(--font-base);
    color: var(--color-fg);
  }
`;

function Blog({ posts }) {
  return (
    <Layout title="Blog">
      <section>
        <h1>Blog</h1>
        <div>
          <PostList>
            {posts.length ? (
              posts.map(post => (
                <li key={post._id}>
                  <span>{post.publishedAt} - </span>
                  <Link href={`/blog/${post.slug.current}`}>
                    <a>{post.title}</a>
                  </Link>
                </li>
              ))
            ) : (
              <span>No Posts Yet!</span>
            )}
          </PostList>
        </div>
      </section>
    </Layout>
  );
}

export async function getServerSideProps() {
  let query = encodeURIComponent(
    `*[ _type == "post" ] | order(publishedAt desc)`
  );
  let url = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v1/data/query/production?query=${query}`;
  let result = await fetch(url).then(res => res.json());

  if (!result.result || !result.result.length) {
    return {
      props: {
        posts: [],
      },
    };
  } else {
    return {
      props: {
        posts: result.result,
      },
    };
  }
}

export default Blog;
