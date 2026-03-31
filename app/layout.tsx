import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./vertical-timeline.css";
import { ThemeProvider } from "./provider";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thomas JANKOWSKI",
  description: "Fullstack Developer | TypeScript • Next.js • TailwindCSS • React Native",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        forcedTheme="dark"
        enableSystem={false}
        disableTransitionOnChange
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </ThemeProvider>
      </body>
    </html>
  );
}
