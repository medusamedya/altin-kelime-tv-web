"use client"

import { CheckCircle2, Server, Monitor, Database, Tv, AppWindow } from "lucide-react"
import { Reveal } from "@/components/reveal"

const features = [
  "TDK entegrasyonu (kelime doğrulama)",
  "Gerçek zamanlı skor takibi",
  "Otomatik grafik tetikleme",
  "Yarışmacı tablet kontrolü"
]

export function LiveGameSystem() {
  return (
    <section className="py-24 md:py-32 relative bg-background overflow-hidden border-t border-border/50">
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* --- SOL KOLON: Sistem Mimarisi Şeması --- */}
          <Reveal dir="left" delay={100} className="w-full flex justify-center lg:justify-start">
            <div className="w-full max-w-md bg-card/40 backdrop-blur-md border border-border/50 rounded-3xl p-8 sm:p-10 flex flex-col items-center hover:border-primary/30 transition-all duration-500 shadow-xl relative overflow-hidden group">
              
              {/* Kart İçi Soft Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-primary/5 rounded-full blur-[50px] pointer-events-none" />

              <h3 className="text-lg font-bold text-foreground mb-10 relative z-10">
                Sistem Mimarisi
              </h3>

              {/* Akış Şeması (Diagram) Konteyneri */}
              <div className="flex flex-col items-center relative z-10 w-full">
                
                {/* 1. SEVİYE: Game Server (Altın Vurgulu) */}
                <div className="flex flex-col items-center">
                  <div className="w-40 h-24 bg-background/80 backdrop-blur-sm border-2 border-primary rounded-xl flex flex-col items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:scale-105 transition-transform duration-300 group/node cursor-default">
                    <Server className="w-6 h-6 text-primary group-hover/node:animate-pulse" />
                    <span className="text-foreground font-bold text-sm">Game Server</span>
                  </div>
                  
                  {/* Dikey Ana Gövde Çizgisi */}
                  <div className="w-px h-6 bg-primary/60" />
                  
                  {/* Yatay Çatal (Fork) Çizgisi */}
                  <div className="w-[14rem] sm:w-[16rem] h-px bg-primary/60" />
                  
                  {/* Aşağı İnen Yan Çizgiler */}
                  <div className="w-[14rem] sm:w-[16rem] flex justify-between">
                    <div className="w-px h-6 bg-primary/60" />
                    <div className="w-px h-6 bg-primary/60" />
                  </div>
                </div>

                {/* 2. VE 3. SEVİYE: Çift Kolonlu Alt Yapı */}
                <div className="flex gap-10 sm:gap-14">
                  
                  {/* Sol Alt Dal */}
                  <div className="flex flex-col items-center">
                    <div className="w-28 sm:w-32 h-20 bg-background/60 backdrop-blur-sm border border-border/60 rounded-xl flex flex-col items-center justify-center gap-2 hover:border-primary/50 transition-colors duration-300">
                      <Monitor className="w-5 h-5 text-primary/80" />
                      <span className="text-muted-foreground font-medium text-xs text-center leading-tight px-2">Graphics Engine</span>
                    </div>
                    {/* Bağlantı */}
                    <div className="w-px h-8 bg-border/50" />
                    <div className="w-28 sm:w-32 h-20 bg-background/60 backdrop-blur-sm border border-border/60 rounded-xl flex flex-col items-center justify-center gap-2 hover:border-primary/50 transition-colors duration-300">
                      <Tv className="w-5 h-5 text-muted-foreground" />
                      <span className="text-muted-foreground font-medium text-xs text-center leading-tight px-2">Video Output</span>
                    </div>
                  </div>

                  {/* Sağ Alt Dal */}
                  <div className="flex flex-col items-center">
                    <div className="w-28 sm:w-32 h-20 bg-background/60 backdrop-blur-sm border border-border/60 rounded-xl flex flex-col items-center justify-center gap-2 hover:border-primary/50 transition-colors duration-300">
                      <Database className="w-5 h-5 text-primary/80" />
                      <span className="text-muted-foreground font-medium text-xs text-center leading-tight px-2">Score Database</span>
                    </div>
                    {/* Bağlantı */}
                    <div className="w-px h-8 bg-border/50" />
                    <div className="w-28 sm:w-32 h-20 bg-background/60 backdrop-blur-sm border border-border/60 rounded-xl flex flex-col items-center justify-center gap-2 hover:border-primary/50 transition-colors duration-300">
                      <AppWindow className="w-5 h-5 text-muted-foreground" />
                      <span className="text-muted-foreground font-medium text-xs text-center leading-tight px-2">LED Wall Control</span>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </Reveal>

          {/* --- SAĞ KOLON: Başlık ve Açıklamalar --- */}
          <Reveal dir="right" delay={200}>
            <div className="flex flex-col">
              
              {/* Üst Başlık (Eyebrow - Standartlaştırdığımız tasarım) */}
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="w-12 h-[2px] bg-primary/80" />
                <span className="text-primary font-bold text-sm tracking-widest uppercase">
                  OYUN MOTORU
                </span>
              </div>
              
              {/* Ana Başlık */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight">
                Canlı Oyun <span className="gold-text">Sistemi</span>
              </h2>

              {/* Açıklama */}
              <p className="text-muted-foreground text-lg md:text-xl font-medium leading-relaxed mb-10 text-balance">
                Altın Kelime, özel geliştirilmiş bir oyun motoru ile çalışır. Kelime doğrulama, skor takibi ve grafik tetikleme otomatik olarak gerçekleşir.
              </p>

              {/* Özellikler Listesi (Kutu içi Checkmark tasarımı) */}
              <div className="flex flex-col gap-4">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-4 p-5 md:p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/40 hover:bg-card/50 transition-all duration-300 hover:-translate-y-1 shadow-sm"
                  >
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    <span className="text-foreground/90 font-medium text-base md:text-lg">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}