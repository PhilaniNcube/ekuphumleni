import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";

const R2_ACCOUNT_ID = process.env.R2_ACCOUNT_ID;
const R2_ACCESS_KEY_ID = process.env.R2_ACCESS_KEY_ID;
const R2_SECRET_ACCESS_KEY = process.env.R2_SECRET_ACCESS_KEY;
const R2_BUCKET_NAME = process.env.R2_BUCKET_NAME;
const R2_PUBLIC_URL = process.env.R2_PUBLIC_URL; // e.g. https://pub-xxxxxxxx.r2.dev or https://assets.ekuphumleni.org

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

export async function getGalleryImages(): Promise<GalleryImage[]> {
  if (!R2_BUCKET_NAME || !R2_ACCOUNT_ID || !R2_ACCESS_KEY_ID || !R2_SECRET_ACCESS_KEY) {
    console.warn("R2 credentials not set. Returning empty gallery.");
    return [];
  }

  try {
    const command = new ListObjectsV2Command({
      Bucket: R2_BUCKET_NAME,
      // You might want to filter by prefix if images are in a folder
      // Prefix: 'gallery/' 
    });

    const response = await s3Client.send(command);

    if (!response.Contents) {
      return [];
    }

    // Filter for image files and map to GalleryImage structure
    const images: GalleryImage[] = response.Contents
      .filter((item) => {
        const key = item.Key?.toLowerCase();
        return key && (key.endsWith('.jpg') || key.endsWith('.jpeg') || key.endsWith('.png') || key.endsWith('.webp'));
      })
      .map((item) => {
        // Construct the public URL
        const src = R2_PUBLIC_URL 
          ? `${R2_PUBLIC_URL}/${item.Key}` 
          : `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com/${R2_BUCKET_NAME}/${item.Key}`; // Note: Direct R2 URLs usually require auth unless bucket is public
          
        // Simple heuristic for category based on filename or folder structure
        // e.g. "creche/img1.jpg" -> category: "Creche"
        // If flat structure, default to "General" or try to parse filename
        let category = "General";
        if (item.Key?.includes("/")) {
           const parts = item.Key.split("/");
           if (parts.length > 1) {
             category = parts[0].charAt(0).toUpperCase() + parts[0].slice(1);
           }
        }

        return {
          src,
          alt: item.Key || "Gallery Image",
          category,
        };
      });

    return images;
  } catch (error) {
    console.error("Error fetching images from R2:", error);
    return [];
  }
}
