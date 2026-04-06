"use client";

import { useState } from "react";
import Image from "next/image";
import type { BeforeAfterImage } from "@/lib/cms/types";

interface BeforeAfterSliderProps {
  item: BeforeAfterImage;
}

export default function BeforeAfterSlider({ item }: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-bold text-foreground">{item.title}</h3>
      <div className="relative overflow-hidden rounded-lg border border-border aspect-[4/3] select-none bg-surface">
        {/* After image (full width behind) */}
        <Image
          src={item.afterSrc}
          alt={item.afterAlt}
          fill
          className="object-cover"
        />

        {/* Before image (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <Image
            src={item.beforeSrc}
            alt={item.beforeAlt}
            fill
            className="object-cover"
          />
        </div>

        {/* Slider line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-primary z-10"
          style={{ left: `${position}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold shadow-lg">
            &lsaquo;&rsaquo;
          </div>
        </div>

        {/* Drag area */}
        <input
          type="range"
          min={0}
          max={100}
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-col-resize z-20"
          aria-label="Posuňte pro srovnání před a po"
        />

        {/* Labels */}
        <span className="absolute top-3 left-3 bg-background/80 text-xs font-bold text-foreground px-2 py-1 rounded z-10">
          Před
        </span>
        <span className="absolute top-3 right-3 bg-background/80 text-xs font-bold text-foreground px-2 py-1 rounded z-10">
          Po
        </span>
      </div>
    </div>
  );
}
