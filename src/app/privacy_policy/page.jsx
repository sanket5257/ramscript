'use client'
import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div className="bg-black text-white px-6 md:px-20 py-20 min-h-screen w-full">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-7xl font-extrabold text-yellow-400">Privacy Policy</h1>
        <p className="mt-6 text-lg md:text-xl font-medium text-gray-300 max-w-4xl mx-auto">
          Your privacy is important to us at Ramscript. We respect your privacy regarding any information we may collect from you across our website.
        </p>
        <p className="mt-4 text-gray-400">Current date as of 1-July-2025</p>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto text-justify text-gray-200 space-y-12">

        {/* Section: Intro */}
        <p>
          This Privacy Policy describes our policies and procedures on the collection, use, and disclosure of your information when you use the Service and tells you about your privacy rights and how the law protects you. By using the Service, you agree to this Privacy Policy.
        </p>

        {/* Section: Definitions */}
        <div>
          <h2 className="text-3xl font-bold text-yellow-400">Interpretation and Definitions</h2>
          <h3 className="mt-6 text-2xl font-semibold text-white">Interpretation</h3>
          <p className="mt-2">
            Words with capitalized initials have meanings defined under the conditions below. These definitions apply regardless of whether they appear in singular or plural.
          </p>

          <h3 className="mt-8 text-2xl font-semibold text-white">Definitions</h3>
          <ul className="list-disc list-inside space-y-3 mt-4 text-gray-300">
            <li><b>Account</b>: A unique account created for you to access our service.</li>
            <li><b>Affiliate</b>: Entity under common control with a party.</li>
            <li><b>Company</b>: Webyansh, referred to as "we", "us", or "our".</li>
            <li><b>Cookies</b>: Small files stored on your device for tracking and preferences.</li>
            <li><b>Country</b>: Karnataka, India.</li>
            <li><b>Device</b>: Any device that can access the service like phone, computer, or tablet.</li>
            <li><b>Personal Data</b>: Information that identifies or can identify an individual.</li>
            <li><b>Service</b>: Refers to the website.</li>
            <li><b>Service Provider</b>: A party processing data on behalf of the Company.</li>
            <li><b>Usage Data</b>: Data collected automatically through the service like time, IP, browser type etc.</li>
            <li><b>You</b>: The individual or legal entity using our service.</li>
          </ul>
        </div>

        {/* Section: Data Collection */}
        <div>
          <h2 className="text-3xl font-bold text-yellow-400">Collecting and Using Your Personal Data</h2>

          <h3 className="mt-6 text-2xl font-semibold text-white">Types of Data Collected</h3>
          <p className="mt-2">
            While using our service, we may ask for personally identifiable info such as:
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-300 space-y-2">
            <li>Email address</li>
            <li>Address, State, ZIP/Postal code, City</li>
            <li>Usage Data</li>
          </ul>

          <h3 className="mt-8 text-2xl font-semibold text-white">Usage Data</h3>
          <p className="mt-2">
            Automatically collected data includes IP address, browser type/version, pages visited, duration, and device information.
          </p>

          <h3 className="mt-8 text-2xl font-semibold text-white">Tracking Technologies and Cookies</h3>
          <p className="mt-2">
            We use cookies and similar technologies (tags, beacons, scripts) to enhance and analyze service usage.
          </p>
          <ul className="list-disc list-inside mt-2 space-y-2 text-gray-300">
            <li><b>Essential Cookies</b>: Needed to access basic service functionality.</li>
            <li><b>Notice Acceptance Cookies</b>: Store your cookie consent decision.</li>
            <li><b>Functionality Cookies</b>: Remember your preferences.</li>
          </ul>
        </div>

        {/* Section: Usage of Data */}
        <div>
          <h3 className="text-2xl font-semibold text-white">Use of Your Personal Data</h3>
          <p className="mt-2">
            We may use your personal data to:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-2 text-gray-300">
            <li>Provide and maintain our service</li>
            <li>Manage your account</li>
            <li>Fulfill contracts</li>
            <li>Communicate updates and offers</li>
            <li>Handle your requests and feedback</li>
            <li>Analyze service usage and improve offerings</li>
          </ul>
        </div>

        {/* Section: Retention & Security */}
        <div>
          <h3 className="text-2xl font-semibold text-white">Retention and Security of Data</h3>
          <p className="mt-2">
            We retain your data only as long as necessary for legal and operational purposes. While we take all reasonable measures to secure your data, no method of transmission or storage is 100% secure.
          </p>
        </div>

        {/* Section: Transfer, Deletion, Disclosure */}
        <div>
          <h3 className="text-2xl font-semibold text-white">Data Transfer, Deletion, and Disclosure</h3>
          <ul className="list-disc list-inside mt-2 space-y-2 text-gray-300">
            <li>Data may be transferred internationally with your consent.</li>
            <li>You can request deletion or correction of your personal data.</li>
            <li>Data may be shared under legal obligation or business transactions.</li>
          </ul>
        </div>

        {/* Section: Child Privacy */}
        <div>
          <h3 className="text-2xl font-semibold text-white">Children's Privacy</h3>
          <p className="mt-2">
            We do not knowingly collect data from users under 13. If discovered, we will remove such data immediately.
          </p>
        </div>

        {/* Section: Third-party Links */}
        <div>
          <h3 className="text-2xl font-semibold text-white">Links to Other Websites</h3>
          <p className="mt-2">
            We are not responsible for the privacy practices of other websites linked from our platform.
          </p>
        </div>

        {/* Section: Updates */}
        <div>
          <h3 className="text-2xl font-semibold text-white">Changes to this Privacy Policy</h3>
          <p className="mt-2">
            We may revise this policy and will notify you of changes via email or notices on our website. Please review this page periodically.
          </p>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
