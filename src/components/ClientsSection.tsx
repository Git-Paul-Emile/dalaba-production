import { useEffect, useRef, useState } from "react";
import { videoLafargeWebm, videoLafargeMp4, clientLogosRow1, clientLogosRow2, clientLogosRow3 } from "./assets";

export function BaobabsSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && video.paused) void video.play();
    });
    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !muted;
    setMuted(!muted);
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) void video.play();
    else video.pause();
  };

  const buttonClass =
    "rounded-full bg-black/50 px-4 py-2 text-sm text-white backdrop-blur-sm transition hover:bg-black/70";

  return (
    <section
      id="realisations"
      aria-labelledby="realisations-heading"
      className="relative h-[340px] w-full overflow-hidden bg-black"
    >
      <h2 id="realisations-heading" className="sr-only">
        Réalisation audiovisuelle : vidéo officielle de Lafarge
      </h2>
      <video
        ref={videoRef}
        title="LAFARGE - Vidéo officielle"
        className="h-[340px] w-full cursor-pointer object-cover"
        onClick={togglePlay}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        muted
        loop
        playsInline
        preload="none"
      >
        <source src={videoLafargeWebm} type="video/webm" />
        <source src={videoLafargeMp4} type="video/mp4" />
      </video>
      <div className="absolute right-4 bottom-4 flex gap-2">
        <button type="button" onClick={togglePlay} className={buttonClass}>
          {playing ? "⏸ Pause" : "▶ Lecture"}
        </button>
        <button type="button" onClick={toggleSound} className={buttonClass}>
          {muted ? "🔇 Activer le son" : "🔊 Couper le son"}
        </button>
      </div>
    </section>
  );
}

export function ClientsSection() {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-6 py-20 sm:px-10 lg:px-[115px]">
      <h2 className="text-center text-[28px] leading-tight text-[#161616]" style={{ fontWeight: 500 }}>
        Ils nous font confiance.
      </h2>

      <div className="mx-auto mt-16 grid max-w-[900px] grid-cols-5 items-center gap-x-4 gap-y-10 sm:gap-x-10 sm:gap-y-14">
        {[...clientLogosRow1, ...clientLogosRow2, ...clientLogosRow3].map((logo) => (
          <img
            key={logo.alt}
            alt={logo.alt}
            src={logo.src}
            loading="lazy"
            decoding="async"
            className="h-12 w-full object-contain sm:h-20"
          />
        ))}
      </div>
    </section>
  );
}
