'use client'
import React, { useEffect, useRef, useState } from 'react'

const About = () => {
  const sectionRef = useRef(null)
  const videoContainerRef = useRef(null)
  const [scrollY, setScrollY] = useState(0)
  const [startY, setStartY] = useState(0)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          setStartY(window.scrollY)
        } else {
          setActive(false)
        }
      },
      {
        threshold: 0.6,
      }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!active) return

      const delta = window.scrollY - startY
      const scale = Math.min(1.8, 1 + delta / 900) // max 1.8x
      const video = videoContainerRef.current
      if (video) {
        video.style.transform = `scale(${scale})`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [active, startY])

  return (
    <section
      ref={sectionRef}
      className="bg-black text-white py-20 px-6 lg:px-24 relative overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        {/* Left: Animated Video */}
        <div className="relative z-10">
          <div
            ref={videoContainerRef}
            className="transition-transform duration-300 ease-out"
            style={{ transformOrigin: 'center center' }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="rounded-2xl object-cover w-full h-auto"
              src="/about.mp4"
            />
          </div>
        </div>

        {/* Right: Text */}
        <div className="z-10 pl-50 relative">
          <h2 className="text-4xl font-extrabold mb-4">
            About <span className="text-white">RamScript</span>
          </h2>
          <p className="text-xl mb-6">
            We <span className="text-yellow-400 font-semibold">Design</span>.{' '}
            We <span className="text-yellow-400 font-semibold">Develop</span>.{' '}
            We Dominate <span className="text-yellow-400 font-semibold">Trends</span>
          </p>
          <p className="mb-6 text-gray-300 leading-relaxed">
            At RamScript Private Limited, we believe that technology should be simple,
            reliable, and tailored to solve real-world business problems. We’re more than just
            a software company — we’re your virtual CTO, helping startups, small businesses,
            and enterprises build, scale, and succeed in the digital world.
          </p>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-1">One-stop tech partner</h3>
            <p className="text-gray-300">no more jumping between freelancers or agencies</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-1">Deep experience across industries</h3>
            <p className="text-gray-300">education, logistics, media, finance, and more</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
