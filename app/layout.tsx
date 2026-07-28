import type { Metadata } from "next";
import { Spectral, Work_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { ThemeScript } from "@/components/ThemeScript";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const title = "Thomas Jankowski — Développeur Fullstack Freelance";
const description =
  "Développeur Fullstack Freelance | React, Next.js, TypeScript, React Native, Node.js — disponible immédiatement pour vos projets web et mobile.";

export const metadata: Metadata = {
  metadataBase: new URL("https://thomas-jan.fr"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://thomas-jan.fr",
    siteName: "Thomas Jankowski",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${spectral.variable} ${workSans.variable}`} suppressHydrationWarning>
      <body className="font-sans bg-ivory text-ink antialiased">
        <ThemeScript />
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
