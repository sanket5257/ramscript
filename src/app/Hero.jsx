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

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div>
      {/* 🟡 NEW: Cursor-following blur */}
      <div
        ref={followerRef}
        className="fixed top-0 left-0 z-0 h-[300px] w-[300px] bg-[#FFD506] rounded-full blur-[150px] opacity-20 pointer-events-none"
      ></div>

      {/* 🔴 Your existing design (unchanged) */}
      <div className='bg-black min-h-screen flex items-center justify-center'>
        <div className='h-[50vw] w-[50vw] bg-[#FFD506] rounded-full blur-[20vh] opacity-20'></div>
        <div id='main' className='absolute top-[30%] flex flex-col items-center justify-center text-center'>
          <h1 className='text-[5vw] font-bold text-[#FFD506]'>Run RamScript </h1>
          <h1 className='text-[5vw] font-bold text-[#FFFFFF] leading-15'>Once, and You’re Set. </h1>
          <div className='mt-20 flex flex-col md:flex-row gap-10'>
            <Link href="/contact" passHref>
                <span className=" font-medium text-black bg-[#FFD506] px-5 py-3 rounded-xl  cursor-pointer">
                  Start Your Project
                </span>
              </Link>
               <Link href="/contact" passHref>
                <span className=" font-medium text-[#FFD506] border border-[#FFD506] px-5 py-3 rounded-xl  cursor-pointer">
                  View Portfolio
                </span>
              </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
