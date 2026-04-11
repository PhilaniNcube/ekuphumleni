"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";

interface AdminImage {
  key: string;
  src: string;
  alt: string;
  category: string;
  visible: boolean;
  order: number;
}

export default function AdminGalleryPage() {
  const [images, setImages] = useState<AdminImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const fetchImages = useCallback(async () => {
    try {
      const res = await fetch("/api/admin/gallery");
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setImages(data.images);
    } catch {
      toast.error("Failed to load gallery images");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  const toggleVisibility = (key: string) => {
    setImages((prev) =>
      prev.map((img) =>
        img.key === key ? { ...img, visible: !img.visible } : img
      )
    );
  };

  const updateAlt = (key: string, alt: string) => {
    setImages((prev) =>
      prev.map((img) => (img.key === key ? { ...img, alt } : img))
    );
  };

  const updateCategory = (key: string, category: string) => {
    setImages((prev) =>
      prev.map((img) => (img.key === key ? { ...img, category } : img))
    );
  };

  const selectAll = () => {
    setImages((prev) => prev.map((img) => ({ ...img, visible: true })));
  };

  const deselectAll = () => {
    setImages((prev) => prev.map((img) => ({ ...img, visible: false })));
  };

  const moveUp = (index: number) => {
    if (index === 0) return;
    setImages((prev) => {
      const next = [...prev];
      [next[index - 1], next[index]] = [next[index], next[index - 1]];
      return next.map((img, i) => ({ ...img, order: i }));
    });
  };

  const moveDown = (index: number) => {
    setImages((prev) => {
      if (index >= prev.length - 1) return prev;
      const next = [...prev];
      [next[index], next[index + 1]] = [next[index + 1], next[index]];
      return next.map((img, i) => ({ ...img, order: i }));
    });
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const manifest = {
        images: images.map((img, index) => ({
          key: img.key,
          alt: img.alt,
          category: img.category,
          visible: img.visible,
          order: index,
        })),
      };
      const res = await fetch("/api/admin/gallery", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(manifest),
      });
      if (!res.ok) throw new Error("Failed to save");
      toast.success("Gallery manifest saved!");
    } catch {
      toast.error("Failed to save gallery manifest");
    } finally {
      setSaving(false);
    }
  };

  const visibleCount = images.filter((img) => img.visible).length;

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Spinner />
        <span className="ml-2">Loading images from R2...</span>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold">Gallery Manager</h2>
          <p className="text-sm text-gray-600 mt-1">
            {images.length} images in bucket &middot; {visibleCount} visible on
            gallery
          </p>
        </div>
        <div className="flex gap-2 flex-wrap">
          <Button variant="outline" size="sm" onClick={selectAll}>
            Select All
          </Button>
          <Button variant="outline" size="sm" onClick={deselectAll}>
            Deselect All
          </Button>
          <Button onClick={handleSave} disabled={saving}>
            {saving ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </div>

      {images.length === 0 ? (
        <div className="text-center py-20 text-gray-500 bg-white rounded-lg border">
          <p>No images found in the R2 bucket.</p>
          <p className="text-sm mt-1">
            Upload images to your R2 bucket to get started.
          </p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {images.map((image, index) => (
            <div
              key={image.key}
              className={`relative rounded-lg border bg-white overflow-hidden transition-all ${
                image.visible
                  ? "ring-2 ring-blue-500 shadow-md"
                  : "opacity-60"
              }`}
            >
              <div className="relative aspect-square">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute top-2 left-2">
                  <Checkbox
                    checked={image.visible}
                    onCheckedChange={() => toggleVisibility(image.key)}
                    className="h-6 w-6 border-2 border-white bg-white/80 data-[state=checked]:bg-blue-600"
                  />
                </div>
                <div className="absolute top-2 right-2 flex gap-1">
                  <button
                    onClick={() => moveUp(index)}
                    disabled={index === 0}
                    className="rounded bg-white/80 px-2 py-1 text-xs font-medium hover:bg-white disabled:opacity-30"
                  >
                    ↑
                  </button>
                  <button
                    onClick={() => moveDown(index)}
                    disabled={index === images.length - 1}
                    className="rounded bg-white/80 px-2 py-1 text-xs font-medium hover:bg-white disabled:opacity-30"
                  >
                    ↓
                  </button>
                </div>
              </div>
              <div className="p-3 space-y-2">
                <p
                  className="text-xs text-gray-500 truncate"
                  title={image.key}
                >
                  {image.key}
                </p>
                <Input
                  value={image.alt}
                  onChange={(e) => updateAlt(image.key, e.target.value)}
                  placeholder="Alt text"
                  className="text-sm h-8"
                />
                <Input
                  value={image.category}
                  onChange={(e) => updateCategory(image.key, e.target.value)}
                  placeholder="Category"
                  className="text-sm h-8"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
