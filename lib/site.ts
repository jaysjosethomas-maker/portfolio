export const siteConfig = {
  name: "Jays Thomas",
  title: "Jays Thomas - Product Leader",
  description:
    "Product Leader building AI infrastructure, cloud platforms, marketplaces, SaaS, and consumer products at scale.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  locale: "en_US",
  creator: {
    name: "Jays Thomas",
    role: "Product Leader"
  },
  links: {
    email: "mailto:jaysjosethomas@gmail.com",
    linkedin: "https://www.linkedin.com/in/jays-jose-thomas/",
    github: "https://github.com/jaysjosethomas-maker"
  }
} as const;

export type SiteConfig = typeof siteConfig;
