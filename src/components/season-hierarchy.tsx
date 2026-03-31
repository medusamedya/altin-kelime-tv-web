"use client"

import { Trophy, Star, CalendarDays, Users } from "lucide-react"
import { Reveal } from "@/components/reveal"

const treeData = [
  { 
    id: "sezon", 
    level: "SEZON ŞAMPİYONU", 
    sub: "SEZON ŞAMPİYONU", 
    stat1: "5 ay birincisi", 
    stat2: "Sezon finali", 
    icon: <Trophy className="w-6 h-6" />, 
    isGold: true 
  },
  { 
    id: "aylik", 
    level: "AYLIK ŞAMPİYON", 
    sub: "Ay şampiyonu belirlenir", 
    stat1: "4 hafta birincisi", 
    stat2: "Ay sonu", 
    icon: <Star className="w-6 h-6" />, 
    isGold: false 
  },
  { 
    id: "haftalik", 
    level: "HAFTALIK ŞAMPİYON", 
    sub: "Hafta şampiyonu belirlenir", 
    stat1: "5 gün birincisi", 
    stat2: "Cumartesi", 
    icon: <CalendarDays className="w-6 h-6" />, 
    isGold: false 
  },
  { 
    id: "gunluk", 
    level: "GÜNLÜK ŞAMPİYON", 
    sub: "Gün birincisi belirlenir", 
    stat1: "5 kişi", 
    stat2: "Her gün", 
    icon: <Users className="w-6 h-6" />, 
    isGold: false 
  },
]

const tableData = [
  { stage: "GÜNLÜK", users: "5 kişi", time: "Her gün", desc: "Gün birincisi belirlenir", isGold: false },
  { stage: "HAFTALIK", users: "5 gün birincisi", time: "Cumartesi", desc: "Hafta şampiyonu belirlenir", isGold: false },
  { stage: "AYLIK", users: "4 hafta birincisi", time: "Ay sonu", desc: "Ay şampiyonu belirlenir", isGold: false },
  { stage: "SEZON", users: "5 ay birincisi", time: "Sezon finali", desc: "SEZON ŞAMPİYONU", isGold: true },
]

export function SeasonHierarchy() {
  return (
    <section className="py-24 md:py-32 relative bg-background overflow-hidden border-y border-border/50">
      
    

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        
        {/* Üst Başlık */}
        <Reveal dir="up" className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] md:text-xs font-black tracking-[0.2em] uppercase mb-6 shadow-sm">
            SEZON YAPISI
          </div>
           <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tight mb-6">
            <span className="gold-text">Zafere </span>Giden Yol 
          </h2>
          
          <p className="text-muted-foreground text-lg font-medium">
            Günlük şampiyondan sezon şampiyonuna
          </p>
        </Reveal>

        {/* 1. Kısım: Ağaç (Hiyerarşi) Yapısı */}
        <div className="max-w-3xl mx-auto mb-24 relative">
          
          {/* Merkezi Dikey Çizgi */}
          <div className="absolute left-1/2 top-10 bottom-10 w-px bg-gradient-to-b from-primary via-border/50 to-border/50 -translate-x-1/2 -z-10" />

          <div className="flex flex-col gap-6">
            {treeData.map((node, index) => (
              <Reveal key={node.id} delay={index * 150} dir="up">
                <div 
                  className={`group relative flex items-center justify-between p-5 md:p-6 rounded-2xl backdrop-blur-md transition-all duration-300 ${
                    node.isGold 
                      ? 'bg-primary/10 border-2 border-primary/50 shadow-[0_0_30px_rgba(212,175,55,0.2)] hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] hover:scale-[1.02]' 
                      : 'bg-card/40 border border-border/50 hover:border-primary/30 hover:bg-card/60'
                  }`}
                >
                  
                  {/* Kart İçi Sol Kısım (İkon + Başlık) */}
                  <div className="flex items-center gap-4 md:gap-6">
                    <div 
                      className={`w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-110 ${
                        node.isGold 
                          ? 'bg-primary text-primary-foreground shadow-[0_0_15px_rgba(212,175,55,0.5)]' 
                          : 'bg-primary/10 text-primary border border-primary/20'
                      }`}
                    >
                      {node.icon}
                    </div>
                    <div>
                      <h3 className={`font-black text-lg md:text-xl tracking-wide ${node.isGold ? 'gold-text' : 'text-foreground'}`}>
                        {node.level}
                      </h3>
                      <p className={`text-xs md:text-sm font-medium mt-1 ${node.isGold ? 'text-primary/80' : 'text-muted-foreground'}`}>
                        {node.sub}
                      </p>
                    </div>
                  </div>

                  {/* Kart İçi Sağ Kısım (İstatistikler) */}
                  <div className="text-right">
                    <p className={`font-bold text-sm md:text-base ${node.isGold ? 'text-foreground' : 'text-foreground/80'}`}>
                      {node.stat1}
                    </p>
                    <p className={`text-xs md:text-sm font-medium mt-1 ${node.isGold ? 'text-primary/80' : 'text-muted-foreground'}`}>
                      {node.stat2}
                    </p>
                  </div>

                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* 2. Kısım: Veri Tablosu */}
        <Reveal dir="up" delay={500}>
          <div className="w-full bg-card/40 backdrop-blur-md border border-border/50 rounded-3xl overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                
                {/* Tablo Başlıkları */}
                <thead>
                  <tr className="border-b border-border/50 bg-background/50">
                    <th className="p-5 text-xs font-bold text-muted-foreground tracking-widest uppercase">Aşama</th>
                    <th className="p-5 text-xs font-bold text-muted-foreground tracking-widest uppercase">Yarışmacı</th>
                    <th className="p-5 text-xs font-bold text-muted-foreground tracking-widest uppercase">Zaman</th>
                    <th className="p-5 text-xs font-bold text-muted-foreground tracking-widest uppercase">Açıklama</th>
                  </tr>
                </thead>
                
                {/* Tablo İçeriği */}
                <tbody className="divide-y divide-border/50">
                  {tableData.map((row, index) => (
                    <tr 
                      key={index} 
                      className={`transition-colors hover:bg-card/60 ${row.isGold ? 'bg-gradient-to-r from-primary/10 via-primary/5 to-transparent' : ''}`}
                    >
                      <td className="p-5">
                        <span className={`font-black tracking-wide ${row.isGold ? 'text-foreground drop-shadow-sm' : 'text-foreground/90'}`}>
                          {row.stage}
                        </span>
                      </td>
                      <td className={`p-5 font-medium ${row.isGold ? 'text-foreground/90' : 'text-muted-foreground'}`}>
                        {row.users}
                      </td>
                      <td className={`p-5 font-medium ${row.isGold ? 'text-foreground/90' : 'text-muted-foreground'}`}>
                        {row.time}
                      </td>
                      <td className="p-5">
                        <span className={`font-bold ${row.isGold ? 'gold-text' : 'text-muted-foreground'}`}>
                          {row.desc}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  )
}