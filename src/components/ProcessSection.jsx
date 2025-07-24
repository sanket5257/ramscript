'use client';

const steps = [
  {
    title: 'Planning',
    desc: 'At the beginning of each project, we collaborate closely with our clients to understand business objectives, user needs, and technical feasibility. We outline a solid roadmap and define key deliverables to ensure everyone is aligned before any design or code begins.',
    icon: '🗓️',
    step: '01',
  },
  {
    title: 'Wireframing',
    desc: 'Once the scope is defined, our UX team creates low-fidelity wireframes that map out layout, flow, and content hierarchy. These blueprints help visualize how users will navigate the product and ensure functionality is considered from the ground up.',
    icon: '📐',
    step: '02',
  },
  {
    title: 'Design',
    desc: 'We transform wireframes into high-fidelity, interactive UI designs that reflect your brand identity and user expectations. Our designers focus on accessibility, clarity, and usability—ensuring every screen is intuitive and visually engaging.',
    icon: '🎨',
    step: '03',
  },
  {
    title: 'Development',
    desc: 'Our frontend and backend developers work together to build a pixel-perfect, scalable, and optimized product. We follow best coding practices, integrate necessary APIs, and ensure responsiveness across all modern devices and browsers.',
    icon: '💻',
    step: '04',
  },
  {
    title: 'Testing',
    desc: 'Before launch, we rigorously test the product using manual and automated tools. Our QA team identifies bugs, validates features, and ensures the platform is secure, performant, and ready for production.',
    icon: '🧪',
    step: '05',
  },
  {
    title: 'Launch & Support',
    desc: 'After deployment, we monitor for any issues, provide ongoing updates, and handle enhancements. We’re committed to long-term success and remain available for continuous improvement, scaling, or new feature development.',
    icon: '🚀',
    step: '06',
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-black text-white py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Left Text */}
        <div className="md:col-span-1">
          <h2 className="text-3xl font-extrabold leading-snug mb-4">
            Key Steps in <span className="text-[#FFD506]">Our Process</span>
          </h2>
          <p className="text-gray-400 mb-6">
            A well-defined and proven process helps us deliver quality work, faster — with minimal back-and-forth and predictable outcomes.
          </p>
          <button className="bg-[#FFD506] hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded transition">
            Contact Us
          </button>
        </div>

        {/* Right Steps */}
        <div className="md:col-span-2 space-y-10">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-6">
              {/* Icon Circle */}
              <div className="flex-shrink-0 relative">
                <div className="h-16 w-16 rounded-full border-4 border-[#FFD506] flex items-center justify-center text-2xl relative z-10 bg-black">
                  {step.icon}
                </div>
                <div className="absolute inset-0 border-2 border-yellow-600 rounded-full z-0 scale-110"></div>
              </div>

              {/* Text Content */}
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-[#FFD506]">{step.title}</h3>
                  <span className="text-lg font-bold text-white opacity-30">{step.step}</span>
                </div>
                <p className="text-sm text-gray-300 mt-2 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
