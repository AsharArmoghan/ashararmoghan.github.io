import { prisma } from "@/app/lib/api/db";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/app/lib/api/auth";
import { optimizeImage, optimizeHtmlImages } from "@/app/lib/api/image";
import { revalidatePath } from "next/cache";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  try {
    const article = await prisma.article.findUnique({
      where: { id },
      include: {
        author_user: {
          select: {
            name: true,
            image: true,
          },
        },
      },
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
    const json = await req.json();
    const {
      id: _id,
      createdAt,
      updatedAt,
      authorId,
      author_user,
      ...data
    } = json;

    // Optimize images
    if (data.image && data.image.startsWith("data:image/")) {
      data.image = await optimizeImage(data.image);
    }
    if (data.content) {
      data.content = await optimizeHtmlImages(data.content);
    }

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

    delete data.id;

    const article = await prisma.article.update({
      where: { id },
      data: {
        ...data,
      },
    });

    // Revalidate relevant paths
    revalidatePath("/articles");
    revalidatePath(`/articles/${article.slug}`);
    revalidatePath("/");

    return NextResponse.json(article);
  } catch (error: any) {
    console.error("Article update error:", error);
    return NextResponse.json(
      { error: `Failed to update article: ${error.message}` },
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
    const article = await prisma.article.delete({
      where: { id },
    });

    // Revalidate relevant paths
    revalidatePath("/articles");
    revalidatePath(`/articles/${article.slug}`);
    revalidatePath("/");

    return NextResponse.json({ message: "Article deleted" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete article" },
      { status: 500 },
    );
  }
}
