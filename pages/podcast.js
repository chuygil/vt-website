import styled from 'styled-components';
import Layout from '@components/layout';
import PodcastVideoCard from '@components/podcast-video-card';
import { PrimaryButton } from '@components/custom-buttons';

const ListWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-template-rows: auto;
  gap: var(--space-md);
  place-items: center;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const LinkListWrapper = styled.ul`
  list-style: none;
  padding-left: 0;

  > li {
    margin-bottom: var(--space-md);
  }
`;

function Podcast({ result }) {
  return (
    <Layout title="Podcast">
      <section>
        <h1>Podcast</h1>
        <div>
          <LinkListWrapper>
            <li>
              <PrimaryButton href="https://open.spotify.com/show/738ARhlH2fyOGKT26X9ukl?si=2ZjWvaYlRxCkinyuH6UYMw">
                Spotify
              </PrimaryButton>
            </li>
            <li>
              <PrimaryButton href="https://podcasts.apple.com/us/podcast/no-era-penal/id1559433275">
                Apple Podcasts
              </PrimaryButton>
            </li>
            <li>
              <PrimaryButton href="https://www.youtube.com/channel/UCueiUwSd3Y62Gbn5XpR-ikA">
                Youtube
              </PrimaryButton>
            </li>
          </LinkListWrapper>
        </div>
        <ListWrapper>
          {result.items
            ? result.items
                .filter(item => item.id.kind !== 'youtube#channel')
                .map(item => (
                  <PodcastVideoCard
                    key={item.id.videoId}
                    videoTitle={item.snippet.title}
                    videoId={item.id.videoId}
                  />
                ))
            : null}
        </ListWrapper>
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
