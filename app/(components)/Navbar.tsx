import React from 'react'
import logo from '@/public/logo.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className='flex items-center justify-between lg:px-[80px] md:px-[40px] px-6 bg-black py-4 fixed w-full opacity-90 backdrop-blur-2xl z-10' >

      <Image src={logo} alt="logo" width={150} height={100} />

      <div className='flex items-center gap-12'>
        <Link className='hover:text-[#B83DC8] text-white text-lg font-medium font-sans' href="/">Home</Link>

        {/* Services Dropdown */}
        <div className="relative group">
          <Link
            className='hover:text-[#B83DC8] text-white  text-lg font-medium font-sans'
            href="/services"
          >
            Services <i className="ri-arrow-drop-down-line"></i>
          </Link>

          {/* Dropdown Menu */}
          <div className="absolute top-full px-2 left-0 mt-3 w-[170px] rounded-xl overflow-hidden 
                          bg-linear-to-b from-[#421C47] to-[#8E2391]
                          opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                          transition-all duration-300 shadow-lg">

            <Link href="/services/website-design-and-development"
              className="block px-0 py-3 text-sm border-b border-b-white text-white hover:bg-white/10 transition">
              Web Development
            </Link>

            <Link href="/services/seo"
              className="block px-0 py-3 text-sm text-white hover:bg-white/10 transition">
              SEO Optimization
            </Link>

          </div>
        </div>
        <div className="relative group">
          <div
            className='hover:text-[#B83DC8] text-white  text-lg font-medium font-sans'

          >
            Insights <i className="ri-arrow-drop-down-line"></i>
          </div>

          {/* Dropdown Menu */}
          <div className="absolute top-full px-2 left-0 mt-3 w-[170px] rounded-xl overflow-hidden 
                          bg-linear-to-b from-[#421C47] to-[#8E2391]
                          opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                          transition-all duration-300 shadow-lg">

            <Link href="/about-us"
              className="block px-0 py-3 text-sm border-b border-b-white text-white hover:bg-white/10 transition">
              About
            </Link>

            <Link href="/blogs"
              className="block px-0 py-3 text-sm text-white hover:bg-white/10 transition">
              Blogs
            </Link>

          </div>
        </div>

        <Link className='hover:text-[#B83DC8] text-white  text-lg font-medium font-sans' href="/portfolio">Portfolio</Link>
        <Link className='hover:text-[#B83DC8] text-white  text-lg font-medium font-sans' href="/contact-us">Contact</Link>
      </div>

      <i className="ri-menu-2-line text-[#8d7491] text-2xl cursor-pointer hidden lg:block"></i>
    </div>
  )
}