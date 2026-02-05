"use client";

import React, { useState } from "react";
import Image from "next/image";
import Container from "@/components/container";
import { GalleryImage } from "@/lib/r2";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface GalleryGridProps {
  images: GalleryImage[];
}

export function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <section className="py-16 bg-white">
      <Container>
        {images.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            <p>No images found in the gallery yet.</p>
          </div>
        ) : (
          <>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
              {images.map((image, index) => (
                <div 
                  key={index} 
                  className="break-inside-avoid mb-4 group relative overflow-hidden rounded-xl bg-gray-100 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>

            <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
              <DialogContent className="max-w-[95vw] w-full max-h-[95vh] h-auto p-0 bg-transparent border-none shadow-none overflow-hidden flex flex-col items-center justify-center">
                 {/* Hidden title/description for accessibility compliance if needed, or structured differently */}
                <DialogHeader className="sr-only">
                  <DialogTitle>{selectedImage?.alt || "Gallery Image"}</DialogTitle>
                  <DialogDescription>Full view of {selectedImage?.alt}</DialogDescription>
                </DialogHeader>
                
                {selectedImage && (
                  <div className="relative w-full h-full min-h-[50vh] max-h-[90vh] flex items-center justify-center">
                     <Image
                      src={selectedImage.src}
                      alt={selectedImage.alt}
                      width={1200}
                      height={800} // providing large default dimensions for aspect ratio handling
                      className="object-contain w-auto h-auto max-w-full max-h-[85vh] rounded-md shadow-2xl"
                      priority
                    />
                  </div>
                )}
              </DialogContent>
            </Dialog>
          </>
        )}
      </Container>
    </section>
  );
}
