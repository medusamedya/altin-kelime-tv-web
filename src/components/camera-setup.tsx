"use client"

import { Camera, Map, Settings2 } from "lucide-react"
import { Reveal } from "@/components/reveal"

const cameraPositions = [
  { id: "Cam 1-5", desc: "Yarışmacı close-up", count: "5 adet" },
  { id: "Cam 6", desc: "Wide shot", count: "1 adet" },
  { id: "Cam 7", desc: "LED wall", count: "1 adet" },
  { id: "Cam 8", desc: "Sunucu steadicam", count: "1 adet" },
  { id: "Cam 9", desc: "Overhead", count: "1 adet" },
  { id: "Cam 10", desc: "Jib", count: "1 adet" },
  { id: "Cam 11-12", desc: "Yedek/Beauty", count: "2 adet" },
]

const techSpecs = [
  { value: "4K UHD", label: "Resolution" },
  { value: "50p/60p", label: "Frame Rate" },
  { value: "ProRes 422", label: "Recording" },
]

// Kuşbakışı görünümdeki kameraların X, Y koordinatları (Yüzde olarak)
const cameraDots = [
  { id: 1, x: 35, y: 80 },
  { id: 2, x: 42.5, y: 77 },
  { id: 3, x: 50, y: 75 },
  { id: 4, x: 57.5, y: 77 },
  { id: 5, x: 65, y: 80 },
  { id: 6, x: 50, y: 95 },
  { id: 7, x: 90, y: 35 },
  { id: 8, x: 20, y: 55 },
  { id: 9, x: 50, y: 35 },
  { id: 10, x: 90, y: 85 },
  { id: 11, x: 20, y: 30 },
  { id: 12, x: 20, y: 85 },
]

// Yarışmacılar ve sunucu pozisyonları
const peoplePositions = [
  { x: 30, y: 60 }, // Yarışmacı 1
  { x: 40, y: 55 }, // Yarışmacı 2
  { x: 50, y: 52 }, // Yarışmacı 3
  { x: 60, y: 55 }, // Yarışmacı 4
  { x: 70, y: 60 }, // Yarışmacı 5
  { x: 50, y: 68 }, // Sunucu (Merkez)
]

export function CameraSetup() {
  return (
    <section className="py-24 md:py-32 relative bg-background overflow-hidden border-t border-border/50">
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* Ana Başlık */}
        <Reveal dir="up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tight">
            12 Kamera <span className="gold-text">Açısı</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          
          {/* SOL KOLON: Kamera Pozisyonları Tablosu */}
          <Reveal dir="left" delay={150}>
            <div className="h-full bg-card/40 backdrop-blur-md border border-border/50 rounded-3xl p-6 md:p-8 flex flex-col hover:border-primary/30 transition-colors">
              
              <div className="flex items-center gap-3 mb-6">
                <Camera className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-bold text-foreground">Kamera Pozisyonları</h3>
              </div>

              <div className="flex-1">
                {cameraPositions.map((item, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center justify-between py-4 group hover:px-2 transition-all duration-300 ${
                      index !== cameraPositions.length - 1 ? 'border-b border-border/40' : ''
                    }`}
                  >
                    <span className="text-primary font-bold w-24 shrink-0 transition-colors group-hover:text-primary/80">
                      {item.id}
                    </span>
                    <span className="text-foreground/90 font-medium flex-1 text-sm md:text-base transition-colors group-hover:text-foreground">
                      {item.desc}
                    </span>
                    <span className="text-muted-foreground text-sm font-medium">
                      {item.count}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </Reveal>

          {/* SAĞ KOLON: Teknik Özellikler ve Harita */}
          <div className="flex flex-col gap-6 lg:gap-8">
            
            {/* Üst Kart: Teknik Özellikler */}
            <Reveal dir="right" delay={300}>
              <div className="bg-card/40 backdrop-blur-md border border-border/50 rounded-3xl p-6 md:p-8 hover:border-primary/30 transition-colors">
                <h3 className="text-sm font-bold text-muted-foreground mb-6">Teknik Özellikler</h3>
                <div className="flex items-center justify-between gap-4">
                  {techSpecs.map((spec, index) => (
                    <div key={index} className="text-center flex-1">
                      <p className="text-lg sm:text-2xl md:text-3xl font-black gold-text mb-1 drop-shadow-sm">
                        {spec.value}
                      </p>
                      <p className="text-[10px] sm:text-xs font-medium text-muted-foreground">
                        {spec.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Alt Kart: Kuşbakışı Görünüm Haritası */}
            <Reveal dir="right" delay={450}>
              <div className="bg-card/40 backdrop-blur-md border border-border/50 rounded-3xl p-6 md:p-8 hover:border-primary/30 transition-colors relative overflow-hidden group">
                
                <h3 className="text-lg font-bold text-foreground mb-6 relative z-10">Kuşbakışı Görünüm</h3>
                
                {/* Harita Konteyneri */}
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-[#111111] rounded-2xl border border-border/40 overflow-hidden shadow-inner">
                  
                  {/* Grid / Izgara Deseni */}
                  <div 
                    className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{
                      backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                      backgroundSize: '20px 20px'
                    }}
                  />

                  {/* Yarışmacı ve Sunucu Konumları (Boş Yuvarlaklar) */}
                  {peoplePositions.map((pos, i) => (
                    <div 
                      key={`person-${i}`}
                      className="absolute w-5 h-5 sm:w-8 sm:h-8 rounded-full border border-primary/60 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(212,175,55,0.2)]"
                      style={{ top: `${pos.y}%`, left: `${pos.x}%` }}
                    />
                  ))}

                  {/* Kamera Konumları (Dolu Altın Noktalar ve Numaraları) */}
                  {cameraDots.map((cam) => (
                    <div 
                      key={`cam-${cam.id}`}
                      className="absolute flex flex-col items-center -translate-x-1/2 -translate-y-1/2 group/dot"
                      style={{ top: `${cam.y}%`, left: `${cam.x}%` }}
                    >
                      <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-primary shadow-[0_0_10px_rgba(212,175,55,0.6)] group-hover/dot:scale-150 transition-transform cursor-crosshair" />
                      <span className="text-[9px] sm:text-[11px] font-bold text-muted-foreground mt-1 select-none">
                        {cam.id}
                      </span>
                    </div>
                  ))}

                </div>
              </div>
            </Reveal>

          </div>
        </div>

      </div>
    </section>
  )
}