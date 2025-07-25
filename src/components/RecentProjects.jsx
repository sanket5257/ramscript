'use client'
import { useState } from 'react'

const projects = [
  {
    title: 'Hopstack',
    image: '/project1.webp',
    description:
      'Hopstack // B2B SaaS platform for warehouse management to streamline and digitize warehouse operations.',
    tags: ['B2B SaaS', 'Logistics', 'Fulfillment'],
    services: 'UI/UX Design • Webflow • SEO',
  },
  {
    title: 'Aureon Solutions',
    image: '/project1.webp',
    description:
      'Aureon Solutions // Leader in delivering tailored solutions for wealth migration, real estate & more.',
    tags: ['Financial Services', 'Wealth Management'],
    services: 'UI/UX Design • Webflow • Strategy',
  },
  // Add more projects if needed
]

export default function RecentProjects() {
  const [activeIndex, setActiveIndex] = useState(0)

  const goLeft = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  const goRight = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="bg-[#f8f8f8] text-black py-16 px-4 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* LEFT SIDE */}
        <div className="space-y-6">
          <h2 className="text-4xl font-extrabold leading-tight">
            Some of <br />
            our recent <br />
            <span className="text-[#FFD506]">work</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Explore our portfolio of exceptional web design and custom Webflow websites that
            drive results for businesses worldwide.
          </p>

          <button className="bg-white text-black px-6 py-3 rounded-full border hover:bg-gray-100 transition">
            Explore All Projects
          </button>

          {/* Arrows */}
          <div className="flex gap-4 pt-6">
            <button
              onClick={goLeft}
              className="w-12 h-12 rounded-full bg-black text-white text-xl flex items-center justify-center shadow"
            >
              ←
            </button>
            <button
              onClick={goRight}
              className="w-12 h-12 rounded-full bg-black text-white text-xl flex items-center justify-center shadow"
            >
              →
            </button>
          </div>
        </div>

        {/* RIGHT SIDE - Show one project at a time */}
        <div className="w-full">
          <div className="transition-all duration-500 ease-in-out">
            <div className="bg-white rounded-xl shadow-md">
              <div className="bg-[#d9d9d9] rounded-t-xl p-4">
                <p className="font-semibold text-2xl mb-2">{projects[activeIndex].title}</p>
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={projects[activeIndex].image}
                    alt={projects[activeIndex].title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="px-4 py-3">
                <div className="text-sm text-gray-500 mb-1">
                  {projects[activeIndex].services}
                </div>
                <h3 className="font-semibold text-base mb-3">
                  {projects[activeIndex].description}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {projects[activeIndex].tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gray-200 text-sm rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
