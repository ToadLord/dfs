"use client";
import React, { useEffect } from "react";
import { Cedarville_Cursive } from "next/font/google";

const cursive = Cedarville_Cursive({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-125">
      <span
        className={`${cursive.className} text-6xl md:text-9xl text-center`}
      >
        Drive for Sight
      </span>
    </div>
  );
}
