import Link from 'next/link';
import Layout from '@components/layout';

function Blog({ posts }) {
  console.log(posts);
  return (
    <Layout title="Blog">
      <h1>Blog</h1>
      <div>
        {posts.length ? (
          posts.map(post => (
            <div key={post._id}>
              <Link href={`/blog/${post.slug.current}`}>
                <a>{post.title}</a>
              </Link>
            </div>
          ))
        ) : (
          <span>No Posts Yet!</span>
        )}
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  let query = encodeURIComponent(`*[ _type == "post" ]`);
  let url = `https://vlmt4x3o.api.sanity.io/v1/data/query/production?query=${query}`;
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
