import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Whole Body MRI™ | Full-Body Cancer Screening Using 3T MRI",
  description:
    "Whole Body MRI™ offers Australia's most comprehensive 3T full-body MRI for proactive health screening. Based on the Gold Coast.",
  keywords: [
    "MRI",
    "whole body MRI",
    "cancer screening",
    "3T MRI",
    "health screening",
    "Gold Coast",
  ],
  openGraph: {
    title: "Whole Body MRI™ | Full-Body Cancer Screening Using 3T MRI",
    description:
      "Whole Body MRI™ offers Australia's most comprehensive 3T full-body MRI for proactive health screening. Based on the Gold Coast.",
    url: "https://wholebodymri.com.au",
    siteName: "Whole Body MRI™",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU" className="no-js">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-48x48.png"
          sizes="48x48"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="Whole Body MRI™" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
