"use client";

import { useEffect } from "react";

export default function ComingSoon() {
  // Animasyonların çalışması için gerekli JavaScript kodları
  useEffect(() => {
    const tiles = document.querySelectorAll(".tile");
    tiles.forEach((t, i) => {
      setTimeout(() => t.classList.add("visible"), 600 + i * 90);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
  }, []);

  const handleSignup = () => {
    const input = document.getElementById("email-input") as HTMLInputElement;
    const note = document.getElementById("signup-note");
    const val = input?.value.trim();

    if (!note) return;

    if (!val || !val.includes("@")) {
      note.textContent = "Lütfen geçerli bir e-posta adresi giriniz.";
      note.style.color = "#E87070";
      return;
    }
    note.textContent = "✓ Kayıt başarılı! İlk haber sizde olacak.";
    note.style.color = "var(--gold)";
    if (input) input.value = "";
  };

  const openLb = (src: string) => {
    const img = document.getElementById("lb-img") as HTMLImageElement;
    const lb = document.getElementById("lightbox");
    if (img && lb) {
      img.src = src;
      lb.classList.add("open");
    }
  };

  const closeLb = () => {
    const lb = document.getElementById("lightbox");
    if (lb) lb.classList.remove("open");
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLb();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Bebas+Neue&family=DM+Sans:wght@300;400;500&display=swap');
        
        :root {
          --gold:       #C8A94A;
          --gold-light: #E8CB6B;
          --gold-dim:   #7A6128;
          --bg:         #080807;
          --surface:    #0f0f0d;
          --surface2:   #161610;
          --text:       #F0EAD6;
          --text-muted: #7A7A6A;
          --border:     rgba(200,169,74,0.15);
        }

        body {
          background: var(--bg);
          color: var(--text);
          font-family: 'DM Sans', sans-serif;
          overflow-x: hidden;
          margin: 0;
          padding: 0;
        }

        body::before {
          content: '';
          position: fixed; inset: 0; z-index: 0;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          opacity: 0.6;
        }
@keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes tileIn {
          from { opacity: 0; transform: translateY(30px) rotateX(-30deg) scale(0.85); }
          to   { opacity: 1; transform: translateY(0) rotateX(0deg) scale(1); }
        }
        .hero { position: relative; min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 60px 24px 80px; overflow: hidden; }
        .hero::after { content: ''; position: absolute; top: -10%; left: 50%; transform: translateX(-50%); width: 900px; height: 700px; background: radial-gradient(ellipse at center, rgba(200,169,74,0.10) 0%, transparent 70%); pointer-events: none; z-index: 0; }
        .hero > * { position: relative; z-index: 1; }
        .logo-wrap { margin-bottom: 40px; opacity: 0; animation: fadeUp 0.8s ease forwards 0.2s; }
        .logo-wrap img { height: 64px; filter: drop-shadow(0 0 18px rgba(200,169,74,0.4)); }
        .tiles { display: flex; gap: 7px; justify-content: center; flex-wrap: wrap; margin-bottom: 32px; }
        .tile { width: 52px; height: 60px; background: var(--surface2); border: 1px solid var(--border); border-top: 2px solid var(--gold-dim); border-radius: 4px; display: flex; align-items: center; justify-content: center; font-family: 'Bebas Neue', sans-serif; font-size: 28px; color: var(--gold); position: relative; opacity: 0; transform: translateY(30px) rotateX(-30deg); box-shadow: 0 4px 20px rgba(0,0,0,0.6), inset 0 1px 0 rgba(200,169,74,0.08); }
        .tile::after { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 30%; background: rgba(0,0,0,0.25); border-radius: 0 0 4px 4px; }
        .tile.visible { animation: tileIn 0.55s cubic-bezier(0.34,1.56,0.64,1) forwards; }
        .tagline-block { margin-bottom: 20px; opacity: 0; animation: fadeUp 0.9s ease forwards 1.5s; }
        .eyebrow { display: inline-block; font-family: 'DM Sans', sans-serif; font-size: 11px; font-weight: 500; letter-spacing: 4px; text-transform: uppercase; color: var(--gold); border: 1px solid var(--border); padding: 5px 16px; border-radius: 2px; margin-bottom: 20px; }
        .hero-title { font-family: 'Playfair Display', serif; font-size: clamp(42px, 8vw, 92px); font-weight: 900; line-height: 1; background: linear-gradient(160deg, #F5E6A3 0%, #C8A94A 40%, #8B6914 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; letter-spacing: -1px; margin-bottom: 12px; }
        .hero-sub { font-size: 16px; color: var(--text-muted); font-weight: 300; letter-spacing: 1px; max-width: 440px; margin: 0 auto; line-height: 1.7; }
        .signup-wrap { margin-top: 48px; opacity: 0; animation: fadeUp 0.8s ease forwards 1.8s; }
        .signup-form { display: flex; gap: 0; max-width: 420px; margin: 0 auto; border: 1px solid var(--border); border-radius: 3px; overflow: hidden; background: var(--surface); }
        .signup-form input { flex: 1; background: transparent; border: none; outline: none; padding: 14px 18px; color: var(--text); font-family: 'DM Sans', sans-serif; font-size: 14px; }
        .signup-form button { background: var(--gold); border: none; padding: 14px 22px; color: #080807; font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; cursor: pointer; text-transform: uppercase; transition: background 0.2s; white-space: nowrap; }
        .signup-form button:hover { background: var(--gold-light); }
        .signup-note { font-size: 11px; color: var(--text-muted); margin-top: 10px; }
        .divider { width: 100%; height: 1px; background: linear-gradient(90deg, transparent, var(--border), transparent); }
        .section-header { text-align: center; margin-bottom: 56px; }
        .section-eyebrow { font-size: 10px; letter-spacing: 5px; text-transform: uppercase; color: var(--gold); margin-bottom: 14px; }
        .section-title { font-family: 'Playfair Display', serif; font-size: clamp(28px, 4vw, 42px); font-weight: 700; line-height: 1.15; }
        .contact-section { padding: 100px 24px; max-width: 1100px; margin: 0 auto; }
        .contact-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 2px; border: 1px solid var(--border); }
        .contact-card { background: var(--surface); padding: 36px 32px; display: flex; flex-direction: column; gap: 10px; transition: background 0.25s; border: 1px solid transparent; position: relative; }
        .contact-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, transparent, var(--gold), transparent); opacity: 0; transition: opacity 0.3s; }
        .contact-card:hover { background: var(--surface2); }
        .contact-card:hover::before { opacity: 1; }
        .contact-icon { width: 36px; height: 36px; margin-bottom: 8px; opacity: 0.9; }
        .contact-label { font-size: 10px; letter-spacing: 3px; text-transform: uppercase; color: var(--gold); }
        .contact-value { font-size: 15px; color: var(--text); word-break: break-word; }
        .contact-value a { color: var(--text); text-decoration: none; transition: color 0.2s; }
        .contact-value a:hover { color: var(--gold-light); }
        .contact-desc { font-size: 12px; color: var(--text-muted); line-height: 1.6; }
        .gallery-section { padding: 0 0 100px; }
        .gallery-mosaic { display: grid; grid-template-columns: repeat(12, 1fr); grid-template-rows: 260px 200px; gap: 3px; max-width: 1400px; margin: 0 auto; padding: 0 24px; }
        .gallery-item { overflow: hidden; position: relative; cursor: pointer; }
        .gallery-item:nth-child(1) { grid-column: 1 / 6; grid-row: 1; }
        .gallery-item:nth-child(2) { grid-column: 6 / 9; grid-row: 1; }
        .gallery-item:nth-child(3) { grid-column: 9 / 13; grid-row: 1; }
        .gallery-item:nth-child(4) { grid-column: 1 / 5; grid-row: 2; }
        .gallery-item:nth-child(5) { grid-column: 5 / 9; grid-row: 2; }
        .gallery-item:nth-child(6) { grid-column: 9 / 13; grid-row: 2; }
        .gallery-item img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s, filter 0.4s; filter: brightness(0.75) saturate(0.8); }
        .gallery-item:hover img { transform: scale(1.06); filter: brightness(0.9) saturate(1.1); }
        .gallery-item .overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 50%); opacity: 0; transition: opacity 0.35s; display: flex; align-items: flex-end; padding: 16px; }
        .gallery-item:hover .overlay { opacity: 1; }
        .gallery-item .overlay span { font-size: 12px; letter-spacing: 2px; text-transform: uppercase; color: var(--gold-light); }
        .gallery-item .gold-corner { position: absolute; top: 0; left: 0; border-top: 28px solid var(--gold-dim); border-right: 28px solid transparent; opacity: 0.5; }
        .footer { padding: 40px 24px; border-top: 1px solid var(--border); display: flex; flex-direction: column; align-items: center; gap: 18px; text-align: center; }
        .footer-logo img { height: 36px; opacity: 0.7; filter: grayscale(0.3); }
        .footer-copy { font-size: 12px; color: var(--text-muted); }
        .footer-links { display: flex; gap: 24px; }
        .footer-links a { font-size: 11px; color: var(--text-muted); text-decoration: none; letter-spacing: 2px; text-transform: uppercase; transition: color 0.2s; }
        .footer-links a:hover { color: var(--gold); }
        .reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.7s, transform 0.7s; }
        .reveal.visible { opacity: 1; transform: translateY(0); }
        .lightbox { display: none; position: fixed; inset: 0; z-index: 1000; background: rgba(0,0,0,0.94); align-items: center; justify-content: center; }
        .lightbox.open { display: flex; }
        .lightbox img { max-width: 90vw; max-height: 88vh; object-fit: contain; border: 1px solid var(--border); }
        .lightbox-close { position: absolute; top: 24px; right: 32px; font-size: 28px; color: var(--gold); cursor: pointer; }
        @media (max-width: 768px) {
          .tile { width: 40px; height: 48px; font-size: 22px; gap: 4px; }
          .gallery-mosaic { grid-template-columns: 1fr 1fr; grid-template-rows: repeat(3, 200px); }
          .gallery-item:nth-child(1) { grid-column: 1 / 3; grid-row: 1; }
          .gallery-item:nth-child(2) { grid-column: 1; grid-row: 2; }
          .gallery-item:nth-child(3) { grid-column: 2; grid-row: 2; }
          .gallery-item:nth-child(4) { grid-column: 1; grid-row: 3; }
          .gallery-item:nth-child(5) { grid-column: 2; grid-row: 3; }
          .gallery-item:nth-child(6) { display: none; }
        }
      `}} />

      <main>
        <section className="hero">
          <div className="logo-wrap">
            <img src="https://www.altinkelime.tv/Logo2.png" alt="Altın Kelime" />
          </div>

          <div className="tiles" id="tiles">
            <div className="tile">A</div>
            <div className="tile">L</div>
            <div className="tile">T</div>
            <div className="tile">I</div>
            <div className="tile">N</div>
            <span className="cd-sep" style={{ fontSize: '32px', color: 'var(--gold-dim)', alignSelf: 'center', margin: '0 4px' }}>·</span>
            <div className="tile">K</div>
            <div className="tile">E</div>
            <div className="tile">L</div>
            <div className="tile">İ</div>
            <div className="tile">M</div>
            <div className="tile">E</div>
          </div>

          <div className="tagline-block">
            <p className="eyebrow">Türkiye'nin En Zorlu Kelime Arenası</p>
            <h1 className="hero-title">Harfler Yeniden<br />Diziliyor.</h1>
            <p className="hero-sub">Sitemiz yenileniyor. Kelime bilgisi ve stratejinin buluştuğu arena, çok daha güçlü geri dönüyor.</p>
          </div>

          <div className="signup-wrap">
            <div className="signup-form">
              <input type="email" id="email-input" placeholder="E-posta adresiniz…" />
              <button onClick={handleSignup}>Haberdar Ol</button>
            </div>
            <p className="signup-note" id="signup-note">Yayın tarihi ve seçmeler için sizi ilk haberdar edelim.</p>
          </div>
        </section>

        <div className="divider"></div>

        <section className="contact-section">
          <div className="section-header reveal">
            <p className="section-eyebrow">İletişim</p>
            <h2 className="section-title">Bizimle İletişime Geçin</h2>
          </div>

          <div className="contact-grid reveal">
            <div className="contact-card">
              <svg className="contact-icon" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="36" height="36" rx="2" fill="none" />
                <path d="M6 10h24v18H6V10z" stroke="#C8A94A" strokeWidth="1.4" fill="none" />
                <path d="M6 10l12 10 12-10" stroke="#C8A94A" strokeWidth="1.4" fill="none" />
              </svg>
              <span className="contact-label">Genel İletişim</span>
              <span className="contact-value"><a href="mailto:hello@medusaglobal.com.tr">hello@medusaglobal.com.tr</a></span>
              <p className="contact-desc">Genel sorularınız ve işbirliği teklifleri için.</p>
            </div>

            <div className="contact-card">
              <svg className="contact-icon" viewBox="0 0 36 36" fill="none">
                <path d="M10 8h5l2 5-3 2c1 3 4 6 7 7l2-3 5 2v5c0 1-1 2-2 2C14 28 8 22 8 10c0-1 1-2 2-2z" stroke="#C8A94A" strokeWidth="1.4" fill="none" />
              </svg>
              <span className="contact-label">Telefon</span>
              <span className="contact-value"><a href="tel:+905537353500">+90 553 735 35 00</a></span>
              <p className="contact-desc">Medusa Global — Hafta içi 09:00–18:00</p>
            </div>

            <div className="contact-card">
              <svg className="contact-icon" viewBox="0 0 36 36" fill="none">
                <circle cx="18" cy="14" r="5" stroke="#C8A94A" strokeWidth="1.4" fill="none" />
                <path d="M8 30c0-5.5 4.5-10 10-10s10 4.5 10 10" stroke="#C8A94A" strokeWidth="1.4" fill="none" />
              </svg>
              <span className="contact-label">Yapım Şirketi</span>
              <span className="contact-value"><a href="https://www.medusaglobal.com.tr" target="_blank">Medusa Global Medya</a></span>
              <p className="contact-desc">Dijital ivme ve prodüksiyon — İzmir, Türkiye.</p>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        <section className="gallery-section">
          <div className="section-header reveal" style={{ paddingTop: '80px' }}>
            <p className="section-eyebrow">Stüdyodan</p>
            <h2 className="section-title">Sahne Hazır</h2>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginTop: '12px' }}>12 kamera açısı, 4K UHD yayın kalitesi, dramatik ışıklandırma.</p>
          </div>

          <div className="gallery-mosaic reveal">
            {[
              { src: "https://www.altinkelime.tv/images/studio.jpg", alt: "Altın Kelime Stüdyosu", text: "Ana Stüdyo", hasCorner: true },
              { src: "https://www.altinkelime.tv/images/gallery-lighting.jpg", alt: "Stüdyo Işıklandırma", text: "Dramatik Işık" },
              { src: "https://www.altinkelime.tv/images/gallery-podiums.jpg", alt: "Yarışmacı Podyumları", text: "Yarışmacı Podyumları" },
              { src: "https://www.altinkelime.tv/images/gallery-screen.jpg", alt: "Dev LED Ekran", text: "Dev LED Ekran" },
              { src: "https://www.altinkelime.tv/images/gallery-host.jpg", alt: "Canlı Yayın", text: "Canlı Yayın" },
            ].map((img, i) => (
              <div key={i} className="gallery-item" onClick={() => openLb(img.src)}>
                {img.hasCorner && <div className="gold-corner"></div>}
                <img src={img.src} alt={img.alt} loading="lazy" />
                <div className="overlay"><span>{img.text}</span></div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', padding: '32px 24px 0', flexWrap: 'wrap' }}>
            {[
              { num: "12", text: "Kamera" },
              { num: "4K", text: "UHD Yayın" },
              { num: "3–5", text: "Bölüm / Gün" },
              { num: "360°", text: "Marka Deneyimi" }
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <p style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '32px', color: 'var(--gold)', lineHeight: 1 }}>{stat.num}</p>
                <p style={{ fontSize: '10px', letterSpacing: '3px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>{stat.text}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="footer">
          <div className="footer-logo">
            <img src="https://www.altinkelime.tv/Logo2.png" alt="Altın Kelime" />
          </div>
          <div className="footer-links">
            <a href="#">Format</a>
            <a href="#">Yarışmacı Ol</a>
            <a href="#">Gizlilik</a>
            <a href="#">KVKK</a>
          </div>
          <p className="footer-copy">© 2026 Altın Kelime Ekosistemi — Medusa Global Medya Yatırım A.Ş. — Tüm hakları saklıdır.</p>
        </footer>

        <div className="lightbox" id="lightbox" onClick={closeLb}>
          <span className="lightbox-close" onClick={closeLb}>✕</span>
          <img id="lb-img" alt="" onClick={(e) => e.stopPropagation()} />
        </div>
      </main>
    </>
  );
}