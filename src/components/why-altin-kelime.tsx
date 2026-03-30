"use client"

import { Brain, Zap, Users, TrendingDown } from "lucide-react"
import { Reveal } from "./reveal" // Sende olan Reveal componentinin yolu doğru olsun

// Kart Verileri
const features = [
  {
    icon: <Brain className="w-7 h-7 text-primary" />,
    title: "Bilgi + Strateji",
    description: "Yarışmacılar salt kelime bilgisiyle değil, puan yönetimi ve stratejik kararlarıyla da öne çıkar.",
  },
  {
    icon: <Zap className="w-7 h-7 text-primary" />,
    title: "Yüksek Tempo",
    description: "Harflerin kademeli açılması ve puan rekabeti, oyunun başından sonuna tempoyu sürekli canlı tutar.",
  },
  {
    icon: <Users className="w-7 h-7 text-primary" />,
    title: "İzleyici Katılımı",
    description: "İzleyici pasif değil. Ekran başındakiler de harfleri takip ederek yarışmaya zihinsel olarak dahil olur.",
  },
  {
    icon: <TrendingDown className="w-7 h-7 text-primary" />,
    title: "Maliyet Etkin Prodüksiyon",
    description: "Tek stüdyo kurulumu, günde 3-5 bölüm çekim kapasitesi, sonsuz kelime kombinasyonu ile bitmeyen içerik.",
  },
]

export function WhyAltinKelime() {
  return (
    <section className="py-24 relative overflow-hidden bg-background border-y border-border/50">
      
      {/* Arka Plan Glow ve Grid Efektleri (Diğer sectionlarla tutarlı olması için) */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] dark:opacity-5 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* Üst Başlık Alanı - Reveal ile aşağıdan gelir */}
        <Reveal dir="up" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black tracking-[0.2em] uppercase mb-6 shadow-sm">
            FORMAT ÖZELLİKLERİ
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight text-foreground">
            Neden <span className="gold-text">Altın Kelime</span>?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed">
            Klasik bilgi yarışmalarından farklı kılan özellikler
          </p>
        </Reveal>

        {/* 4'lü Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
          {features.map((feature, index) => (
            <Reveal 
              key={index} 
              delay={index * 150} 
              dir={index % 2 === 0 ? "left" : "right"} // Çapraz animasyon efekti
              className="h-full"
            >
              <div className="group h-full bg-card/40 backdrop-blur-md border border-border/50 rounded-[2rem] p-8 flex flex-col hover:border-primary/40 hover:bg-card/60 transition-all duration-500 relative overflow-hidden hover:shadow-[0_0_30px_rgba(212,175,55,0.1)]">
                
                {/* Kart İçi Dekorasyon (Parlama) */}
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/15 transition-colors pointer-events-none" />

                {/* İkon Konteyneri */}
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                  {feature.icon}
                </div>

                {/* Başlık ve Açıklama */}
                <h3 className="text-2xl font-black text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground font-medium leading-relaxed flex-grow">
                  {feature.description}
                </p>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}