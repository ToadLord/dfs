'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/ChatGPT Image Jul 14, 2025, 10_56_44 PM.png"
        alt="Drive for Sight"
        layout="fill"
        objectFit="cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10" />

      {/* Navbar */}
      <div className="absolute top-4 left-0 w-full z-20 flex justify-between items-center px-8 text-white text-lg font-semibold">
        <div className="text-yellow-400">DRIVE<span className="text-white">FOR</span>SIGHT</div>
        <nav className="flex gap-6">
          <a href="#" className="hover:text-yellow-400">DFSxCNIB</a>
          <a href="#" className="hover:text-yellow-400">Register</a>
          <a href="#" className="hover:text-yellow-400">Sponsor</a>
          <a href="#" className="hover:text-yellow-400">Contact</a>
        </nav>
      </div>

      {/* Centered Title */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-yellow-400 px-4">
        <h1 className="text-6xl md:text-8xl font-extrabold drop-shadow-lg">DRIVE FOR SIGHT</h1>
      </div>
    </div>
  );
}
