'use client';
import React, { useEffect, useRef, useState } from 'react';
import {
  FaPaintBrush,
  FaCode,
  FaDatabase,
  FaSearch,
  FaBullhorn,
  FaTools,
} from 'react-icons/fa'


const services = [
  {
    title: 'UI/UX Design',
    desc: 'Crafting intuitive and engaging user experiences that captivate your audience.',
    icon: <FaPaintBrush className="text-yellow-400 w-6 h-6" />,
    direction: 'left',
  },
  {
    title: 'Frontend Development',
    desc: 'Building responsive, high-performance interfaces with modern web technologies.',
    icon: <FaCode className="text-yellow-400 w-6 h-6" />,
    direction: 'left',
  },
  {
    title: 'Backend Integration',
    desc: 'Robust API integrations and server logic for scalable web platforms.',
    icon: <FaDatabase className="text-yellow-400 w-6 h-6" />,
    direction: 'left',
  },
  {
    title: 'SEO Optimization',
    desc: 'Improving visibility and rankings through performance and meta optimization.',
    icon: <FaSearch className="text-yellow-400 w-6 h-6" />,
    direction: 'right',
  },
  {
    title: 'Brand Identity',
    desc: 'Creating unique, memorable branding elements aligned with your mission.',
    icon: <FaBullhorn className="text-yellow-400 w-6 h-6" />,
    direction: 'right',
  },
  {
    title: 'Maintenance & Support',
    desc: 'Continuous updates, monitoring, and enhancements to keep you running smoothly.',
    icon: <FaTools className="text-yellow-400 w-6 h-6" />,
    direction: 'right',
  },
]



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
