export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ashar",
  url: "https://ashar-dev.vercel.app",
  image: "https://ashar-dev.vercel.app/og-home.jpg",
  sameAs: [
    "https://github.com/AsharArmoghan",
    "https://linkedin.com/in/ashar-armoghan-915191100",
    "https://x.com/SyedAshar09",
    "https://www.fiverr.com/syedashar09?public_mode=true",
  ],
  jobTitle: "Full-Stack Developer",
  worksFor: {
    "@type": "Organization",
    name: "Freelance",
  },
  description:
    "Full-Stack Developer specializing in scalable web solutions with Next.js 15, React, and TypeScript.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Delhi",
    addressCountry: "India",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Ashar Portfolio",
  url: "https://ashar-dev.vercel.app",
  author: {
    "@type": "Person",
    name: "Ashar",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://ashar-dev.vercel.app/?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};
