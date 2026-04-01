import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // disallow: "/admin", // Eğer admin panelin vb. varsa burayı açıp gizleyebilirsin
    },
    sitemap: "https://altinkelime.tv/sitemap.xml",
  }
}