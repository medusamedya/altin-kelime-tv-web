"use client"

import { Tv, Bell } from "lucide-react"
import { Reveal } from "@/components/reveal"

const schedule = [
  { day: "Pazartesi", time: "20:00", type: "YENİ BÖLÜM", isFinale: false },
  { day: "Salı", time: "20:00", type: "YENİ BÖLÜM", isFinale: false },
  { day: "Çarşamba", time: "20:00", type: "YENİ BÖLÜM", isFinale: false },
  { day: "Perşembe", time: "20:00", type: "YENİ BÖLÜM", isFinale: false },
  { day: "Cuma", time: "20:00", type: "YENİ BÖLÜM", isFinale: false },
  { day: "Cumartesi", time: "21:00", type: "HAFTA FİNALİ", isFinale: true },
]

export function BroadcastSchedule() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      
      {/* Arka Plan Glow Efektleri */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        
        {/* Üst Başlık Alanı */}
        <Reveal dir="up" className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm">
            <span className="text-[10px] md:text-xs font-black text-primary tracking-[0.2em] uppercase">
              YAYIN AKIŞI
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-4 tracking-tight">
            Her Akşam <span className="gold-text">Ekranlarda</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Hafta içi yeni bölüm, Cumartesi büyük final
          </p>
        </Reveal>

        {/* Günler Grid'i (Yayın Akışı) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 mb-12">
          {schedule.map((item, index) => (
            <Reveal 
              key={index} 
              delay={index * 100} 
              dir="up"
            >
              <div 
                className={`relative flex flex-col items-center justify-center py-6 px-2 rounded-2xl border backdrop-blur-md transition-all duration-500 hover:-translate-y-1 cursor-default ${
                  item.isFinale 
                    ? "bg-primary/10 border-primary/40 shadow-[0_0_20px_rgba(212,175,55,0.15)] hover:bg-primary/20 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]" 
                    : "bg-card/40 border-border/50 hover:border-primary/30 hover:bg-card/60"
                }`}
              >
                {/* Final günü için arka plan süzülmesi */}
                {item.isFinale && (
                  <div className="absolute top-0 w-full h-full bg-gradient-to-b from-primary/20 to-transparent opacity-50 pointer-events-none rounded-2xl" />
                )}

                <span className={`text-xs md:text-sm font-medium mb-3 relative z-10 ${item.isFinale ? "text-primary/80" : "text-muted-foreground"}`}>
                  {item.day}
                </span>
                
                <span className={`text-2xl md:text-3xl font-black mb-2 relative z-10 ${item.isFinale ? "text-primary drop-shadow-md" : "text-foreground"}`}>
                  {item.time}
                </span>
                
                <span className={`text-[10px] font-bold tracking-[0.15em] uppercase relative z-10 ${item.isFinale ? "text-primary" : "text-muted-foreground/70"}`}>
                  {item.type}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Yayın Kanalı & Bülten Kartı */}
        <Reveal delay={600} dir="up">
          <div className="max-w-2xl mx-auto bg-card/40 backdrop-blur-xl border border-border/50 rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden group hover:border-primary/30 transition-colors duration-500">
            
            {/* Kart İçi Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-primary/10 rounded-full blur-[50px] pointer-events-none" />

            <div className="flex flex-col items-center text-center relative z-10">
              
              {/* TV İkonu */}
              <div className="w-16 h-16 rounded-2xl bg-background/80 border border-primary/20 flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-500">
                <Tv className="w-8 h-8 text-primary" strokeWidth={1.5} />
              </div>

              <h3 className="text-2xl md:text-3xl font-black text-foreground mb-2">
                Yayın Kanalı
              </h3>
              <p className="text-muted-foreground font-medium mb-8">
                Yakında Açıklanacak
              </p>

              {/* Email Formu */}
              <form 
                className="w-full max-w-md flex flex-col sm:flex-row gap-3"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="relative flex-1">
                  <input 
                    type="email" 
                    placeholder="E-posta adresiniz" 
                    required
                    className="w-full h-12 md:h-14 px-5 rounded-xl md:rounded-2xl bg-background/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-muted-foreground/50 text-foreground"
                  />
                </div>
                <button 
                  type="submit" 
                  className="h-12 md:h-14 px-6 md:px-8 rounded-xl md:rounded-2xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <Bell className="w-5 h-5" />
                  <span>Haberdar Ol</span>
                </button>
              </form>

            </div>
          </div>
        </Reveal>

      </div>
    </section>
  )
}