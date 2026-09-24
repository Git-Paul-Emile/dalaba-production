import { useState } from "react";
import { ContactModal } from "./components/ContactModal";
import { HeroSection } from "./components/HeroSection";
import { BaobabsSection, ClientsSection } from "./components/ClientsSection";
import { SiteFooter } from "./components/SiteFooter";

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="min-h-full w-full bg-white" style={{ fontFamily: "Urbanist, sans-serif" }}>
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
      <HeroSection onContact={() => setContactOpen(true)} />
      <BaobabsSection />
      <ClientsSection />
      <SiteFooter />
    </div>
  );
}
