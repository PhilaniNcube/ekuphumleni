import { NextResponse } from "next/server";
import {
  listAllR2Images,
  getGalleryManifest,
  saveGalleryManifest,
  type GalleryManifest,
  type GalleryManifestEntry,
} from "@/lib/r2";

export const dynamic = "force-dynamic";

/**
 * GET /api/admin/gallery
 * Returns all R2 images merged with the current manifest state.
 */
export async function GET() {
  try {
    const [allImages, manifest] = await Promise.all([
      listAllR2Images(),
      getGalleryManifest(),
    ]);

    const manifestMap = new Map<string, GalleryManifestEntry>();
    if (manifest) {
      for (const entry of manifest.images) {
        manifestMap.set(entry.key, entry);
      }
    }

    // Merge: all R2 images with manifest overrides
    const merged = allImages.map(({ key, src }, index) => {
      const existing = manifestMap.get(key);
      let category = "General";
      if (key.includes("/")) {
        const parts = key.split("/");
        if (parts.length > 1) {
          category = parts[0].charAt(0).toUpperCase() + parts[0].slice(1);
        }
      }
      return {
        key,
        src,
        alt: existing?.alt ?? key,
        category: existing?.category ?? category,
        visible: existing?.visible ?? false,
        order: existing?.order ?? index,
      };
    });

    // Sort by order
    merged.sort((a, b) => a.order - b.order);

    return NextResponse.json({ images: merged });
  } catch (error) {
    console.error("Admin gallery GET error:", error);
    return NextResponse.json(
      { error: "Failed to fetch gallery data" },
      { status: 500 }
    );
  }
}

/**
 * PUT /api/admin/gallery
 * Saves the gallery manifest to R2.
 */
export async function PUT(request: Request) {
  try {
    const body = (await request.json()) as GalleryManifest;

    if (!body.images || !Array.isArray(body.images)) {
      return NextResponse.json(
        { error: "Invalid manifest format: images array required" },
        { status: 400 }
      );
    }

    // Validate each entry
    for (const entry of body.images) {
      if (typeof entry.key !== "string" || !entry.key) {
        return NextResponse.json(
          { error: "Each image must have a valid key" },
          { status: 400 }
        );
      }
    }

    await saveGalleryManifest(body);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Admin gallery PUT error:", error);
    return NextResponse.json(
      { error: "Failed to save gallery manifest" },
      { status: 500 }
    );
  }
}
