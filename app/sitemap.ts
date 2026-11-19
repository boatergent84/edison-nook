import type { MetadataRoute } from "next";

const site = "https://www.edisonnook.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: site, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${site}/about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site}/stay`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site}/explore`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site}/faq`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${site}/contact`, lastModified, changeFrequency: "monthly", priority: 0.5 },
    { url: `${site}/compare`, lastModified, changeFrequency: "monthly", priority: 0.5 },
    { url: `${site}/book`, lastModified, changeFrequency: "monthly", priority: 0.7 },
  ];
}
