"use client";
import React, { useRef, useEffect } from "react";

const images = [
  "/carousel/NIC05318.jpg",
  "/carousel/NIC05343.jpg",
  "/carousel/NIC05378.jpg",
  "/carousel/NIC05394.jpg",
  "/carousel/NIC05422.jpg",
  "/carousel/NIC05472.jpg",
]; // Place these images in your public/carousel folder

export default function Home() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable scrolling
    document.body.style.overflow = "hidden";

    let animationFrame: number;
    let pos = 0;
    const speed = 1; // pixels per frame

    function animate() {
      if (marqueeRef.current) {
        pos -= speed;
        // Reset position for infinite loop
        if (Math.abs(pos) >= marqueeRef.current.scrollWidth / 2) {
          pos = 0;
        }
        marqueeRef.current.style.transform = `translateX(${pos}px)`;
      }
      animationFrame = requestAnimationFrame(animate);
    }

    animate();
    return () => {
      // Re-enable scrolling when component unmounts
      document.body.style.overflow = "";
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* ...your main content here... */}
      <div className="fixed left-0 bottom-0 w-screen h-[120px] overflow-hidden bg-black/20 z-[1000]">
        <div
          ref={marqueeRef}
          className="flex w-max items-center h-full will-change-transform"
        >
          {/* Duplicate images for seamless loop */}
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
    </div>
  );
}
