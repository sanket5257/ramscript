'use client';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <div id='contact' className="min-h-screen bg-black flex items-center justify-center px-4 py-10">
      <div className="bg-white w-full max-w-6xl rounded-lg shadow-lg flex flex-col md:flex-row overflow-hidden relative p-10">
        {/* Left Form Side */}
        <div className="w-full md:w-1/2 p-6 sm:p-8">
          <h2 className="text-3xl sm:text-4xl text-black font-extrabold mb-2">
            Contact <span className="text-[#FFD506]">Us</span>
          </h2>
          <p className="text-sm font-bold text-black mb-6">
            Need assistance? Our dedicated support team is here to help. Contact us anytime by phone live chat or email.
          </p>

          <form className="space-y-4 text-black placeholder:text-black">
            <input
              type="text"
              placeholder="Last Name"
              className="w-full border border-gray-500 px-4 py-2 rounded"
            />
            <input
              type="text"
              placeholder="First Name"
              className="w-full border border-gray-500 px-4 py-2 rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-500 px-4 py-2 rounded"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border border-gray-500 px-4 py-2 rounded"
            />
            <button
              type="submit"
              className="w-full bg-[#FFD506] text-black font-semibold py-2 rounded hover:bg-yellow-500 transition"
            >
              Send
            </button>
          </form>

          {/* Contact Info */}
          <div className="mt-6 flex flex-col sm:flex-row gap-6 items-start sm:items-center text-sm">
            <div className="flex items-center gap-2">
              <span className="text-xl">📞</span>
              <div>
                <p className="font-semibold text-black">contact</p>
                <p className="text-gray-600 font-medium">8857880000</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">✉️</span>
            </div>
          </div>
        </div>

        {/* Right Map Side */}
        <div className="relative w-full md:w-1/2 flex items-center justify-center p-4">
          {/* Yellow background behind map */}
          <div className="absolute top-6 right-6 bottom-6 bg-yellow-400 z-0 w-[80%] sm:w-[60%] md:w-[15vw]"></div>
          <iframe
            className="w-full sm:w-[90%] md:w-[23vw] h-[60vw] sm:h-[50vw] md:h-[25vw] min-h-[300px] z-10 relative"
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30575.33639222356!2d74.4700701!3d16.6810339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc0e3621464ca9d%3A0x1901dfb540174803!2sRS%20SOFT%20TECH!5e0!3m2!1sen!2sin!4v1753335592611!5m2!1sen!2sin"            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
