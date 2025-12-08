import type { Metadata } from "next";
import "../styles/globals.css";
import { StoryblokProvider } from "src/providers/StoryblokProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "IPGC Spine & Joint",
  description:
    "Queensland's first and only clinic dedicated solely to imaging-guided procedures for spine, joint and musculoskeletal conditions.",
  keywords: [
    "MRI",
    "IPGC",
    "cancer screening",
    "MRI",
    "health screening",
    "Gold Coast",
  ],
  openGraph: {
    title: "IPGC Spine & Joint",
    description:
      "Queensland's first and only clinic dedicated solely to imaging-guided procedures for spine, joint and musculoskeletal conditions.",
    url: "https://ipgc.com.au",
    siteName: "IPGC",
    locale: "en_AU",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
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
          <meta name="apple-mobile-web-app-title" content="IPGC" />
          <link rel="manifest" href="/site.webmanifest" />
        </head>
        <body>
          {children}
          <SpeedInsights />
        </body>
      </html>
    </StoryblokProvider>
  );
}
