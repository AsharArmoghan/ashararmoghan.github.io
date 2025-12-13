import { Metadata } from "next";
import SeoContainer from "@/app/components/SeoContainer/SeoContainer";
import { Home } from "@/app/home/home";

export const metadata: Metadata = {
  title: "Ashar | Full-Stack Developer",
  description:
    "Full-Stack Developer specializing in Next.js, React, and Node.js.",
  keywords: ["Full Stack Developer", "Next.js", "React", "Portfolio"],
  metadataBase: new URL("https://ashar-dev.vercel.app"),
  alternates: {
    canonical: "https://ashar-dev.vercel.app",
  },
  openGraph: {
    title: "Ashar | Full-Stack Developer",
    description: "Building scalable web solutions with Next.js and React",
    url: "https://ashar-dev.vercel.app",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashar | Full-Stack Developer",
    creator: "@AsharArmoghan",
  },
};

export default function HomePage() {
  const breadcrumbs = [{ name: "Home", url: "https://ashar-dev.vercel.app" }];

  return (
    <SeoContainer
      title="Ashar | Full-Stack Developer"
      description="Full-Stack Developer specializing in Next.js, React, and Node.js."
      url="https://ashar-dev.vercel.app"
      image="/og-home.jpg"
      imageWidth="1200"
      imageHeight="630"
      breadcrumbs={breadcrumbs}
    >
      <Home />
    </SeoContainer>
  );
}
