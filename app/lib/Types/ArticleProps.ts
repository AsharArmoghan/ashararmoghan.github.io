export interface Article {
  id: number;
  title: string;
  author: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
  slug: string;
  image?: string;
  status?: "draft" | "published";
  tags?: string[];
  author_user?: {
    name: string;
    image?: string;
  };
}
