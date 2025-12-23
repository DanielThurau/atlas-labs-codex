import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const martianMono = localFont({
  src: "../public/fonts/MartianMono-VariableFont_wdth,wght.ttf",
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Design Codex",
  description: "Personal design system and component library",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <body className={`${inter.variable} ${martianMono.variable}`}>
        {children}
      </body>
    </html>
  );
}

