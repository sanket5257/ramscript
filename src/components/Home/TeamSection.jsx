'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'

const teamMembers = [
  {
    name: 'Joss Anderson',
    role: 'Art Director',
    image: '/saurabh.jpg',
    social: {
      icon: <FaFacebookF />,
      label: 'Facebook/user',
    },
  },
  {
    name: 'Joss Anderson',
    role: 'Art Director',
    image: '/sanket.jpg',
    social: {
      icon: <FaTwitter />,
      label: 'Twitter/user',
    },
  },
  {
    name: 'Joss Anderson',
    role: 'Art Director',
    image: '/saurabh.jpg',
    social: {
      icon: <FaLinkedinIn />,
      label: 'Linkedin/user',
    },
  },
  {
    name: 'Joss Anderson',
    role: 'Art Director',
    image: '/sanket.jpg',
    social: {
      icon: <FaXTwitter />,
      label: 'Twitter-X/user',
    },
  },
]

const TeamSection = () => {
  const cardsRef = useRef([])
  const [visibleIndexes, setVisibleIndexes] = useState([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setVisibleIndexes((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.3 }
    )

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card)
      })
    }
  }, [])

  return (
    <section className="bg-black text-white py-16 px-4 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-yellow-400 mb-4">Our Team</h2>
        <p className="text-gray-300 mb-12 max-w-2xl mx-auto font-bold text-sm sm:text-base">
          Meet the brilliant minds behind our projects. Talented, dedicated, and always innovating.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`bg-[#1a1a1a] rounded-lg overflow-hidden p-5 sm:p-6 text-center transform transition-all duration-700 ease-out
              ${visibleIndexes.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
            `}
            >
              {/* 👤 Member Image */}
              <div className="w-full h-52 sm:h-56 md:h-60 relative mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover rounded-md"
                />
              </div>

              {/* 🔗 Social Info */}
              <div className="flex items-center justify-center gap-3 mb-4 text-sm">
                <span className="bg-yellow-400 text-black p-2 rounded-full">
                  {member.social.icon}
                </span>
                <span className="text-gray-400">{member.social.label}</span>
              </div>

              {/* 📝 Name + Role */}
              <h3 className="text-base sm:text-lg font-semibold">{member.name}</h3>
              <p className="text-yellow-400 text-sm sm:text-base">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection
