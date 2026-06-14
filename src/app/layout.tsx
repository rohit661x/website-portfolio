import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import AuroraBackground from "@/components/AuroraBackground";
import { Analytics } from "@vercel/analytics/next";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
});

// TODO: update to Rohit's real domain once chosen (used for OG/canonical URLs).
const SITE_URL = "https://rohitsuryadevara.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Rohit Suryadevara — Machine Learning Engineer",
  description:
    "Mathematics student at McMaster University and AI Developer at IG Wealth Management. Building machine learning models, AI systems, and data pipelines.",
  openGraph: {
    title: "Rohit Suryadevara — Machine Learning Engineer",
    description:
      "Building machine learning models, AI systems, and data-driven insights.",
    url: SITE_URL,
    siteName: "Rohit Suryadevara",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rohit Suryadevara — Machine Learning Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohit Suryadevara — Machine Learning Engineer",
    description:
      "Building machine learning models, AI systems, and data-driven insights.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Prevent flash of wrong theme — runs before first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('theme');var p=window.matchMedia('(prefers-color-scheme: dark)').matches;if(s==='dark'||(s===null&&p)){document.documentElement.classList.add('dark');}}catch(e){}})();`,
          }}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bone text-primary antialiased font-body-md min-h-screen flex flex-col">
        <AuroraBackground />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
