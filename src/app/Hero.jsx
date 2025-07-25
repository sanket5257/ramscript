'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { FaCode, FaPaintBrush, FaCloudUploadAlt } from 'react-icons/fa'


const Hero = () => {
  const bgGlowRef = useRef(null);

  useEffect(() => {
const moveBlurRandomly = () => {
  const el = bgGlowRef.current;
  if (el) {
    const elSize = 600; // width & height of blur div
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const maxX = Math.max(0, screenWidth - elSize);
    const maxY = Math.max(0, screenHeight - elSize);

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    el.style.transform = `translate(${randomX}px, ${randomY}px)`;
  }
};

  const interval = setInterval(moveBlurRandomly, 3000);
  moveBlurRandomly();

  return () => clearInterval(interval);
}, []);


  return (
    <div>
      {/* ✅ Only this blur remains and moves randomly */}
     <div
  ref={bgGlowRef}
  className="fixed top-0 left-0 z-10 h-[300px] w-[300px] bg-[#FFD506] rounded-full blur-[150px] opacity-40 pointer-events-none transition-transform duration-[5000ms] ease-in-out"
/>


      {/* 🔴 Hero Section */}
      <div className="bg-black min-h-screen flex items-center justify-center relative">
       
        <div
          id="main"
          className="absolute top-[5%] w-full px-4 flex flex-col items-center justify-center text-center"
        >
          <div className='border border-[#ffd60679] px-8 py-6 rounded-2xl text-white mb-5 opacity-0 animate-fadeUp animation-delay-[600ms] flex justify-between items-center gap-2 w-full max-w-5xl'>
            <h1 className='font-bold text-left'>6.5X Cheaper than <br /> a Full-time software Engineer</h1>
            <h1 className='font-medium text-left'>That means $100,000 saved a year with our $1599 monthly subscription. <br /> Every year</h1>
          </div>
          <h1 className="text-[8vw] md:text-[5vw] font-bold text-[#FFD506] opacity-0 animate-fadeUp animate-type animation-delay-[200ms]">
            Run RamScript
          </h1>
          <h1 className="text-[8vw] md:text-[5vw] font-bold text-[#FFFFFF] leading-15 opacity-0 animate-fadeUp animation-delay-[400ms]">
            Once, and You’re Set.
          </h1>
          

          {/* 🔗 Buttons */}
          <div className="mt-20 flex flex-col md:flex-row justify-center items-center gap-10 w-full max-w-3xl">
            <Link
              href="/#contact"
              className="w-full md:w-auto text-center flex items-center px-4 gap-3 py-3 justify-center font-medium text-black bg-[#FFD506] rounded-xl cursor-pointer"
            >
              <span>Start Your Project</span>
              <img src="/arrow1.png" alt="" />
            </Link>
            <Link
              href="/contact"
              className="w-full md:w-auto text-center flex items-center justify-center gap-3 font-medium text-[#FFD506] border border-[#FFD506] px-5 py-3 rounded-xl cursor-pointer"
            >
              <span>View Portfolio</span>
              <img src="/arrow2.png" alt="" />
            </Link>
          </div>

          {/* 🛠️ Services */}
          <div
            id="main-services"
            className="flex flex-col md:flex-row items-center justify-center mt-20 gap-10 w-full px-4"
          >
            {[
  {
    title: 'Development',
    desc:
      'Reprehenderit at, libero perferendis omnis voluptas illo! Obcaecati nostrum eveniet rerum porro eli',
    icon: <FaCode className="text-yellow-400 w-7 h-7" />,
  },
  {
    title: 'Design',
    desc:
      'Crafting smooth UI with bold aesthetics that stand out & convert visitors into clients.',
    icon: <FaPaintBrush className="text-yellow-400 w-7 h-7" />,
  },
  {
    title: 'Deployment',
    desc:
      'Seamless cloud hosting, domain setup & performance tweaks for production-ready web.',
    icon: <FaCloudUploadAlt className="text-yellow-400 w-7 h-7" />,
  },
].map((service, idx) => (
  <div
    key={idx}
    className="group relative bg-[#1E1E1E] border border-[#FFD506] rounded-xl h-auto w-full md:h-[12vw] md:w-[24vw] flex flex-col items-start justify-center gap-3 p-5 overflow-hidden transition-transform duration-300 hover:scale-[1.05]"
  >
    <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="absolute inset-0 bg-gradient-to-tr from-yellow-300 via-[#FF6FD8] to-[#3813C2] opacity-20 mix-blend-screen blur-2xl"></div>
    </div>
    {/* ✅ React Icon inserted here */}
    {service.icon}
    <h1 className="font-bold text-white">{service.title}</h1>
    <h2 className="text-start text-white">{service.desc}</h2>
  </div>
))}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
