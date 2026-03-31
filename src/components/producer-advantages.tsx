"use client"

import { Reveal } from "@/components/reveal"

const advantages = [
  {
    value: "1",
    title: "Sabit Set",
    desc: "Tek stüdyo kurulumu, dekor değişikliği yok"
  },
  {
    value: "3-5",
    title: "Bölüm/Gün",
    desc: "Günde çoklu bölüm kapasitesi"
  },
  {
    value: "∞",
    title: "Kelime",
    desc: "Sonsuz içerik, tekrar yok"
  }
]

export function ProducerAdvantages() {
  return (
    <section className="py-24 md:py-32 relative bg-background overflow-hidden border-t border-border/50">
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* --- ÜST BAŞLIK ALANI (Standart Tasarım) --- */}
        <Reveal dir="up" className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-primary/80" />
            <span className="text-primary font-bold text-[11px] md:text-xs tracking-widest uppercase">
              YAPIMCI AVANTAJLARI
            </span>
            <div className="w-12 h-[2px] bg-primary/80" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tight">
            Neden Altın Kelime Prodüksiyonu <span className="gold-text">Kolay?</span>
          </h2>
        </Reveal>

        {/* --- 3'LÜ KART GRID'İ --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {advantages.map((item, index) => (
            <Reveal 
              key={index} 
              delay={index * 150} 
              dir="up"
              className="h-full"
            >
              <div className="group h-full flex flex-col items-center justify-center text-center bg-card/40 backdrop-blur-md border border-border/50 rounded-3xl p-10 hover:border-primary/40 hover:bg-card/60 transition-all duration-500 relative overflow-hidden hover:-translate-y-2 hover:shadow-[0_15px_40px_-10px_rgba(212,175,55,0.15)]">
                
                {/* Kart İçi Merkezden Yayılan Glow (Hover'da belirginleşir) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-primary/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                {/* Devasa Değer (Rakam/Sonsuzluk) */}
                <div className="text-7xl lg:text-[7.5rem] font-black text-[#D4AF37] mb-6 leading-none drop-shadow-sm group-hover:scale-110 transition-transform duration-500 relative z-10 select-none">
                  {item.value}
                </div>
                
                {/* Metinler */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base font-medium leading-relaxed text-balance">
                    {item.desc}
                  </p>
                </div>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}