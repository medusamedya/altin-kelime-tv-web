"use client"

import { Monitor, Film, Palette, Volume2 } from "lucide-react"
import { Reveal } from "@/components/reveal"

const specs = [
  {
    icon: <Monitor className="w-8 h-8" strokeWidth={1.5} />,
    title: "4K UHD / 1080p",
    subtitle: "Resolution"
  },
  {
    icon: <Film className="w-8 h-8" strokeWidth={1.5} />,
    title: "50i / 50p",
    subtitle: "Frame Rate"
  },
  {
    icon: <Palette className="w-8 h-8" strokeWidth={1.5} />,
    title: "10-bit, HDR ready",
    subtitle: "Color"
  },
  {
    icon: <Volume2 className="w-8 h-8" strokeWidth={1.5} />,
    title: "5.1 Surround",
    subtitle: "Audio"
  }
]

export function TechnicalSpecs() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-background">

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        {/* Üst Başlık Alanı */}
        <Reveal dir="up" className="text-center mb-16 md:mb-20">
          <span className="text-primary text-[10px] md:text-xs font-black tracking-[0.25em] uppercase mb-4 block">
            — YAYIN STANDARTLARI —
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tight">
            Teknik <span className="gold-text">Özellikler</span>
          </h2>
        </Reveal>

        {/* 4'lü Kutu Grid'i */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {specs.map((spec, index) => (
            <Reveal 
              key={index} 
              delay={index * 100} 
              dir="up"
              className="h-full"
            >
              <div className="group h-full flex flex-col items-center justify-center text-center p-10 md:p-12 bg-card/40 backdrop-blur-md border border-border/50 rounded-[2.5rem] hover:border-primary/40 hover:bg-card/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_40px_-10px_rgba(212,175,55,0.15)] relative overflow-hidden">
                
                {/* Kart İçi Glow (Merkezden yayılan) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-primary/10 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* İkon */}
                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-all duration-500 shadow-inner group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] relative z-10">
                  {spec.icon}
                </div>
                
                {/* Metinler */}
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-black text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {spec.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground font-bold tracking-[0.15em] uppercase">
                    {spec.subtitle}
                  </p>
                </div>
                
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}