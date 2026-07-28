import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const metadata: Metadata = {
  title: "Thomas Jankowski — Développeur Fullstack Freelance",
  description:
    "Développeur Fullstack Freelance | React, Next.js, TypeScript, React Native, Node.js — disponible immédiatement pour vos projets web et mobile.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="font-sans bg-ivory text-ink antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
