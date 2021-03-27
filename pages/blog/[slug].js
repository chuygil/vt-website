import BlockContent from '@sanity/block-content-to-react';
import Layout from '@components/layout';

function Post({ title, body, publishedAt }) {
  return (
    <Layout title={title}>
      <article>
        <h1>{title}</h1>
        <span>{publishedAt}</span>
        <div>
          <BlockContent blocks={body} />
        </div>
      </article>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  let pageSlug = context.query.slug;
  console.log(pageSlug);

  if (!pageSlug) {
    return {
      notFound: true,
    };
  }

  let query = encodeURIComponent(
    `*[ _type == "post" && slug.current == "${pageSlug}" ]`
  );
  let url = `https://vlmt4x3o.api.sanity.io/v1/data/query/production?query=${query}`;

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
      },
    };
  }
}

export default Post;
