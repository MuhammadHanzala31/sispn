'use client'

import { useModal } from '@/app/context/store'
import Link from 'next/link'

const stats = [
  { value: '2K+', label: 'Global Happy Clients', icon: 'ri-user-smile-line' },
  { value: '4K+', label: 'Projects Completed', icon: 'ri-briefcase-4-line' },
  { value: '25', label: 'Team Members', icon: 'ri-team-line' },
  { value: '8+', label: 'Glorious Years', icon: 'ri-trophy-line' },
]

export default function About() {
  const { openModal } = useModal()

  return (
    <section
      data-aos="fade-up"
      className='mx-4 sm:mx-6 lg:mx-20 my-8 sm:my-12 rounded-3xl overflow-hidden
                 border border-[#e8d8ec]/60
                 shadow-[0_20px_80px_rgba(129,53,138,0.1)]
                 bg-white/95 backdrop-blur-xl'
    >
      {/* Top accent line */}
      <div className='h-1 w-full bg-gradient-to-r from-[#421C47] via-[#81358A] to-[#B83DC8]' />

      <div className='px-8 sm:px-12 lg:px-16 py-14 sm:py-16 flex flex-col items-center gap-12 text-center'>

        {/* Badge */}
        <span className='section-badge'>
          <i className="ri-information-line"></i>
          Who We Are
        </span>

        {/* Heading */}
        <div className='flex flex-col gap-4 max-w-3xl'>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a1a] leading-tight'>
            About{' '}
            <span className='gradient-text'>SISPN Tech</span>
          </h2>
          <p className='text-base sm:text-lg text-[#555] leading-relaxed'>
            We strive to deliver the highest level of expertise including graphics services, brand designing,{' '}
            <span className='text-[#81358A] font-medium'>
              e-commerce product development, custom website development and affordable digital marketing services
            </span>.
            Over the years, we have expanded into application development, e-commerce systems, web portals, and digital marketing.
          </p>
        </div>

        {/* Stats grid */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 w-full'>
          {stats.map((item) => (
            <div key={item.label} className='stat-card'>
              <div className='w-11 h-11 rounded-2xl bg-gradient-to-br from-[#81358A]/10 to-[#B83DC8]/10 border border-[#81358A]/15 flex items-center justify-center mx-auto mb-3'>
                <i className={`${item.icon} text-xl text-[#81358A]`}></i>
              </div>
              <span className='block text-4xl lg:text-5xl font-bold gradient-text leading-none mb-2'>
                {item.value}
              </span>
              <p className='text-sm text-[#555] font-medium leading-snug'>
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className='flex flex-wrap items-center gap-4 justify-center'>
          <button onClick={openModal} className='btn-primary'>
            <i className="ri-calendar-check-line"></i>
            Free Consultation
          </button>
          <Link href='/about-us' className='btn-outline'>
            Learn More About Us
          </Link>
        </div>

      </div>
    </section>
  )
}
