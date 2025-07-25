import React from 'react'

const About = () => {
  return (
    <div>
          <section className="bg-black text-white py-12 px-4 lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        {/* Left: Image */}
        <div className="w-full">
          <img
            src="rssoft.jpg"
            alt="Team Working"
            className="rounded-xl w-full h-auto object-cover"
            priority
          />
        </div>

        {/* Right: Text */}
        <div>
          <h2 className="text-4xl font-extrabold mb-4">
            About <span className="text-white">RamScript</span>
          </h2>
          <p className="text-xl mb-6">
            We <span className="text-yellow-400 font-semibold">Design</span>.{' '}
            We <span className="text-yellow-400 font-semibold">Develop</span>.{' '}
            We Dominate <span className="text-yellow-400 font-semibold">Trends</span>
          </p>
          <p className="mb-6 text-gray-300">
            At RamScript Private Limited, we believe that technology should be simple, <br />
            reliable, and tailored to solve real-world business problems. We’re more than <br /> just
            a software company — we’re your virtual CTO, helping startups, small <br /> businesses,
            and enterprises build, scale, and succeed in the digital world.
          </p>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-1">One-stop tech partner</h3>
            <p className="text-gray-300">no more jumping between freelancers or agencies</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-1">Deep experience across industries</h3>
            <p className="text-gray-300">
              education, logistics, media, finance, and more
            </p>
          </div>
        </div>
      </div>
    </section>

    </div>
  )
}

export default About
