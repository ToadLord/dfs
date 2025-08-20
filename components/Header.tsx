"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaHome } from "react-icons/fa"; // Add FaHome import
import { HiOutlineMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navLinks = [
    { label: "DFSxCNIB", href: "/dfsxcnib" },
    { label: "Register", href: "/register" },
    { label: "Sponsor", href: "/sponsor" },
    { label: "Contact", href: "/contact" },
    { label: "Donate", href: "https://secure.cnib.ca/ui/drive/ticketed/donation/start" }
  ];

  return (
    <header className="bg-transparent text-white px-6 py-4 flex items-center justify-between relative z-50 font-semibold">
      {/* Home Button */}
      <div className="flex-shrink-0">
        <Link href="/">
          <FaHome className="text-3xl" />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6 text-lg">
        {navLinks.map((link) =>
          link.href.startsWith("http") ? (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition"
            >
              {link.label}
            </a>
          ) : (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-yellow-400 transition"
            >
              {link.label}
            </Link>
          )
        )}
      </nav>

      {/* Instagram & Mobile Menu Button */}
      <div className="flex items-center gap-4">
        <a
          href="https://www.instagram.com/driveforsight/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl"
        >
          <FaInstagram />
        </a>
        <button
          className="md:hidden text-3xl"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <HiX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-2 right-2 mx-auto mt-2 bg-black/90 backdrop-blur-md text-white flex flex-col items-center py-6 rounded-2xl shadow-2xl md:hidden transition-all duration-300">
          {navLinks.map((link) =>
            link.href.startsWith("http") ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-6 w-full text-lg font-semibold rounded-lg hover:bg-yellow-400/10 hover:text-yellow-400 transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="py-3 px-6 w-full text-lg font-semibold rounded-lg hover:bg-yellow-400/10 hover:text-yellow-400 transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      )}
    </header>
  );
}
