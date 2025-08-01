"use client";
import React, { useRef, useEffect } from "react";

interface MarqueeProps {
  images: string[];
  rate: number;
}

const Marquee: React.FC<MarqueeProps> = ({ images, rate }) => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrame: number;
    let pos = 0;
    let speed = rate;

    function animate() {
      if (marqueeRef.current) {
        const resetPoint = marqueeRef.current.scrollWidth / 2;

        if (speed < 0) {
          pos += speed; // speed is negative, so this moves left
          if (pos <= -resetPoint) {
            pos = 0;
          }
        } else if (speed > 0) {
          pos += speed; // speed is positive, so this moves right
          if (pos >= 0) {
            pos = -resetPoint;
          }
        }

        marqueeRef.current.style.transform = `translateX(${pos}px)`;
      }
      animationFrame = requestAnimationFrame(animate);
    }

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="flex w-screen h-[120px] overflow-hidden bg-black/20 z-[1000]">
      <div
        ref={marqueeRef}
        className="flex w-max items-center h-full will-change-transform"
      >
        {[...images, ...images].map((src, idx) => (
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
    </div>
  );
};

export default Marquee;
