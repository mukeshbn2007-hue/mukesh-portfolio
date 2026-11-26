export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://mukesh-portfolio-ten-dusky.vercel.app";

export const VERIFIED_LINKS = {
  github: "https://github.com/mukeshbn2007-hue",
  portfolioRepo: "https://github.com/mukeshbn2007-hue/mukesh-portfolio",
  mukiiqLive: "https://mukiiq.vercel.app",
  email: "Mukeshbn2007@gmail.com",
} as const;
