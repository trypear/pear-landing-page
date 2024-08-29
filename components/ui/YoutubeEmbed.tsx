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
      loading="lazy"
      src={`https://www.youtube.com/embed/${embedId}`}
      allowFullScreen
      title="PearAI demo"
    />
  </div>
);

export default YoutubeEmbed;
