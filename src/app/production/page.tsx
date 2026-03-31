"use client"

import Link from "next/link"
import Image from "next/image"
import { 
  ChevronRight, Star, Download, MessageCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal" 
import { GraphicsPackage } from "@/components/graphics-package"
import { TechnicalSpecs } from "@/components/technical-specs"
import { LightingDesign } from "@/components/lighting-design"
import { CameraSetup } from "@/components/camera-setup"
import { SetInstallation } from "../../components/set-installation"
import { TechnicalConsulting } from "@/components/technical-consulting"
import { ProductionChecklist } from "@/components/production-checklist"
import { LiveGameSystem } from "@/components/live-game-system"
import { ProducerAdvantages } from "@/components/producer-advantages"
import { AudioProduction } from "@/components/audio-production"


export default function ProductionPage() {
  return (
    <main className="flex flex-col min-h-screen pt-20 bg-background overflow-hidden">
      
      {/* 1️⃣ SİNEMATİK HERO (SENİN ORİJİNAL YAPIN KORUNDU) */}
      <section id="tanitim" className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-background">
        
        {/* Arka Plan Görseli ve Gradyanlar (BOZULMADI) */}
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
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_40%,rgba(212,175,55,0.12)_0%,transparent_70%)]" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
        </div>

        {/* Ana İçerik */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-10">
          
          {/* Breadcrumb */}
          <Reveal dir="up" delay={0}>
            <div className="flex items-center justify-center gap-2 text-muted-foreground text-[11px] tracking-[0.25em] uppercase mb-8">
              <Link href="/" className="hover:text-primary transition-colors">Ana Sayfa</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-primary font-bold">Prodüksiyon</span>
            </div>
          </Reveal>

          {/* Ana Başlık (PRODÜKSİYON GEREKSİNİMLERİ) */}
          <Reveal dir="up" delay={150}>
            <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] font-black leading-none tracking-tight mb-6">
              <span className="block text-foreground drop-shadow-sm uppercase">PRODÜKSİYON</span>
              <span className="gold-text block mt-2 uppercase">GEREKSİNİMLERİ</span>
            </h1>
          </Reveal>

          {/* Yıldızlı Ayıraç (BOZULMADI) */}
          <Reveal dir="up" delay={300}>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary" />
              <Star className="w-4 h-4 text-primary fill-primary" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary" />
            </div>
          </Reveal>

          {/* Alt Başlık ve Açıklama */}
          <Reveal dir="up" delay={450}>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10 font-medium text-balance">
              Stüdyo kurulumu, kamera düzeni, teknik özellikler ve yayın standartları hakkında <span className="text-foreground font-bold">detaylı bilgi.</span>
            </p>
          </Reveal>

          {/* Aksiyon Butonları (Prodüksiyon Sayfasına Uyarlanmış) */}
          <Reveal dir="up" delay={750}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground font-bold px-8 py-7 rounded-2xl text-lg hover:bg-primary/90 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <Download className="w-5 h-5" />
                Teknik Dosya İndir
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary/40 text-foreground font-bold px-8 py-7 rounded-2xl text-lg hover:bg-primary/10 hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2 backdrop-blur-sm w-full sm:w-auto"
              >
                <MessageCircle className="w-5 h-5" />
                Danışmanlık Talep Et
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Aşağı Kaydır Çizgisi (BOZULMADI) */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-60 pointer-events-none">
          <span className="text-[10px] tracking-[0.3em] uppercase text-foreground font-bold">Aşağı Kaydır</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent animate-bounce" />
        </div>
      </section>
      <GraphicsPackage />
      <TechnicalSpecs />
      <LightingDesign />
      <CameraSetup />
      <SetInstallation />
      <TechnicalConsulting />
      <ProductionChecklist />
      <LiveGameSystem />
      <ProducerAdvantages />
      <AudioProduction />
    </main>
  )
}