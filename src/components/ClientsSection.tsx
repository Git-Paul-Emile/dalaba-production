import { useEffect, useRef, useState } from "react";
import { videoInterview, clientLogos } from "./assets";

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
        Interview du Directeur national de la DNSACU après les Jeux universitaires africains du Caire 2026
      </h2>
      <video
        ref={videoRef}
        title="Interview du Directeur national DNSACU après les Jeux universitaires africains du Caire 2026"
        className="h-[340px] w-full cursor-pointer object-cover"
        onClick={togglePlay}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        muted
        loop
        playsInline
        preload="none"
      >
        <source src={videoInterview} type="video/mp4" />
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

      {/* Flex + wrap so the incomplete last row stays centered */}
      <div className="mx-auto mt-16 flex max-w-[1100px] flex-wrap items-center justify-center gap-y-10 sm:gap-y-12">
        {clientLogos.map((logo) => (
          <div key={logo.alt} className="w-1/2 px-2 sm:w-1/3 sm:px-4 md:w-1/6">
            <img
              alt={logo.alt}
              src={logo.src}
              loading="lazy"
              decoding="async"
              className="h-12 w-full object-contain sm:h-16"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
