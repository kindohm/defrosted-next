import type { Metadata } from "next";

import "./globals.css";

export const siteUrl = "https://ismariahcareydefrosted.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Is Mariah Carey defrosted?",
  description:
    "Tracking the seasonal thaw cycle of Mariah Carey with reckless scientific curiosity.",
  keywords: [
    "Mariah Carey",
    "Christmas",
    "defrosted",
    "holiday season",
    "internet joke",
  ],
  authors: [{ name: "Someone with too much time in late October" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Is Mariah Carey defrosted?",
    description:
      "Tracking the seasonal thaw cycle of Mariah Carey with reckless scientific curiosity.",
    type: "website",
    url: "/",
    siteName: "Is Mariah Carey defrosted?",
  },
  twitter: {
    card: "summary",
    title: "Is Mariah Carey defrosted?",
    description:
      "Tracking the seasonal thaw cycle of Mariah Carey with reckless scientific curiosity.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
