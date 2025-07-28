'use client'
import Link from 'next/link'
import { FaArrowRight, FaMapMarkerAlt, FaClock, FaRupeeSign } from 'react-icons/fa'

const jobs = [
  {
    title: 'Webflow Certified Developer',
    href: '/careers/webflow-developer',
    description:
      "Create exceptional, responsive websites using Webflow's platform. Turn complex designs into seamless user experiences with clean code and optimized performance.",
    location: 'On Site',
    type: 'Full-Time',
    salary: '60000 - 90000',
  },
  {
    title: 'UI/UX Designer',
    href: '/careers/ui-ux-designer',
    description:
      'Design user-centered interfaces for web and mobile platforms. Work with cross-functional teams to deliver beautiful and functional digital experiences.',
    location: 'Remote',
    type: 'Full-Time',
    salary: '50000 - 80000',
  },
  {
    title: 'Frontend Developer (React)',
    href: '/careers/frontend-react',
    description:
      'Build modern web interfaces using React, Tailwind CSS, and other modern frontend technologies. Optimize performance and ensure responsive designs.',
    location: 'Hybrid',
    type: 'Full-Time',
    salary: '70000 - 100000',
  },
]

export default function CareersSection() {
  return (
    <section className="bg-black text-yellow-400 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold mb-6">Careers at RamScript</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          At RamScript, we're building the future of digital experiences.
          As a premium design and Webflow agency in India, we're looking for passionate individuals
          who want to create impactful and scalable digital solutions.
        </p>
      </div>

      <div className="max-w-4xl mx-auto mt-16 flex flex-col gap-10">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="bg-[#111111] text-white p-8 rounded-xl shadow-lg"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">{job.title}</h2>
              <Link
                href={job.href}
                className="text-yellow-400 hover:text-yellow-300 flex items-center gap-2"
              >
                View Job <FaArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <p className="text-gray-400 mb-6">{job.description}</p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300">
              <span className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-yellow-400" /> {job.location}
              </span>
              <span className="flex items-center gap-2">
                <FaClock className="text-yellow-400" /> {job.type}
              </span>
              <span className="flex items-center gap-2">
                <FaRupeeSign className="text-yellow-400" /> {job.salary}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
