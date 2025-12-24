import sharp from "sharp";

export async function optimizeImage(base64Image: string): Promise<string> {
  if (!base64Image || !base64Image.startsWith("data:image/")) {
    return base64Image;
  }

  try {
    const mimeType = base64Image.match(
      /data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+);base64,/,
    )?.[1];

    if (!mimeType) return base64Image;

    const base64Data = base64Image.split(",")[1];
    if (!base64Data) return base64Image;

    const buffer = Buffer.from(base64Data, "base64");

    const optimizedBuffer = await sharp(buffer)
      .rotate()
      .resize({
        width: 800,
        withoutEnlargement: true,
        fit: "inside",
      })
      .webp({
        quality: 60,
        effort: 6,
        smartSubsample: true,
      })
      .toBuffer();

    const optimizedBase64 = `data:image/webp;base64,${optimizedBuffer.toString("base64")}`;

    console.log(
      `Image optimized from ${base64Image.length} to ${optimizedBase64.length} characters (Reduced by ${Math.round((1 - optimizedBase64.length / base64Image.length) * 100)}%)`,
    );

    return optimizedBase64;
  } catch (error) {
    console.error("Error optimizing image:", error);
    return base64Image;
  }
}

export async function optimizeHtmlImages(html: string): Promise<string> {
  if (!html) return html;

  const base64Regex = /src=(['"])(data:image\/[^;]+;base64,[^'"]+)\1/g;
  const matches = [...html.matchAll(base64Regex)];

  let optimizedHtml = html;

  for (const match of matches) {
    const originalBase64 = match[2];
    const optimizedBase64 = await optimizeImage(originalBase64);
    optimizedHtml = optimizedHtml.replace(originalBase64, optimizedBase64);
  }

  return optimizedHtml;
}
