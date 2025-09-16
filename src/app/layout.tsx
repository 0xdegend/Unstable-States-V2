import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "USD Bonk",
  description: "USD Bonk - The Unstable USD Meme Token Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">{children}</body>
    </html>
  );
}
