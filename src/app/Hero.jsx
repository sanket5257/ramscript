'use client'

import React, { useEffect, useRef } from 'react'
import Link from "next/link";

const Hero = () => {
  const followerRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (followerRef.current) {
        followerRef.current.style.transform = `translate(${e.clientX - 150}px, ${e.clientY - 150}px)`
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div>
      {/* 🟡 Cursor-following blur */}
      <div
        ref={followerRef}
        className="fixed top-0 left-0 z-0 h-[300px] w-[300px] bg-[#FFD506] rounded-full blur-[150px] opacity-20 pointer-events-none"
      ></div>

      {/* 🔴 Hero section */}
      <div className='bg-black min-h-screen flex items-center justify-center'>
        <div className='h-[50vw] w-[50vw] bg-[#FFD506] rounded-full blur-[20vh] opacity-20'></div>

        <div id='main' className='absolute top-[25%] flex flex-col items-center justify-center text-center'>
          <h1 className='text-[5vw] font-bold text-[#FFD506]'>Run RamScript </h1>
          <h1 className='text-[5vw] font-bold text-[#FFFFFF] leading-15'>Once, and You’re Set. </h1>

          {/* 🔗 Buttons */}
          <div className='mt-20 flex flex-col md:flex-row gap-10'>
            <Link href="/contact" passHref className='flex items-center px-4 gap-3 py-3 justify-center font-medium text-black bg-[#FFD506] rounded-xl  cursor-pointer'>
              <span>Start Your Project</span>
              <img src="/arrow1.png" alt="" />
            </Link>
            <Link href="/contact" passHref className='flex items-center justify-center gap-3 font-medium text-[#FFD506] border border-[#FFD506] px-5 py-3 rounded-xl cursor-pointer'>
              <span>View Portfolio</span>
              <img src="/arrow2.png" alt="" />
            </Link>
          </div>

          {/* 🛠️ Services */}
          <div id='main-services' className='flex flex-col md:flex-row items-center justify-center mt-20 gap-10'>
            {[
              {
                title: "Development",
                desc: "Reprehenderit at, libero perferendis omnis voluptas illo! Obcaecati nostrum eveniet rerum porro eli",
                icon: "/devicon.png"
              },
              {
                title: "Design",
                desc: "Crafting smooth UI with bold aesthetics that stand out & convert visitors into clients.",
                icon: "/devicon.png" // ✅ Replace with actual icon
              },
              {
                title: "Deployment",
                desc: "Seamless cloud hosting, domain setup & performance tweaks for production-ready web.",
                icon: "/devicon.png" // ✅ Replace with actual icon
              }
            ].map((service, idx) => (
              <div
                key={idx}
                className='group relative bg-[#1E1E1E] border border-[#FFD506] rounded-xl h-[12vw] w-[24vw] flex flex-col items-start justify-center gap-3 p-5 overflow-hidden transition-transform duration-300 hover:scale-[1.05]'
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-tr from-yellow-300 via-[#FF6FD8] to-[#3813C2]


 opacity-20 mix-blend-screen blur-2xl"></div>
                </div>
                <img src={service.icon} alt="" />
                <h1 className='font-bold'>{service.title}</h1>
                <h2 className='text-start'>{service.desc}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
