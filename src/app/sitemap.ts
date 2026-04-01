import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://altinkelime.tv"

  // Sitedeki mevcut sayfalarını buraya ekleyebilirsin
  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${baseUrl}/iletisim`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Eğer "hakkimizda", "basvuru" gibi sayfaların varsa buraya kopyalayıp ekleyebilirsin
  ]
}