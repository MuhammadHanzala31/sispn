import React from 'react'

export default function Newsletter() {
  return (
    <section className='project my-15 py-28'>
        <div className='flex flex-col gap-12 max-w-374.5 mx-auto w-full'>
            <h4 className='text-[40px] font-medium text-white text-center'>A CUSTOM WEBSITE DEVELOPMENT COMPANY THAT SPECIALIZES IN CREATING UNPARALLELED USER EXPERIENCES</h4>
            <div className='flex lg:flex-row flex-col gap-8 px-20 w-full'>
                <input type={'text'} className='text-[#2A335C] w-1/2 bg-white opacity-85 backdrop-blur-lg rounded-lg px-4 py-3.5 placeholder:text-[#2A335C] placeholder:text-xl ' placeholder='Name'/>
                <input type={'email'} className='text-[#2A335C] w-1/2 bg-white opacity-85 backdrop-blur-lg rounded-lg px-4 py-3.5 placeholder:text-[#2A335C] placeholder:text-xl ' placeholder='Email Address'/>
            </div>
            <button className='px-6 py-3.5 rounded-lg text-white text-xl font-medium cursor-pointer  bg-linear-to-t hover:scale-[0.9] transition-all to-[#8E2391] from-[#421C47] w-fit mx-auto'>Subscribe</button>
        </div>
    </section>
  )
}
