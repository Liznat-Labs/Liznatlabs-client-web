import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

// Search engines and AI assistants are all welcome to crawl the site.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      ...["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-SearchBot", "PerplexityBot", "Google-Extended", "Applebot-Extended", "Bingbot"].map(
        (userAgent) => ({ userAgent, allow: "/", disallow: ["/api/"] }),
      ),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
