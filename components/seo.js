import Head from 'next/head';

function SEO({ title }) {
  return (
    <Head>
      <title>{title} | No Era Penal</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default SEO;
