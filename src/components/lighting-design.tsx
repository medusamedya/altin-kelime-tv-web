"use client"

import { Lightbulb, Sun, Zap } from "lucide-react"
import { Reveal } from "@/components/reveal"

const lightingFeatures = [
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Yarışmacı Aydınlatması",
    desc: "Key + fill + gold rim light kombinasyonu",
    points: ["3-point lighting setup", "Soft key light", "Gold-tinted rim light"],
    glowColor: "rgba(212,175,55,0.1)"
  },
  {
    icon: <Sun className="w-6 h-6" />,
    title: "Set Ambiyans",
    desc: "Düşük ve dramatik atmosfer ışığı",
    points: ["Düşük ambient", "Kontrollü gölgeler", "Derinlik efekti"],
    glowColor: "rgba(255,255,255,0.05)"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Efekt Işıkları",
    desc: "Moving heads ve LED bar entegrasyonu",
    points: ["Moving head spots", "LED bar strips", "Animasyonlu efektler"],
    glowColor: "rgba(212,175,55,0.1)"
  }
]

export function LightingDesign() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-background">
      
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        
        {/* 1. Sol Üst Altın Spot (Dar Huzme) */}
        <div className="absolute top-[-150px] left-[15%] w-[120px] md:w-[200px] h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.4)_0%,transparent_80%)] rounded-full blur-[80px] rotate-[-15deg]" />
        
        {/* 2. Merkez Üst Beyaz/Soft Spot (Geniş Ambiyans) */}
        <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[300px] md:w-[500px] h-[800px] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.30)_0%,transparent_75%)] rounded-full blur-[100px]" />
        
        {/* 3. Sağ Üst Altın Spot (Orta Huzme) */}
        <div className="absolute top-[-100px] right-[15%] w-[150px] md:w-[250px] h-[700px] bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.40)_0%,transparent_80%)] rounded-full blur-[90px] rotate-[10deg]" />

      </div>
      
      {/* --- MEVCUT İÇERİK YAPISI ( relative z-10 ile ışıkların üzerine aldık ) --- */}
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* Üst Başlık Alanı (Sahne ışıklarının tam altında) */}
        <Reveal dir="up" className="text-center mb-16 md:mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm relative overflow-hidden group">
            {/* Hap başlık içinde mikro glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.3)_0%,transparent_80%)] opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="text-[10px] md:text-xs font-black text-primary tracking-[0.2em] uppercase relative z-10">
              AYDINLATMA
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight relative">
            <span className="block text-foreground drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">Dramatik</span>
            <span className="gold-text block">Işık Tasarımı</span>
          </h2>
        </Reveal>

        {/* 3'lü Kart Grid'i */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {lightingFeatures.map((item, index) => (
            <Reveal 
              key={index} 
              delay={index * 150} 
              dir="up"
              className="h-full"
            >
              {/* Kart yapısı: border-primary/20 ile ışığı biraz daha yansıttık */}
              <div className="group h-full flex flex-col bg-card/40 backdrop-blur-md border border-border/50 hover:border-primary/40 rounded-[2.5rem] p-8 md:p-10 transition-all duration-500 relative overflow-hidden">
                
                {/* Dinamik Kart İçi Glow Efekti (Fareyle üzerine gelince parlayan kendi ışığı) */}
                <div 
                  className="absolute -right-10 -top-10 w-40 h-40 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0"
                  style={{ backgroundColor: item.glowColor }}
                />

                {/* İkon Kapsayıcı: shadow-inner ile içine ışık düşmüş hissi */}
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-inner relative z-10">
                  {item.icon}
                </div>
                
                {/* Başlık ve Açıklama */}
                <div className="mb-8 relative z-10">
                  <h3 className="text-2xl font-black text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground font-medium text-sm md:text-base leading-relaxed text-balance">
                    {item.desc}
                  </p>
                </div>

                {/* Teknik Liste */}
                <ul className="mt-auto space-y-4 border-t border-border/40 pt-8 relative z-10">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm md:text-base text-foreground/80 font-medium">
                      {/* Parlayan Liste Noktası */}
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(212,175,55,0.8)] shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}