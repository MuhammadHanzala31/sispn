import Image from 'next/image'
import React from 'react'
import barnd from '@/public/brand-1/Component 87 – 9.png'

export default function Services() {
  return (
    <section className='py-10 flex gap-6 lg:flex-row items-center flex-col justify-center lg:px-[80px] md:px-[40px] px-6'  >
        <div className='flex flex-col gap-5 lg:w-1/2 w-full'>
            <p className='text-[#414141] text-2xl font-normal'>What Can We Do</p>
            <h3 className='text-[#81358A] text-4xl font-bold'>SERVICES WE CAN HELP YOU WITH</h3>
            <p className='text-[#414141] text-xl font-normal leading-9'>There is no denying that the future is digital. Every digital touchpoint offers a chance to establish a connection with a business’s audience.</p>
            <p className='text-[#414141] text-xl font-normal leading-9'> <span className='text-[#81358A] font-bold'>SISPN Technology </span> helps you scale your business faster than you think possible. Partnering with us gives you access to our custom website development services. We are a leading provider of digital marketing services for small businesses, with innovative designers and some of the most creative writers in the industry. Our white-label services ensure that 100% of your requirements are fulfilled, and you own 100% of the work. Our partners enjoy unlimited changes, rechecks, and projects, fast turnaround, flawless human support, and flexible pricing.</p>
            <span className='text-[#414141] text-xl font-bold'>What’s stopping you? <br /> Budget? Time? Trust?</span>
            <button className='px-6 py-3.5 rounded-lg text-white text-xl font-medium cursor-pointer  bg-linear-to-t hover:scale-[0.9] transition-all to-[#8E2391] from-[#421C47] w-fit'>Let’s take your business to the next level!</button>
        </div>
        <div className='flex flex-col gap-4 lg:w-1/2 w-full'>
          <div className='flex gap-7 justify-center'>
            <Image src={barnd} alt='brand' width={200}/>
            <Image src={barnd} alt='brand' width={200}/>
            <Image src={barnd} alt='brand' width={200}/>
          </div>
          <div className='flex gap-8 justify-center' >
            <Image src={barnd} alt='brand' width={200}/>
            <Image src={barnd} alt='brand' width={200}/>
          </div>
          <div className='flex gap-7 justify-center'>
            <Image src={barnd} alt='brand' width={200}/>
            <Image src={barnd} alt='brand' width={200}/>
            <Image src={barnd} alt='brand' width={200}/>
          </div>
        </div>
    </section>
  )
}
