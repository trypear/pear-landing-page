import { videoData } from "./data";

export default function MobileFeatures() {
  return (
    <div className="space-y-5">
      <div className="mb-6 text-2xl font-semibold">Demos</div>
      {videoData.map((video) => (
        <div
          key={video.id}
          className="space-y-4 rounded-lg border border-gray-200 p-4 dark:border-gray-50"
        >
          <h3 className="text-lg font-medium">{video.title}</h3>
          <p className="text-sm text-black/60 dark:text-gray-500">
            {video.description}
          </p>
          <div className="relative aspect-[16/12] w-full overflow-hidden rounded-lg">
            <video
              className="h-full w-full object-cover"
              muted
              playsInline
              autoPlay
              loop
              controlsList="nodownload nofullscreen noremoteplayback"
              disablePictureInPicture
            >
              <source src={video.videoUrl} type="video/mp4" />
            </video>
          </div>
        </div>
      ))}
    </div>
  );
}
