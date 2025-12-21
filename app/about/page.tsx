import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About | Ashar",
  description:
    "Learn more about Ashar, a Full-Stack Developer specializing in React, Next.js, and Mobile Development.",
  openGraph: {
    title: "About | Ashar",
    description: "Learn more about Ashar, a Full-Stack Developer.",
    type: "profile",
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
