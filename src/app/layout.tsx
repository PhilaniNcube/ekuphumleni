import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-brand-cream`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
