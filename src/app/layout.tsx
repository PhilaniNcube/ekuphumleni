
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Yusei_Magic } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation/navigation";

const yuseiMagic = Yusei_Magic({
  variable: "--font-yusei-magic",
  subsets: ["latin"],
  weight: "400",
});

const gotham = localFont({
  src: [
    {
      path: "../../public/Gotham/Gotham Regular/Gotham Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/Gotham/Gotham Italic/Gotham Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/Gotham/Gotham Medium/Gotham Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/Gotham/Gotham Bold/Gotham Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/Gotham/Gotham Bold Italic/Gotham Bold Italic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/Gotham/Gotham Black/Gotham Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-gotham",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ekuphumleni - Community Empowerment & Development",
    template: "%s | Ekuphumleni",
  },
  description: "Fostering self-sufficiency, youth development, and health & wellness in our community. Join us in building a better future through skills development and care.",
  keywords: ["Community Empowerment", "Youth Development", "Health & Wellness", "Ekuphumleni", "Non-profit", "Skills Development", "Community Garden", "Education"],
  authors: [{ name: "Ekuphumleni Team" }],
  creator: "Ekuphumleni",
  publisher: "Ekuphumleni",
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://ekuphumleni.org",
    title: "Ekuphumleni - Community Empowerment & Development",
    description: "Fostering self-sufficiency, youth development, and health & wellness in our community.",
    siteName: "Ekuphumleni",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ekuphumleni - Community Empowerment & Development",
    description: "Fostering self-sufficiency, youth development, and health & wellness in our community.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${yuseiMagic.variable} ${gotham.variable} antialiased font-sans bg-brand-cream`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
