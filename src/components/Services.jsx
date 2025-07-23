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
      className={`rounded-[10px] border border-[#FFD506] flex flex-col px-6 pt-6 pb-8 transition-all duration-700 ease-out transform
        ${isVisible ? 'translate-x-0 opacity-100' : direction === 'left' ? '-translate-x-20 opacity-0' : 'translate-x-20 opacity-0'}
        group cursor-pointer 
        hover:scale-105 hover:shadow-[0_0_30px_#FFD506] hover:border-[#fff300]
        w-full h-[20vw] max-w-[346px] mx-auto sm:mx-0
      `}
      style={{
        background: 'rgba(18, 18, 19, 1)',
      }}
    >
      {/* Icon with Gradient Bar */}
      <div className="flex flex-col mb-4">
        <div className="flex items-center mb-2">
          <img
            src="/devicon.png"
            alt="icon"
            className="w-[23px] h-[23px] mr-3 object-contain"
          />
        </div>
        <div className="relative w-full h-[40px] overflow-hidden rounded-[3px]">
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
  <section className="bg-black w-full py-16 px-4 sm:px-8 md:px-16">
    {/* Title */}
    <h1 className="text-white font-extrabold text-[32px] sm:text-[40px] md:text-[48px] text-center font-inter mb-4">
      Services
    </h1>

    {/* Subtitle */}
    <p className="text-[#D9D9D9] text-[16px] sm:text-[18px] md:text-[20px] text-center max-w-[700px] mx-auto mb-12 font-inter">
      Results-focused solutions tailored to your specific business goals
    </p>

    {/* Cards Grid */}
    <div className="flex flex-wrap justify-center gap-6 md:gap-[31px]">
      {[...Array(3)].map((_, i) => (
        <Card key={i} direction="left" />
      ))}
      {[...Array(3)].map((_, i) => (
        <Card key={i} direction="right" />
      ))}
    </div>
  </section>
);

// MAIN APP
function App() {
  return (
    <div id="services">
      <Services />
    </div>
  );
}

export default App;
