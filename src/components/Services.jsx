"use client"
import React, { useEffect, useRef, useState } from 'react';

// CARD COMPONENT
const Card = ({ direction = 'left' }) => {
  const ref = useRef(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`rounded-[10px] border border-[#FFD506] flex flex-col px-6 pt-6 pb-8 transition-all duration-700 ease-out
        ${isVisible ? 'translate-x-0 opacity-100' : direction === 'left' ? '-translate-x-20 opacity-0' : 'translate-x-20 opacity-0'}
      group cursor-pointer`}
      style={{
        width: '346.401px',
        height: '318px',
        background: 'rgba(18, 18, 19, 1)',
      }}
    >
      {/* Icon with Gradient Bar */}
      <div className="flex flex-col mb-4">
        <div className="flex items-center mb-2">
          <img
            src="/devicon.png" // Replace with your actual image path
            alt="icon"
            className="w-[23px] h-[23px] mr-3 object-contain"
          />
        </div>
        <div className="relative w-full h-[34px] overflow-hidden rounded-[3px]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#000000] to-[#FFD506] transition-transform duration-500 group-hover:translate-x-[30%]"></div>
        </div>
      </div>

      {/* Title */}
      <div className="font-extrabold text-white mb-2 text-[20px] leading-[100%] font-inter">
        UI/UX Design
      </div>

      {/* Description */}
      <div className="font-normal text-white text-[14px] leading-[120%] font-inter">
        Crafting intuitive and engaging user experiences that captivate your audience.
      </div>
    </div>
  );
};

// SERVICES SECTION
const Services = () => (
  <div className="relative bg-black w-[1440px] h-[1038px] mx-auto overflow-hidden">
    {/* Title */}
    <h1 className="absolute top-[0px] left-1/2 -translate-x-1/2 text-white font-extrabold text-[48px] text-center w-[1440px] font-inter">
      Services
    </h1>

    {/* Subtitle */}
    <div className="absolute left-1/2 -translate-x-1/2 top-[66px] w-[618px] h-[24px] text-center flex items-center justify-center">
      <span className="font-normal text-[20px] text-[#D9D9D9] w-full font-inter">
        Results-focused solutions tailored to your specific business goals
      </span>
    </div>

    {/* Card Grid */}
    <div className="absolute left-[172px] top-[251px]">
      <div className="flex gap-[31px] mb-[31px]" style={{ width: '1096.803px', height: '324px' }}>
        {[...Array(3)].map((_, i) => (
          <Card key={i} direction="left" />
        ))}
      </div>
      <div className="flex gap-[31px]" style={{ width: '1096.803px', height: '324px' }}>
        {[...Array(3)].map((_, i) => (
          <Card key={i} direction="right" />
        ))}
      </div>
    </div>
  </div>
);

// MAIN APP
function App() {
  return (
    <div>
      <Services />
    </div>
  );
}

export default App;
