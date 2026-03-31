"use client"

import { Reveal } from "@/components/reveal"
import { Sparkles } from "lucide-react"

// Puan tablosu verileri
const scoringData = [
  { length: "3 harf", points: "100" },
  { length: "4 harf", points: "200" },
  { length: "5 harf", points: "400" },
  { length: "6 harf", points: "800" },
  { length: "7 harf", points: "2.000", isGold: true },
]

export function CardSystem() {
  return (
    <section className="py-24 md:py-32 relative bg-background overflow-hidden">
      

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        
        {/* Üst Başlık */}
        <Reveal dir="up" className="text-center mb-16 md:mb-24">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] md:text-xs font-black tracking-[0.2em] uppercase mb-6 shadow-sm">
            KART SİSTEMİ
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tight">
            63 Kartlık Deste
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          
          {/* SOL KOLON */}
          <div className="space-y-6">
            <Reveal dir="left" delay={100}>
              <h3 className="text-2xl font-black text-foreground mb-6">Harf Dağılımı</h3>
              
              {/* Standart Dağılım Kartı */}
              <div className="bg-card/40 backdrop-blur-md border border-border/50 rounded-2xl p-6 md:p-8 hover:border-primary/30 hover:bg-card/60 transition-all duration-300">
                <ul className="space-y-4">
                  {[
                    "29 Türk alfabesi harfi",
                    "Her harfin sıklığı dildeki kullanımına göre",
                    "Örnek: A, E, İ, R daha fazla"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-muted-foreground font-medium text-sm md:text-base">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Vurgulu Joker Kartı */}
            <Reveal dir="left" delay={200}>
              <div className="group relative bg-card/20 backdrop-blur-md border border-primary/30 rounded-2xl p-6 md:p-8 hover:bg-card/40 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] hover:-translate-y-1 transition-all duration-500 overflow-hidden">
                
                {/* Joker İç İnce Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[40px] group-hover:bg-primary/20 transition-colors duration-500 pointer-events-none" />
                <Sparkles className="absolute top-4 right-4 w-5 h-5 text-primary/40 group-hover:text-primary transition-colors" />

                <div className="flex items-start gap-6 relative z-10">
                  {/* Joker 'J' Simgesi */}
                  <div className="shrink-0 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#FDE08B] to-[#D4AF37] rounded-xl flex items-center justify-center text-[#1A1A1A] font-black text-3xl md:text-4xl shadow-[0_10px_20px_rgba(212,175,55,0.3)] group-hover:scale-105 transition-transform duration-300">
                    J
                  </div>
                  
                  {/* Joker Özellikleri */}
                  <div>
                    <h4 className="text-xl font-black gold-text mb-3">JOKER KARTI</h4>
                    <ul className="space-y-2">
                      {[
                        "Destede 5 adet",
                        "Her harfin yerine kullanılabilir",
                        "Oyunun seyrini değiştirir",
                        "Şansa dayalı çekim"
                      ].map((item, i) => (
                        <li key={i} className="text-muted-foreground text-sm font-medium">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* SAĞ KOLON */}
          <div className="space-y-6">
            <Reveal dir="right" delay={150}>
              <h3 className="text-2xl font-black text-foreground mb-6">Puanlama Tablosu</h3>
              
              {/* Puanlama Kartı */}
              <div className="bg-card/40 backdrop-blur-md border border-border/50 rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-all duration-300">
                
                {/* Tablo Başlığı */}
                <div className="flex justify-between items-center pb-4 mb-4 border-b border-border/50 text-xs font-bold text-muted-foreground tracking-[0.1em] uppercase">
                  <span>Harf Sayısı</span>
                  <span>Puan</span>
                </div>

                {/* Tablo Satırları */}
                <div className="space-y-0">
                  {scoringData.map((row, index) => (
                    <div 
                      key={index} 
                      className={`flex justify-between items-center py-4 ${
                        index !== scoringData.length - 1 ? 'border-b border-border/50' : ''
                      } group hover:px-2 transition-all duration-300`}
                    >
                      <span className={`font-medium ${row.isGold ? 'text-foreground font-bold' : 'text-muted-foreground'}`}>
                        {row.length}
                      </span>
                      <span className={`font-black text-lg md:text-xl ${row.isGold ? 'gold-text drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]' : 'text-foreground'}`}>
                        {row.points}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            </Reveal>

            {/* Alt Bilgi (Not) Kartı */}
            <Reveal dir="right" delay={250}>
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 backdrop-blur-sm">
                <p className="text-muted-foreground text-sm leading-relaxed font-medium">
                  <span className="text-primary font-bold">Not: </span> 
                  7 harfli kelime bulan yarışmacı <span className="text-foreground">"Altın Kelime"</span> bonusu kazanır ve masadaki toplam puanı ikiye katlar.
                </p>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  )
}