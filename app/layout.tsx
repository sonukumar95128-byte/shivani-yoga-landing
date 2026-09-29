import type { Metadata } from "next";
import { Nunito, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "3-Day Free Yoga Session | Shivani Shah",
  description:
    "Join Shivani Shah live on 9–11 October 2026 for a free 3-day yoga reset. Beginner-friendly yoga and breathwork on Zoom.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${nunito.variable} h-full`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
