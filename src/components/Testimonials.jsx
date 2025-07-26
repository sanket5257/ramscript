'use client'
import { useEffect, useState } from 'react'

const testimonials = [
  {
    name: 'Sachin Chhabra',
    role: 'Founder, Marketplace-Company',
    message: `I highly recommend Divyansh as a website developer. His exceptional design and development skills, attention to detail, and ability to create user-friendly websites make him a valuable asset to any marketing team.`,
    avatar: '/saurabh.jpg',
  },
  {
    name: 'Bradley Ochilien',
    role: 'Director ShopBox',
    message: `I highly recommend Divyansh for any web development projects, as he consistently demonstrates exceptional technical skills and a strong work ethic.`,
    avatar: '/sanket.jpg',
  },
  {
    name: 'Mohammad Farhan Kalim',
    role: 'Founder & CEO at Sorise EdTech',
    message: `Div is a brilliant mind to work with. His expertise and experience in Web designing is very creative. Looking forward to work with him again on future projects.`,
    avatar: '/saurabh.jpg',
  },
  {
    name: 'Tanya Kapoor',
    role: 'CMO, TechLabs',
    message: `A true professional with a creative eye. Highly recommended for smooth UX & attention to detail.`,
    avatar: '/sanket.jpg',
  },
  {
    name: 'Vikas Mehta',
    role: 'Product Head, MedPlus',
    message: `Brilliant execution and always on time. Divyansh delivered what we exactly envisioned.`,
    avatar: '/saurabh.jpg',
  },
  {
    name: 'Sneha R.',
    role: 'Design Lead, Educorp',
    message: `An incredible designer & developer. The website experience has improved drastically!`,
    avatar: '/sanket.jpg',
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(true)

  const visibleCards = 6
  const total = testimonials.length
  const extended = [...testimonials, ...testimonials.slice(0, visibleCards)]

  useEffect(() => {
    const interval = setInterval(() => {
      if (index >= total) {
        setIsTransitioning(true)
        setTimeout(() => {
          setIsTransitioning(false)
          setIndex(0)
        }, 700)
      } else {
        setIsTransitioning(true)
        setIndex((prev) => prev + 1)
      }
    }, 4000)

    return () => clearInterval(interval)
  }, [index])

  return (
    <section className="bg-black text-white py-20 px-6 overflow-hidden">
      {/* Heading */}
<div className="text-center mb-12">
        <p className="text-yellow-400 font-semibold tracking-wide">★ Testimonials</p>
        <h2 className="text-4xl font-bold mt-2">Our happy clients</h2>
        <p className="text-gray-400 mt-2">
          Hear from clients who’ve experienced remarkable transformations with us.
        </p>
      </div>

      {/* Avatar indicators */}
      <div className="flex justify-center mb-10 space-x-2">
        {testimonials.map((t, i) => (
          <img
            key={i}
            src={t.avatar}
            className={`w-10 h-10 rounded-full object-cover ring-2 transition duration-300 ${
              i === index % total ? 'ring-yellow-400' : 'ring-gray-600 opacity-50'
            }`}
            alt={t.name}
          />
        ))}
      </div>



      {/* Carousel */}
      <div className="relative max-w-7xl mx-auto overflow-hidden">
        <div
          className="flex"
          style={{
            width: `${(extended.length / visibleCards) * 100}%`,
            transform: `translateX(-${(100 / visibleCards) * index}%)`,
            transition: isTransitioning ? 'transform 0.7s ease-in-out' : 'none',
          }}
        >
          {extended.map((t, i) => {
            // i is the actual card position
            const relativePosition = i - index

            // Style logic
            let styleClass =
              'opacity-30 scale-90 blur-sm z-0 pointer-events-none'

            if (relativePosition === 1) {
              // Center card
              styleClass =
                'opacity-100 scale-100 blur-0 z-10 pointer-events-auto'
            } else if (relativePosition === 1 || relativePosition === 4) {
              styleClass =
                'opacity-60 scale-95 blur-[1px] z-0 pointer-events-none'
            } else if (relativePosition === 3 || relativePosition === 5) {
              styleClass =
                'opacity-40 scale-90 blur-sm z-0 pointer-events-none'
            }

            return (
              <div
                key={i}
                className={`w-1/6 px-2 flex-shrink-0 transition-all duration-700 ${styleClass}`}
              >
                <div className="bg-[#111111] border border-yellow-500 rounded-xl p-4 h-full shadow-md">
                  <p className="text-white text-sm mb-3 leading-relaxed">"{t.message}"</p>
                  <div className="flex items-center gap-2 mt-3">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-8 h-8 rounded-full border object-cover border-yellow-400"
                    />
                    <div>
                      <p className="text-yellow-300 text-sm font-semibold">{t.name}</p>
                      <p className="text-xs text-gray-400">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
