"use client"

import { CalendarHeart, Download, Mail, PhoneCall } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"

export function FinalCTA() {
  const letters = ["A", "L", "T", "I", "N", "K", "E", "L", "İ", "M", "E"]

  return (
    <section className="relative py-32 md:py-40 overflow-hidden bg-background flex items-center justify-center">
      
      {/* Arka Plan Süslemeleri */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] dark:opacity-5 pointer-events-none" />
      
      {/* Merkezdeki Güçlü Altın Işık */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/20 rounded-full blur-[100px] md:blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        
        {/* Etkileşimli Harf Dizilimi */}
        <Reveal dir="up" className="mb-12">
          <div className="flex flex-wrap justify-center gap-1.5 md:gap-2 max-w-[90vw]">
            {letters.map((letter, index) => (
              <div 
                key={index}
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center font-black text-sm sm:text-lg md:text-xl rounded-md md:rounded-lg bg-gradient-to-br from-primary to-primary/80 border border-primary/50 text-primary-foreground shadow-[0_0_15px_rgba(212,175,55,0.3)] cursor-default transition-all duration-300 hover:-translate-y-2 hover:scale-110 hover:shadow-[0_0_25px_rgba(212,175,55,0.6)]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {letter}
              </div>
            ))}
          </div>
        </Reveal>

        {/* Başlık ve Açıklama */}
        <Reveal delay={150} dir="up" className="max-w-3xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-background/50 backdrop-blur-md border border-primary/30 text-primary text-[10px] md:text-xs font-black tracking-[0.25em] uppercase mb-8 shadow-sm">
            GÖRÜŞME TALEBİ
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-foreground mb-6 tracking-tight text-balance">
            Formatı Kanalınıza <span className="gold-text">Getirin</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground font-medium mb-12 leading-relaxed text-balance">
            Türkiye'nin en heyecanlı kelime yarışması formatını kanalınızda yayınlamak için bizimle iletişime geçin. Detaylı sunum ve demo için randevu alın.
          </p>
        </Reveal>

        {/* Butonlar */}
        <Reveal delay={300} dir="up" className="w-full">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-primary text-primary-foreground font-bold px-8 py-7 rounded-2xl text-lg hover:bg-primary/90 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all flex items-center gap-2"
            >
              <CalendarHeart className="w-5 h-5" />
              Görüşme Talep Et
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="w-full sm:w-auto border-primary/40 text-foreground font-bold px-8 py-7 rounded-2xl text-lg hover:bg-primary/10 hover:border-primary hover:text-primary transition-all flex items-center gap-2 backdrop-blur-sm"
            >
              <Download className="w-5 h-5" />
              Format Bible İndir
            </Button>
          </div>

          {/* İletişim Bilgileri (Glassmorphism Kapsüller) */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 pt-8 border-t border-border/50">
            <a 
              href="mailto:format@altinkelime.tv" 
              className="group flex items-center gap-3 px-6 py-3 rounded-full bg-card/30 hover:bg-card/80 border border-border/50 hover:border-primary/30 backdrop-blur-md transition-all duration-300"
            >
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="text-muted-foreground group-hover:text-foreground font-medium transition-colors">format@altinkelime.tv</span>
            </a>
            
            <a 
              href="tel:+905537353500" 
              className="group flex items-center gap-3 px-6 py-3 rounded-full bg-card/30 hover:bg-card/80 border border-border/50 hover:border-primary/30 backdrop-blur-md transition-all duration-300"
            >
              <PhoneCall className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="text-muted-foreground group-hover:text-foreground font-medium tracking-wide transition-colors">+90 553 735 35 00</span>
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  )
}