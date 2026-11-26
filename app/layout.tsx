import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SITE_URL, VERIFIED_LINKS } from "@/lib/constants";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Mukesh B N — AI & Software Systems Engineer",
    template: "%s | Mukesh B N",
  },
  description:
    "Engineering portfolio of Mukesh B N. Building applied AI systems, AI workforce orchestration (AI Manager), audio stem separation (AI STEM Splitter), and EV battery diagnostics under the MUKIIQ ecosystem.",
  keywords: [
    "Mukesh B N",
    "MUKIIQ",
    "MUKIIQ RISE",
    "AI Systems Engineer",
    "AI Manager",
    "AI Dealer",
    "AI Workforce Orchestration",
    "AI STEM Splitter",
    "EV Battery Intelligence",
    "Next.js",
    "Python",
    "TypeScript",
  ],
  authors: [{ name: "Mukesh B N", url: VERIFIED_LINKS.github }],
  creator: "Mukesh B N",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Mukesh B N — AI & Software Systems Engineer",
    description:
      "Building applied AI systems, multi-provider AI workforce orchestration (AI Manager), audio stem separation, and EV battery diagnostics under MUKIIQ.",
    siteName: "Mukesh B N",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mukesh B N — AI & Software Systems Engineer",
    description:
      "Building applied AI systems, multi-provider AI workforce orchestration (AI Manager), audio stem separation, and EV battery diagnostics under MUKIIQ.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mukesh B N",
    alternateName: "Mukesh",
    jobTitle: "AI & Software Systems Engineer",
    description:
      "Software builder specializing in applied AI systems, multi-provider workforce orchestration, audio processing, and EV battery diagnostics under the MUKIIQ ecosystem.",
    url: SITE_URL,
    sameAs: [VERIFIED_LINKS.github, VERIFIED_LINKS.mukiiqLive],
    knowsAbout: [
      "Artificial Intelligence",
      "AI Workforce Orchestration",
      "Audio Stem Separation",
      "Full-Stack Web Development",
      "Next.js",
      "Python",
      "TypeScript",
      "EV Battery Diagnostics",
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-zinc-900 font-sans antialiased selection:bg-zinc-200 selection:text-zinc-900">
        {children}
      </body>
    </html>
  );
}
