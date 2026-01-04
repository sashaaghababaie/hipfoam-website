import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Viewport } from "next";
import { siteConfig } from "@/config/site";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// className={`${geistSans.variable} ${geistMono.variable} antialiased`}

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#832e5a",
};

export const metadata: Metadata = {
  title: "خانه |‌ هیپ‌فوم",
  // title: {
  //   default: siteConfig.siteName,
  //   template: `%s | ${siteConfig.siteName}`,
  // },
  description: siteConfig.description,
  creator: "هیپ‌فوم",
  publisher: "هیپ‌فوم",
  // applicationName: "هیپ‌فوم",

  openGraph: {
    title: "هیپ‌فوم",
    description: siteConfig.description,
    url: `https://${siteConfig.domain}`,
    siteName: "هیپ‌فوم",
    images: [
      {
        secureUrl: `https://${siteConfig.domain}/socials/og.jpg`,
        url: `https://${siteConfig.domain}/socials/og.jpg`,
        width: 1200,
        height: 630,
        alt: "هیپ‌فوم",
      },
    ],
    locale: "fa-IR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "هیپ‌فوم",
    description: siteConfig.description,
    creator: "@hipfoam",
    images: [`https://${siteConfig.domain}/socials/twitter.jpg`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
