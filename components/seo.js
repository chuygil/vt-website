import Head from 'next/head';

function SEO({ title }) {
  return (
    <Head>
      <title>{title} | No Era Penal</title>
      <meta
        name="description"
        content="A pair of handsome, smart, funny looking guys dedicated to Futbol and Futbol only. We have just started a podcast, which can be found on Spotify, and Apple Podcasts, along with a blog where we will be writing about everything Futbol."
      />
      <meta name="twitter:card" content="summary" key="twcard" />
      <meta name="twitter:title" content={title} key="twtitle" />
      <meta
        name="twitter:description"
        content="A pair of handsome, smart, funny looking guys dedicated to Futbol and Futbol only. We have just started a podcast, which can be found on Spotify, and Apple Podcasts, along with a blog where we will be writing about everything Futbol."
        key="twdesc"
      />
      <meta name="twitter:creator" content="@noerapenal1219" key="twhandle" />
      <meta
        name="twitter:image"
        content="https://www.noera-penal.com/images/logo.jpeg"
        key="twimage"
      />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta
        property="og:description"
        content="A pair of handsome, smart, funny looking guys dedicated to Futbol and Futbol only. We have just started a podcast, which can be found on Spotify, and Apple Podcasts, alon    g with a blog where we will be writing about everything Futbol."
        key="ogdesc"
      />
      <meta
        property="og:url"
        content="https://www.noera-penal.com/"
        key="ogurl"
      />
      <meta
        property="og:image"
        content="https://www.noera-penal.com/images/logo.jpeg"
        key="ogimage"
      />
      <meta property="og:site_name" content="No Era Penal" key="ogsitename" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default SEO;
