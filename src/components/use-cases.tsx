"use client"

import { Globe, Palette, Newspaper, Smartphone, Building2 } from "lucide-react"
import { Reveal } from "@/components/reveal"

// 1. DÜZELTME: İkonların içindeki "text-primary" class'ları silindi. 
// Artık rengi otomatik olarak ebeveyn div'den alacaklar.
const useCases = [
  {
    icon: <Globe className="w-8 h-8" strokeWidth={1.5} />,
    title: "Ulusal TV Kanalları",
    desc: "Prime-time kuşağında milyonlara ulaşan reyting gücü."
  },
  {
    icon: <Palette className="w-8 h-8" strokeWidth={1.5} />,
    title: "Tematik Kanallar",
    desc: "Eğlence, kültür veya bilgi temalı kanallara özel içerik."
  },
  {
    icon: <Newspaper className="w-8 h-8" strokeWidth={1.5} />,
    title: "Haber Kanalları",
    desc: "Hafta sonu veya akşam kuşağında dinamik bir alternatif."
  },
  {
    icon: <Smartphone className="w-8 h-8" strokeWidth={1.5} />,
    title: "Dijital Platformlar",
    desc: "OTT ve VOD platformlarına özel, 'Binge-watch'a uygun format."
  },
  {
    icon: <Building2 className="w-8 h-8" strokeWidth={1.5} />,
    title: "Yerel Kanallar",
    desc: "Bölgesel izleyiciye hitap eden, maliyet etkin prodüksiyon."
  }
]

export function UseCases() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden border-y border-border/50 bg-background">
      
 
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        {/* Üst Başlık Alanı */}
        <Reveal dir="up" className="text-center mb-16 md:mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm">
            <span className="text-[10px] md:text-xs font-black text-primary tracking-[0.2em] uppercase">
              PROJEYE UYGUNLUK
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight">
            Kullanım <span className="gold-text">Alanları</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed">
            Altın Kelime formatı, farklı yayın mecralarına ve bütçelerine <span className="text-foreground font-bold">kusursuz şekilde uyarlanabilir.</span>
          </p>
        </Reveal>

        {/* 5'li Modern Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 xl:gap-4 items-stretch">
          {useCases.map((useCase, index) => (
            <Reveal 
              key={index} 
              delay={index * 100} 
              dir="up"
              className="h-full"
            >
              <div className="group h-full flex flex-col bg-card/40 backdrop-blur-md border border-border/50 rounded-3xl p-6 hover:border-primary/40 hover:bg-card/60 hover:-translate-y-2 hover:shadow-[0_15px_40px_-10px_rgba(212,175,55,0.12)] transition-all duration-500 overflow-hidden relative">
                
                {/* Kart içi zarif glow */}
                <div className="absolute -right-8 -top-8 w-28 h-28 bg-primary/10 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* 2. DÜZELTME: İkon Kapsayıcısı */}
                {/* text-primary (altın) ile başlar, hover olunca text-primary-foreground (koyu/siyah) olur. transition-all ile yumuşak geçer. */}
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-all duration-500 shadow-inner group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] relative z-10">
                  {useCase.icon}
                </div>
                
                {/* Metinler */}
                <div className="relative z-10">
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {useCase.title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    {useCase.desc}
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