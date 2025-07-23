'use client';
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black">
      <div className="max-w-7xl bg-black  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* 🔵 Logo on the left */}
          <div className="flex-shrink-0">
            <Link href="/" passHref>
              <img src="/logo.png" alt="Logo" className="" />
            </Link>
          </div>

          {/* 🔴 Nav links + hamburger on the right */}
          <div className="flex items-center">
            {/* Desktop menu */}
            <div className="hidden md:flex space-x-8 mr-4">
              <Link href="/" passHref>
                <span className=" font-medium text-white hover:text-[#FFD506] cursor-pointer">
                  Home
                </span>
              </Link>
              <Link href="/about" passHref>
                <span className=" font-medium text-white hover:text-[#FFD506] cursor-pointer">
                  About
                </span>
              </Link>
              <Link href="/contact" passHref>
                <span className=" font-medium text-white hover:text-[#FFD506] cursor-pointer">
                  Services
                </span>
              </Link>
              <Link href="/contact" passHref>
                <span className=" font-medium text-white hover:text-[#FFD506] cursor-pointer">
                  Portfolio
                </span>
              </Link>
              <Link href="/contact" passHref>
                <span className=" font-medium text-black bg-[#FFD506] px-5 py-2 rounded-xl  cursor-pointer">
                  Get in Touch
                </span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#FFD506] hover:bg-white/10 focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" passHref>
              <span className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#FFD506] hover:bg-white/10 cursor-pointer">
                Home
              </span>
            </Link>
            <Link href="/about" passHref>
              <span className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#FFD506] hover:bg-white/10 cursor-pointer">
                About
              </span>
            </Link>
            <Link href="/contact" passHref>
              <span className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#FFD506] hover:bg-white/10 cursor-pointer">
                Contact
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
