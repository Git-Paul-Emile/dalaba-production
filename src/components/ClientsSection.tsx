import { useRef, useState } from "react";
import { imgBaobabs, videoLafarge, clientLogosRow1, clientLogosRow2 } from "./assets";

export function BaobabsSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !muted;
    if (video.paused) void video.play();
    setMuted(!muted);
  };

  return (
    <section className="relative h-[340px] w-full overflow-hidden bg-black">
      <video
        ref={videoRef}
        aria-label="LAFARGE - Vidéo officielle"
        className="h-[340px] w-full object-cover"
        src={videoLafarge}
        poster={imgBaobabs}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      <button
        type="button"
        onClick={toggleSound}
        aria-label={muted ? "Activer le son" : "Couper le son"}
        className="absolute right-4 bottom-4 rounded-full bg-black/50 px-4 py-2 text-sm text-white backdrop-blur-sm transition hover:bg-black/70"
      >
        {muted ? "🔇 Activer le son" : "🔊 Couper le son"}
      </button>
    </section>
  );
}

export function ClientsSection() {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-6 py-20 sm:px-10 lg:px-[115px]">
      <h2 className="text-center text-[28px] leading-tight text-[#161616]" style={{ fontWeight: 500 }}>
        Ils ont déjà fait preuve de confiance en nous.
      </h2>

      <div className="mt-16 flex flex-col gap-14">
        {[clientLogosRow1, clientLogosRow2].map((row, i) => (
          <div key={i} className="flex flex-nowrap items-center justify-center gap-6 sm:gap-10 lg:gap-16">
            {row.map((logo) => (
              <img
                key={logo.alt}
                alt={logo.alt}
                src={logo.src}
                style={{ maxHeight: logo.h }}
                className="h-auto w-auto max-w-[14%] shrink-0 object-contain sm:max-w-[120px]"
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
