"use client"

import { Tv, Clock, Users, Eye, CalendarDays, Building2 } from "lucide-react"
import { Reveal } from "@/components/reveal"

const summaryCards = [
  {
    icon: <Tv className="w-6 h-6 text-primary" strokeWidth={1.5} />,
    label: "Program Türü",
    value: "Yarışma / Eğlence"
  },
  {
    icon: <Clock className="w-6 h-6 text-primary" strokeWidth={1.5} />,
    label: "Bölüm Süresi",
    value: "45-60 Dakika"
  },
  {
    icon: <Users className="w-6 h-6 text-primary" strokeWidth={1.5} />,
    label: "Yarışmacı Sayısı",
    value: "5 Kişi / Bölüm"
  },
  {
    icon: <Eye className="w-6 h-6 text-primary" strokeWidth={1.5} />,
    label: "Hedef Kitle",
    value: "Genel İzleyici (7+)"
  },
  {
    icon: <CalendarDays className="w-6 h-6 text-primary" strokeWidth={1.5} />,
    label: "Yayın Sıklığı",
    value: "Hafta içi + Cumartesi final"
  },
  {
    icon: <Building2 className="w-6 h-6 text-primary" strokeWidth={1.5} />,
    label: "Stüdyo Gereksinimi",
    value: "Tek set, çoklu bölüm"
  }
]

const bottomStats = [
  { label: "Çekim Kapasitesi", value: "Günde 3-5 bölüm" },
  { label: "Dil Uyumu", value: "Tüm dillere uyarlanabilir" },
  { label: "Kelime Kaynağı", value: "TDK Sözlüğü" }
]

export function FormatSummary() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      
     
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        
        {/* Üst Başlık Alanı */}
        <Reveal dir="up" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] md:text-xs font-black tracking-[0.2em] uppercase mb-6 shadow-sm">
            PROGRAM BİLGİLERİ
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tight mb-6">
            Format <span className="gold-text">Özeti</span>
          </h2>
        </Reveal>

        {/* Ana Grid Alanı */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          
          {/* Üstteki 6'lı Kart Grubu */}
          {summaryCards.map((card, index) => (
            <Reveal 
              key={index} 
              delay={index * 100} 
              dir="up"
              className="h-full"
            >
              <div className="group h-full flex flex-col justify-between p-6 md:p-8 bg-card/40 backdrop-blur-md border border-border/50 rounded-2xl transition-all duration-300 hover:bg-card/60 hover:border-primary/40 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(212,175,55,0.15)] relative overflow-hidden">
                
                {/* Kart İçi Glow */}
                <div className="absolute -right-8 -top-8 w-24 h-24 bg-primary/10 rounded-full blur-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="mb-8 group-hover:scale-110 transition-transform duration-300 origin-left">
                  {card.icon}
                </div>
                
                <div>
                  <p className="text-muted-foreground text-xs md:text-sm font-medium mb-1">
                    {card.label}
                  </p>
                  <p className="text-foreground font-bold text-lg">
                    {card.value}
                  </p>
                </div>

              </div>
            </Reveal>
          ))}

          {/* En Alttaki Geniş Yatay Kart (3 Kolonu Kaplar) */}
          <Reveal delay={600} dir="up" className="lg:col-span-3 md:col-span-2 col-span-1 mt-2">
            <div className="flex flex-col md:flex-row justify-between gap-6 p-6 md:p-8 bg-card/20 backdrop-blur-sm border border-border/50 rounded-2xl transition-all duration-300 hover:border-primary/30">
              
              {bottomStats.map((stat, index) => (
                <div key={index} className="flex-1 flex flex-col gap-1">
                  <p className="text-muted-foreground text-xs md:text-sm font-medium">
                    {stat.label}
                  </p>
                  <p className="text-primary font-bold text-base md:text-lg drop-shadow-sm">
                    {stat.value}
                  </p>
                </div>
              ))}

            </div>
          </Reveal>

        </div>

      </div>
    </section>
  )
}