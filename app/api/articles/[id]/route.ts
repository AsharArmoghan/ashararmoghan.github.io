import { prisma } from "@/app/lib/api/db";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/app/lib/api/auth";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  try {
    const article = await prisma.article.findUnique({
      where: { id },
    });
    if (!article) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    return NextResponse.json(article);
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const session = await auth();

  if (!session || session.user?.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const {
      id: _id,
      createdAt,
      updatedAt,
      authorId,
      author_user,
      ...data
    } = await req.json();

    // Ensure tags and metaKeywords are arrays
    if (data.tags && !Array.isArray(data.tags)) {
      data.tags = String(data.tags)
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean);
    }
    if (data.metaKeywords && !Array.isArray(data.metaKeywords)) {
      data.metaKeywords = String(data.metaKeywords)
        .split(",")
        .map((k) => k.trim())
        .filter(Boolean);
    }

    const article = await prisma.article.update({
      where: { id },
      data: {
        ...data,
      },
    });
    return NextResponse.json(article);
  } catch (error) {
    console.error("Article update error:", error);
    return NextResponse.json(
      { error: "Failed to update article" },
      { status: 500 },
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const session = await auth();

  if (!session || session.user?.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await prisma.article.delete({
      where: { id },
    });
    return NextResponse.json({ message: "Article deleted" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete article" },
      { status: 500 },
    );
  }
}
