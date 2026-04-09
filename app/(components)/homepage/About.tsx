import React from 'react'

export default function About() {
  return (
    <section className='flex lg:flex-row flex-col items-center gap-5 lg:px-28 px-4 lg:py-16 py-4 max-w-[1585px] mx-auto bg-white opacity-90 brightness-90  lg:rounded-3xl rounded-lg backdrop-blur-lg relative -top-30'>
        <div className='flex flex-col gap-4 lg:w-1/2 w-full'>
            <h4 className='text-black text-[50px] font-sans font-medium'>ABOUT <span className='text-[#81358A] font-bold'>SISPNTECH</span> </h4>
            <p className='text-[#414141] text-2xl font-sans font-normal'>We strive to deliver the highest level of expertise Includes graphics services, brand designing, <span className='text-[#81358A]'> e-commerce product development, custom website development and affordable digital marketing services </span>.  Over the years, we have extended our skills to website development and design. We have expanded into application development, e-commerce systems, web portals (e.g., CMS/LMS), software development, integration, and digital marketing.</p>
        </div>
        <div className='flex flex-col gap-4 lg:w-1/2 w-full'>
          <div className='grid grid-cols-2'>
            <div className='flex flex-col gap-4'>
                <span className='text-[#81358A] text-7xl font-bold text-center'>2K +</span>
                <p className='text-[#39393A] text-2xl font-normal text-center'>GLOBAL HAPPY CLIENTS</p>
            </div>
            <div className='flex flex-col gap-4'>
                <span className='text-[#81358A] text-7xl font-bold text-center'>4K +</span>
                <p className='text-[#39393A] text-2xl font-normal text-center'>PROJECT COMPLETED</p>
            </div>
          </div>
          <div className='grid grid-cols-2'>
            <div className='flex flex-col gap-4'>
                <span className='text-[#81358A] text-7xl font-bold text-center'>25</span>
                <p className='text-[#39393A] text-2xl font-normal text-center'>TEAM MEMBERS</p>
            </div>
            <div className='flex flex-col gap-4'>
                <span className='text-[#81358A] text-7xl font-bold text-center'>8 +</span>
                <p className='text-[#39393A] text-2xl font-normal text-center'>GLORIOUS YEARS</p>
            </div>
          </div>
        </div>
    </section>
  )
}
