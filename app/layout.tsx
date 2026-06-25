import "@/styles/globals.css";

import type { Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type * as React from "react";

import { AppProviders } from "@/components/providers/app-providers";
import { createMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap"
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap"
});

export const metadata = createMetadata();

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf8" },
    { media: "(prefers-color-scheme: dark)", color: "#090a0f" }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(geistSans.variable, geistMono.variable)}>
        <AppProviders>
          <a
            className="sr-only z-50 rounded-full bg-primary px-4 py-2 text-primary-foreground focus:not-sr-only focus:fixed focus:left-6 focus:top-6"
            href="#main-content"
          >
            Skip to content
          </a>
          <main id="main-content">{children}</main>
        </AppProviders>
      </body>
    </html>
  );
}
