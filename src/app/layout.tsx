import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import "aos/dist/aos.css";
export const metadata: Metadata = {
  title:
    "Unstable States Dollar | The only dollar that embraces chaos. CA: 7WXaHLjatDZBAZ7hyRiFpYpGpPbcKiyHf6HaxUzSbonk",
  description:
    "Unstable States Dollar | The only dollar that embraces chaos.CA: 7WXaHLjatDZBAZ7hyRiFpYpGpPbcKiyHf6HaxUzSbonk",
  keywords: ["BONK"],
  authors: [{ name: "@USD_BONK " }],
  openGraph: {
    title:
      "Unstable States Dollar | The only dollar that embraces chaos.CA: 7WXaHLjatDZBAZ7hyRiFpYpGpPbcKiyHf6HaxUzSbonk",
    description:
      "Unstable States Dollar | The only dollar that embraces chaos.CA: 7WXaHLjatDZBAZ7hyRiFpYpGpPbcKiyHf6HaxUzSbonk",
    images: ["/usd-logo.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unstable States Dollar",
    description:
      "Unstable States Dollar | The only dollar that embraces chaos.CA: 7WXaHLjatDZBAZ7hyRiFpYpGpPbcKiyHf6HaxUzSbonk",
    images: ["/unstable-states-dollar.jpeg"],
  },
};
import { Bitcount_Single, Tektur, Coral_Pixels } from "next/font/google";
import AOSWrapper from "@/components/AOSWrapper/AOSWrapper";

const bitcountSingle = Bitcount_Single({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const tektur = Tektur({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const coralPixels = Coral_Pixels({
  subsets: ["latin"],
  weight: ["400"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-gray-900 text-white ${bitcountSingle.className}`}>
        <AOSWrapper>
          <div>{children}</div>
        </AOSWrapper>
      </body>
    </html>
  );
}
