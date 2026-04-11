import {
  S3Client,
  ListObjectsV2Command,
  GetObjectCommand,
  PutObjectCommand,
} from "@aws-sdk/client-s3";

const R2_ACCOUNT_ID = process.env.R2_ACCOUNT_ID;
const R2_ACCESS_KEY_ID = process.env.R2_ACCESS_KEY_ID;
const R2_SECRET_ACCESS_KEY = process.env.R2_SECRET_ACCESS_KEY;
const R2_BUCKET_NAME = process.env.R2_BUCKET_NAME;
const R2_PUBLIC_URL = process.env.R2_PUBLIC_URL; // e.g. https://pub-xxxxxxxx.r2.dev or https://assets.ekuphumleni.org

const MANIFEST_KEY = "gallery-manifest.json";

const s3Client = new S3Client({
  region: "auto",
  endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: R2_ACCESS_KEY_ID || "",
    secretAccessKey: R2_SECRET_ACCESS_KEY || "",
  },
});

export interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

export interface GalleryManifestEntry {
  key: string;
  alt: string;
  category: string;
  visible: boolean;
  order: number;
}

export interface GalleryManifest {
  images: GalleryManifestEntry[];
}

export async function getGalleryManifest(): Promise<GalleryManifest | null> {
  if (!R2_BUCKET_NAME) return null;
  try {
    const response = await s3Client.send(
      new GetObjectCommand({ Bucket: R2_BUCKET_NAME, Key: MANIFEST_KEY })
    );
    const body = await response.Body?.transformToString();
    if (!body) return null;
    return JSON.parse(body) as GalleryManifest;
  } catch {
    return null;
  }
}

export async function saveGalleryManifest(
  manifest: GalleryManifest
): Promise<void> {
  if (!R2_BUCKET_NAME) throw new Error("R2_BUCKET_NAME not configured");
  await s3Client.send(
    new PutObjectCommand({
      Bucket: R2_BUCKET_NAME,
      Key: MANIFEST_KEY,
      Body: JSON.stringify(manifest, null, 2),
      ContentType: "application/json",
    })
  );
}

/** Returns all image keys from R2 (for the admin UI). */
export async function listAllR2Images(): Promise<
  { key: string; src: string }[]
> {
  if (
    !R2_BUCKET_NAME ||
    !R2_ACCOUNT_ID ||
    !R2_ACCESS_KEY_ID ||
    !R2_SECRET_ACCESS_KEY
  ) {
    return [];
  }
  try {
    const response = await s3Client.send(
      new ListObjectsV2Command({ Bucket: R2_BUCKET_NAME })
    );
    if (!response.Contents) return [];
    return response.Contents.filter((item) => {
      const key = item.Key?.toLowerCase();
      return (
        key &&
        key !== MANIFEST_KEY.toLowerCase() &&
        (key.endsWith(".jpg") ||
          key.endsWith(".jpeg") ||
          key.endsWith(".png") ||
          key.endsWith(".webp"))
      );
    }).map((item) => {
      const src = R2_PUBLIC_URL
        ? `${R2_PUBLIC_URL}/${item.Key}`
        : `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com/${R2_BUCKET_NAME}/${item.Key}`;
      return { key: item.Key!, src };
    });
  } catch (error) {
    console.error("Error listing R2 images:", error);
    return [];
  }
}

export async function getGalleryImages(): Promise<GalleryImage[]> {
  if (
    !R2_BUCKET_NAME ||
    !R2_ACCOUNT_ID ||
    !R2_ACCESS_KEY_ID ||
    !R2_SECRET_ACCESS_KEY
  ) {
    console.warn("R2 credentials not set. Returning empty gallery.");
    return [];
  }

  try {
    const manifest = await getGalleryManifest();

    // If a manifest exists, use it to determine which images to show
    if (manifest) {
      return manifest.images
        .filter((entry) => entry.visible)
        .sort((a, b) => a.order - b.order)
        .map((entry) => ({
          src: R2_PUBLIC_URL
            ? `${R2_PUBLIC_URL}/${entry.key}`
            : `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com/${R2_BUCKET_NAME}/${entry.key}`,
          alt: entry.alt,
          category: entry.category,
        }));
    }

    // Fallback: no manifest yet, show all images
    const allImages = await listAllR2Images();
    return allImages.map(({ key, src }) => {
      let category = "General";
      if (key.includes("/")) {
        const parts = key.split("/");
        if (parts.length > 1) {
          category = parts[0].charAt(0).toUpperCase() + parts[0].slice(1);
        }
      }
      return { src, alt: key, category };
    });
  } catch (error) {
    console.error("Error fetching images from R2:", error);
    return [];
  }
}
