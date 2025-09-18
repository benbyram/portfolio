import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ben Byram - Product Strategy & UX Consulting",
  description: "Experienced product manager and UX consultant specializing in product strategy, user experience design, and digital transformation. Available for contract consulting and full-time opportunities.",
  keywords: "product manager, UX consultant, product strategy, user experience, digital transformation, consulting",
  authors: [{ name: "Ben Byram" }],
  openGraph: {
    title: "Ben Byram - Product Strategy & UX Consulting",
    description: "Experienced product manager and UX consultant specializing in product strategy, user experience design, and digital transformation.",
    type: "website",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
