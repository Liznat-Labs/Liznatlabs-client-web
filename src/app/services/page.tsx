import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { BookCallModal } from "@/components/ui/BookCallModal";
import { ServicesDetail } from "@/components/sections/ServicesDetail";

export const metadata: Metadata = {
  title: "Services — Liznat Labs",
  description:
    "AI Applications, AI & IT Solutions and IT Staffing from Liznat Labs, Bengaluru — AI agents, RAG, voice AI, cloud, cybersecurity and dedicated engineering teams.",
};

export default function ServicesPage() {
  return (
    <>
      <AuroraBackground />
      <BookCallModal />
      <Nav />
      <main id="main-content">
        <ServicesDetail />
      </main>
      <Footer />
    </>
  );
}
