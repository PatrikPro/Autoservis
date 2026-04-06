"use client";

import Image from "next/image";
import { FiX } from "react-icons/fi";

interface LightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export default function Lightbox({ src, alt, onClose }: LightboxProps) {
  return (
    <div
      className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 p-2 text-foreground hover:text-primary transition-colors"
        onClick={onClose}
        aria-label="Zavřít"
      >
        <FiX className="w-7 h-7" />
      </button>
      <div
        className="relative max-w-4xl w-full aspect-[4/3]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain rounded-lg"
        />
      </div>
    </div>
  );
}
