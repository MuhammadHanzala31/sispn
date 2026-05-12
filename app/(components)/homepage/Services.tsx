import Image from 'next/image'
import ser from '@/public/service-sec.png'
import Link from 'next/link'

export default function Services() {
  return (
    <section
      data-aos="fade-up"
      className='py-20 lg:py-28 flex gap-12 lg:flex-row items-center flex-col justify-center lg:px-20 md:px-10 px-6'
    >
      {/* Left content */}
      <div className='flex flex-col gap-6 lg:w-1/2 w-full'>
        <span className='section-badge'>
          <i className="ri-rocket-line"></i>
          What Can We Do
        </span>

        <h3 className='text-4xl lg:text-5xl font-bold leading-tight text-[#1a1a1a]'>
          Services We Can{' '}
          <span className='gradient-text'>Help You With</span>
        </h3>

        <p className='text-[#555] text-lg leading-8'>
          There is no denying that the future is digital. Every digital touchpoint offers a chance to establish a connection with a business's audience.
        </p>

        <p className='text-[#555] text-lg leading-8'>
          <span className='text-[#81358A] font-bold'>SISPN Technology </span>
          helps you scale your business faster than you think possible. Partnering with us gives you access to custom website development, innovative design, and the most creative writers in the industry. Our white-label services ensure 100% of your requirements are fulfilled — with unlimited changes, fast turnaround, and flexible pricing.
        </p>

        <p className='text-[#333] text-lg font-semibold'>
          What's stopping you? Budget? Time? Trust?
        </p>

        {/* CTA row */}
        <div className='flex flex-wrap gap-4 mt-2'>
          <Link href='/contact-us' className='btn-primary'>
            Let's Grow Your Business
            <i className="ri-arrow-right-line"></i>
          </Link>
          <Link href='/services' className='btn-outline'>
            Explore Services
          </Link>
        </div>

        {/* Trust indicators */}
        <div className='flex flex-wrap gap-6 pt-2'>
          {[
            { icon: 'ri-shield-check-line', text: '100% White-Label' },
            { icon: 'ri-refresh-line', text: 'Unlimited Revisions' },
            { icon: 'ri-customer-service-2-line', text: 'Human Support' },
          ].map(item => (
            <div key={item.text} className='flex items-center gap-2 text-sm text-[#555]'>
              <i className={`${item.icon} text-[#81358A] text-base`}></i>
              {item.text}
            </div>
          ))}
        </div>
      </div>

      {/* Right image */}
      <div className='lg:w-1/2 w-full flex justify-center'>
        <div className='relative'>
          {/* Glow behind image */}
          <div className='absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#81358A]/15 to-[#B83DC8]/10 blur-2xl' />
          <Image
            src={ser}
            alt='SISPN Tech services'
            className='relative rounded-2xl w-full max-w-xl object-cover shadow-[0_20px_60px_rgba(0,0,0,0.12)]'
          />
        </div>
      </div>
    </section>
  )
}
