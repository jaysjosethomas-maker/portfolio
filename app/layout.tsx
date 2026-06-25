import "@/styles/globals.css";

import type { Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import type * as React from "react";

import { AppProviders } from "@/components/providers/app-providers";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap"
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
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
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#08090d" }
  ]
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.creator.name,
  jobTitle: siteConfig.creator.role,
  url: siteConfig.url,
  email: siteConfig.links.email.replace("mailto:", ""),
  sameAs: [siteConfig.links.linkedin, siteConfig.links.github],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Birla Institute of Technology and Science, Pilani"
  },
  worksFor: {
    "@type": "Organization",
    name: "Krutrim AI Cloud"
  },
  knowsAbout: [
    "Product Management",
    "AI Infrastructure",
    "Cloud Platforms",
    "Marketplace Products",
    "Enterprise SaaS",
    "Product Strategy"
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.variable, jetBrainsMono.variable)}>
        <AppProviders>
          <script
            dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            type="application/ld+json"
          />
          <a
            className="sr-only z-50 rounded-full bg-primary px-4 py-2 text-primary-foreground focus:not-sr-only focus:fixed focus:left-6 focus:top-6"
            href="#main-content"
          >
            Skip to content
          </a>
          {children}
        </AppProviders>
      </body>
    </html>
  );
}
