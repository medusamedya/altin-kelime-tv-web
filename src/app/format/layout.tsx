import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Format Özellikleri ve Oyun Mekaniği | Altın Kelime",
  description: "Altın Kelime yarışma formatının oyun mekaniği, sezon yapısı, strateji kartları, ödül hiyerarşisi ve Format Bible detayları.",
}

export default function FormatLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}