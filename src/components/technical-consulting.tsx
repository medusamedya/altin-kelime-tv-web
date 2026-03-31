"use client"

import { Building, GraduationCap, Play, Headphones, Mail, Phone, CalendarHeart } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: <Building className="w-6 h-6" />,
    title: "Stüdyo Kurulum Danışmanlığı",
    desc: "Yerinde veya uzaktan teknik destek"
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Teknik Ekip Eğitimi",
    desc: "Kapsamlı operasyon eğitimi"
  },
  {
    icon: <Play className="w-6 h-6 ml-1" />, // Play ikonu görsel denge için hafif sağa itilir
    title: "Pilot Bölüm Desteği",
    desc: "İlk bölüm prodüksiyon desteği"
  },
  {
    icon: <Headphones className="w-6 h-6" />,
    title: "Uzaktan Teknik Destek",
    desc: "7/24 teknik yardım hattı"
  }
]

export function TechnicalConsulting() {
  return (
    <section className="py-24 md:py-32 relative bg-background overflow-hidden border-t border-border/50">
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        {/* Üst Başlık Alanı */}
        <Reveal dir="up" className="text-center mb-16 md:mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm relative overflow-hidden group">
            <span className="text-[10px] md:text-xs font-black text-primary tracking-[0.2em] uppercase relative z-10">
              DESTEK & EĞİTİM
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tight">
            Teknik <span className="gold-text">Danışmanlık</span>
          </h2>
        </Reveal>

        {/* 4'lü Hizmet Kartları Grid'i */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-20">
          {services.map((service, index) => (
            <Reveal 
              key={index} 
              delay={index * 100} 
              dir="up"
              className="h-full"
            >
              <div className="group h-full flex flex-col items-center text-center p-8 md:p-10 bg-card/40 backdrop-blur-md border border-border/50 rounded-3xl hover:border-primary/40 hover:bg-card/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_40px_-10px_rgba(212,175,55,0.15)] relative overflow-hidden">
                
                {/* İkon Kapsayıcı */}
                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-all duration-500 shadow-inner group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] relative z-10">
                  {service.icon}
                </div>
                
                {/* Başlık ve Açıklama */}
                <div className="relative z-10">
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground font-medium leading-relaxed">
                    {service.desc}
                  </p>
                </div>
                
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA (Call to Action) Alt Bölüm */}
        <Reveal dir="up" delay={400}>
          <div className="w-full max-w-4xl mx-auto bg-gradient-to-br from-card/60 to-background backdrop-blur-xl border border-border/50 rounded-[2.5rem] p-10 md:p-14 text-center relative overflow-hidden shadow-2xl">
            
            {/* CTA İçi Glow ve Efektler */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />

            <div className="relative z-10">
              <h3 className="text-2xl md:text-4xl font-black text-foreground mb-8 tracking-tight text-balance">
                Prodüksiyon ekibimizle görüşme ayarlayın
              </h3>
              
              {/* İletişim Bilgileri */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-12 mb-10">
                <a href="mailto:teknik@altinkelime.tv" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-lg">teknik@altinkelime.tv</span>
                </a>
                <a href="tel:+905537353500" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-lg">+90 553 735 35 00</span>
                </a>
              </div>

              {/* Aksiyon Butonu */}
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground font-bold px-10 py-7 rounded-2xl text-lg hover:bg-primary/90 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all flex items-center justify-center gap-2 mx-auto"
              >
                <CalendarHeart className="w-5 h-5" />
                Danışmanlık Talep Et
              </Button>
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  )
}