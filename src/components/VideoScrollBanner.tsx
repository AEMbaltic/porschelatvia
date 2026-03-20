import { useRef, useEffect } from "react";

const FRAME_COUNT = 120;

const frames = Array.from({ length: FRAME_COUNT }, (_, i) =>
  `/frames/frame_${String(i + 1).padStart(4, "0")}.jpg`
);

const VideoScrollBanner = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(-1);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    // Size canvas to fill screen at native pixel density (fixes blur on HiDPI)
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.round(window.innerWidth * dpr);
      canvas.height = Math.round(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      drawFrame(currentFrameRef.current < 0 ? 0 : currentFrameRef.current);
    };

    const drawFrame = (index: number) => {
      const img = imagesRef.current[index];
      if (!img?.complete || !img.naturalWidth) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      // object-fit: cover math
      const scale = Math.max(
        canvas.width / img.naturalWidth,
        canvas.height / img.naturalHeight
      );
      const x = (canvas.width - img.naturalWidth * scale) / 2;
      const y = (canvas.height - img.naturalHeight * scale) / 2;
      ctx.drawImage(img, x, y, img.naturalWidth * scale, img.naturalHeight * scale);
    };

    const handleScroll = () => {
      const scrolled = -container.getBoundingClientRect().top;
      const scrollable = container.offsetHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(1, scrolled / scrollable));
      const index = Math.min(
        FRAME_COUNT - 1,
        Math.floor(progress * FRAME_COUNT)
      );
      if (index !== currentFrameRef.current) {
        currentFrameRef.current = index;
        drawFrame(index);
      }
    };

    // Preload all frames
    const images = frames.map((src, i) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        if (i === 0) {
          resize();
        }
      };
      return img;
    });
    imagesRef.current = images;

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} style={{ height: "300vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

export default VideoScrollBanner;
