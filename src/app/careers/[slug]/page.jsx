'use client'
import { useRouter, useParams } from 'next/navigation'
import { FaMapMarkerAlt, FaClock, FaRupeeSign } from 'react-icons/fa'

const jobData = {
  'webflow-developer': {
    title: 'Webflow Certified Developer',
    location: 'Bengaluru, India',
    type: 'On Site',
    salary: '60000 - 90000',
    description:
      "As a Webflow Certified Developer at RamScript, you'll be at the forefront of creating premium digital experiences for our clients. You'll collaborate with our design team to transform creative concepts into fully-functional, responsive, and high-performing websites using Webflow's platform.",
    responsibilities: [
      'Build complex, responsive websites and web applications using Webflow',
      'Implement advanced interactions and animations to enhance user experience',
      'Optimize website performance for speed, SEO, and accessibility',
      'Troubleshoot and debug issues across different browsers and devices',
      'Collaborate with designers to ensure pixel-perfect implementation',
    ],
    requirements: [
      '1+ year experience working with Webflow',
      'Proficient in HTML, CSS, and Webflow CMS',
      'Strong understanding of responsive design principles',
      'Good communication and collaboration skills',
    ],
    niceToHave: [
      'Experience with Figma to Webflow handoff',
      'Basic understanding of SEO best practices',
      'Previous agency or freelance experience',
    ],
  },

  'ui-ux-designer': {
    title: 'UI/UX Designer',
    location: 'Remote',
    type: 'Full-Time',
    salary: '50000 - 80000',
    description:
      "We're looking for a creative UI/UX Designer to join RamScript and turn ideas into beautifully designed digital experiences. You will work closely with developers, project managers, and clients to design intuitive user interfaces and improve user journeys.",
    responsibilities: [
      'Design user-centered web and mobile interfaces using Figma',
      'Conduct user research and translate findings into design decisions',
      'Create wireframes, user flows, and interactive prototypes',
      'Collaborate with frontend developers to ensure design accuracy',
      'Maintain consistency in brand design system across products',
    ],
    requirements: [
      'Strong portfolio showcasing UI/UX design skills',
      'Proficiency in Figma, Adobe XD or similar tools',
      'Understanding of design principles and accessibility',
      'Ability to communicate and justify design decisions',
    ],
    niceToHave: [
      'Experience working in agile product teams',
      'Knowledge of motion design and micro-interactions',
      'Basic HTML/CSS skills for prototyping',
    ],
  },

  'frontend-react': {
    title: 'Frontend Developer (React)',
    location: 'Hybrid',
    type: 'Full-Time',
    salary: '70000 - 100000',
    description:
      "RamScript is seeking a skilled Frontend Developer with experience in React to build dynamic and high-performing web applications. You'll be responsible for developing components, integrating APIs, and ensuring performance across browsers and devices.",
    responsibilities: [
      'Develop reusable React components with clean code',
      'Implement responsive and accessible UI using Tailwind CSS',
      'Work with REST or GraphQL APIs to fetch data',
      'Optimize application performance and loading speed',
      'Collaborate with design and backend teams',
    ],
    requirements: [
      '2+ years experience with React.js',
      'Strong grasp of JavaScript ES6+, HTML, and CSS',
      'Experience with state management (Redux, Zustand, etc.)',
      'Understanding of Git workflows and deployment tools',
    ],
    niceToHave: [
      'Experience with Next.js and SSR',
      'Familiarity with testing libraries (Jest, Cypress)',
      'Worked on SaaS or B2B dashboards',
    ],
  },
}

export default function JobDetails() {
  const { slug } = useParams()
  const job = jobData[slug]
  const router = useRouter()

  if (!job) return <p className="text-center mt-20 text-white">Job not found.</p>

  return (
    <div className="bg-black min-h-screen text-white py-12 px-4 md:px-8">
      <button
        onClick={() => router.push('/careers')}
        className="text-yellow-400 hover:underline mb-6"
      >
        ← Back to Careers
      </button>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Sticky Form */}
        <form className="bg-[#111111] p-6 rounded-xl space-y-4 lg:w-1/2 sticky top-10 h-fit">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-yellow-400">Name*</label>
              <input
                type="text"
                placeholder="John Smith"
                className="w-full bg-black text-white p-2 rounded mt-1 border border-gray-700"
              />
            </div>
            <div>
              <label className="text-sm text-yellow-400">Email Address*</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full bg-black text-white p-2 rounded mt-1 border border-gray-700"
              />
            </div>
            <div>
              <label className="text-sm text-yellow-400">When can you join?*</label>
              <select className="w-full bg-black text-white p-2 rounded mt-1 border border-gray-700">
                <option>Select one..</option>
                <option>Immediately</option>
                <option>In 1 week</option>
                <option>In 2 weeks</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-yellow-400">Portfolio Link*</label>
              <input
                type="url"
                placeholder="https://yourportfolio.com"
                className="w-full bg-black text-white p-2 rounded mt-1 border border-gray-700"
              />
            </div>
          </div>
          <div>
            <label className="text-sm text-yellow-400">Cover Letter</label>
            <textarea
              placeholder="Your message"
              className="w-full bg-black text-white p-2 rounded mt-1 border border-gray-700 h-32"
            />
          </div>
          <button
            type="submit"
            className="bg-yellow-500 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-400"
          >
            Submit
          </button>
        </form>

        {/* Scrollable Job Info */}
        <div className="lg:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{job.title}</h1>

          <div className="flex flex-wrap gap-6 text-sm text-gray-300 mb-4">
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

          <p className="text-gray-400 mb-6">{job.description}</p>

          <Section title="Responsibilities" items={job.responsibilities} />
          <Section title="Requirements" items={job.requirements} />
          <Section title="Nice to Have" items={job.niceToHave} />
        </div>
      </div>
    </div>
  )
}

// Reusable section component
const Section = ({ title, items }) => {
  if (!items?.length) return null
  return (
    <>
      <h2 className="text-2xl font-semibold text-yellow-400 mb-2">{title}</h2>
      <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </>
  )
}
