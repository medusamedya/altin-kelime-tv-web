"use client"

import { Tv, Smartphone, Gamepad2, ArrowRight } from "lucide-react"
import { Reveal } from "./reveal" // Sende olan Reveal componentini import etmeyi unutma
import Link from "next/link"

const ecosystemCards = [
  {
    icon: <Tv className="w-16 h-16 md:w-20 md:h-20 text-primary mb-8 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" strokeWidth={1.5} />,
    badge: "ANA PLATFORM",
    title: "TV Stüdyo Deneyimi",
    description: "Profesyonel televizyon stüdyosunda, dramatik ışıklandırma altında yarışmanın heyecanını yaşayın. 12 kamera açısı, 4K UHD yayın kalitesi.",
    linkText: "Stüdyo Detayları",
    linkHref: "#studio",
  },
  {
    icon: <Smartphone className="w-16 h-16 md:w-20 md:h-20 text-primary mb-8 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" strokeWidth={1.5} />,
    badge: "DİJİTAL UZANTI",
    title: "Mobil Uygulama",
    description: "TV'deki heyecan cebe sığdı. Günlük meydan okumalar, canlı yarışmalar ve Türkiye geneli liderlik tablosu.",
    list: ["Günlük Meydan Okuma", "Canlı Yarışmalar", "Liderlik Tablosu"],
    linkText: "Uygulama Hakkında",
    linkHref: "#app",
  },
  {
    icon: <Gamepad2 className="w-16 h-16 md:w-20 md:h-20 text-primary mb-8 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" strokeWidth={1.5} />,
    badge: "OYUN MEKANİĞİ",
    title: "Akıllı Oyun Sistemi",
    description: "TDK entegrasyonu, gerçek zamanlı kelime doğrulama, dinamik puanlama ve joker kartları ile dolu stratejik oyun deneyimi.",
    linkText: "Nasıl Oynanır",
    linkHref: "#rules",
  },
]

export function Ecosystem() {
  return (
    <section className="py-24 relative bg-background border-y border-border/50 overflow-hidden">
      
      {/* Arka Plan Süslemeleri */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] dark:opacity-5 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        {/* Üst Başlık */}
        <Reveal dir="up" className="text-center mb-16 md:mb-24">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm">
            <span className="text-xs font-bold text-primary tracking-[0.2em] uppercase">
              360° MARKA DENEYİMİ
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight">
            Televizyondan Mobil'e Uzanan <span className="gold-text">Ekosistem</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Altın Kelime sadece bir TV programı değil, çok kanallı bir marka deneyimidir.
          </p>
        </Reveal>

        {/* 3'lü Kart Grid'i */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {ecosystemCards.map((card, index) => (
            <Reveal 
              key={index} 
              delay={index * 150} 
              dir="up"
              className="h-full"
            >
              <div className="group h-full flex flex-col bg-card/40 backdrop-blur-md border border-primary/20 rounded-[2rem] overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(212,175,55,0.15)] hover:-translate-y-2">
                
                {/* Üst Kısım: İkon Alanı */}
                <div className="h-48 md:h-64 flex flex-col items-center justify-center bg-gradient-to-b from-background/50 to-transparent border-b border-border/50 relative overflow-hidden">
                   {/* Hover Glow Effect */}
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/20 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                   {card.icon}
                </div>

                {/* Alt Kısım: İçerik Alanı */}
                <div className="p-8 md:p-10 flex flex-col flex-grow">
                  
                  <span className="text-[10px] md:text-xs font-bold text-primary tracking-[0.15em] uppercase mb-3 block">
                    {card.badge}
                  </span>
                  
                  <h3 className="text-2xl md:text-3xl font-black text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {card.title}
                  </h3>
                  
                  <p className="text-muted-foreground font-medium leading-relaxed mb-6 flex-grow">
                    {card.description}
                  </p>

                  {/* Varsa Liste (Özellikle Mobil Uygulama kartı için) */}
                  {card.list && (
                    <ul className="mb-8 space-y-2">
                      {card.list.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm font-semibold text-foreground/80">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Link / CTA */}
                  <div className={`mt-auto pt-6 border-t border-border/50 ${!card.list ? "mt-8" : ""}`}>
                    <Link 
                      href={card.linkHref} 
                      className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary/80 transition-colors group/link"
                    >
                      {card.linkText} 
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}