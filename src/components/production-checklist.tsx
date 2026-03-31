"use client"

import { FileText, CheckCircle2, Download } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"

// Görseldeki sıralamaya uygun olarak (sol-sağ, sol-sağ mantığıyla) dizildi
const checklistItems = [
  "Stüdyo gereksinimleri",
  "Kamera ve lens listesi",
  "Işık planı",
  "Ses ekipmanları",
  "Grafik sistem gereksinimleri",
  "Ağ altyapısı",
  "Personel ihtiyacı"
]

export function ProductionChecklist() {
  return (
    <section className="py-24 md:py-32 relative bg-background overflow-hidden border-t border-border/50">
      
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        
        {/* --- ÜST BAŞLIK ALANI --- */}
        <Reveal dir="up" className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-primary/80" />
            <span className="text-primary font-bold text-[11px] md:text-xs tracking-widest uppercase">
              EKİPMAN LİSTESİ
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tight">
            Prodüksiyon <span className="gold-text">Kontrol Listesi</span>
          </h2>
        </Reveal>

        {/* --- İNDİRME KARTI (CTA) --- */}
        <Reveal dir="up" delay={200}>
          <div className="group bg-card/40 backdrop-blur-xl border border-border/50 rounded-3xl p-8 md:p-12 shadow-2xl hover:border-primary/40 hover:shadow-[0_15px_40px_-10px_rgba(212,175,55,0.15)] transition-all duration-500 relative overflow-hidden">
            
            {/* Kart İçi Soft Glow */}
            <div className="absolute -left-20 -top-20 w-64 h-64 bg-primary/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Üst Kısım: İkon ve Belge Bilgisi */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-10 relative z-10">
              
              {/* Altın Çerçeveli İkon Kapsayıcı */}
              <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-2xl bg-background/50 border border-primary/40 flex items-center justify-center shadow-inner group-hover:scale-105 group-hover:bg-primary/10 transition-all duration-500">
                <FileText className="w-8 h-8 md:w-10 md:h-10 text-primary" strokeWidth={1.5} />
              </div>
              
              <div>
                <h3 className="text-2xl md:text-3xl font-black text-foreground mb-2 group-hover:text-primary transition-colors duration-300 uppercase tracking-wide">
                  Altın Kelime Teknik Rider
                </h3>
                <p className="text-muted-foreground text-base md:text-lg font-medium">
                  Versiyon 2.0 | 12 Sayfa
                </p>
              </div>
            </div>

            {/* Orta Kısım: İçerik Listesi */}
            <div className="mb-12 relative z-10">
              <h4 className="text-lg font-bold text-foreground mb-6">
                İçerik:
              </h4>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                {checklistItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="font-medium text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Alt Kısım: PDF İndir Butonu */}
            <div className="relative z-10">
              <Button 
                size="lg" 
                className="w-full bg-primary text-primary-foreground font-bold py-7 rounded-2xl text-lg hover:bg-primary/90 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all flex items-center justify-center gap-3"
              >
                <Download className="w-6 h-6" strokeWidth={2.5} />
                PDF İndir
              </Button>
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  )
}