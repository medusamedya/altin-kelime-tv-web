"use client"

import Link from "next/link"
import Image from "next/image"
import { 
  MonitorPlay, Globe2, Brain, Zap, Target, Users, LayoutTemplate, 
  Settings, LineChart, ChevronRight, FileText, Smartphone, Tv,
  ChevronDown, Star, Download, CalendarHeart
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { FinalCTA } from "@/components/final-cta"
import { Reveal } from "@/components/reveal" 
import { Overview } from "@/components/overview"
import { FormatSummary } from "@/components/format-summary"
import { HowToPlayTimeline } from "@/components/how-to-play-timeline"
import { CardSystem } from "@/components/card-system"
import { StrategyCards } from "@/components/strategy-cards"
import { AudienceExperience } from "@/components/audience-experience"
import { RewardSystem } from "@/components/reward-system"
import { SeasonHierarchy } from "@/components/season-hierarchy"
import { FormatBible } from "@/components/format-bible"
import { UseCases } from "@/components/use-cases"

export default function FormatPage() {
  return (
    <main className="flex flex-col min-h-screen pt-20 bg-background overflow-hidden">
      
      {/* 1️⃣ SİNEMATİK HERO (B2B / YATIRIMCI ODAKLI) */}
      <section id="tanitim" className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-background">
        
        {/* Arka Plan Görseli ve Gradyanlar */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image 
            src="/images/studio.jpg" 
            alt="Altın Kelime Stüdyo Formatı" 
            fill 
            sizes="100vw"
            className="object-cover opacity-20 mix-blend-luminosity scale-105"
            priority 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-background/90" />
          {/* Merkez Odaklı Altın Işık */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_40%,rgba(212,175,55,0.12)_0%,transparent_70%)]" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
        </div>

        {/* Ana İçerik */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-10">
          
          {/* Breadcrumb (Navigasyon İzi) */}
          <Reveal dir="up" delay={0}>
            <div className="flex items-center justify-center gap-2 text-muted-foreground text-[11px] tracking-[0.25em] uppercase mb-8">
              <Link href="/" className="hover:text-primary transition-colors">Ana Sayfa</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-primary font-bold">Format Hakkında</span>
            </div>
          </Reveal>

          {/* Ana Başlık */}
          <Reveal dir="up" delay={150}>
            <h1 className="text-[clamp(3rem,8vw,6rem)] font-black leading-none tracking-tight mb-6">
              <span className="block text-foreground drop-shadow-sm">ALTIN KELİME</span>
              <span className="gold-text block mt-2">FORMATI</span>
            </h1>
          </Reveal>

          {/* Yıldızlı Ayıraç */}
          <Reveal dir="up" delay={300}>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary" />
              <Star className="w-4 h-4 text-primary fill-primary" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary" />
            </div>
          </Reveal>

          {/* Alt Başlık ve Açıklama */}
          <Reveal dir="up" delay={450}>
            <p className="text-muted-foreground text-lg md:text-2xl leading-relaxed max-w-3xl mx-auto mb-10 font-medium text-balance">
              Oyun mekaniği, sezon yapısı, ödül sistemi ve prodüksiyon gereksinimleri hakkında <span className="text-foreground">detaylı bilgi.</span>
            </p>
          </Reveal>

          {/* Aksiyon Butonları (YENİ EKLENEN) */}
          <Reveal dir="up" delay={750}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground font-bold px-8 py-7 rounded-2xl text-lg hover:bg-primary/90 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <Download className="w-5 h-5" />
                Format Bible İndir
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary/40 text-foreground font-bold px-8 py-7 rounded-2xl text-lg hover:bg-primary/10 hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2 backdrop-blur-sm w-full sm:w-auto"
              >
                <CalendarHeart className="w-5 h-5" />
                Görüşme Talep Et
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Aşağı Kaydır Çizgisi */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-60 pointer-events-none">
          <span className="text-[10px] tracking-[0.3em] uppercase text-foreground font-bold">Aşağı Kaydır</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent animate-bounce" />
        </div>
      </section>
      <Overview />
      <FormatSummary />
      <HowToPlayTimeline />
      <CardSystem />
      <SeasonHierarchy />
      <RewardSystem />
      <AudienceExperience />
      <StrategyCards />
      <FormatBible />
      <UseCases />
      <FinalCTA />

    </main>
  )
}