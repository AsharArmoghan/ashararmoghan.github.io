import { prisma } from "@/app/lib/api/db";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/app/lib/api/auth";

export async function GET(req: NextRequest) {
  try {
    const articles = await prisma.article.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(articles);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch articles" },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  const session = await auth();

  if (!session || session.user?.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const {
      id: _id,
      createdAt,
      updatedAt,
      author_user,
      ...data
    } = await req.json();

    // Auto-generate slug
    let slug = data.slug;
    if (!slug) {
      slug = data.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");
    }

    // Ensure tags and metaKeywords are arrays
    const tags = Array.isArray(data.tags) ? data.tags : [];
    const metaKeywords = Array.isArray(data.metaKeywords)
      ? data.metaKeywords
      : [];

    const article = await prisma.article.create({
      data: {
        ...data,
        tags,
        metaKeywords,
        slug,
        authorId: session.user.id,
      },
    });
    return NextResponse.json(article, { status: 201 });
  } catch (error) {
    console.error("Article creation error:", error);
    return NextResponse.json(
      { error: "Failed to create article" },
      { status: 500 },
    );
  }
}
