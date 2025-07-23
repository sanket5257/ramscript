import React from 'react'
import Hero from './Hero'
import Services from '@/components/Services'
import Navbar from '@/components/Navbar'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Services/>
    </div>
  )
}

export default page
