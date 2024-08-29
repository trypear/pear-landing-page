import React from "react";

interface YoutubeEmbedProps {
  embedId: string;
}

const YoutubeEmbed: React.FC<YoutubeEmbedProps> = ({ embedId }) => (
  <div className="relative h-0 overflow-hidden pb-[56.25%]">
    <iframe
      className="absolute left-0 top-0 h-full w-full rounded-lg"
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}?rel=0`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

export default YoutubeEmbed;
