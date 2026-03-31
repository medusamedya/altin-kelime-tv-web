"use client"

import { Reveal } from "@/components/reveal"
import { ShieldAlert, Users, BrainCircuit, Target } from "lucide-react"

export function Overview() {
  const features = [
    {
      icon: <ShieldAlert className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-500" />,
      title: "Risk Yönetimi",
      desc: "Zamanında çekilmek veya puanı masaya sürmek."
    },
    {
      icon: <Users className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-500" />,
      title: "Rakip Analizi",
      desc: "Diğer yarışmacıların hamlelerini öngörmek."
    },
    {
      icon: <BrainCircuit className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-500" />,
      title: "Stratejik Kararlar",
      desc: "Doğru harfi beklemek veya eldekiyle yetinmek."
    },
    {
      icon: <Target className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-500" />,
      title: "Puan Baskısı",
      desc: "Zaman daraldıkça artan psikolojik stres yönetimi."
    }
  ]

  return (
    <section className="py-24 md:py-32 relative bg-background overflow-hidden border-y border-border/50">
      
    

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        {/* Ortalanmış Üst Başlık */}
        <Reveal dir="up" className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] md:text-xs font-black tracking-[0.2em] uppercase mb-6 shadow-sm">
            GENEL BAKIŞ
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tight mb-6">
            Altın Kelime <span className="gold-text">Nedir?</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-3xl mx-auto leading-relaxed text-balance">
            Altın Kelime, kelime bilgisi ve stratejik karar alma unsurlarını bir araya getiren modern bir televizyon yarışması formatıdır. Her bölümde 5 yarışmacı, verilen 7 harfle en uzun ve geçerli Türkçe kelimeyi üretmeye çalışır. Ancak bu <span className="text-foreground font-bold">sadece bir kelime oyunu değildir</span> — yarışmacılar aynı zamanda:
          </p>
        </Reveal>

        {/* 4'lü Kart Grid'i */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch mb-16">
          {features.map((feature, index) => (
            <Reveal 
              key={index} 
              delay={index * 150} 
              dir="up" 
              className="h-full"
            >
              <div className="group h-full bg-card/40 backdrop-blur-md border border-border/50 rounded-[2rem] p-8 flex flex-col hover:border-primary/40 hover:bg-card/60 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] transition-all duration-500 relative overflow-hidden">
                
                {/* Kart İçi Dekorasyon (Parlama) */}
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/15 transition-colors duration-500 pointer-events-none" />

                {/* İkon Konteyneri */}
                <div className="w-16 h-16 rounded-2xl bg-background/80 border border-primary/20 flex items-center justify-center mb-6 shadow-inner relative z-10">
                  {feature.icon}
                </div>

                {/* Metin Alanı */}
                <h3 className="text-xl font-black text-foreground mb-3 group-hover:text-primary transition-colors duration-300 relative z-10">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground font-medium text-sm md:text-base leading-relaxed relative z-10">
                  {feature.desc}
                </p>

              </div>
            </Reveal>
          ))}
        </div>

        {/* Vurgulu Kapanış Cümlesi */}
        <Reveal dir="up" delay={600} className="text-center">
           <div className="inline-block px-8 py-4 rounded-2xl border border-primary/30 bg-primary/5 backdrop-blur-sm shadow-[0_0_20px_rgba(212,175,55,0.05)]">
             <p className="text-primary font-black text-xl md:text-2xl tracking-wide uppercase drop-shadow-sm">
               Her harf açıldığında oyunun dengesi değişir.
             </p>
           </div>
        </Reveal>

      </div>
    </section>
  )
}