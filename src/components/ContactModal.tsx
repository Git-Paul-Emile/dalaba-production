import { useEffect, useState } from "react";
import { services } from "./assets";

export function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  const fieldLabel = "block text-[13px] uppercase tracking-wide text-[#9a9a9a]";
  const fieldInput =
    "mt-2 w-full border-b border-[#4a4a4a] bg-transparent pb-2 text-[16px] text-white outline-none transition-colors focus:border-white placeholder:text-[#5a5a5a]";

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Formulaire de contact"
    >
      <div
        className="relative my-auto w-full max-w-[1000px] bg-[#161616] px-6 py-12 shadow-2xl sm:px-14 sm:py-16"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fermer"
          className="absolute right-5 top-5 flex size-10 items-center justify-center rounded-full text-[#9a9a9a] transition-colors hover:bg-white/10 hover:text-white"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        </button>

        <h2
          className="text-[15vw] leading-[0.9] text-white sm:text-[80px] lg:text-[96px]"
          style={{ fontWeight: 700, letterSpacing: "-0.03em" }}
        >
          Contactez-nous
        </h2>

        <div className="mt-12 flex flex-col gap-12 lg:flex-row lg:gap-16">
          <div className="flex shrink-0 flex-col gap-[18px] text-[14px] uppercase text-[#9a9a9a] lg:w-[220px]" style={{ fontWeight: 700 }}>
            <p className="normal-case">contacts@dalabaprod.com</p>
            <p>+224 625 31 35 31</p>
            <p>Conakry- République de Guinée</p>
          </div>

          {sent ? (
            <div className="flex flex-1 items-center">
              <p className="text-[18px] text-white" style={{ fontWeight: 500 }}>
                Merci ! Votre message a bien été envoyé. Nous vous répondrons rapidement.
              </p>
            </div>
          ) : (
            <form
              className="flex flex-1 flex-col gap-8"
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const firstName = (data.get("firstName") as string) ?? "";
                const lastName = (data.get("lastName") as string) ?? "";
                const email = (data.get("email") as string) ?? "";
                const subject = (data.get("subject") as string) ?? "";
                const service = (data.get("service") as string) ?? "";
                const message = (data.get("message") as string) ?? "";
                const body = [
                  `Nom : ${firstName} ${lastName}`,
                  `E-mail : ${email}`,
                  service ? `Service : ${service}` : null,
                  "",
                  message,
                ]
                  .filter((line) => line !== null)
                  .join("\n");
                const href = `mailto:contact@dalabaprods.com?subject=${encodeURIComponent(
                  subject,
                )}&body=${encodeURIComponent(body)}`;
                window.location.href = href;
                setSent(true);
              }}
            >
              <div>
                <span className="block text-[15px] text-white" style={{ fontWeight: 700 }}>
                  Nom (requis)
                </span>
                <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className={fieldLabel} htmlFor="firstName">Prénom</label>
                    <input id="firstName" name="firstName" required className={fieldInput} />
                  </div>
                  <div>
                    <label className={fieldLabel} htmlFor="lastName">Nom</label>
                    <input id="lastName" name="lastName" required className={fieldInput} />
                  </div>
                </div>
              </div>
              <div>
                <label className={fieldLabel} htmlFor="email">E-mail (requis)</label>
                <input id="email" name="email" type="email" required className={fieldInput} />
              </div>
              <div>
                <label className={fieldLabel} htmlFor="subject">Objet (requis)</label>
                <input id="subject" name="subject" required className={fieldInput} />
              </div>
              <div>
                <label className={fieldLabel} htmlFor="service">Service</label>
                <select
                  id="service"
                  name="service"
                  defaultValue=""
                  className={`${fieldInput} cursor-pointer appearance-none [&>option]:bg-[#161616] [&>option]:text-white`}
                >
                  <option value="" disabled>
                    Choisir un service
                  </option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className={fieldLabel} htmlFor="message">Message (requis)</label>
                <textarea id="message" name="message" rows={3} required className={`${fieldInput} resize-none`} />
              </div>
              <button
                type="submit"
                className="mt-2 w-fit bg-white px-10 py-3 text-[13px] uppercase tracking-wide text-[#161616] transition-colors hover:bg-[#e5e5e5]"
                style={{ fontWeight: 700 }}
              >
                Envoyer
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
