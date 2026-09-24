import { DalabaLogo } from "./DalabaLogo";
import { imgArrow, imgInstagram, services } from "./assets";

function OutlineButton({ label, onClick }: { label: string; onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-[10px] rounded-[56px] border border-[#6d6d6d] px-[20px] py-[16px] text-[17px] leading-[30px] text-[#6d6d6d] transition-colors duration-200 hover:border-white hover:text-white"
      style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
    >
      <span>{label}</span>
      <img alt="" className="size-[10.92px]" src={imgArrow} />
    </button>
  );
}

export function HeroSection({ onContact }: { onContact: () => void }) {
  return (
    <section className="relative overflow-hidden bg-[#161616]">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-[75px] pb-16 pt-[52px]">
        <DalabaLogo className="w-[200px] sm:w-[260px] lg:w-[320px]" />

        <div className="mt-[34px] flex flex-col gap-16 lg:mt-[66px] lg:flex-row lg:justify-between lg:gap-10">
          {/* Left column */}
          <div className="flex max-w-[672px] flex-col gap-[85px]">
            <div className="flex flex-col gap-[24px] text-[#6d6d6d]">
              <h1
                className="text-[30px] leading-[34px] sm:text-[33px] sm:leading-[36px] lg:text-[35px] lg:leading-[38px]"
                style={{ fontWeight: 500, letterSpacing: "-1.7932px" }}
              >
                AGENCE CRÉATIVE <br />
                ET DE PRODUCTION AUDIOVISUELLE
              </h1>
              <p className="max-w-[588px] text-[14px] leading-normal" style={{ fontWeight: 500 }}>
                Nous sommes une agence créative, où stratégie, culture et créativité se rencontrent pour
                faire émerger des marques fortes. De la stratégie de communication à la création de contenus,
                du branding à la publicité, de la vidéo au digital, nous concevons des campagnes et des
                expériences qui parlent aux réalités locales, tout en portant les ambitions de nos clients à
                l'échelle régionale.
              </p>
            </div>
            <div className="flex flex-wrap gap-[20px]">
              <OutlineButton label="Travailler avec nous" onClick={onContact} />
              <OutlineButton label="Showréels de projet" />
            </div>
          </div>

          {/* Right column - services */}
          <div
            className="flex flex-col gap-x-[26px] gap-y-[16px] text-[#6d6d6d]"
            style={{ fontWeight: 500, letterSpacing: "-1px" }}
          >
            {services.map((s) => (
              <p key={s} className="text-[24px] leading-[30.214px] whitespace-nowrap">
                {s}
              </p>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-24 h-px w-full bg-[#333333]" />

        {/* KADOW + contacts */}
        <div className="mt-10 flex flex-col gap-16 lg:flex-row lg:items-end lg:justify-between">
          <p
            className="text-[#6d6d6d] leading-none text-[20vw] lg:text-[150px]"
            style={{ fontWeight: 700, letterSpacing: "-0.11em" }}
          >
            KADOW
          </p>

          <div className="flex shrink-0 flex-col gap-[28px] text-[#6d6d6d]">
            <p className="text-[18px] uppercase leading-[29.2px]" style={{ fontWeight: 800 }}>
              Nos contacts
            </p>
            <div className="flex flex-col gap-x-[22px] gap-y-[14px] uppercase" style={{ fontWeight: 700 }}>
              <p className="text-[14px]">+224 625 31 35 31</p>
              <p className="text-[14px] normal-case">contacts@dalabaprod.com</p>
              <p className="text-[14px]">Conakry- République de Guinée</p>
              <div className="flex gap-[32px]">
                <a
                  href="https://www.instagram.com/dalabaproductions?igsi=MXFvNXoyMnZqem1obw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="opacity-90 transition-opacity hover:opacity-100"
                >
                  <img alt="Instagram" className="size-[26.852px]" src={imgInstagram} />
                </a>
                <a
                  href="https://www.facebook.com/dalabaprod"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-white opacity-90 transition-opacity hover:opacity-100"
                >
                  <svg className="size-[26.852px]" viewBox="0 0 24 24" fill="rgb(140, 137, 137)" aria-hidden="true">
                    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.49-3.9 3.78-3.9 1.09 0 2.24.19 2.24.19v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.9h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@dalabaproductions"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="text-white opacity-90 transition-opacity hover:opacity-100"
                >
                  <svg className="size-[26.852px]" viewBox="0 0 24 24" fill="rgb(140, 137, 137)" aria-hidden="true">
                    <path d="M16.5 3c.3 2.1 1.5 3.4 3.5 3.6v2.4c-1.2.1-2.3-.3-3.5-1v6.5c0 4-3 6.4-6.6 5.4-2.9-.8-3.9-4.2-2.4-6.7.9-1.5 2.6-2.4 4.3-2.3v2.5c-.4.1-.8.2-1.2.4-1 .6-1.3 1.7-.9 2.6.4.9 1.4 1.3 2.3 1 .8-.3 1.3-1 1.3-2V3h2.7Z" />
                  </svg>
                </a>
                <a href="#" aria-label="Vimeo" className="text-white opacity-90 transition-opacity hover:opacity-100">
                  <svg className="size-[26.852px]" viewBox="0 0 24 24" fill="rgb(140, 137, 137)" aria-hidden="true">
                    <path d="M22 7.4c-.1 2.1-1.6 5-4.4 8.6-2.9 3.8-5.4 5.7-7.4 5.7-1.3 0-2.3-1.2-3.2-3.5l-1.7-6.4c-.6-2.3-1.3-3.5-2-3.5-.2 0-.7.3-1.6 1L.6 8.4c1-.9 2-1.9 3-2.8C5 4.3 6 3.6 6.7 3.5c1.6-.2 2.6.9 3 3.3.4 2.6.7 4.2.9 4.9.5 2.2 1 3.3 1.6 3.3.5 0 1.1-.7 2-2.2.9-1.5 1.4-2.6 1.5-3.4.1-1.2-.4-1.8-1.5-1.8-.5 0-1 .1-1.6.4 1-3.3 3-4.9 5.8-4.8 2.1.1 3.1 1.5 3 4.2Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
