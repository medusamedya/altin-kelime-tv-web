import { AnimatedStats } from "@/components/animated-stats";
import { AudienceExperience } from "@/components/audience-experience";
import { BroadcastSchedule } from "@/components/broadcast-schedule";
import { Ecosystem } from "@/components/ecosystem";
import { FinalCTA } from "@/components/final-cta";
import { FormatBible } from "@/components/format-bible";
import { GameSystem } from "@/components/game-system";
import { Hero } from "@/components/hero"
import { ProductionSection } from "@/components/production-section";
import { ProgressionSystem } from "@/components/progression-system";
import { RewardSystem } from "@/components/reward-system";
import { SponsorshipCTA } from "@/components/sponsorship-cta";
import { StrategyCards } from "@/components/strategy-cards";
import { StudioGallery } from "@/components/studio-gallery";
import { TeamSection } from "@/components/team-section";
import { WhyAltinKelime } from "@/components/why-altin-kelime";


import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Altın Kelime | Türkiye'nin Strateji & Kelime Yarışması",
  description: "7 harf, 1 dakika, tek kazanan. Kelime bilgisi ve stratejinin buluştuğu TV yarışması. İlk sezon seçmeleri başladı — hemen başvur.",
}

export default function Home() {
  return (
      <main className="min-h-screen bg-background">
          <Hero />
          <AnimatedStats /> 
          <Ecosystem />
          <WhyAltinKelime />
          <GameSystem />
          <ProgressionSystem />
          <RewardSystem />
          <AudienceExperience />
          <StrategyCards />
          <ProductionSection />
          <StudioGallery />
          
          <BroadcastSchedule />
          <TeamSection />
          <SponsorshipCTA />
          <FormatBible />
          <FinalCTA />
      </main>
  );
}