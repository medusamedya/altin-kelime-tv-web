"use client"

import { Mic, Music, Headphones } from "lucide-react"
import { Reveal } from "@/components/reveal"

const micSetup = [
  { qty: "5x", name: "Lavalier", target: "Yarışmacılar" },
  { qty: "1x", name: "Lavalier + Handheld", target: "Sunucu" },
  { qty: "1x", name: "Overhead Stereo Pair", target: "Ambiyans" },
]

const soundDesign = [
  { name: "Jingle", target: "Açılış müziği" },
  { name: "Stinger", target: "Harf açılış efekti" },
  { name: "Tension Bed", target: "Geri sayım müziği" },
  { name: "Win Fanfare", target: "Kazanma müziği" },
]

export function AudioProduction() {
  return (
    <section className="py-24 md:py-32 relative bg-background overflow-hidden border-t border-border/50">
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* --- ÜST BAŞLIK ALANI (Standart Tasarım) --- */}
        <Reveal dir="up" className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-primary/80" />
            <span className="text-primary font-bold text-[11px] md:text-xs tracking-widest uppercase">
              SES SİSTEMİ
            </span>
            <div className="w-12 h-[2px] bg-primary/80 hidden md:block" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tight">
            Ses <span className="gold-text">Prodüksiyonu</span>
          </h2>
        </Reveal>

        {/* --- İKİ KOLONLU KART YAPISI --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          
          {/* 1. KART: Mikrofon Kurulumu */}
          <Reveal dir="up" delay={150}>
            <div className="bg-card/40 backdrop-blur-md border border-border/50 rounded-[2rem] p-8 md:p-10 hover:border-primary/40 hover:bg-card/60 transition-all duration-500 relative overflow-hidden group">
              
              {/* Kart İçi Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Kart Başlığı */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-inner">
                  <Mic className="w-6 h-6" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  Mikrofon Kurulumu
                </h3>
              </div>

              {/* Liste */}
              <div className="flex flex-col">
                {micSetup.map((item, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center justify-between py-5 group/item hover:px-2 transition-all duration-300 ${
                      index !== micSetup.length - 1 ? 'border-b border-border/40' : ''
                    }`}
                  >
                    <div className="flex items-center gap-4 md:gap-6">
                      <span className="text-primary font-black text-lg w-8 tracking-wider">
                        {item.qty}
                      </span>
                      <span className="text-foreground text-base md:text-lg font-medium transition-colors group-hover/item:text-primary/90">
                        {item.name}
                      </span>
                    </div>
                    <span className="text-muted-foreground text-sm md:text-base text-right font-medium">
                      {item.target}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </Reveal>

          {/* 2. KART: Ses Tasarımı */}
          <Reveal dir="up" delay={300}>
            <div className="bg-card/40 backdrop-blur-md border border-border/50 rounded-[2rem] p-8 md:p-10 hover:border-primary/40 hover:bg-card/60 transition-all duration-500 relative overflow-hidden group">
              
              {/* Kart İçi Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Kart Başlığı */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-inner">
                  <Music className="w-6 h-6" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  Ses Tasarımı
                </h3>
              </div>

              {/* Liste */}
              <div className="flex flex-col">
                {soundDesign.map((item, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center justify-between py-5 group/item hover:px-2 transition-all duration-300 ${
                      index !== soundDesign.length - 1 ? 'border-b border-border/40' : ''
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <Headphones className="w-5 h-5 text-muted-foreground group-hover/item:text-primary transition-colors" />
                      <span className="text-foreground text-base md:text-lg font-medium transition-colors group-hover/item:text-primary/90">
                        {item.name}
                      </span>
                    </div>
                    <span className="text-muted-foreground text-sm md:text-base text-right font-medium">
                      {item.target}
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