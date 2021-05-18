function PodcastVideoCard({ videoId }) {
  return (
    <iframe
      width="100%"
      height="300px"
      src={`https://www.youtube.com/embed/${videoId}?start=1`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
}

export default PodcastVideoCard;
