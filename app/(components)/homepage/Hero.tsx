import React from 'react'

export default function Hero() {
  return (
    <section className='py-16  sm:py-40 md:py-28 lg:py-40 flex items-center justify-center hero-banner'>
      
      <div className=' mx-auto max-w-[1344px] px-4 sm:px-6 lg:px-8'>
        
        <div className='flex flex-col items-center gap-6 sm:gap-8 text-center'>
          
          {/* Heading */}
          <h1 className='
            text-3xl 
            sm:text-4xl 
            md:text-5xl 
            lg:text-6xl 
            xl:text-[68px]
            font-bold 
            text-white 
            leading-tight
          '>
            LOGO, BRANDING, UI/UX <br className="hidden sm:block" />
            ILLUSTRATION & GRAPHIC DESIGN
          </h1>

          {/* Paragraph */}
          <p className='
            text-sm 
            sm:text-base 
            md:text-lg 
            lg:text-xl 
            text-white/90 
            max-w-3xl
            leading-relaxed
          '>
            The aesthetic dimensions of your brand are also very important, as they help your customers understand what you stand for. It is a way you can represent your business before your audience knows anything about your business. Our team of artists work alongside you to help build your brand from the ground up - if need be - in a way that best represents your vision.
          </p>

        </div>

      </div>

    </section>
  )
}