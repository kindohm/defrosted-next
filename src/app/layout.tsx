import type { Metadata } from "next";

import { site } from "../lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.name,
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { "max-image-preview": "large" },
  },
  openGraph: {
    title: site.name,
    description: site.description,
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: [{ url: "/opengraph-image", alt: site.name }],
  },
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
  <html lang="en">
    <body>{children}</body>
  </html>
);

export default RootLayout;
