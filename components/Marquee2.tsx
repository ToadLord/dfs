"use client";
import React, { useRef, useEffect } from "react";

interface MarqueeProps {
  images: string[];
  className?: string;
  speed?: number;
}

const Marquee: React.FC<MarqueeProps> = ({
  images,
  className = "",
  speed = 1,
}) => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const firstHalfRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);

  useEffect(() => {
    let animationFrame: number;

    function animate() {
      const firstHalfWidth = firstHalfRef.current?.offsetWidth || 0;
      if (marqueeRef.current && firstHalfWidth) {
        posRef.current -= speed;
        if (Math.abs(posRef.current) >= firstHalfWidth) {
          posRef.current = 0;
        }
        marqueeRef.current.style.transform = `translateX(${posRef.current}px)`;
      }
      animationFrame = requestAnimationFrame(animate);
    }

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [speed, images]);

  return (
    <div className={`w-full h-[120px] overflow-hidden ${className}`}>
      <div
        ref={marqueeRef}
        className="flex w-max items-center h-full will-change-transform"
        style={{ transition: "none" }}
      >
        <div ref={firstHalfRef} className="flex">
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Slide ${idx + 1}`}
              width={200}
              height={120}
              className="mr-4 object-cover rounded-lg"
            />
          ))}
        </div>
        <div className="flex">
          {images.map((src, idx) => (
            <img
              key={images.length + idx}
              src={src}
              alt={`Slide ${idx + 1}`}
              width={200}
              height={120}
              className="mr-4 object-cover rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
