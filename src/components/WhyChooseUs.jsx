'use client';

const features = [
  {
    title: 'Premium Quality',
    desc: 'Predictable and consistently high design and coding standard with great technical abilities.',
    icon: '🎯',
  },
  {
    title: 'Comprehensive Solutions',
    desc: 'We provide end-to-end services, from initial design to deployment and maintenance.',
    icon: '💻',
  },
  {
    title: 'Customer-Centric Approach',
    desc: 'We prioritize your needs and tailor solutions to meet your goals.',
    icon: '🧠',
  },
  {
    title: 'Pause Anytime',
    desc: 'Pause and resume your subscription, based on your requirements.',
    icon: '⏸️',
  },
  {
    title: 'Zero Hand Holding',
    desc: 'Our designers and developers are self-led and our process is streamlined.',
    icon: '🖐️',
  },
  {
    title: 'Fast Delivery',
    desc: 'We don’t rush, we’re just fast! We hope you\'re ready to keep up.',
    icon: '⚡',
  },
  {
    title: '100% NDA Abiding',
    desc: 'We protect your big ideas with strict contracts from the start.',
    icon: '📝',
  },
  {
    title: 'Fixed Affordable Rate',
    desc: 'No hidden fees or surprises. Transparent and predictable pricing.',
    icon: '💰',
  },
  {
    title: 'Unlimited Revisions',
    desc: 'Revise until you’re 100% satisfied.',
    icon: '🔁',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-12">
          Why <span className="text-[#FFD506]">Choose Us?</span>
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[minmax(180px,_1fr)]">
          {features.map((feature, idx) => {
            const isCenterCol = idx % 3 === 1;
            return (
              <div
                key={idx}
                className={`bg-[#1a1a1a] border border-[#FFD506]/40 p-6 rounded-xl shadow-md hover:shadow-yellow-500/20 hover:scale-[1.03] transition-all duration-300 ease-in-out ${
                  isCenterCol ? 'lg:row-span-2' : ''
                }`}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-[#FFD506]">{feature.title}</h3>
                <p className="text-sm text-gray-300">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
