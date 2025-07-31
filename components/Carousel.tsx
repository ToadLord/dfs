'use client';

import { useState } from "react";
import Image from "next/image";

interface CarouselProps {
  images: string[];
  alt?: string;
}

export default function Carousel({
  images,
  alt = "Carousel image",
}: CarouselProps) {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const next = () =>
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <Image
        src={images[current]}
        alt={alt}
        width={800}
        height={600}
        className="w-full h-auto object-contain rounded-lg shadow-lg"
        priority
      />
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full px-3 py-1"
      >
        &#8592;
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full px-3 py-1"
      >
        &#8594;
      </button>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`w-2 h-2 rounded-full ${
              idx === current ? "bg-black" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
