"use client";
import React, { PropsWithChildren, useMemo } from "react";
import Head from "next/head";

type SeoContainerProps = PropsWithChildren<{
  title: string;
  description: string;
  url: string;
  image: string;
  imageWidth: string;
  imageHeight: string;
  publishedAt?: string;
  author?: string;
  keywords?: string;
  type?: "website" | "article" | "profile";
  locale?: string;
  twitterHandle?: string;
  siteName?: string;
  // 2025 additions
  canonicalUrl?: string; // Explicit canonical URL for duplicate prevention
  alternateLangs?: Array<{ hrefLang: string; href: string }>; // hreflang for multi-lang sites
  breadcrumbs?: Array<{ name: string; url: string }>; // BreadcrumbList schema
  articleCategory?: string; // Article category
  readingTime?: number; // Reading time in minutes
  focalPointX?: number; // Image focal point for OG image
  focalPointY?: number; // Image focal point for OG image
}>;

export default function SeoContainer({
  children,
  title,
  description,
  url,
  image,
  imageWidth,
  imageHeight,
  publishedAt,
  author = "Ashar Armoghan",
  keywords,
  type = "website",
  locale = "en_US",
  twitterHandle = "@AsharArmoghan",
  siteName = "Ashar | Full-Stack Developer",
  canonicalUrl,
  alternateLangs = [],
  breadcrumbs = [],
  articleCategory = "Technology",
  readingTime,
  focalPointX,
  focalPointY,
}: SeoContainerProps) {
  const date = useMemo(
    () =>
      publishedAt
        ? new Date(publishedAt).toISOString()
        : new Date().toISOString(),
    [publishedAt],
  );

  // Image optimization: keep WebP if available, fallback to PNG
  const img = useMemo(() => image, [image]);

  // Canonical URL - prefer explicit canonicalUrl over url
  const canonicalURLFinal = useMemo(() => {
    return canonicalUrl || url;
  }, [canonicalUrl, url]);

  // Generate structured data schemas
  const structuredData = useMemo(() => {
    const baseSchema = {
      "@context": "https://schema.org",
      "@type":
        type === "article"
          ? "BlogPosting"
          : type === "profile"
            ? "Person"
            : "WebSite",
      name: title,
      description: description,
      image: {
        "@type": "ImageObject",
        url: img,
        width: imageWidth,
        height: imageHeight,
      },
      url: canonicalURLFinal,
      inLanguage: locale.split("_")[0],
    };

    // Article schema with 2025 best practices
    if (type === "article") {
      return {
        ...baseSchema,
        "@type": "BlogPosting",
        author: {
          "@type": "Person",
          name: author,
          url: `https://ashar-dev.vercel.app`,
        },
        datePublished: date,
        dateModified: date,
        ...(articleCategory && { articleSection: articleCategory }),
        ...(readingTime && {
          timeRequired: `PT${readingTime}M`,
        }),
        // Add mainEntity for FAQ schema if needed
        creator: {
          "@type": "Person",
          name: author,
        },
        publisher: {
          "@type": "Organization",
          name: siteName,
          logo: {
            "@type": "ImageObject",
            url: "https://ashar-dev.vercel.app/favicon.ico",
          },
        },
      };
    }

    // Person schema for profile
    if (type === "profile") {
      return {
        ...baseSchema,
        "@type": "Person",
        name: author,
        url: `https://ashar-dev.vercel.app`,
        description: description,
      };
    }

    // WebSite schema with SearchAction for site search
    return {
      ...baseSchema,
      "@type": "WebSite",
      author: {
        "@type": "Organization",
        name: siteName,
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `https://ashar-dev.vercel.app/search?q={search_term_string}`,
        },
        query_input: "required name=search_term_string",
      },
    };
  }, [
    title,
    description,
    img,
    imageWidth,
    imageHeight,
    canonicalURLFinal,
    author,
    date,
    type,
    articleCategory,
    readingTime,
    siteName,
    locale,
  ]);

  // BreadcrumbList schema for navigation
  const breadcrumbSchema = useMemo(() => {
    if (breadcrumbs.length === 0) return null;

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: crumb.url,
      })),
    };
  }, [breadcrumbs]);

  return (
    <>
      <Head>
        {/* ===== ESSENTIAL META TAGS ===== */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content={author} />
        <meta name="creator" content={author} />
        {keywords && <meta name="keywords" content={keywords} />}

        <title>{title}</title>

        {/* ===== 2025 SEO: CANONICAL & HREFLANG TAGS ===== */}
        <link rel="canonical" href={canonicalURLFinal} />
        {alternateLangs.map((alt) => (
          <link
            key={alt.hrefLang}
            rel="alternate"
            hrefLang={alt.hrefLang}
            href={alt.href}
          />
        ))}
        {locale && (
          <link
            rel="alternate"
            hrefLang={locale.replace("_", "-")}
            href={canonicalURLFinal}
          />
        )}

        {/* ===== DESCRIPTION & ROBOTS META ===== */}
        <meta name="description" content={description} />
        <meta
          name="robots"
          content="follow, index, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta
          name="googlebot"
          content="follow, index, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />

        {/* ===== SCHEMA.ORG / JSON-LD STRUCTURED DATA ===== */}
        {/* Main Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {/* BreadcrumbList Schema */}
        {breadcrumbSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(breadcrumbSchema),
            }}
          />
        )}

        {/* Microdata for rich snippets (fallback for legacy support) */}
        <meta itemProp="name" content={title} />
        <meta itemProp="description" content={description} />
        <meta itemProp="image" content={img} />

        {/* ===== OPEN GRAPH / FACEBOOK META TAGS ===== */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:type"
          content={type === "article" ? "article" : "website"}
        />
        <meta property="og:url" content={canonicalURLFinal} />
        <meta property="og:image" content={img} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content={imageWidth} />
        <meta property="og:image:height" content={imageHeight} />
        <meta property="og:image:alt" content={description} />
        {/* Image focal point for better crop (2025 best practice) */}
        {typeof focalPointX === "number" && typeof focalPointY === "number" && (
          <>
            <meta property="og:image:x" content={focalPointX.toString()} />
            <meta property="og:image:y" content={focalPointY.toString()} />
          </>
        )}
        <meta property="og:site_name" content={siteName} />
        <meta property="og:locale" content={locale} />

        {/* ===== TWITTER CARD META TAGS ===== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={twitterHandle} />
        <meta name="twitter:creator" content={twitterHandle} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={img} />
        <meta name="twitter:image:alt" content={description} />

        {/* ===== ARTICLE META TAGS (for blog posts) ===== */}
        {type === "article" && (
          <>
            <meta property="article:published_time" content={date} />
            <meta property="article:modified_time" content={date} />
            <meta property="article:author" content={author} />
            <meta property="article:section" content={articleCategory} />
            {/* Add article tag keywords for topical authority (2025) */}
            {keywords &&
              keywords
                .split(",")
                .slice(0, 5)
                .map((keyword, idx) => (
                  <meta
                    key={idx}
                    property="article:tag"
                    content={keyword.trim()}
                  />
                ))}
          </>
        )}

        {/* ===== THEME & BRANDING ===== */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* ===== PRECONNECT & DNS-PREFETCH FOR PERFORMANCE (Core Web Vitals 2025) ===== */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* ===== ADDITIONAL 2025 SEO OPTIMIZATIONS ===== */}
        {/* Prevent format detection for mobile links */}
        <meta name="format-detection" content="telephone=no" />

        {/* CSP for security */}
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self' https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google-analytics.com https://www.googletagmanager.com; style-src 'self' 'unsafe-inline'"
        />

        {/* Preload critical resources for Core Web Vitals (LCP improvement) */}
        <link
          rel="preload"
          as="font"
          href="/fonts/main.woff2"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* Prefetch DNS for third-party resources */}
        <link rel="prefetch" href="https://cdn.example.com" />
      </Head>
      {children}
    </>
  );
}
