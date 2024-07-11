import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "../provider";
import { AppbarClient } from "../components/AppbarClient";

import { Inter } from "next/font/google"
const inter = Inter({subsets:["latin"]})

export const metadata: Metadata = {
  title: "Paytm Wallet",
  description: "Simple Wallet App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>
          <div className="min-w-screen min-h-screen bg-[#d4c9d6]">
            <AppbarClient />
            {children}
          </div>
        </body>
      </Providers>
    </html>
  );
}
