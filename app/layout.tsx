import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MiauSEO – Agencja Marketingu Online | Google Ads, SEO, Meta Ads, TikTok Ads",
  description:
    "MiauSEO to agencja performance marketingowa. Pozycjonowanie wizytówki Google, Google Ads, Facebook Ads i TikTok Ads. Zmieniamy kliknięcia w klientów.",
  verification: {
    google: "0lUwydjVkEDxbgPPlE6cuTszviE3BhmeM9eU-qbfMpg",
  },
  openGraph: {
    title: "MiauSEO – Agencja Marketingu Online",
    description:
      "Zmieniamy kliknięcia w klientów. Google, Meta i TikTok pracują na Twój wynik – nie na zasięgi.",
    type: "website",
    locale: "pl_PL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${syne.variable} ${dmSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans text-ink bg-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
        {/* Consent Mode v2 — musi być przed załadowaniem GA/Ads */}
        <Script id="consent-default" strategy="beforeInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            analytics_storage: 'denied',
            wait_for_update: 500
          });
          try {
            if (localStorage.getItem('miau-consent') === 'granted') {
              gtag('consent', 'update', {
                ad_storage: 'granted',
                ad_user_data: 'granted',
                ad_personalization: 'granted',
                analytics_storage: 'granted'
              });
            }
          } catch(e) {}
        `}</Script>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-JV3ZRB7G8G" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-JV3ZRB7G8G');
        `}</Script>
      </body>
    </html>
  );
}
