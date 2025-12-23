import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About | Ashar",
  description:
    "Learn more about Ashar, a Full-Stack Developer specializing in React, Next.js, and Mobile Development.",
  openGraph: {
    title: "About | Ashar",
    description: "Learn more about Ashar, a Full-Stack Developer.",
    url: "https://ashar-dev.vercel.app/about",
    siteName: "Ashar Portfolio",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "About Ashar",
      },
    ],
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Ashar",
    description: "Learn more about Ashar, a Full-Stack Developer.",
    images: ["/og-home.jpg"],
  },
  alternates: {
    canonical: "/about",
  },
};

import { personSchema } from "@/app/lib/seo/schemas";

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <AboutClient />
    </>
  );
}
