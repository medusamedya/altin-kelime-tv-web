"use client"

import { Calendar, CalendarDays, CalendarCheck, Trophy, ChevronRight } from "lucide-react"
import { Reveal } from "@/components/reveal"

const stages = [
  {
    timeframe: "GÜN",
    title: "Günlük Şampiyon",
    description: "5 yarışmacı mücadele eder",
    icon: <Calendar className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
  },
  {
    timeframe: "HAFTA",
    title: "Haftalık Şampiyon",
    description: "5 gün birincisi karşılaşır",
    icon: <CalendarDays className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
  },
  {
    timeframe: "AY",
    title: "Aylık Şampiyon",
    description: "4 hafta birincisi yarışır",
    icon: <CalendarCheck className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
  },
  {
    timeframe: "SEZON",
    title: "Sezon Şampiyonu",
    description: "5 ay birincisi büyük finale çıkar",
    icon: <Trophy className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
  }
]

export function SeasonStructure() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      
      {/* Arka Plan Dekorasyonu */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* Üst Başlık */}
        <Reveal dir="up" className="text-center mb-16 md:mb-24">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm">
            <span className="text-[10px] md:text-xs font-black text-primary tracking-[0.2em] uppercase">
              SEZON YAPISI
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight">
            Zirveye Giden <span className="gold-text">Yol</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Her gün yeni bir şans, her hafta yeni bir mücadele
          </p>
        </Reveal>

        {/* Adımlar (Yatay Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
          {stages.map((stage, index) => (
            <div key={index} className="relative h-full">
              
              <Reveal delay={index * 150} dir="up" className="h-full">
                <div className="group h-full flex flex-col items-center text-center bg-card/60 backdrop-blur-md rounded-[2rem] p-8 border border-border/50 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] overflow-hidden">
                  
                  {/* Kart İçi Altın Degrade (Görseldeki gibi yukarıdan aşağı inen parlama) */}
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  {/* İkon Çerçevesi */}
                  <div className="w-16 h-16 rounded-2xl bg-background/80 backdrop-blur-sm border border-primary/20 flex items-center justify-center mb-8 relative z-10 shadow-lg group-hover:shadow-primary/20 transition-all duration-500">
                    {stage.icon}
                  </div>
                  
                  {/* Süreç Etiketi (GÜN, HAFTA vb.) */}
                  <div className="text-primary font-bold text-lg tracking-[0.2em] uppercase mb-4 relative z-10">
                    {stage.timeframe}
                  </div>
                  
                  {/* Yatay Ayırıcı Çizgi */}
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-6 relative z-10 group-hover:via-primary/60 transition-colors duration-500" />
                  
                  {/* Başlık ve Açıklama */}
                  <h3 className="text-xl font-black text-foreground mb-2 relative z-10 group-hover:text-primary transition-colors duration-300">
                    {stage.title}
                  </h3>
                  <p className="text-muted-foreground text-sm font-medium leading-relaxed relative z-10">
                    {stage.description}
                  </p>

                </div>
              </Reveal>

              {/* Masaüstü Görünümü İçin Bağlantı Okları */}
              {index < stages.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-5 xl:-right-6 -translate-y-1/2 z-20 items-center justify-center text-primary/40 animate-pulse">
                  <ChevronRight className="w-8 h-8" strokeWidth={1.5} />
                </div>
              )}

              {/* Tablet (2 Kolon) Görünümü İçin Bağlantı Okları (1. ile 2. arası ve 3. ile 4. arası) */}
              {(index === 0 || index === 2) && (
                <div className="hidden md:flex lg:hidden absolute top-1/2 -right-4 -translate-y-1/2 z-20 items-center justify-center text-primary/40 animate-pulse">
                  <ChevronRight className="w-6 h-6" strokeWidth={1.5} />
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}