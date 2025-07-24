'use client';
import React, { useEffect, useRef, useState } from 'react';

const services = [
  {
    title: 'UI/UX Design',
    desc: 'Crafting intuitive and engaging user experiences that captivate your audience.',
    icon: (
      <svg className="w-6 h-6 text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 19l9-7-9-7-9 7 9 7z" />
        <path d="M12 12l9-7" />
        <path d="M12 12v10" />
        <path d="M12 12L3 5" />
      </svg>
    ),
    direction: 'left',
  },
  {
    title: 'Frontend Development',
    desc: 'Building responsive, high-performance interfaces with modern web technologies.',
    icon: (
      <svg className="w-6 h-6 text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 18l6-6-6-6" />
        <path d="M8 6L2 12l6 6" />
      </svg>
    ),
    direction: 'left',
  },
  {
    title: 'Backend Integration',
    desc: 'Robust API integrations and server logic for scalable web platforms.',
    icon: (
      <svg className="w-6 h-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.657 4.03 3 9 3s9-1.343 9-3V5" />
        <path d="M3 12c0 1.657 4.03 3 9 3s9-1.343 9-3" />
      </svg>
    ),
    direction: 'left',
  },
  {
    title: 'SEO Optimization',
    desc: 'Improving visibility and rankings through performance and meta optimization.',
    icon: (
      <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M3 3v18h18" />
        <path d="M7 14l4-4 4 4" />
        <path d="M17 10h4v4" />
      </svg>
    ),
    direction: 'right',
  },
  {
    title: 'Brand Identity',
    desc: 'Creating unique, memorable branding elements aligned with your mission.',
    icon: (
      <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12l2 2 4-4" />
      </svg>
    ),
    direction: 'right',
  },
  {
    title: 'Maintenance & Support',
    desc: 'Continuous updates, monitoring, and enhancements to keep you running smoothly.',
    icon: (
      <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 1v3" />
        <path d="M12 20v3" />
        <path d="M4.22 4.22l2.12 2.12" />
        <path d="M17.66 17.66l2.12 2.12" />
        <path d="M1 12h3" />
        <path d="M20 12h3" />
        <path d="M4.22 19.78l2.12-2.12" />
        <path d="M17.66 6.34l2.12-2.12" />
        <circle cx="12" cy="12" r="5" />
      </svg>
    ),
    direction: 'right',
  },
];


// Card Component
const Card = ({ icon, title, desc, direction }) => {
  const ref = useRef(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => ref.current && observer.unobserve(ref.current);
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
          <div className="mr-3">{icon}</div>
        </div>
        <div className="relative w-full h-[40px] overflow-hidden rounded-[3px]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#000000] to-[#FFD506] transition-transform duration-500 group-hover:translate-x-[30%]"></div>
        </div>
      </div>

      {/* Title */}
      <div className="font-extrabold text-white mb-2 text-[20px] leading-[100%] font-inter">
        {title}
      </div>

      {/* Description */}
      <div className="font-normal text-white text-[14px] leading-[120%] font-inter">
        {desc}
      </div>
    </div>
  );
};

// Services Section
const Services = () => (
  <section className="bg-black w-full py-16 px-4 sm:px-8 md:px-16">
    <h1 className="text-white font-extrabold text-[32px] sm:text-[40px] md:text-[48px] text-center font-inter mb-4">
      Services
    </h1>
    <p className="text-[#D9D9D9] text-[16px] sm:text-[18px] md:text-[20px] text-center max-w-[700px] mx-auto mb-12 font-inter">
      Results-focused solutions tailored to your specific business goals
    </p>
    <div className="flex flex-wrap justify-center gap-6 md:gap-[31px]">
      {services.map((service, i) => (
        <Card key={i} {...service} />
      ))}
    </div>
  </section>
);

function App() {
  return (
    <div id="services">
      <Services />
    </div>
  );
}

export default App;
