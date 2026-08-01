import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/site";

// со статическим экспортом маршрут обязан быть статическим
export const dynamic = "force-static";

/** robots.txt собирается на сборке — домен берётся из одного места. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
