'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
  FaRegCalendarAlt,
  FaPaintBrush,
  FaCode,
  FaVial,
  FaRocket,
  FaChartBar,
} from 'react-icons/fa';

const steps = [
  {
    title: 'Planning',
    desc: 'At the beginning of each project, we collaborate closely with our clients to understand business objectives, user needs, and technical feasibility. We outline a solid roadmap and define key deliverables to ensure everyone is aligned before any design or code begins.',
    icon: <FaRegCalendarAlt className="text-yellow-400 text-2xl" />,
    step: '01',
  },
  {
    title: 'Design',
    desc: 'We transform ideas into high-fidelity, interactive UI designs that reflect your brand identity and user expectations. Our designers focus on accessibility, clarity, and usability—ensuring every screen is intuitive and visually engaging.',
    icon: <FaPaintBrush className="text-yellow-400 text-2xl" />,
    step: '02',
  },
  {
    title: 'Development',
    desc: 'Our frontend and backend developers work together to build a pixel-perfect, scalable, and optimized product. We follow best coding practices, integrate necessary APIs, and ensure responsiveness across all modern devices and browsers.',
    icon: <FaCode className="text-yellow-400 text-2xl" />,
    step: '03',
  },
  {
    title: 'Testing',
    desc: 'Before launch, we rigorously test the product using manual and automated tools. Our QA team identifies bugs, validates features, and ensures the platform is secure, performant, and ready for production.',
    icon: <FaVial className="text-yellow-400 text-2xl" />,
    step: '04',
  },
  {
    title: 'Launch & Support',
    desc: 'After deployment, we monitor for any issues, provide ongoing updates, and handle enhancements. We’re committed to long-term success and remain available for continuous improvement, scaling, or new feature development.',
    icon: <FaRocket className="text-yellow-400 text-2xl" />,
    step: '05',
  },
  {
    title: 'Monitoring & Optimization',
    desc: 'We continuously monitor performance, analyze user behavior, and optimize key metrics such as speed, engagement, and SEO. Insights from real usage help us improve product quality and maintain top-notch user experience.',
    icon: <FaChartBar className="text-yellow-400 text-2xl" />,
    step: '06',
  },
];

const ProcessSection = () => {
  return (
    <section className="bg-black text-white py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Left Text */}
        <div className="md:col-span-1">
          <h2 className="text-3xl font-bold leading-snug mb-4">
            Key Steps in <span className="text-[#FFD506]">Our Process</span>
          </h2>
          <p className="text-gray-400 mb-6">
            A well-defined and proven process helps us deliver quality work, faster — with minimal back-and-forth and predictable outcomes.
          </p>
          <button className="bg-[#FFD506] hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded transition">
            Contact Us
          </button>
        </div>

        {/* Right Steps with animation */}
        <div className="md:col-span-2 space-y-10">
          {steps.map((step, index) => (
            <AnimatedStep key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Scroll Animation Wrapper
const AnimatedStep = ({ title, desc, icon, step }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);

    return () => currentRef && observer.unobserve(currentRef);
  }, []);

  return (
    <div
      ref={ref}
      className={`flex items-start gap-6 transform transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Icon Circle */}
      <div className="flex-shrink-0 relative">
        <div className="h-16 w-16 rounded-full border-4 border-[#FFD506] flex items-center justify-center text-2xl relative z-10 bg-black">
          {icon}
        </div>
        <div className="absolute inset-0 border-2 border-yellow-600 rounded-full z-0 scale-110"></div>
      </div>

      {/* Text Content */}
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold text-[#FFD506]">{title}</h3>
          <span className="text-lg font-bold text-white opacity-30">{step}</span>
        </div>
        <p className=" text-gray-300 mt-2 leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default ProcessSection;
