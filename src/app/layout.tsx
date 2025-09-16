import React from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Unstable States Dollar | The only dollar that embraces chaos. CA: 7WXaHLjatDZBAZ7hyRiFpYpGpPbcKiyHf6HaxUzSbonk",
  description:
    "Unstable States Dollar | The only dollar that embraces chaos.CA: 7WXaHLjatDZBAZ7hyRiFpYpGpPbcKiyHf6HaxUzSbonk",
  keywords: ["BONK"],
  authors: [{ name: "@USD_BONK " }],
  openGraph: {
    title: "BONK PFP Maker - Create Your Memecoin PFP",
    description:
      "Join BONK, SSX, Unstable State Dollar, Useless Coin & more with custom PFPs.",
    images: ["/bonk-main-logo.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BONK PFP Maker",
    description: "Create your perfect memecoin avatar",
    images: ["/bonk-linear-logo.png"],
  },
};
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-gray-900 text-white ${montserrat.className}`}>
        {children}
      </body>
    </html>
  );
}
