import type { Metadata } from "next";
import "../styles/globals.css";
import { StoryblokProvider } from "src/providers/StoryblokProvider";

export const metadata: Metadata = {
  title: "Interventional Pain GC | Full-Body Cancer Screening Using MRI",
  description:
    "Interventional Pain GC offers Australia's most comprehensive full-body MRI for proactive health screening. Based on the Gold Coast.",
  keywords: [
    "MRI",
    "Interventional Pain GC",
    "cancer screening",
    "MRI",
    "health screening",
    "Gold Coast",
  ],
  openGraph: {
    title: "Interventional Pain GC | Full-Body Cancer Screening Using MRI",
    description:
      "Interventional Pain GC offers Australia's most comprehensive full-body MRI for proactive health screening. Based on the Gold Coast.",
    url: "https://ipgc.com.au",
    siteName: "Interventional Pain GC",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <StoryblokProvider>
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
          <meta
            name="apple-mobile-web-app-title"
            content="Interventional Pain GC"
          />
          <link rel="manifest" href="/site.webmanifest" />
        </head>
        <body>{children}</body>
      </html>
    </StoryblokProvider>
  );
}
