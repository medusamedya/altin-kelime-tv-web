import { AnimatedStats } from "@/components/animated-stats";
import { Ecosystem } from "@/components/ecosystem";
import { GameSystem } from "@/components/game-system";
import { Hero } from "@/components/hero"
import { SeasonStructure } from "@/components/season-structure";
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
          <SeasonStructure />
      </main>
  );
}