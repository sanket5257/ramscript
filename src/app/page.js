import React from 'react'
import Hero from './Hero'
import Services from '@/components/Services'
import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'
import WhyChooseUs from '@/components/WhyChooseUs'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      < Services/>
      <WhyChooseUs/>
      <Contact/>
    </div>
  )
}

export default page
