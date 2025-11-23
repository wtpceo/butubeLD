import Hero from "@/components/sections/Hero";
import PainPoints from "@/components/sections/PainPoints";
import TrustStrategy from "@/components/sections/TrustStrategy";
import Solutions from "@/components/sections/Solutions";
import CoreValue from "@/components/sections/CoreValue";
import Team from "@/components/sections/Team";
import ContentStrategy from "@/components/sections/ContentStrategy";
import LeadMagnet from "@/components/sections/LeadMagnet";
import CostObjection from "@/components/sections/CostObjection";
import ServiceComposition from "@/components/sections/ServiceComposition";
import Scarcity from "@/components/sections/Scarcity";
import FinalCTA from "@/components/sections/FinalCTA";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";
import FloatingKakaoButton from "@/components/FloatingKakaoButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <PainPoints />
      <TrustStrategy />
      <Solutions />
      <CoreValue />
      <Team />
      <ContentStrategy />
      <LeadMagnet />
      <CostObjection />
      <ServiceComposition />
      <Scarcity />
      <FinalCTA />
      <FAQ />
      <Footer />
      <FloatingKakaoButton />
    </main>
  );
}
