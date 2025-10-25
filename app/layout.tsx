/* eslint-disable @next/next/next-script-for-ga */
import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://adverito-portfolio.vercel.app/"), // Add this line
  title: "Adverito | Web, App & Digital Marketing Agency in Kerala",
  description:
    "Adverito is a full-service creative agency offering web design, app development, digital marketing, and branding. We help brands grow through technology and creativity.",
  keywords: [
    "Adverito",
    "web development",
    "app development",
    "digital marketing",
    "logo design",
    "branding",
    "SEO",
    "Kerala",
    "creative agency",
    "web design company",
  ],
  authors: [{ name: "Adverito" }],
  openGraph: {
    title: "Adverito | Creative Digital Agency",
    description:
      "Build your brand with Adverito — experts in web, app, digital marketing, and branding.",
    url: "https://adverito-portfolio.vercel.app/",
    siteName: "Adverito",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Adverito - Creative Digital Agency in Kerala",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adverito | Web & App Development Agency",
    description:
      "Adverito helps businesses grow with creative web, app, and marketing solutions.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon-black.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          data-site="YOUR_DOMAIN_HERE"
          src="https://api.nepcha.com/js/nepcha-analytics.js"
        ></script>

        <Script
          id="ld-json"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Adverito",
              url: "https://adverito.in",
              logo: "/favicon.png",
              sameAs: [
                "https://www.facebook.com/adverito",
                "https://www.instagram.com/adverito",
                "https://www.linkedin.com/company/adverito",
              ],
              description:
                "Adverito is a digital agency specializing in website development, app design, branding, and digital marketing in Kerala.",
            }),
          }}
        />
      </head>
      <body className="font-sans">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
