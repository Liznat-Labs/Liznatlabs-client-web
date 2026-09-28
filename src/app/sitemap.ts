import type { MetadataRoute } from "next";
import { PAGES, SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return PAGES.map(({ path, priority }) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency: path === "/" || path === "/work" ? "weekly" : "monthly",
    priority,
  }));
}
