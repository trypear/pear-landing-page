import { MetadataRoute } from "next/types";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://trypear.ai";
  // will automate the sitemap generation once we have more than 10 routes
  const pages = ["/", "/about", "/privacy", "/terms-of-service"]; // will auth routes once its done

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 1,
  }));
}
