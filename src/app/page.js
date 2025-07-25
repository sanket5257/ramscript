import React from 'react'
import Hero from './Hero'
import Services from '@/components/Services'
import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'
import WhyChooseUs from '@/components/WhyChooseUs'
import ProcessSection from '@/components/ProcessSection'
import TeamSection from '@/components/TeamSection'
import About from '@/components/About'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      < Services/>
      <TeamSection/>
      <WhyChooseUs/>
      <ProcessSection/>
      <Contact/>
    </div>
  )
}

export default page
