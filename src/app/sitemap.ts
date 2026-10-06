import type { MetadataRoute } from "next";

import { site } from "../lib/site";

const sitemap = (): MetadataRoute.Sitemap => [
  { url: `${site.url}/`, changeFrequency: "daily" },
];

export default sitemap;
