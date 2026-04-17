import type { Metadata } from "next";
import { Bricolage_Grotesque, Lora } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["800"],
});

const lora = Lora({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://benbyram.com"),
  title: "Ben Byram — Product Leader & AI Consultant",
  description: "PM and General Manager at CoFounder.AI. I help companies build the right product for the right people — and then actually reach them.",
  authors: [{ name: "Ben Byram" }],
  openGraph: {
    title: "Ben Byram — Product Leader & AI Consultant",
    description: "PM and General Manager at CoFounder.AI. I help companies build the right product for the right people — and then actually reach them.",
    type: "website",
    url: "https://benbyram.com",
  },
  other: {
    "theme-color": "#FFFCF7",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ben Byram — Product Leader & AI Consultant",
    description: "PM and General Manager at CoFounder.AI. I help companies build the right product for the right people — and then actually reach them.",
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
        className={`${bricolage.variable} ${lora.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
