import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/app/lib/api/auth";

interface SEOMetadata {
  metaDescription: string;
  metaKeywords: string[];
  ogTitle: string;
  ogDescription: string;
  schemaMarkup: object;
}

async function generateWithHuggingFace(
  type: string,
  title: string,
  description: string,
  content?: string,
): Promise<SEOMetadata> {
  // Use Gemma-style formatting for cyberandy/SEOcrate-4B_grpo_new_01
  const prompt = `<start_of_turn>user
You are an SEO expert. Generate JSON metadata for a ${type}.
Title: ${title}
Context: ${description}
${content ? `Content Sample: ${content.substring(0, 200)}` : ""}

Format:
{
  "metaDescription": "string (150 chars max)",
  "metaKeywords": ["keyword1", "keyword2", "keyword3","keyword4","keyword5","keyword6","keyword7","keyword8","keyword9","keyword10"],
  "ogTitle": "string (100 chars max)",
  "ogDescription": "string (150 chars max)",
  "schemaMarkup": { "@context": "https://schema.org", "@type": "${type === "article" ? "BlogPosting" : "CreativeWork"}", "headline": "${title}" }
}
Return ONLY valid JSON.<end_of_turn>
<start_of_turn>model`;

  try {
    const response = await fetch(
      "https://router.huggingface.co/models/zai-org/GLM-4.7",
      {
        headers: {
          Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          inputs: prompt,
          parameters: {
            max_new_tokens: 1024,
            return_full_text: false,
            temperature: 0.1,
          },
        }),
      },
    );

    if (!response.ok) {
      const errorText = await response.text();
      let errorMessage = `Hugging Face API error: ${response.status}`;
      try {
        const errorJson = JSON.parse(errorText);
        if (errorJson.error) {
          errorMessage += ` - ${errorJson.error}`;
        }
      } catch (e) {
        if (errorText.length < 100) errorMessage += ` - ${errorText}`;
      }
      console.error("HF API Error:", errorText);
      throw new Error(errorMessage);
    }

    const result = await response.json();
    const text = Array.isArray(result)
      ? result[0].generated_text
      : result.generated_text;

    const jsonMatch = text.match(/\{[\s\S]*\}/);

    if (!jsonMatch) {
      console.error("No JSON in response:", text);

      throw new Error("No JSON found in response");
    }

    try {
      return JSON.parse(jsonMatch[0]) as SEOMetadata;
    } catch (e) {
      console.error("JSON Parse Error:", e);
      throw e;
    }
  } catch (error) {
    console.error("Hugging Face error:", error);
    throw error;
  }
}

function generateBasicSEO(title: string, description: string): SEOMetadata {
  const keywords = title
    .split(" ")
    .filter((w) => w.length > 4)
    .slice(0, 5);

  return {
    metaDescription: description.substring(0, 160),
    metaKeywords: keywords,
    ogTitle: title.substring(0, 60),
    ogDescription: description.substring(0, 100),
    schemaMarkup: {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      headline: title,
      description: description,
    },
  };
}

export async function POST(req: NextRequest) {
  const session = await auth();

  if (!session || session.user?.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { type, title, description, content } = await req.json();

    if (!type || !title || !description) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    let seoData: SEOMetadata;
    let aiError: string | null = null;

    if (process.env.HUGGINGFACE_API_KEY) {
      try {
        seoData = await generateWithHuggingFace(
          type,
          title,
          description,
          content,
        );
      } catch (error: any) {
        console.warn(
          "Falling back to basic SEO due to AI error:",
          error.message,
        );
        aiError = error.message;
        seoData = generateBasicSEO(title, description);
      }
    } else {
      seoData = generateBasicSEO(title, description);
    }

    return NextResponse.json({
      success: true,
      metadata: seoData,
      aiError,
    });
  } catch (error) {
    console.error("SEO generation error:", error);
    return NextResponse.json(
      { error: "Failed to generate SEO metadata" },
      { status: 500 },
    );
  }
}
