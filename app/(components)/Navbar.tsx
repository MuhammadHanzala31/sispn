'use client'

import React, { useState } from 'react'
import logo from '@/public/logo.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown)
  }

  return (
    <div className='flex items-center justify-between lg:px-20 md:px-10 px-4 bg-black py-3 md:py-4 fixed w-full opacity-90 backdrop-blur-2xl z-10'>
      
      {/* Logo */}
      <Image src={logo} alt="logo"  className='md:w-[150px] md:h-[70px] w-[100px] h-[70px]' />

      {/* Desktop Menu */}
      <div className='hidden md:flex items-center gap-8 lg:gap-12'>
        <Link className='hover:text-[#B83DC8] text-white text-sm lg:text-lg font-medium font-sans transition' href="/">Home</Link>

        {/* Services Dropdown */}
        <div className="relative group">
          <Link
            className='hover:text-[#B83DC8] text-white text-sm lg:text-lg font-medium font-sans flex items-center gap-1 transition'
            href="/services"
          >
            Services <i className="ri-arrow-drop-down-line text-lg"></i>
          </Link>

          <div className="absolute top-full px-2 left-0 mt-3 w-40 rounded-xl overflow-hidden 
                          bg-gradient-to-b from-[#421C47] to-[#8E2391]
                          opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                          transition-all duration-300 shadow-lg">
            <Link href="/services/website-design-and-development"
              className="block px-4 py-3 text-xs lg:text-sm border-b border-b-white/30 text-white hover:bg-white/10 transition">
              Web Development
            </Link>
            <Link href="/services/seo"
              className="block px-4 py-3 text-xs lg:text-sm text-white hover:bg-white/10 transition">
              SEO Optimization
            </Link>
          </div>
        </div>

        {/* Insights Dropdown */}
        <div className="relative group">
          <div className='hover:text-[#B83DC8] text-white text-sm lg:text-lg font-medium font-sans flex items-center gap-1 cursor-pointer transition'>
            Insights <i className="ri-arrow-drop-down-line text-lg"></i>
          </div>

          <div className="absolute top-full px-2 left-0 mt-3 w-40 rounded-xl overflow-hidden 
                          bg-gradient-to-b from-[#421C47] to-[#8E2391]
                          opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                          transition-all duration-300 shadow-lg">
            <Link href="/about-us"
              className="block px-4 py-3 text-xs lg:text-sm border-b border-b-white/30 text-white hover:bg-white/10 transition">
              About
            </Link>
            <Link href="/blogs"
              className="block px-4 py-3 text-xs lg:text-sm text-white hover:bg-white/10 transition">
              Blogs
            </Link>
          </div>
        </div>

        <Link className='hover:text-[#B83DC8] text-white text-sm lg:text-lg font-medium font-sans transition' href="/portfolio">Portfolio</Link>
        <Link className='hover:text-[#B83DC8] text-white text-sm lg:text-lg font-medium font-sans transition' href="/contact-us">Contact</Link>
      </div>

      <i className={"ri-menu-2-line lg:block hidden text-[#8d7491] text-2xl cursor-pointer"}></i>

      {/* Mobile Menu Button */}
      <button 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className='md:hidden text-[#8d7491] text-2xl cursor-pointer'
      >
        <i className={mobileMenuOpen ? "ri-close-line" : "ri-menu-2-line"}></i>
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className='absolute top-full left-0 w-full bg-black/95 backdrop-blur-2xl border-t border-t-white/10 md:hidden'>
          <div className='flex flex-col gap-4 p-4'>
            <Link 
              className='hover:text-[#B83DC8] text-white text-base font-medium font-sans transition py-2' 
              href="/" 
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>

            {/* Services Mobile Dropdown */}
            <div>
              <button 
                onClick={() => toggleDropdown('services')}
                className='w-full text-left hover:text-[#B83DC8] text-white text-base font-medium font-sans flex items-center justify-between transition py-2'
              >
                Services 
                <i className={`ri-arrow-drop-down-line transition-transform ${openDropdown === 'services' ? 'rotate-180' : ''}`}></i>
              </button>
              {openDropdown === 'services' && (
                <div className='flex flex-col gap-2 pl-4 mt-2 border-l border-l-[#B83DC8]/30'>
                  <Link 
                    href="/services/website-design-and-development"
                    className='text-white text-sm hover:text-[#B83DC8] transition py-1'
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Web Development
                  </Link>
                  <Link 
                    href="/services/seo"
                    className='text-white text-sm hover:text-[#B83DC8] transition py-1'
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    SEO Optimization
                  </Link>
                </div>
              )}
            </div>

            {/* Insights Mobile Dropdown */}
            <div>
              <button 
                onClick={() => toggleDropdown('insights')}
                className='w-full text-left hover:text-[#B83DC8] text-white text-base font-medium font-sans flex items-center justify-between transition py-2'
              >
                Insights 
                <i className={`ri-arrow-drop-down-line transition-transform ${openDropdown === 'insights' ? 'rotate-180' : ''}`}></i>
              </button>
              {openDropdown === 'insights' && (
                <div className='flex flex-col gap-2 pl-4 mt-2 border-l border-l-[#B83DC8]/30'>
                  <Link 
                    href="/about-us"
                    className='text-white text-sm hover:text-[#B83DC8] transition py-1'
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link 
                    href="/blogs"
                    className='text-white text-sm hover:text-[#B83DC8] transition py-1'
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Blogs
                  </Link>
                </div>
              )}
            </div>

            <Link 
              className='hover:text-[#B83DC8] text-white text-base font-medium font-sans transition py-2' 
              href="/portfolio"
              onClick={() => setMobileMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link 
              className='hover:text-[#B83DC8] text-white text-base font-medium font-sans transition py-2' 
              href="/contact-us"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
