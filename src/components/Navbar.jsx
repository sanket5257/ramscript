'use client';
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black/60 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* 🔵 Logo */}
          <div className="flex-shrink-0">
            <Link href="/" passHref>
              <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
            </Link>
          </div>

          {/* 🔴 Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" passHref>
              <span className="font-medium text-white hover:text-[#FFD506] cursor-pointer">Home</span>
            </Link>
            <Link href="/#about" passHref>
              <span className="font-medium text-white hover:text-[#FFD506] cursor-pointer">About</span>
            </Link>
            <Link href="/#services" passHref>
              <span className="font-medium text-white hover:text-[#FFD506] cursor-pointer">Services</span>
            </Link>
            <Link href="/#projects" passHref>
              <span className="font-medium text-white hover:text-[#FFD506] cursor-pointer">Portfolio</span>
            </Link>
            <Link href="/#contact" passHref>
              <span className="font-medium text-black bg-[#FFD506] px-5 py-2 rounded-xl cursor-pointer hover:bg-[#e6c905] transition">
                Get in Touch
              </span>
            </Link>
          </div>

          {/* 🔁 Mobile Hamburger Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-white hover:text-[#FFD506] hover:bg-white/10 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open menu</span>
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 📱 Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-4 space-y-2">
            <Link href="/" passHref>
              <span className="block text-white hover:text-[#FFD506] cursor-pointer">Home</span>
            </Link>
            <Link href="/#about" passHref>
              <span className="block text-white hover:text-[#FFD506] cursor-pointer">About</span>
            </Link>
            <Link href="/#services" passHref>
              <span className="block text-white hover:text-[#FFD506] cursor-pointer">Services</span>
            </Link>
            <Link href="/#projects" passHref>
              <span className="block text-white hover:text-[#FFD506] cursor-pointer">Portfolio</span>
            </Link>
            <Link href="/#contact" passHref>
              <span className="inline-block text-black bg-[#FFD506] px-4 py-2 rounded-xl cursor-pointer hover:bg-[#e6c905] transition">
                Get in Touch
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
