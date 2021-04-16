import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 480px;
  height: 360px;
`;

function PodcastVideoCard({ videoId }) {
  return (
    <Wrapper>
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}?start=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Wrapper>
  );
}

export default PodcastVideoCard;
