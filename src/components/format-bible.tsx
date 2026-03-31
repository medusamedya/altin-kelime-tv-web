"use client"

import { FileText, CheckCircle2, Download, ExternalLink } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"

const bibleFeatures = [
  "Oyun mekaniği ve kurallar",
  "Sezon yapısı",
  "Stüdyo gereksinimleri",
  "Grafik paketi önizleme",
  "Maliyet analizi"
]

export function FormatBible() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-background">
      
      {/* Arka Plan Glow Efektleri */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        
        {/* Üst Başlık Alanı */}
        <Reveal dir="up" className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm">
            <span className="text-[10px] md:text-xs font-black text-primary tracking-[0.2em] uppercase">
              FORMAT KİTİ
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight">
            Format Bible'ı <span className="gold-text">İndirin</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed">
            Detaylı oyun kuralları, prodüksiyon rehberi ve teknik gereksinimler
          </p>
        </Reveal>

        {/* İndirme Kartı */}
        <Reveal delay={200} dir="up">
          <div className="group relative bg-card/40 backdrop-blur-xl border border-border/50 rounded-3xl p-6 md:p-10 hover:border-primary/40 transition-all duration-500 shadow-lg hover:shadow-[0_0_40px_rgba(212,175,55,0.15)] overflow-hidden">
            
            {/* Kart İçi Hafif Parlama */}
            <div className="absolute -left-20 -top-20 w-64 h-64 bg-primary/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center relative z-10">
              
              {/* Sol Taraf: İkon */}
              <div className="shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-background to-background/50 border border-primary/20 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-500 group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                <FileText className="w-10 h-10 md:w-12 md:h-12 text-primary" strokeWidth={1.5} />
              </div>

              {/* Orta Taraf: Metin ve Liste */}
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-black text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  Altın Kelime Format Bible
                </h3>
                <p className="text-muted-foreground text-sm font-medium tracking-widest uppercase mb-6 flex items-center gap-2">
                  <span>45 SAYFA</span>
                  <span className="w-1 h-1 rounded-full bg-primary/50" />
                  <span>PDF</span>
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                  {bibleFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2.5 text-foreground/80 font-medium text-sm md:text-base">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Alt Taraf: Butonlar */}
            <div className="mt-10 pt-8 border-t border-border/50 flex flex-col sm:flex-row gap-4 relative z-10">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground font-bold px-8 py-6 rounded-xl text-base hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all flex items-center justify-center gap-2 flex-1 sm:flex-none hover:-translate-y-0.5"
              >
                <Download className="w-5 h-5" />
                PDF İndir
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary/30 text-foreground font-bold px-8 py-6 rounded-xl text-base hover:bg-primary/10 hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2 flex-1 sm:flex-none"
              >
                <ExternalLink className="w-5 h-5" />
                Online Oku
              </Button>
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  )
}