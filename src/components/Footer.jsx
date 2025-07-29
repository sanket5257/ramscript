"use client";
import React from "react";
import Link from "next/link";
import HoverTracker from "./HoverTracker";

const Footer = () => {
  return (
    <div className="bg-[#1E1E1E] w-full">
      {/* Top Section */}
      <div className="bg-[#1E1E1E] text-white flex flex-col md:flex-row justify-evenly items-start p-6 md:p-10 gap-10 md:gap-0">
        {/* Column 1 */}
        <div className="flex flex-col items-start justify-center gap-3 w-full md:w-auto">
          <h1 className="font-extrabold text-2xl md:text-3xl">
            Start Your Project
          </h1>
          <h3 className="text-base text-[#C9C9C9]">
            Let's create your next big idea.
          </h3>
          <Link
            href="/#contact"
            passHref
            className="text-center flex items-center mt-2 px-4 gap-3 py-3 justify-center font-medium text-black bg-[#FFD506] rounded-xl cursor-pointer"
          >
            <span>Start Your Project</span>
            <img src="/arrow1.png" alt="arrow" className="w-4 h-4" />
          </Link>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col items-start justify-center gap-3 w-full md:w-auto">
          <h1 className="font-extrabold text-xl">Quick Links</h1>
          <Link href="/" className="text-[#C9C9C9] font-medium">
            <HoverTracker text="Home" />
          </Link>
          <Link href="/#about" className="text-[#C9C9C9] font-medium">
            <HoverTracker text="About" />
          </Link>
          <Link href="/#services" className="text-[#C9C9C9] font-medium">
            <HoverTracker text="Services" />
          </Link>
          <Link href="/portfolio" className="text-[#C9C9C9] font-medium">
            <HoverTracker text="Portfolio" />
          </Link>
          <Link href="/careers" className="text-[#C9C9C9] font-medium">
            <HoverTracker text="Careers" />
          </Link>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col justify-center items-start gap-3 w-full md:w-auto">
          <h1 className="font-extrabold text-xl">Say Hello</h1>
          <a
            href="mailto:info@ramscript.com"
            className="text-[#C9C9C9] font-medium"
          >
            <HoverTracker text="info@ramscript.com" />
          </a>
          <a href="tel:+918857880000" className="text-[#C9C9C9] font-medium">
            <HoverTracker text="+91 8857880000" />
          </a>
          <a href="#" className="text-[#C9C9C9] font-medium">
            <HoverTracker text="LinkedIn" />
          </a>
          <a href="#" className="text-[#C9C9C9] font-medium">
            <HoverTracker text="Instagram" />
          </a>
        </div>
      </div>

      {/* Divider & Copyright */}
      <div className="flex flex-col justify-center items-center text-[#C9C9C9] pb-10 px-4">
        <div className="bg-[#C9C9C9] w-full max-w-5xl h-[1px] my-5 " />
        <div className="flex justify-between max-w-5xl w-full items-center">
          <h1 className="text-center text-sm">
            © 2025 RamScript Pvt. Ltd. All rights reserved.
          </h1>
          <Link href="/privacy_policy" className="text-center text-sm">
            privacy_policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
