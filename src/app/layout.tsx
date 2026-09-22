import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
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
  openGraph: {
    title: "Is Mariah Carey defrosted?",
    description:
      "Tracking the seasonal thaw cycle of Mariah Carey with reckless scientific curiosity.",
    type: "website",
    url: "https://ismariahcareydefrosted.com/",
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
