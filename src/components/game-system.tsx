"use client"

import { Reveal } from "@/components/reveal"

// --- KART İÇİ MİKRO HARF BİLEŞENİ ---
// 4 kolonlu yapıda harflerin taşmasını engellemek için özel optimize edildi.
const MiniTile = ({ letter, variant = "default" }: { letter: string, variant?: "default" | "gold" | "empty" }) => {
  return (
    <div className={`flex items-center justify-center font-black rounded-md border shadow-sm w-7 h-7 md:w-8 md:h-8 text-xs md:text-sm transition-all duration-300 hover:-translate-y-1 hover:scale-110 ${
      variant === "gold" 
        ? 'bg-gradient-to-br from-primary to-primary/80 border-primary/50 text-primary-foreground shadow-[0_0_10px_rgba(212,175,55,0.3)]' 
        : variant === "empty" 
          ? 'bg-secondary/30 border-dashed border-muted-foreground/30 text-muted-foreground' 
          : 'bg-card border-border text-foreground'
    }`}>
      {letter}
    </div>
  )
}

// --- ADIM VERİLERİ ---
const steps = [
  {
    num: "01",
    title: "Kartlar Dağıtılır",
    desc: "Her yarışmacıya gizli 2 harf verilir, masaya 5 kapalı harf konur.",
    renderVisual: () => (
      <div className="flex gap-1.5">
        {["?", "?", "?", "?", "?"].map((l, i) => (
          <MiniTile key={i} letter={l} variant="empty" />
        ))}
      </div>
    )
  },
  {
    num: "02",
    title: "Risk ve Strateji",
    desc: "Puanınızı masaya sürün veya çekilin. Her hamle ödülü büyütür.",
    renderVisual: () => (
      <div className="flex gap-3">
        <div className="px-4 py-1.5 rounded-lg bg-background/50 border border-border text-muted-foreground font-bold text-xs md:text-sm cursor-default hover:bg-secondary/50 transition-colors">
          Pas
        </div>
        <div className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-bold text-xs md:text-sm shadow-[0_0_15px_rgba(212,175,55,0.4)] cursor-default hover:scale-105 transition-transform">
          Artır
        </div>
      </div>
    )
  },
  {
    num: "03",
    title: "Büyük Açılış",
    desc: "Harfler teker teker açılırken kelime ihtimalleri canlanır.",
    renderVisual: () => (
      <div className="flex gap-1 md:gap-1.5">
        {["S", "T", "R", "A"].map((l, i) => (
          <MiniTile key={i} letter={l} variant="gold" />
        ))}
        {["?", "?", "?"].map((l, i) => (
          <MiniTile key={i+4} letter={l} variant="empty" />
        ))}
      </div>
    )
  },
  {
    num: "04",
    title: "Altın Vuruş",
    desc: "TDK onaylı en uzun kelimeyi üreten masadaki tüm puanları süpürür.",
    renderVisual: () => (
      <div className="flex flex-col items-center gap-3">
        <div className="flex gap-1">
          {/* 8 harf olduğu için mobilde taşmasın diye özel scale ayarı */}
          <div className="flex gap-1 transform scale-90 sm:scale-100 origin-center">
            {["S", "T", "R", "A", "T", "E", "J", "İ"].map((l, i) => (
              <MiniTile key={i} letter={l} variant="gold" />
            ))}
          </div>
        </div>
        <span className="text-[10px] font-black text-primary tracking-[0.2em] uppercase animate-pulse">
          ŞAMPİYON
        </span>
      </div>
    )
  }
]

export function GameSystem() {
  return (
    <section className="py-24 relative overflow-hidden bg-background border-y border-border/50">
      
      {/* Arka Plan Efektleri */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        {/* Başlık Alanı */}
        <Reveal dir="up" className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black tracking-[0.2em] uppercase mb-6 shadow-sm">
            OYUN SİSTEMİ
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 tracking-tight text-foreground">
            4 Adımda <span className="gold-text">Altın Kelime</span>
          </h2>
          <p className="text-lg text-muted-foreground font-medium max-w-xl mx-auto leading-relaxed">
            Kurallar basit, rekabet amansız
          </p>
        </Reveal>

        {/* 4'lü Kart Grid'i */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
          {steps.map((step, index) => (
            <Reveal 
              key={index} 
              delay={index * 150} 
              dir="up" 
              className="h-full"
            >
              <div className="group h-full bg-card/40 backdrop-blur-md border border-border/50 rounded-[2rem] p-6 flex flex-col hover:border-primary/40 hover:bg-card/60 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] transition-all duration-500 relative overflow-hidden">
                
                {/* Görsel İçerik Alanı (Kartın Üst Kısmı) */}
                <div className="h-32 mb-8 relative flex items-center justify-center border-b border-border/40">
                  
                  {/* Arka Plan Dev Numara */}
                  <span className="absolute top-0 right-0 text-6xl md:text-7xl font-black text-primary/5 group-hover:text-primary/10 transition-colors duration-500 select-none pointer-events-none -mt-4 -mr-2">
                    {step.num}
                  </span>
                  
                  {/* Hover Glow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-primary/10 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Görsel Bileşenler */}
                  <div className="relative z-10">
                    {step.renderVisual()}
                  </div>

                </div>

                {/* Metin Alanı (Kartın Alt Kısmı) */}
                <h3 className="text-xl font-black text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-muted-foreground font-medium text-sm md:text-base leading-relaxed">
                  {step.desc}
                </p>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}