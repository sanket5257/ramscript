'use client'
import React, { useEffect, useRef, useState } from 'react'

const About = () => {
  const sectionRef = useRef(null)
  const videoContainerRef = useRef(null)
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
      const scale = Math.min(1, 1 + delta / 900)
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
      id="about"
      ref={sectionRef}
      className="bg-black text-white py-20 px-6 sm:px-10 lg:px-24 relative overflow-hidden"
    >
      <div className="grid  grid-cols-1 lg:grid-cols-1 gap-12 items-center max-w-6xl mx-auto relative z-10">
        {/* Left: Video with controlled scaling */}
        <div className="relative rounded-2xl z-10 w-full ">
          <div
            ref={videoContainerRef}
            className="transition-transform duration-300 ease-out origin-left"
            style={{ transformOrigin: 'center left' }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="rounded-2xl object-cover w-full h-auto max-h-[500px] sm:max-h-[600px]"
              src="/about.mp4"
            />
          </div>
        </div>

        {/* Right: Text */}
        <div className="z-10 w-full">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            About <span className="text-white">RamScript</span>
          </h2>
          <p className="text-lg sm:text-xl mb-6">
            We <span className="text-yellow-400 font-semibold">Design</span>.{' '}
            We <span className="text-yellow-400 font-semibold">Develop</span>.{' '}
            We Dominate <span className="text-yellow-400 font-semibold">Trends</span>
          </p>

          <p className="mb-6 text-gray-300 leading-relaxed text-base sm:text-lg">
            At RamScript Private Limited, we believe that technology should be simple,
            reliable, and tailored to solve real-world business problems. We’re more than just
            a software company — we’re your virtual CTO, helping startups, small businesses,
            and enterprises build, scale, and succeed in the digital world.
          </p>

          <div className="mb-6">
            <h3 className="text-lg sm:text-xl font-semibold mb-1">One-stop tech partner</h3>
            <p className="text-gray-300 text-sm sm:text-base">
              no more jumping between freelancers or agencies
            </p>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-1">
              Deep experience across industries
            </h3>
            <p className="text-gray-300 text-sm sm:text-base">
              education, logistics, media, finance, and more
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
