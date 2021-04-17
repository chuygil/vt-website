import { Fragment } from 'react';
import styled from 'styled-components';
import Layout from '@components/layout';
import PodcastVideoCard from '@components/podcast-video-card';

const VideoListWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(480px, 1fr)
  gap: var(--space-md);
`;

function Podcast({ result }) {
  return (
    <Layout title="Podcast">
      <section>
        <h1>Podcast</h1>
        <VideoListWrapper>
          {result.items
            ? result.items
                .filter(item => item.id.kind !== 'youtube#channel')
                .map(item => (
                  <Fragment key={item.id.videoId}>
                    <PodcastVideoCard
                      videoTitle={item.snippet.title}
                      videoId={item.id.videoId}
                    />
                  </Fragment>
                ))
            : null}
        </VideoListWrapper>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  let result = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCueiUwSd3Y62Gbn5XpR-ikA&key=${process.env.NEXT_PUBLIC_YOUTUBE_API}`
  ).then(res => res.json());

  if (!result) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: {
        result,
      },
      revalidate: 1800,
    };
  }
}

export default Podcast;
