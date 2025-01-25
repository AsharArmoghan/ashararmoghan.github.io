"use client";
import React from "react";

import Author from "../Author/Author";
import SeoContainer from "../SeoContainer/SeoContainer";

type ArticleProps = {
  children?: React.ReactElement;
  title: string;
  description: string;
  publishedAt: string;
  slug: string;
  cover: string;
  coverWidth: string;
  coverHeight: string;
  category?: string;
  readingTime?: Record<string, string>;
  hideAuthor?: boolean;
};

export default function Article({
  children,
  title,
  description,
  publishedAt,
  slug = "",
  cover = "",
  coverWidth,
  coverHeight,
  readingTime,
  hideAuthor,
}: ArticleProps) {
  return (
    <SeoContainer
      title={title}
      description={description}
      url={`https://dawchihliou.github.io/articles/${slug}`}
      image={`${cover}`}
      imageWidth={coverWidth}
      imageHeight={coverHeight}
      publishedAt={publishedAt}
    >
      <article>
        <div className="">
          <div className="">
            <h1>{title}</h1>
            <div className="">
              <div className="">
                <img
                  alt="Ashar"
                  src="/optimized/raw/portrait-sm.webp"
                  loading="lazy"
                />
                <p>Daw-Chih Liou</p>
              </div>
              <p>
                {publishedAt}
                {readingTime ? ` · ${readingTime.text}` : ""}
              </p>
            </div>
            <img
              alt={title}
              src={cover}
              width="100%"
              className="centered rounded"
              loading="lazy"
            />
            <div className="article-content">{children}</div>
            {!hideAuthor && <Author />}
          </div>
        </div>
      </article>
    </SeoContainer>
  );
}
