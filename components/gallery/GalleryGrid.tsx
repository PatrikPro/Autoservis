"use client";

import { useState } from "react";
import Image from "next/image";
import type { WorkshopImage } from "@/lib/cms/types";
import Lightbox from "./Lightbox";

interface GalleryGridProps {
  images: WorkshopImage[];
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [lightbox, setLightbox] = useState<WorkshopImage | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {images.map((img) => (
          <button
            key={img.id}
            onClick={() => setLightbox(img)}
            className="relative aspect-[4/3] rounded-lg overflow-hidden border border-border hover:border-primary/40 transition-all group bg-surface"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-colors" />
          </button>
        ))}
      </div>

      {lightbox && (
        <Lightbox
          src={lightbox.src}
          alt={lightbox.alt}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  );
}
