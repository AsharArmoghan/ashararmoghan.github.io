"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { Article } from "@/app/lib/Types/ArticleProps";

interface DataContextType {
  articles: Article[];
  setArticles: (articles: Article[]) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({
  children,
  initialArticles = [],
}: {
  children: ReactNode;
  initialArticles?: Article[];
}) {
  const [articles, setArticles] = useState<Article[]>(initialArticles);

  return (
    <DataContext.Provider value={{ articles, setArticles }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
}
