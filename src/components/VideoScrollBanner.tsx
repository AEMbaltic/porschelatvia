import { useRef, useEffect } from "react";

const VideoScrollBanner = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const updateTime = () => {
      if (!video.duration) return;
      const scrolled = -container.getBoundingClientRect().top;
      const scrollable = container.offsetHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(1, scrolled / scrollable));
      video.currentTime = progress * video.duration;
    };

    const onLoadedMetadata = () => {
      // Play then immediately pause to unlock seeking in all browsers
      const p = video.play();
      if (p !== undefined) {
        p.then(() => {
          video.pause();
          video.currentTime = 0;
          updateTime();
        }).catch(() => {
          video.currentTime = 0;
        });
      }
    };

    video.addEventListener("loadedmetadata", onLoadedMetadata);
    window.addEventListener("scroll", updateTime, { passive: true });

    return () => {
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      window.removeEventListener("scroll", updateTime);
    };
  }, []);

  return (
    <div ref={containerRef} style={{ height: "300vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src="/banner.mp4"
          muted
          playsInline
          preload="auto"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

export default VideoScrollBanner;
