"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { X, ZoomIn, Camera, MonitorPlay, Sparkles, Building2 } from "lucide-react";
import { createPortal } from "react-dom";
import { Reveal } from "./reveal";

// Yeni tasarımdaki mozaik yapısı
const galleryImages = [
  { src: "/images/gallery-lighting.jpg", alt: "Stüdyo ışıklandırması", title: "Dramatik Işıklandırma", span: "col-span-1 md:col-span-2 md:row-span-2" },
  { src: "/images/gallery-podiums.jpg", alt: "Yarışmacı podyumları", title: "Yarışmacı Podyumları", span: "col-span-1" },
  { src: "/images/gallery-screen.jpg", alt: "Dijital oyun ekranı", title: "Dev LED Ekran", span: "col-span-1" },
  { src: "/images/gallery-host.jpg", alt: "Sunucu ve yarışmacılar", title: "Canlı Yayın Anı", span: "col-span-1 md:col-span-2" },
  { src: "/images/gallery-audience.jpg", alt: "Seyirciler", title: "Seyirci Heyecanı", span: "col-span-1" },
  { src: "/images/gallery-details.jpg", alt: "Altın Kelime Logosu", title: "Stüdyo Detayları", span: "col-span-1 md:col-span-3" },
];

// Görseldeki 4'lü teknik özellikler verisi
const studioFeatures = [
  { icon: <Camera className="w-6 h-6 text-primary" />, title: "12 Açı", subtitle: "KAMERA" },
  { icon: <MonitorPlay className="w-6 h-6 text-primary" />, title: "4K UHD", subtitle: "ÇÖZÜNÜRLÜK" },
  { icon: <Sparkles className="w-6 h-6 text-primary" />, title: "Real-time", subtitle: "GRAFİK" },
  { icon: <Building2 className="w-6 h-6 text-primary" />, title: "Tek Set", subtitle: "STÜDYO" },
];

export function StudioGallery() {
  const INITIAL_COUNT = 4;
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const showMore = () => setVisibleCount((prev) => Math.min(prev + 4, galleryImages.length));
  const showLess = () => setVisibleCount(INITIAL_COUNT);

  return (
    <section className="px-6 py-28 max-w-7xl mx-auto relative overflow-hidden bg-background">
      <div className="relative z-10">
        
        {/* Başlık Alanı */}
        <Reveal dir="up" className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm">
            <span className="text-xs font-bold text-primary tracking-[0.2em] uppercase">
              Stüdyodan
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tight">
            Stüdyo <span className="gold-text">Atmosferi</span>
          </h2>
        </Reveal>

       

        {/* Mozaik Galeri Izgarası */}
        <Reveal delay={200}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[250px] transition-all duration-500">
            {galleryImages.slice(0, visibleCount).map((img, i) => (
              <div 
                key={i} 
                onClick={() => setSelectedImage(img)}
                className={`relative rounded-xl md:rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-primary/20 transition-shadow ${img.span}`}
              >
                <Image 
                  src={img.src} 
                  alt={img.title} 
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  style={{ filter: "brightness(0.45) saturate(0.75)" }} 
                />
                
                {/* Karartma Overlay */}
                <div className="img-overlay absolute inset-0 bg-background/20 group-hover:opacity-50 transition-opacity duration-300" />
                
                {/* Altın Çerçeve Hover Efekti */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/40 rounded-xl md:rounded-2xl transition-colors duration-400" />
                
                {/* Büyüteç İkonu (Merkezde) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-50 group-hover:scale-100">
                  <div className="w-14 h-14 rounded-full bg-background/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                    <ZoomIn size={24} />
                  </div>
                </div>

                {/* Alt Metin ve Altın Çizgi */}
                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                  <p className="text-white font-bold text-sm md:text-base tracking-wide">{img.title}</p>
                  <div className="h-px w-12 bg-primary mt-1 md:mt-2" />
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Daha Fazla Göster Butonu Alanı */}
        {galleryImages.length > INITIAL_COUNT && (
          <Reveal delay={300} className="mt-12 text-center">
            {visibleCount < galleryImages.length ? (
              <Button 
                onClick={showMore} 
                variant="outline" 
                size="lg"
                className="border-primary/40 text-foreground font-bold px-8 py-6 rounded-full transition-all duration-300 hover:bg-primary  hover:border-primary hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:-translate-y-1"
              >
                Daha Fazla Fotoğraf
              </Button>
            ) : (
              <Button 
                onClick={showLess} 
                variant="ghost" 
                size="lg"
                className="text-muted-foreground font-bold px-8 py-6 rounded-full transition-all duration-300 hover:bg-primary/10 hover:text-primary dark:hover:bg-primary/20 hover:-translate-y-1"
              >
                Galeriyi Daralt
              </Button>
            )}
          </Reveal>
        )}
      </div>
      
       {/* --- YENİ EKLENEN ALAN: 4'LÜ TEKNİK ÖZELLİK VE SÖZ --- */}
        <Reveal delay={100} dir="up" className="mt-20">
          <div className="max-w-4xl mx-auto">
            
            {/* 4'lü Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
              {studioFeatures.map((feat, i) => (
                <div 
                  key={i} 
                  className="group flex flex-col items-center justify-center p-6 bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(212,175,55,0.08)]"
                >
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feat.icon}
                  </div>
                  <h4 className="text-xl md:text-2xl font-black gold-text mb-1">{feat.title}</h4>
                  <span className="text-[10px] md:text-xs font-bold text-muted-foreground tracking-[0.2em] uppercase">
                    {feat.subtitle}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        {/* --- YENİ EKLENEN ALAN BİTİŞİ --- */}
 {/* ALT VURGU: SLOGAN ÇUBUĞU */}
        <div className="mt-12 p-8 rounded-[2rem] bg-card/30 border border-border/40 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500" />
          <p className="text-base md:text-lg italic font-medium text-muted-foreground relative z-10">
            "Altın Kelime, yalnızca bir kelime yarışması değil; <span className="text-foreground font-black not-italic border-b-2 border-primary/30">seyir keyfi yüksek bir rekabet alanı.</span>"
          </p>
        </div>

      {/* LIGHTBOX (Tam Ekran Resim) */}
      {selectedImage && typeof window !== 'undefined' && createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8">
          <div className="absolute inset-0 bg-background/95 backdrop-blur-xl animate-in fade-in duration-300" onClick={() => setSelectedImage(null)} />
          
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 sm:top-8 sm:right-8 z-10 w-12 h-12 bg-card/50 hover:bg-destructive text-foreground hover:text-destructive-foreground rounded-full flex items-center justify-center backdrop-blur-md border border-border transition-colors"
          >
            <X size={24} />
          </button>

          <div className="relative w-full max-w-6xl aspect-video rounded-xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300 border border-border">
            <Image
              src={selectedImage.src}
              alt={selectedImage.title}
              fill
              className="object-contain bg-black/50"
              quality={100}
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
              <h3 className="text-2xl font-bold text-white">{selectedImage.title}</h3>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}