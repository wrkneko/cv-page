import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/site";

// со статическим экспортом маршрут обязан быть статическим
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/`, priority: 1 },
    { url: `${siteUrl}/components/`, priority: 0.2 },
  ];
}
