import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { Toaster } from "react-hot-toast";
import ThemeProvider from "@/app/components/Theme/providers";
import { SpeedInsights } from "@vercel/speed-insights/next";
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
import { Template } from "./components/Template/template";
import Script from "next/script";
import { LenisProvider } from "./providers/LenisProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://ashar-dev.vercel.app"),

  title: {
    default: "Ashar | Full-Stack Developer",
    template: "%s | Ashar",
  },
  verification: {
    google: "YqVGkuZ9GRJr_fSb_-7UjxOZnMnGWrNx7JyXx5az1A4",
  },
  description:
    "Portfolio of Ashar, a Full-Stack Developer specializing in scalable web solutions with Next.js 15, React, and TypeScript. Based in Delhi, India.",
  keywords: [
    "Full Stack Developer",
    "Next.js 15 Portfolio",
    "React Developer",
    "TypeScript",
    "Tailwind CSS",
    "Web Development Delhi",
    "Software Engineer India",
  ],
  authors: [{ name: "Ashar" }],
  creator: "Ashar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ashar-dev.vercel.app",
    title: "Ashar | Full-Stack Developer",
    description:
      "Building scalable web solutions with Next.js 15, React, and Tailwind CSS.",
    siteName: "Ashar Portfolio",
    images: [
      {
        url: "/og-home.jpg", // Ensure this image exists in your public folder
        width: 1200,
        height: 630,
        alt: "Ashar Portfolio Homepage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashar | Full-Stack Developer",
    description: "Building scalable web solutions with Next.js 15 and React.",
    images: ["/og-home.jpg"],
    creator: "@your_twitter_handle", // Update this
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics Script */}
        <Script
          async
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body
        className={twMerge(
          inter.className,
          "flex min-h-screen flex-col antialiased",
        )}
      >
        <LenisProvider>
          <ThemeProvider>
            <Template>
              <Toaster position="bottom-center" />
              <main className="grow">{children}</main>
            </Template>
          </ThemeProvider>
        </LenisProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
