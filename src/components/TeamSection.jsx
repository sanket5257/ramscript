'use client'
import React from 'react'
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
  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-yellow-400 mb-4">Our Team</h2>
        <p className="text-gray-300 mb-12 max-w-2xl mx-auto font-bold">
          Meet the brilliant minds behind our projects. Talented, dedicated, and always innovating.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-[#1a1a1a] rounded-lg overflow-hidden p-6 text-center">
              <div className="w-full h-60 relative mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="bg-yellow-400 text-black p-2 rounded-full text-sm">
                  {member.social.icon}
                </span>
                <span className="text-gray-400 text-sm">{member.social.label}</span>
              </div>
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-yellow-400 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection
