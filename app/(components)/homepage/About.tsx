import React from 'react'

export default function About() {
  return (
    <section data-aos="fade-left" className='
      flex flex-col lg:flex-row items-center gap-10
      px-4 sm:px-6 lg:px-20
      py-8 sm:py-12 lg:py-16
      max-w-[1400px] mx-auto
      bg-white/90 backdrop-blur-lg
      rounded-xl lg:rounded-3xl
      relative lg:-top-24
      shadow-2xl
      z-10      
    '>

      {/* LEFT CONTENT */}
      <div className='flex flex-col gap-4 lg:w-1/2 w-full text-center lg:text-left'>
        
        <h4 className='
          text-2xl 
          sm:text-3xl 
          md:text-4xl 
          lg:text-5xl 
          font-medium text-black
        '>
          ABOUT <span className='text-[#81358A] font-bold'>SISPNTECH</span>
        </h4>

        <p className='
          text-sm 
          sm:text-base 
          md:text-lg 
          lg:text-xl 
          text-[#414141] 
          leading-relaxed
        '>
          We strive to deliver the highest level of expertise including graphics services, brand designing,
          <span className='text-[#81358A]'> e-commerce product development, custom website development and affordable digital marketing services</span>.
          Over the years, we have expanded into application development, e-commerce systems, web portals,
          and digital marketing.
        </p>

      </div>

      {/* RIGHT STATS */}
      <div className='grid grid-cols-2 gap-6 lg:w-1/2 w-full'>
        
        {[
          { value: "2K +", label: "GLOBAL HAPPY CLIENTS" },
          { value: "4K +", label: "PROJECT COMPLETED" },
          { value: "25", label: "TEAM MEMBERS" },
          { value: "8 +", label: "GLORIOUS YEARS" },
        ].map((item, i) => (
          <div key={i} className='flex flex-col items-center gap-2'>
            
            <span className='
              text-3xl 
              sm:text-4xl 
              md:text-5xl 
              lg:text-6xl 
              font-bold 
              text-[#81358A]
            '>
              {item.value}
            </span>

            <p className='
              text-xs 
              sm:text-sm 
              md:text-base 
              lg:text-lg 
              text-[#39393A] 
              text-center
            '>
              {item.label}
            </p>

          </div>
        ))}

      </div>

    </section>
  )
}