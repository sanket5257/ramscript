'use client'
import React, { useState } from 'react'

const projects = [
  {
    title: 'Legit Football',
    image: '/portfolio1.webp',
    link: 'https://example.com/legit-football',
    tags: ['UI'],
  },
  {
    title: 'VHG7',
    image: '/portfolio2.webp',
    link: 'https://example.com/vhg7',
    tags: ['UI', 'Webflow'],
  },
   {
    title: 'Legit Football',
    image: '/portfolio1.webp',
    link: 'https://example.com/legit-football',
    tags: ['UI'],
  },
  {
    title: 'VHG7',
    image: '/portfolio2.webp',
    link: 'https://example.com/vhg7',
    tags: ['UI', 'Webflow'],
  },
]

export default function PortfolioSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY })
  }

  return (
    <section className="bg-black text-white py-20 px-6">
      <h1 className="text-5xl font-extrabold text-white mb-12 text-center">
        Our Work
      </h1>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-xl border border-yellow-500"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onMouseMove={handleMouseMove}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />

            {/* Tags */}
            <div className="absolute top-4 left-4 flex gap-2 z-20">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-yellow-500 text-black px-2 py-0.5 rounded-full text-xs font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <div className="absolute bottom-4 left-4 z-20">
              <h2 className="text-xl font-semibold">{project.title}</h2>
            </div>

            {/* Live Site Circle */}
            {hoveredIndex === index && (
              <div
                className="absolute z-30 pointer-events-none"
                style={{
                  top: cursorPos.y - 40,
                  left: cursorPos.x - 40,
                }}
              >
              <div
  className="w-20 h-20 bg-[#FFD506] rounded-full flex items-center justify-center text-sm text-black font-semibold animate-rotate-smooth"
>
  Live Site
</div>



              </div>
            )}

            {/* Clickable Layer */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-40"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
