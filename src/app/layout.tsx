import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["800"],
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
        className={`${bricolage.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
