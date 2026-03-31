"use client"

import { Type, LayoutTemplate, Table, Timer, ArrowRightLeft, Trophy, Sparkles } from "lucide-react"
import { Reveal } from "@/components/reveal"

const graphicFeatures = [
  {
    icon: <Type className="w-5 h-5" />,
    title: "Lower thirds",
    desc: "İsim, skor, sponsor"
  },
  {
    icon: <LayoutTemplate className="w-5 h-5" />,
    title: "Harf kartları",
    desc: "Animasyonlu"
  },
  {
    icon: <Table className="w-5 h-5" />,
    title: "Skor tablosu",
    desc: "Real-time güncelleme"
  },
  {
    icon: <Timer className="w-5 h-5" />,
    title: "Süre sayacı",
    desc: "Countdown timer"
  },
  {
    icon: <ArrowRightLeft className="w-5 h-5" />,
    title: "Geçiş efektleri",
    desc: "Smooth transitions"
  },
  {
    icon: <Trophy className="w-5 h-5" />,
    title: "Kazanma animasyonları",
    desc: "Victory sequences"
  }
]

export function GraphicsPackage() {
  const letters = ["A", "L", "T", "I", "N"];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-background border-y border-border/50">
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* Üst Başlık Alanı (Bizim Standart) */}
        <Reveal dir="up" className="text-center mb-16 md:mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm">
            <span className="text-[10px] md:text-xs font-black text-primary tracking-[0.2em] uppercase">
              GRAFİK PAKETİ
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight">
            Real-time <span className="gold-text">Grafikler</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed">
            Format paketi ile tüm grafikler sağlanır. After Effects projeleri ve 4K renderlar dahildir.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
       {/* SOL Taraf: Özellikler Grid'i */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {graphicFeatures.map((feature, index) => (
              <Reveal 
                key={index} 
                delay={index * 100} 
                dir="left" 
                className="h-full" /* Reveal'in de tam yüksekliği kaplaması için */
              >
                {/* Kart Kapsayıcı: h-full eklendi */}
                <div className="group h-full flex p-5 bg-card/40 backdrop-blur-md border border-border/50 rounded-2xl hover:border-primary/40 hover:bg-card/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-15px_rgba(212,175,55,0.2)]">
                  
                  {/* İkon ve Metinleri Yan Yana Tutan Flex Kapsayıcı */}
                  {/* w-full ve h-full ile içerik alanı kartı tam doldurur, items-center ile dikeyde tam ortalanır */}
                  <div className="flex items-center gap-4 w-full h-full">
                    
                    {/* İkon */}
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-inner">
                      {feature.icon}
                    </div>
                    
                    {/* Metinler */}
                    <div>
                      <h3 className="font-bold text-foreground mb-0.5 group-hover:text-primary transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-medium">
                        {feature.desc}
                      </p>
                    </div>

                  </div>

                </div>
              </Reveal>
            ))}
          </div>

        {/* SAĞ Taraf: Canlı Yayın Ekranı Mockup'ı */}
          <Reveal dir="right" delay={300}>
            <div className="flex flex-col gap-6">
              
              {/* TV / Ekran Kapsayıcı (TEMA UYUMLU YAPILDI) */}
              {/* bg-[#0A0A0A] yerine bg-secondary/30 kullanıldı. Hem aydınlık hem karanlık temaya otomatik uyum sağlar. */}
              <div className="relative w-full aspect-[4/3] sm:aspect-video bg-gradient-to-br from-background via-secondary/30 to-muted rounded-2xl md:rounded-3xl border border-border shadow-2xl overflow-hidden group">
                
                {/* Ekran İçi Soft Parlama ve Tasarım Canvas'ı Hissi Veren Grid */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_100%)] pointer-events-none" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 dark:opacity-5 pointer-events-none" />
                
                {/* 1. Süre Sayacı (Sağ Üst) */}
                <div className="absolute top-6 right-6 border border-primary/20 bg-background/80 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg">
                  <span className="font-mono text-xl font-bold text-primary drop-shadow-sm">00:45</span>
                </div>

                {/* 2. Ortadaki 3D Harfler */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-2 sm:gap-3">
                  {letters.map((letter, i) => (
                    <div 
                      key={i} 
                      className="w-10 h-14 sm:w-14 sm:h-20 bg-gradient-to-br from-[#FDE08B] via-[#D4AF37] to-[#997A15] rounded-lg border-b-[3px] border-r-[2px] border-[#8A6A0B] flex items-center justify-center text-[#1A1A1A] font-black text-xl sm:text-3xl shadow-[0_5px_15px_rgba(0,0,0,0.3)] group-hover:-translate-y-2 group-hover:shadow-[0_15px_25px_rgba(212,175,55,0.4)] transition-all duration-500"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    >
                      {letter}
                    </div>
                  ))}
                </div>

                {/* 3. Alt Kısım (Lower Thirds) */}
                <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row gap-4 items-start sm:items-end justify-start">
                  
                  {/* İsim Kutusu */}
                  <div className="border border-border bg-background/90 backdrop-blur-md px-5 py-3 rounded-xl flex flex-col relative overflow-hidden shadow-sm">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/50" />
                    <span className="font-black text-foreground text-sm sm:text-base tracking-wide">YARIŞMACI ADI</span>
                    <span className="text-primary text-xs sm:text-sm font-medium">İstanbul</span>
                  </div>

                  {/* Skor Kutusu */}
                  <div className="bg-gradient-to-r from-[#D4AF37] to-[#B38F22] px-6 py-3.5 rounded-xl shadow-[0_5px_15px_rgba(212,175,55,0.3)] border border-[#FDE08B]/30">
                    <span className="font-black text-[#1A1A1A] text-sm sm:text-lg tracking-wide">
                      1250 PUAN
                    </span>
                  </div>

                </div>
              </div>

              {/* Alt Bilgi Kutusu */}
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5 flex items-start gap-4 backdrop-blur-sm">
                <Sparkles className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-foreground text-base mb-1">
                    Format Paketi Dahilinde
                  </h4>
                  <p className="text-muted-foreground text-sm font-medium">
                    AE projeleri + 4K renderlar + Kullanım kılavuzu
                  </p>
                </div>
              </div>

            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}