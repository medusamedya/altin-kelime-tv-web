"use client"

import { Tv, PackageOpen, Gift, Share2, Star, Users, Mail, ArrowRight } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"

const sponsorshipBenefits = [
  { icon: <Tv className="w-6 h-6" />, title: "Prime-time görünürlük", desc: "Milyonlarca izleyiciye ulaşan altın saatlerde marka konumlandırma." },
  { icon: <PackageOpen className="w-6 h-6" />, title: "Ürün yerleştirme", desc: "Senaryoya ve oyun akışına doğal, akılda kalıcı entegrasyonlar." },
  { icon: <Gift className="w-6 h-6" />, title: "Ödül sponsorluğu", desc: "Bölüm veya hafta finali şampiyonlarına markanızdan ödüller." },
  { icon: <Share2 className="w-6 h-6" />, title: "360° Sosyal medya", desc: "TV ekranından dijitale uzanan, viral olmaya müsait kampanyalar." },
  { icon: <Star className="w-6 h-6" />, title: "Özel etkinlik hakları", desc: "Markanıza özel stüdyo içi etkinlikler ve VIP seyirci deneyimleri." },
  { icon: <Users className="w-6 h-6" />, title: "Marka elçileri", desc: "Yarışmanın öne çıkan şampiyonları ile özel reklam anlaşmaları." },
]

export function SponsorshipCTA() {
  return (
    <section className="py-32 relative overflow-hidden bg-background border-y border-border/50">
      
      {/* Arka Plan Süslemeleri - Prestij hissi için koyu tonlarda büyük bir radar/grid ve altın parlamalar eklendi */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.20)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_bottom_right,rgba(212,175,55,0.20)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        {/* Üst Başlık Alanı */}
        <Reveal dir="up" className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black tracking-[0.25em] uppercase mb-6 shadow-sm">
            İŞ BİRLİĞİ & SPONSORLUK
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground mb-6 tracking-tight">
            Markanız <span className="gold-text inline-block hover:scale-105 transition-transform cursor-default">Altın</span> Harflerle<br className="hidden md:block"/> Ekranda Yer Alsın
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-3xl mx-auto leading-relaxed">
            Türkiye'nin yeni fenomen yarışmasında yerinizi alın, hedef kitlenize en etkileşimli ve prestijli yoldan ulaşın.
          </p>
        </Reveal>

        {/* Avantajlar Grid'i - Basit kutular yerine detaylı ve modern kartlara dönüştürüldü */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {sponsorshipBenefits.map((benefit, index) => (
            <Reveal key={index} delay={index * 100} dir="up">
              <div className="group h-full bg-card/40 backdrop-blur-md border border-border/50 p-8 rounded-[2rem] hover:border-primary/40 hover:bg-card/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(212,175,55,0.15)] overflow-hidden relative">
                
                {/* Kart içi zarif gradient parlama */}
                <div className="absolute -right-12 -top-12 w-40 h-40 bg-primary/10 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-500 shadow-inner group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                  {benefit.icon}
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  {benefit.desc}
                </p>
                
              </div>
            </Reveal>
          ))}
        </div>

        {/* Alt CTA (Call to Action) Kutusu - Yatırımcıyı harekete geçirecek premium final */}
        <Reveal delay={400} dir="up">
          <div className="max-w-4xl mx-auto relative group">
            
            {/* CTA Kutusu Dış Parlama */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-primary/10 to-primary/30 rounded-[3rem] blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200" />
            
            <div className="relative bg-card/80 backdrop-blur-xl border border-primary/30 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 overflow-hidden shadow-2xl">
              
              {/* İç dekoratif çizgi */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/50 via-primary to-primary/50" />

              <div className="text-center md:text-left flex-1 z-10">
                <h3 className="text-3xl md:text-4xl font-black text-foreground mb-4">
                  Projeye <span className="gold-text">Ortak</span> Olun
                </h3>
                <p className="text-lg text-muted-foreground font-medium mb-6 md:mb-0">
                  Sponsorluk fırsatları, özel entegrasyonlar ve medya kiti için ekibimizle doğrudan iletişime geçin.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-center gap-4 z-10 w-full md:w-auto">
                <a 
                  href="mailto:sponsor@altinkelime.tv" 
                  className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-background/50 border border-border/50 text-foreground font-medium hover:bg-secondary hover:border-primary/50 transition-colors w-full sm:w-auto"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  <span>sponsor@altinkelime.tv</span>
                </a>
                
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground font-bold px-8 py-7 rounded-2xl text-lg hover:bg-primary/90 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all flex items-center gap-2 w-full sm:w-auto"
                >
                  Teklif Alın <ArrowRight className="w-5 h-5" />
                </Button>
              </div>

            </div>
          </div>
        </Reveal>

      </div>
    </section>
  )
}