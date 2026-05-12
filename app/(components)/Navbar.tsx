'use client'

import React, { useState, useEffect } from 'react'
import logo from '@/public/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import SideNav from './SideNav'

const serviceLinks = [
  { label: 'All Services', href: '/services' },
  { label: 'Web Development', href: '/services/website-design-and-development' },
  { label: 'SEO Optimization', href: '/services/seo' },
  { label: 'Google Ads', href: '/services/google-ads' },
  { label: 'Email Marketing', href: '/services/email-marketing' },
  { label: 'Online Reputation', href: '/services/online-reputation' },
  { label: 'Social Media Marketing', href: '/services/social-media-marketing' },
  { label: 'Graphic Designing', href: '/services/graphic-designing' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [isSideNavOpen, setIsSideNavOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown)
  }

  return (
    <nav
      className={`flex items-center justify-between lg:px-20 md:px-10 px-4 py-3 md:py-4 fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.4)] border-b border-white/5'
          : 'bg-black/80 backdrop-blur-xl'
      }`}
    >
      {/* Logo */}
      <Link href="/">
        <Image src={logo} alt="SISPN Tech" className='md:w-[150px] md:h-[60px] w-[110px] h-[50px] object-contain' />
      </Link>

      {/* Desktop Menu */}
      <div className='hidden md:flex items-center gap-8 lg:gap-10'>
        <Link className='hover:text-[#B83DC8] text-white/85 text-sm lg:text-base font-medium transition-colors duration-200' href="/">
          Home
        </Link>

        {/* Services Dropdown */}
        <div className="relative group">
          <button className='hover:text-[#B83DC8] text-white/85 text-sm lg:text-base font-medium flex items-center gap-1 transition-colors duration-200'>
            Services
            <i className="ri-arrow-drop-down-line text-xl transition-transform duration-200 group-hover:rotate-180"></i>
          </button>

          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-52 rounded-2xl overflow-hidden
                          bg-gradient-to-b from-[#2a0d2e] to-[#1a0820]
                          border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_30px_rgba(129,53,138,0.15)]
                          opacity-0 invisible group-hover:opacity-100 group-hover:visible
                          translate-y-2 group-hover:translate-y-0
                          transition-all duration-300">
            {serviceLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-5 py-3 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-all duration-150 ${
                  i < serviceLinks.length - 1 ? 'border-b border-white/8' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <Link className='hover:text-[#B83DC8] text-white/85 text-sm lg:text-base font-medium transition-colors duration-200' href="/about-us">
          About Us
        </Link>
        <Link className='hover:text-[#B83DC8] text-white/85 text-sm lg:text-base font-medium transition-colors duration-200' href="/portfolio">
          Portfolio
        </Link>
      
        {/* CTA */}
        <Link
          href="/contact-us"
          className='hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-sm font-semibold bg-gradient-to-br from-[#421C47] to-[#8E2391] hover:shadow-[0_4px_20px_rgba(129,53,138,0.5)] hover:-translate-y-0.5 transition-all duration-200'
        >
          Get Started
          <i className="ri-arrow-right-line text-sm"></i>
        </Link>
      </div>

      {/* Right actions */}
      <div className='flex items-center gap-3'>
        {/* Side Nav trigger — desktop */}
        <button
          onClick={() => setIsSideNavOpen(true)}
          className="text-white/60 hover:text-[#B83DC8] text-2xl cursor-pointer hidden lg:flex transition-colors duration-200"
          aria-label="Open side menu"
        >
          <i className="ri-menu-2-line"></i>
        </button>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className='md:hidden text-white/70 hover:text-[#B83DC8] text-2xl cursor-pointer transition-colors duration-200'
          aria-label="Toggle menu"
        >
          <i className={mobileMenuOpen ? 'ri-close-line' : 'ri-menu-2-line'}></i>
        </button>
      </div>

      {/* SideNav */}
      <SideNav isOpen={isSideNavOpen} onClose={() => setIsSideNavOpen(false)} />

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className='absolute top-full left-0 w-full bg-black/95 backdrop-blur-2xl border-t border-white/10 md:hidden'>
          <div className='flex flex-col p-4 gap-1'>
            <Link
              className='hover:text-[#B83DC8] text-white/85 text-base font-medium transition-colors py-3 px-2 rounded-xl hover:bg-white/5'
              href="/"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>

            <div>
              <button
                onClick={() => toggleDropdown('services')}
                className='w-full text-left hover:text-[#B83DC8] text-white/85 text-base font-medium flex items-center justify-between transition-colors py-3 px-2 rounded-xl hover:bg-white/5'
              >
                Services
                <i className={`ri-arrow-drop-down-line text-xl transition-transform duration-200 ${openDropdown === 'services' ? 'rotate-180' : ''}`}></i>
              </button>
              {openDropdown === 'services' && (
                <div className='flex flex-col gap-1 pl-4 mt-1 ml-2 border-l-2 border-[#81358A]/40'>
                  {serviceLinks.map(link => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className='text-white/70 hover:text-[#B83DC8] text-sm transition-colors py-2 px-2'
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              className='hover:text-[#B83DC8] text-white/85 text-base font-medium transition-colors py-3 px-2 rounded-xl hover:bg-white/5'
              href="/about-us"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              className='hover:text-[#B83DC8] text-white/85 text-base font-medium transition-colors py-3 px-2 rounded-xl hover:bg-white/5'
              href="/portfolio"
              onClick={() => setMobileMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              className='hover:text-[#B83DC8] text-white/85 text-base font-medium transition-colors py-3 px-2 rounded-xl hover:bg-white/5'
              href="/contact-us"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>

            <Link
              href="/contact-us"
              onClick={() => setMobileMenuOpen(false)}
              className='mt-2 flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-white font-semibold bg-gradient-to-br from-[#421C47] to-[#8E2391]'
            >
              Get Started <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
