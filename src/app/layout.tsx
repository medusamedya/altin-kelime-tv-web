import type { Metadata, Viewport } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { ThemeProvider } from '@/components/theme-provider'
import { ScrollToTop } from '@/components/scroll-to-top'
import { Footer } from '@/components/footer' 

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  // 1. Kök Adres (Canonical ve OG resimleri için şart)
  metadataBase: new URL('https://altinkelime.tv'),

  // 2. Standart SEO (Google İçin)
  title: 'Altın Kelime | 7 Harf – 1 Dakika – 1 Kazanan',
  description: 'Kelime bilgisi, strateji ve rekabetin birleştiği yeni nesil televizyon yarışması. Türkiye\'nin en heyecanlı kelime oyunu.',
  
  // 3. Canonical URL (Google'a Asıl Linki Gösterir)
  alternates: {
    canonical: '/',
  },

  // 4. Favicon ve İkonlar
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png', // public klasörüne atacağın 180x180px logo
  },

  // 5. Open Graph (WhatsApp, Facebook, LinkedIn İçin Kapak)
  openGraph: {
    title: 'Altın Kelime | Türkiye\'nin En Zorlu Kelime Arenası',
    description: 'Kelime bilgisi, strateji ve rekabetin birleştiği yeni nesil televizyon yarışması.',
    url: 'https://altinkelime.tv',
    siteName: 'Altın Kelime',
    // metadataBase tanımlı olduğu için linki kısa yazıyoruz, Next.js otomatik https://altinkelime.tv/images/studio.jpg yapıyor
    images: [
      {
        url: '/images/studio.jpg', 
        width: 1200,
        height: 630,
        alt: 'Altın Kelime Stüdyosu',
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },

  // 6. Twitter Card (Twitter/X Paylaşımları İçin Büyük Kapak)
  twitter: {
    card: 'summary_large_image',
    title: 'Altın Kelime | 7 Harf – 1 Dakika',
    description: 'Türkiye\'nin en zorlu kelime arenasına katılın.',
    images: ['/images/studio.jpg'],
  },

  // 7. Arama Motoru İzinleri (Google Botlarının siteyi taramasına izin verir)
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1a1a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`${inter.variable} ${montserrat.variable} font-sans antialiased bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {/* İŞTE SİHİRLİ KALKAN BURASI: w-full, max-w-[100vw] ve overflow-x-hidden */}
          <div className="relative flex flex-col min-h-screen w-full max-w-[100vw] overflow-x-hidden">
            <Navbar />
            <main className="flex-1 flex flex-col">
              {children}
            </main>
            <Footer />
            <ScrollToTop />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}