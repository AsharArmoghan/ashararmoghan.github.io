export interface Article {
  id: number;
  title: string;
  author: string;
  date: string;
  readTime: string;
  content: string;
  slug: string;
  image?: string;
  status?: "draft" | "published";
  tags?: string[];
}
