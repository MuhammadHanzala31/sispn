import VideoBg from '../Video'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className='relative min-h-[780px] flex items-center justify-center pt-24 pb-16 overflow-hidden'>
      <VideoBg />

      {/* Gradient overlay for depth */}
      <div className='absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60 -z-0 pointer-events-none' />

      <div className='relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8' data-aos="fade-up">
        <div className='flex flex-col items-center gap-7 sm:gap-8 text-center'>

          {/* Badge */}
          <div className='flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm'>
            <span className='pulse-dot'></span>
            <span className='text-white/90 text-sm font-medium tracking-wide'>Award-Winning Digital Agency</span>
          </div>

          {/* Heading */}
          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold text-white leading-[1.1] tracking-tight max-w-4xl'>
            Branding, Marketing &amp;{' '}
            <span className='bg-gradient-to-r from-[#B83DC8] to-[#e070f0] bg-clip-text text-transparent'>
              Software Solutions
            </span>{' '}
            That Drive Growth.
          </h1>

          {/* Subheading */}
          <p className='text-base sm:text-lg md:text-xl text-white/75 max-w-2xl leading-relaxed'>
            We help brands stand out with custom web development, data-driven digital marketing, and creative design — all under one roof.
          </p>

          {/* CTAs */}
          <div className='flex flex-wrap items-center gap-4 justify-center mt-2'>
            <Link
              href="/contact-us"
              className='flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold text-base bg-gradient-to-br from-[#421C47] to-[#8E2391] hover:shadow-[0_8px_30px_rgba(142,35,145,0.5)] hover:-translate-y-0.5 transition-all duration-200'
            >
              Start Your Project
              <i className="ri-arrow-right-line"></i>
            </Link>
            <Link
              href="/portfolio"
              className='flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold text-base border-2 border-white/30 hover:border-[#B83DC8] hover:bg-white/10 backdrop-blur-sm transition-all duration-200'
            >
              <i className="ri-layout-grid-line"></i>
              View Our Work
            </Link>
          </div>

          {/* Social proof stats */}
          <div className='flex flex-wrap items-center justify-center gap-8 mt-4 pt-6 border-t border-white/15 w-full max-w-xl'>
            {[
              { value: '2K+', label: 'Happy Clients' },
              { value: '4K+', label: 'Projects Done' },
              { value: '8+', label: 'Years Experience' },
            ].map((stat) => (
              <div key={stat.label} className='flex flex-col items-center gap-0.5'>
                <span className='text-2xl font-bold text-white'>{stat.value}</span>
                <span className='text-xs text-white/55 uppercase tracking-widest'>{stat.label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className='absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10 animate-bounce'>
        <span className='text-white/40 text-xs tracking-widest uppercase'>Scroll</span>
        <i className="ri-arrow-down-line text-white/40 text-lg"></i>
      </div>
    </section>
  )
}
