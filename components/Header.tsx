import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-black text-white px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex-shrink-0">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Drive for Sight Logo"
            width={150}
            height={50}
          />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex gap-6 text-lg">
        <Link href="/about">About</Link>
        <Link href="/tickets">Tickets</Link>
        <Link href="/register">Register</Link>
        <Link href="/dfsxcnib">DFSxCNIB</Link>
        <Link href="/sponsor">Sponsor</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      {/* Instagram Icon */}
      <div className="text-2xl">
        <a
          href="https://www.instagram.com/driveforsight/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
    </header>
  );
}
