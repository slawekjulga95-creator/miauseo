import type { Metadata } from "next";
import { Lato } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import CaseStudyPopup from "@/components/CaseStudyPopup";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MiauSEO – Agencja Marketingu Online | Pozycjonowanie, SEO, Google Ads",
  description:
    "MiauSEO to agencja performance marketingowa. Pozycjonowanie wizytówki Google, SEO strony i Google Ads. Zmieniamy kliknięcia w klientów.",
  verification: {
    google: "0lUwydjVkEDxbgPPlE6cuTszviE3BhmeM9eU-qbfMpg",
  },
  openGraph: {
    title: "MiauSEO – Agencja Marketingu Online",
    description:
      "Zmieniamy kliknięcia w klientów. Google, Meta i TikTok pracują na Twój wynik – nie na zasięgi.",
    type: "website",
    locale: "pl_PL",
    url: "https://miauseo.pl",
    siteName: "MiauSEO",
    images: [
      {
        url: "https://miauseo.pl/logo.png",
        width: 224,
        height: 64,
        alt: "MiauSEO – Agencja Marketingu Online",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "MiauSEO – Agencja Marketingu Online",
    description: "Zmieniamy kliknięcia w klientów. Google, Meta i TikTok pracują na Twój wynik.",
    images: ["https://miauseo.pl/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${lato.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans text-ink bg-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
        <CaseStudyPopup />
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
            var raw = localStorage.getItem('miau-consent-v2');
            if (raw) {
              var c = JSON.parse(raw);
              gtag('consent', 'update', {
                analytics_storage: c.analytics ? 'granted' : 'denied',
                ad_storage: c.marketing ? 'granted' : 'denied',
                ad_user_data: c.marketing ? 'granted' : 'denied',
                ad_personalization: c.marketing ? 'granted' : 'denied'
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
