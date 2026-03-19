import { useRef, useEffect } from "react";

const VideoScrollBanner = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const handleScroll = () => {
      const scrolled = -container.getBoundingClientRect().top;
      const scrollable = container.offsetHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(1, scrolled / scrollable));
      if (video.duration) {
        video.currentTime = progress * video.duration;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
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
