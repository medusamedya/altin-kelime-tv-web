"use client"

import { Layers, Target, Sparkles, Trophy, ChevronRight } from "lucide-react"
import { Reveal } from "@/components/reveal"

const timelineSteps = [
  {
    num: "01",
    stage: "AŞAMA 1: DAĞITIM",
    title: "Kartlar Dağıtılır",
    icon: <Layers className="w-6 h-6 text-primary" />,
    bullets: [
      "Her yarışmacıya 2 gizli harf verilir",
      "Masanın ortasına 5 kapalı harf konur",
      "Toplam 7 harf ile kelime üretilecek",
      "Başlangıç puanı: 2,500 Altın"
    ]
  },
  {
    num: "02",
    stage: "AŞAMA 2: STRATEJİ",
    title: "Risk ve Strateji",
    icon: <Target className="w-6 h-6 text-primary" />,
    bullets: [
      "Her harf açılışında karar anı",
      "Puan artırarak masadaki ödülü büyüt",
      "Pas geçerek güvenli kal",
      "Çekilerek puanlarını koru",
      "Rakiplerin hamlelerini oku"
    ]
  },
  {
    num: "03",
    stage: "AŞAMA 3: AÇILIŞ",
    title: "Büyük Açılış",
    icon: <Sparkles className="w-6 h-6 text-primary" />,
    bullets: [
      "Harfler teker teker açılır",
      "Her açılışta gerilim artar",
      "Kelime ihtimalleri şekillenir",
      "60 saniye geri sayım başlar"
    ]
  },
  {
    num: "04",
    stage: "AŞAMA 4: FİNAL",
    title: "Altın Vuruş",
    icon: <Trophy className="w-6 h-6 text-primary" />,
    bullets: [
      "TDK onaylı en uzun kelime kazanır",
      "Eşitlikte hızlı gönderen avantajlı",
      "Kazanan masadaki tüm puanları alır",
      "Tur şampiyonu belirlenir"
    ]
  }
]

export function HowToPlayTimeline() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-background">
      
      {/* Arka Plan Efektleri */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03)_0%,transparent_60%)] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* Üst Başlık Alanı */}
        <Reveal dir="up" className="text-center mb-20 md:mb-32">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] md:text-xs font-black tracking-[0.2em] uppercase mb-6 shadow-sm">
            OYUN MEKANİĞİ
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-4 tracking-tight">
            Nasıl <span className="gold-text">Oynanır?</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed">
            4 aşamalı oyun döngüsü
          </p>
        </Reveal>

        {/* Timeline Konteyneri */}
        <div className="relative">
          
          {/* Merkezi Timeline Çizgisi (Mobilde solda, masaüstünde ortada) */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent md:-translate-x-1/2" />

          <div className="space-y-12 md:space-y-24">
            {timelineSteps.map((step, index) => {
              // Kartın sağda mı solda mı olacağını belirliyoruz (Çiftler solda, tekler sağda)
              const isEven = index % 2 === 0;

              return (
                <div key={index} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  
                  {/* Timeline Noktası (Numara) */}
                  <div className="absolute left-6 md:left-1/2 w-12 h-12 -translate-x-1/2 rounded-full bg-background border-2 border-primary flex items-center justify-center z-20 shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                    <span className="font-black text-primary text-lg">{step.num}</span>
                  </div>

                  {/* Kart İçeriği (Genişliği %50'ye ayarlayıp, sağ/sol hizalamasına göre boşluk veriyoruz) */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-16 lg:pr-24 text-left' : 'md:pl-16 lg:pl-24 text-left'}`}>
                    
                    <Reveal 
                      delay={index * 150} 
                      dir={isEven ? "right" : "left"} // Animasyon yönü kartın konumuna göre değişiyor
                      className="h-full"
                    >
                      <div className="group bg-card/40 backdrop-blur-md border border-border/50 rounded-3xl p-6 md:p-8 hover:border-primary/40 hover:bg-card/60 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] transition-all duration-500 relative overflow-hidden">
                        
                        {/* Kart İçi Glow Efekti */}
                        <div className={`absolute -top-10 w-32 h-32 bg-primary/10 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${isEven ? '-right-10' : '-left-10'}`} />

                        {/* Kart Başlığı ve İkonu */}
                        <div className="flex items-center gap-4 mb-6 border-b border-border/50 pb-6 relative z-10">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-inner">
                            {/* İkon rengini hover durumunda beyaz yapmak için kapsayıcıyı kullanıyoruz */}
                            <div className="text-primary group-hover:text-primary-foreground transition-colors">
                              {step.icon}
                            </div>
                          </div>
                          <div>
                            <span className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase block mb-1">
                              {step.stage}
                            </span>
                            <h3 className="text-2xl font-black text-foreground group-hover:text-primary transition-colors duration-300">
                              {step.title}
                            </h3>
                          </div>
                        </div>

                        {/* Madde İşaretli Liste */}
                        <ul className="space-y-3 relative z-10">
                          {step.bullets.map((bullet, i) => (
                            <li key={i} className="flex items-start gap-3 text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300">
                              <ChevronRight className="w-4 h-4 text-primary mt-1 shrink-0" />
                              <span className="text-sm md:text-base font-medium">{bullet}</span>
                            </li>
                          ))}
                        </ul>

                      </div>
                    </Reveal>
                  </div>

                </div>
              );
            })}
          </div>
          
        </div>

      </div>
    </section>
  )
}