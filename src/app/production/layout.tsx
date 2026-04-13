import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Prodüksiyon ve Stüdyo | Altın Kelime",
  description: "Altın Kelime'nin teknik altyapısı, 360 derece stüdyo tasarımı, LED ekran entegrasyonları ve yenilikçi yayın teknolojileri.",
}

export default function ProductionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}