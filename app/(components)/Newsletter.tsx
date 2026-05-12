export default function Newsletter() {
  return (
    <section className='project relative my-16 py-24 overflow-hidden' data-aos="fade-up">
      {/* Dark overlay for readability */}
      <div className='absolute inset-0 bg-black/50 backdrop-blur-[2px]' />

      <div className='relative z-10 flex flex-col gap-10 max-w-3xl mx-auto w-full px-6 items-center text-center'>

        {/* Badge */}
        <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/25 text-white/90 text-sm font-medium backdrop-blur-sm'>
          <i className="ri-mail-send-line text-[#e070f0]"></i>
          Stay in the Loop
        </span>

        <h2 className='text-3xl lg:text-5xl font-bold text-white leading-tight'>
          A Custom Website Development Company That Specializes in{' '}
          <span className='text-[#e070f0]'>Unparalleled User Experiences</span>
        </h2>

        <p className='text-white/70 text-lg max-w-xl'>
          Get weekly insights on digital marketing, web development trends, and growth strategies — straight to your inbox.
        </p>

        {/* Input row */}
        <div className='flex lg:flex-row flex-col gap-3 w-full'>
          <input
            type='text'
            className='flex-1 bg-white/15 backdrop-blur-md border border-white/25 rounded-xl px-5 py-3.5 text-white placeholder:text-white/50 focus:outline-none focus:border-[#B83DC8] focus:bg-white/20 transition-all duration-200'
            placeholder='Your name'
          />
          <input
            type='email'
            className='flex-1 bg-white/15 backdrop-blur-md border border-white/25 rounded-xl px-5 py-3.5 text-white placeholder:text-white/50 focus:outline-none focus:border-[#B83DC8] focus:bg-white/20 transition-all duration-200'
            placeholder='Your email address'
          />
          <button className='flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold bg-gradient-to-br from-[#421C47] to-[#8E2391] hover:shadow-[0_8px_30px_rgba(142,35,145,0.5)] hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap'>
            Subscribe
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>

        <p className='text-white/40 text-xs'>
          No spam, unsubscribe at any time.
        </p>

      </div>
    </section>
  )
}
