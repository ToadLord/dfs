'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa';
import { HiOutlineMenu, HiX } from 'react-icons/hi';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navLinks = [
    { label: 'About', href: '/about' },
    { label: 'Tickets', href: '/tickets' },
    { label: 'Register', href: '/register' },
    { label: 'DFSxCNIB', href: '/dfsxcnib' },
    { label: 'Sponsor', href: '/sponsor' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-black text-white px-6 py-4 flex items-center justify-between relative z-50">
      {/* Logo */}
      <div className="flex-shrink-0">
        <Link href="/">
          <Image src="/logo.jpeg" alt="Drive for Sight Logo" width={150} height={50} />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6 text-lg">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="hover:text-yellow-400 transition">
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Instagram & Mobile Menu Button */}
      <div className="flex items-center gap-4">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl">
          <FaInstagram />
        </a>
        <button className="md:hidden text-3xl" onClick={toggleMenu} aria-label="Toggle Menu">
          {isMobileMenuOpen ? <HiX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black text-white flex flex-col items-center py-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-2 text-lg hover:text-yellow-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
