"use client"

import { Reveal } from "@/components/reveal"

const requirements = [
  { label: "Minimum Alan", value: "200 m²" },
  { label: "Tavan Yüksekliği", value: "5+ metre" },
  { label: "LED Wall", value: "Min 6m genişlik" },
  { label: "Yarışmacı Podyumu", value: "5 adet, ark düzeni" },
  { label: "Zemin", value: "Mat siyah" },
]

// Podyumların kavisli (ark) yerleşimi
const podiums = [
  { id: 1, left: "20%", top: "52%" },
  { id: 2, left: "35%", top: "45%" },
  { id: 3, left: "50%", top: "40%" }, // Merkez (En Yüksek)
  { id: 4, left: "65%", top: "45%" },
  { id: 5, left: "80%", top: "52%" },
]

export function SetInstallation() {
  return (
    <section className="py-24 md:py-32 relative bg-background overflow-hidden border-y border-border/50">
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* --- SOL KOLON: Başlık ve Gereksinimler Listesi --- */}
          <Reveal dir="left" delay={100}>
            <div className="flex flex-col">
              
              {/* Üst Başlık (Referansındaki gibi yatay çizgili ve zarif) */}
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="w-12 h-[2px] bg-primary/80" />
                <span className="text-primary font-bold text-sm tracking-widest uppercase">
                  STÜDYO GEREKSİNİMLERİ
                </span>
              </div>
              
              {/* Ana Başlık */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-14 tracking-tight relative">
                Set <span className="gold-text">Kurulumu</span>
              </h2>

              {/* Gereksinimler Tablosu (Tema Uyumlu) */}
              <div className="flex flex-col border-t border-border/50">
                {requirements.map((req, index) => (
                  <div 
                    key={index} 
                    className="flex justify-between items-center py-5 border-b border-border/50 group hover:px-2 transition-all duration-300"
                  >
                    <span className="text-muted-foreground text-lg transition-colors group-hover:text-foreground">
                      {req.label}
                    </span>
                    <span className="text-foreground font-bold text-lg tracking-wide">
                      {req.value}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </Reveal>

          {/* --- SAĞ KOLON: Mimari Blueprint (Yerleşim Planı) --- */}
          <Reveal dir="right" delay={200} className="w-full">
            
            {/* Mimari Plan Kapsayıcısı (Tema Uyumlu Blueprint) */}
            <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-background via-secondary/30 to-muted rounded-3xl border border-border overflow-hidden shadow-2xl">
              
              {/* Ekran İçi Soft Parlama ve Grid */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_100%)] pointer-events-none" />
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 dark:opacity-5 pointer-events-none" />

              {/* 1. LED WALL */}
              <div className="absolute top-[12%] left-[15%] right-[15%] h-[14%] border-[1.5px] border-[#D4AF37] rounded-md flex items-center justify-center bg-background/80 backdrop-blur-sm z-10 shadow-[0_0_15px_rgba(212,175,55,0.1)] overflow-hidden">
                <span className="text-[#D4AF37] font-medium tracking-widest text-sm relative z-10">
                  LED WALL
                </span>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.1) 1px, transparent 1px)] opacity-30" style={{ backgroundSize: '100% 4px' }} />
              </div>

              {/* 2. PODYUMLAR */}
              {podiums.map((podium) => (
                <div
                  key={podium.id}
                  className="absolute w-[11%] aspect-[2/3] border-[1.5px] border-[#D4AF37] rounded-md bg-background/90 backdrop-blur-md flex flex-col items-center justify-center gap-3 -translate-x-1/2 z-20 shadow-lg hover:shadow-[0_15px_25px_rgba(212,175,55,0.4)] transition-all duration-500"
                  style={{ left: podium.left, top: podium.top }}
                >
                  <div className="w-4 h-4 rounded-full bg-[#D4AF37]/80 shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
                  <span className="text-foreground font-medium text-sm">
                    {podium.id}
                  </span>
                </div>
              ))}

              {/* 3. SAHNE ALANI */}
              <div className="absolute top-[65%] left-[20%] right-[20%] h-[15%] border border-dashed border-border/40 rounded-[50%] flex items-center justify-center z-0 bg-secondary/10 backdrop-blur-sm">
                <span className="text-muted-foreground/40 text-[11px] tracking-[0.15em] uppercase font-medium">
                  SAHNE ALANI
                </span>
              </div>

              {/* 4. ÖLÇÜM ÇİZGİSİ */}
              <div className="absolute bottom-[10%] left-[15%] right-[15%] border-b border-border/40">
                <div className="absolute -left-px -bottom-1.5 w-px h-3 bg-border/40" />
                <div className="absolute -right-px -bottom-1.5 w-px h-3 bg-border/40" />
                <span className="absolute left-1/2 -translate-x-1/2 top-2 text-muted-foreground/50 text-xs font-medium">
                  Min. 15m
                </span>
              </div>

            </div>

          </Reveal>
        </div>

      </div>
    </section>
  )
}