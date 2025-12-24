import { PrismaClient } from "@prisma/client";
import { optimizeImage, optimizeHtmlImages } from "../app/lib/api/image";

const prisma = new PrismaClient();

async function main() {
  console.log("Starting article optimization...");

  const articles = await prisma.article.findMany();
  console.log(`Found ${articles.length} articles.`);

  for (const article of articles) {
    console.log(`Optimizing article: ${article.title} (${article.slug})`);

    let needsUpdate = false;
    const newData: any = {};

    if (article.image && article.image.startsWith("data:image/")) {
      const originalSize = article.image.length;
      const optimized = await optimizeImage(article.image);
      if (optimized.length < originalSize) {
        newData.image = optimized;
        needsUpdate = true;
        console.log(
          `  - Cover image optimized: ${originalSize} -> ${optimized.length}`,
        );
      }
    }

    if (article.content && article.content.includes("data:image/")) {
      const originalSize = article.content.length;
      const optimized = await optimizeHtmlImages(article.content);
      if (optimized.length < originalSize) {
        newData.content = optimized;
        needsUpdate = true;
        console.log(
          `  - Content images optimized: ${originalSize} -> ${optimized.length}`,
        );
      }
    }

    if (needsUpdate) {
      await prisma.article.update({
        where: { id: article.id },
        data: newData,
      });
      console.log(`  - Article updated successfully.`);
    } else {
      console.log(`  - No optimization needed for this article.`);
    }
  }

  console.log("Optimization complete.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
