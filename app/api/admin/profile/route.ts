import { prisma } from "@/app/lib/api/db";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/app/lib/api/auth";
import { optimizeImage } from "@/app/lib/api/image";

export async function GET() {
  const session = await auth();

  if (!session || session.user?.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: {
        name: true,
        email: true,
        image: true,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch profile" },
      { status: 500 },
    );
  }
}

export async function PUT(req: NextRequest) {
  const session = await auth();

  if (!session || session.user?.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const data = await req.json();

    // Optimize image if provided as base64
    if (data.image && data.image.startsWith("data:image/")) {
      data.image = await optimizeImage(data.image);
    }

    const updatedUser = await prisma.user.update({
      where: { id: session.user.id },
      data: {
        name: data.name,
        image: data.image,
      },
    });

    return NextResponse.json({
      name: updatedUser.name,
      image: updatedUser.image,
    });
  } catch (error: any) {
    console.error("Profile update error:", error);
    return NextResponse.json(
      { error: `Failed to update profile: ${error.message}` },
      { status: 500 },
    );
  }
}
