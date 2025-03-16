import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://emmanueloye.xyz',
      lastModified: new Date(),
    }
  ]
}