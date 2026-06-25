export const siteConfig = {
  name: "Senior Product Manager Portfolio",
  title: "Senior Product Manager Portfolio",
  description: "A refined personal portfolio foundation for a senior product leader.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  locale: "en_US",
  creator: {
    name: "Senior Product Manager",
    role: "Senior Product Manager"
  },
  links: {
    email: "mailto:hello@example.com",
    linkedin: "https://www.linkedin.com/",
    x: "https://x.com/"
  }
} as const;

export type SiteConfig = typeof siteConfig;
