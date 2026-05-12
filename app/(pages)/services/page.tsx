'use client'

import Image from 'next/image'
import sp2 from '@/public/s-p-2.png'
import sp4 from '@/public/s-p-4.png'
import sp5 from '@/public/s-p-5.png'
import sp6 from '@/public/s-p-6.png'
import sp7 from '@/public/s-p-7.png'
import sp8 from '@/public/s-p-8.png'
import sp9 from '@/public/s-p-9.png'
import brand1 from '@/public/b-1.png'
import brand2 from '@/public/b-2.png'
import brand3 from '@/public/b-3.png'
import brandg from '@/public/brand-g.png'
import brand5 from '@/public/b-5.png'
import brand6 from '@/public/b-6.png'
import brand7 from '@/public/b-7.png'
import brand8 from '@/public/b-8.png'
import sp10 from '@/public/service-o.png'
import ProjectCard from '@/app/(components)/ProjectCard'
import Newsletter from '@/app/(components)/Newsletter'
import RequestForm from '@/app/(components)/RequestForm'
import Link from 'next/link'
import VideoBg from '@/app/(components)/Video'
import PricingSection from '@/app/(components)/PricingSection'

const services = [
  { id: 2, title: "Affordable Digital Marketing", description: "SISPN Tech's comprehensive digital marketing services deliver more sales, leads, conversions, and revenue.", image: sp2, link: "/services/social-media-marketing" },
  { id: 4, title: "Website Development", description: "Transform your digital identity with our advanced CMS and custom website development services.", image: sp4, link: "/services/website-design-and-development" },
  { id: 5, title: "Online Reputation Services", description: "Build trust and strengthen your brand's online presence with expert reputation management.", image: sp5, link: "/services/online-reputation" },
  { id: 6, title: "Search Engine Optimization", description: "Get found online with proven SEO strategies tailored to improve visibility and rankings.", image: sp6, link: "/services/seo" },
  { id: 7, title: "Email Marketing", description: "Transform your email campaigns into revenue-generating assets with targeted strategies.", image: sp7, link: "/services/email-marketing" },
  { id: 8, title: "Google Ads", description: "Run high-performing ad campaigns using Google Ads to boost traffic, leads, and sales.", image: sp8, link: "/services/google-ads" },
  { id: 9, title: "Premier Graphics Designing", description: "Create visually stunning designs from logos to branding materials with our expert designers.", image: sp9, link: "/services/graphic-designing" },
]

export default function page() {
  return (
    <main>

      {/* ── Hero ── */}
      <section className='min-h-160 pb-10 flex flex-col justify-center items-center relative z-10 pt-28 overflow-hidden'>
        <VideoBg />
        <div className='absolute inset-0 bg-linear-to-b from-black/40 via-black/25 to-black/65 pointer-events-none' />

        <div className='relative z-10 container mx-auto max-w-336 px-6'>
          <div className='flex flex-col items-center gap-10 justify-center'>

            <div className='flex flex-col items-center gap-4 text-center' data-aos="fade-down">
              <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-white/90 text-sm font-medium'>
                <span className='pulse-dot'></span>
                Full-Service Digital Agency
              </span>
              <h1 className='text-5xl lg:text-7xl font-bold text-white leading-tight'>
                Our <span className='bg-linear-to-r from-[#e070f0] to-[#B83DC8] bg-clip-text text-transparent'>Services</span>
              </h1>
            </div>

            <div className='flex lg:flex-row flex-col gap-10 items-center w-full'>
              <div data-aos="fade-right" className='flex flex-col gap-3 lg:w-1/2 w-full'>
                <span className='section-badge border-white/20 text-white/80 bg-white/10'>
                  <i className="ri-rocket-line"></i>What Can We Do
                </span>
                <h2 className='text-2xl lg:text-3xl font-bold text-white leading-snug'>
                  Services We Can <span className='bg-linear-to-r from-[#e070f0] to-[#B83DC8] bg-clip-text text-transparent'>Help You With</span>
                </h2>
              </div>

              <div className='grid grid-cols-3 gap-6 lg:w-1/2 w-full relative'>
                <Image data-aos="zoom-in" src={brand1} alt='brand award' />
                <Image data-aos="zoom-in" data-aos-delay="100" src={brand2} alt='brand award' className='relative -top-28' />
                <Image data-aos="zoom-in" data-aos-delay="200" src={brandg} alt='brand award' />
              </div>
            </div>

            <div className='flex flex-row items-center gap-4 w-full'>
              <div className='grid grid-cols-3 gap-6 lg:w-1/2 w-full relative'>
                <Image data-aos="fade-up" src={sp10} alt='service' />
                <Image data-aos="fade-up" data-aos-delay="100" src={brand5} alt='brand' className='relative top-28' />
                <Image data-aos="fade-up" data-aos-delay="200" src={brand6} alt='brand' />
              </div>
              <div className='grid grid-cols-3 gap-6 lg:w-1/2 w-full relative'>
                <Image data-aos="fade-up" src={brand7} alt='brand' className='relative top-18' />
                <Image data-aos="fade-up" data-aos-delay="100" src={brand8} alt='brand' className='relative -top-22' />
                <Image data-aos="fade-up" data-aos-delay="200" src={brand3} alt='brand' />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Content ── */}
      <section className='py-20 lg:py-24 max-w-375.5 mx-auto flex gap-8 flex-col items-center text-center px-6'>
        <span className='section-badge' data-aos="fade-up">
          <i className="ri-lightbulb-line"></i>What Can We Do
        </span>

        <h2 data-aos="fade-up" data-aos-delay="100" className='text-3xl lg:text-5xl font-bold text-[#1a1a1a] leading-tight'>
          Services We Can <span className='gradient-text'>Help You With</span>
        </h2>

        <p data-aos="fade-up" data-aos-delay="200" className='text-[#555] text-lg leading-8 max-w-3xl'>
          There is no denying that the future is digital. Every digital touchpoint offers a chance to establish a connection with a business's audience.
        </p>

        <p data-aos="fade-up" data-aos-delay="300" className='text-[#555] text-lg leading-8 max-w-3xl'>
          <span className='text-[#81358A] font-bold'>SISPN Technology </span>
          helps you scale faster than you think possible — with unlimited changes, fast turnaround, flawless human support, and flexible pricing.
        </p>

        <p data-aos="zoom-in" data-aos-delay="400" className='text-[#333] text-xl font-semibold'>
          What's stopping you? Budget? Time? Trust?
        </p>

        <Link
          data-aos="zoom-in-up"
          data-aos-delay="500"
          href='/contact-us'
          className='btn-primary'
        >
          Let's Take Your Business to the Next Level
          <i className="ri-arrow-right-line"></i>
        </Link>
      </section>

      {/* ── Services Grid ── */}
      <section className='pb-20 grid lg:grid-cols-3 gap-6 grid-cols-1 lg:px-20 px-6'>
        {services.map((item, index) => (
          <div key={item.id} data-aos="fade-up" data-aos-delay={index * 80}>
            <ProjectCard link={item.link} image={item.image} title={item.title} description={item.description} />
          </div>
        ))}
      </section>

      <PricingSection />

      <div data-aos="fade-up">
        <Newsletter />
      </div>

      <div data-aos="fade-up" data-aos-delay="200">
        <RequestForm />
      </div>

    </main>
  )
}
