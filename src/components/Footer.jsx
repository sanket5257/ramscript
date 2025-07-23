import React from 'react'
import Link from "next/link";

const Footer = () => {
  return (
    <div className='bg-[#1E1E1E] h-full w=full'>

    <div className='bg-[#1E1E1E] text-white flex justify-evenly items-start p-10'>
        <div className='flex flex-col items-start justify-center gap-3'>
            
            <h1 className='font-extrabold text-3xl'>Start Your Project</h1>
            <h3>Let's create your next big idea.</h3>
            <Link
              href="/contact"
              passHref
              className=' text-center flex items-center mt-2 px-4 gap-3 py-3 justify-center font-medium text-black bg-[#FFD506] rounded-xl cursor-pointer'
            >
              <span>Start Your Project</span>
              <img src="/arrow1.png" alt="" />
            </Link>
        </div>
                <div className=''>
   
    <div className='flex flex-col items-start justify-center gap-3'>
            <h1 className='font-extrabold text-xl'>Quick Links</h1>

        <Link href="/" className='text-[#C9C9C9] font-medium'>Home</Link>
        <Link href="/about" className='text-[#C9C9C9] font-medium'>About</Link>
        <Link href="/services" className='text-[#C9C9C9] font-medium'>Services</Link>
        <Link href="/portfolio" className='text-[#C9C9C9] font-medium'>Portfolio</Link>
        <Link href="/career" className='text-[#C9C9C9] font-medium'>Careers</Link>
    </div>
    
</div>

        <div className='flex flex-col justify-center items-start gap-3' >
            
            <h1 className='font-extrabold text-xl'>Say Hello</h1>
            <h3 className='text-[#C9C9C9] font-medium'>info@ramscript.com</h3>
            <h3 className='text-[#C9C9C9] font-medium'>+91 8857880000 </h3>
            <h3 className='text-[#C9C9C9] font-medium'>Linkedin</h3>
            <h3 className='text-[#C9C9C9] font-medium'>Instagram</h3>
            
        </div>
            
     
    </div>
    <div className='flex flex-col justify-center items-center text-[#C9C9C9] pb-10 '>
                    <div className='bg-[#C9c9C9] w-[70%] h-[1px] my-5'></div>
                    <h1 className='text-[#C9C9C9]'>© 2025 RamScript Pvt. Ltd.  All rights reserved.</h1>

    </div>

    </div>
  )
}

export default Footer
