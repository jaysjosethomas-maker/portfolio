import type { MetadataRoute } from "next";

import { navItems, products } from "@/content/portfolio";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = navItems.map((item) => ({
    url: new URL(item.href, siteConfig.url).toString(),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: item.href === "/" ? 1 : 0.8
  }));

  const productRoutes = products.map((product) => ({
    url: new URL(`/work/${product.slug}`, siteConfig.url).toString(),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  return [...staticRoutes, ...productRoutes];
}
