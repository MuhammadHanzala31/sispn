import Image from 'next/image'
import React from 'react'
import brand from '@/public/brand-1/Component 87 – 9.png'
import sp1 from '@/public/s-p-1.png'
import sp2 from '@/public/s-p-2.png'
import sp3 from '@/public/s-p-3.png'
import sp4 from '@/public/s-p-4.png'
import sp5 from '@/public/s-p-5.png'
import sp6 from '@/public/s-p-6.png'
import sp7 from '@/public/s-p-7.png'
import sp8 from '@/public/s-p-8.png'
import sp9 from '@/public/s-p-9.png'
import sp10 from '@/public/s-p-10.png'
import ProjectCard from '@/app/(components)/ProjectCard'
import Newsletter from '@/app/(components)/Newsletter'
import RequestForm from '@/app/(components)/RequestForm'

import brand1 from '@/public/b-1.png'
import brand2 from '@/public/b-2.png'
import brand3 from '@/public/b-3.png'
import brand4 from '@/public/b-4.png'
import brand5 from '@/public/b-5.png'
import brand6 from '@/public/b-6.png'
import brand7 from '@/public/b-7.png'
import brand8 from '@/public/b-8.png'




const services = [
  {
    id: 1,
    title: "Content Marketing",
    description:
      "In today’s fast-paced digital world, content marketing services are the backbone of successful online strategies.",
    image: sp1,
    link: "#",
  },
  {
    id: 2,
    title: "Affordable Digital Marketing",
    description:
      "SISPN Tech’s comprehensive digital marketing services deliver more sales, leads, conversions, and revenue.",
    image: sp2,
    link: "/services",
  },
  {
    id: 3,
    title: "E-Commerce Marketing",
    description:
      "Our team of passionate marketing specialists drives growth and maximizes ROI for your eCommerce business.",
    image: sp3,
    link: "#",
  },
  {
    id: 4,
    title: "Website Development",
    description:
      "Transform your digital identity with our advanced CMS and custom website development services.",
    image: sp4,
    link: "#",
  },
  {
    id: 5,
    title: "Online Reputation Services",
    description:
      "Build trust and strengthen your brand’s online presence with expert reputation management.",
    image: sp5,
    link: "#",
  },
  {
    id: 6,
    title: "Search Engine Optimization",
    description:
      "Get found online with proven SEO strategies tailored to improve visibility and rankings.",
    image: sp6,
    link: "#",
  },
  {
    id: 7,
    title: "Email Marketing",
    description:
      "Transform your email campaigns into revenue-generating assets with targeted strategies.",
    image: sp7,
    link: "#",
  },
  {
    id: 8,
    title: "Google Ads",
    description:
      "Run high-performing ad campaigns using Google Ads to boost traffic, leads, and sales.",
    image: sp8,
    link: "#",
  },
  {
    id: 9,
    title: "Premier Graphics Designing",
    description:
      "Create visually stunning designs from logos to branding materials with our expert designers.",
    image: sp9,
    link: "#",
  },
];


export default function page() {
    return (
        <main>
            <section className='lg:py-52 py-10 flex flex-col justify-center items-center hero-banner'>
                <div className='container mx-auto max-w-[1344px] '>
                    <div className='flex flex-col items-center gap-8 justify-center'>
                        <h1 className='text-[69px] font-white text-shadow-amber-50 text-center text-white font-bold'>SERVICES</h1>
                        <div className='flex lg:flex-row flex-col gap-8 items-center w-full'>
                            <div className='flex flex-col gap-2 lg:w-1/2 w-full'>
                                <p className='text-xl font-sans text-white'>What Can We Do</p>
                                <span className='text-3xl font-sans font-bold text-white'>SERVICES WE CAN HELP YOU WITH</span>
                            </div>
                            <div className='grid grid-cols-3 gap-8 lg:w-1/2 w-full relative'>
                                <Image src={brand1} alt='brand1' />
                                <Image src={brand2} alt='brand1' className='relative -top-28' />
                                <Image src={brand3} alt='brand1' />
                            </div>
                        </div>
                        <div className='flex flex-row items-center gap-4'>
                            <div className='grid grid-cols-3 gap-8 lg:w-1/2 w-full relative'>
                                <Image src={brand4} alt='brand1' />
                                <Image src={brand5} alt='brand1' className='relative top-28' />
                                <Image src={brand6} alt='brand1' />
                            </div>
                            <div className='grid grid-cols-3 gap-8 lg:w-1/2 w-full relative'>
                                <Image src={brand7} alt='brand1 ' className='relative top-18' />
                                <Image src={brand8} alt='brand1' className='relative -top-22' />
                                <Image src={brand2} alt='brand1' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='my-15 max-w-[1502px] mx-auto flex gap-8 flex-col items-center text-center'>
                <p className='text-[#414141] text-2xl font-normal'>What Can We Do</p>
                <h3 className='text-[#81358A] text-4xl font-bold'>SERVICES WE CAN HELP YOU WITH</h3>
                <p className='text-[#414141] text-xl font-normal leading-9'>There is no denying that the future is digital. Every digital touchpoint offers a chance to establish a connection with a business’s audience.</p>
                <p className='text-[#414141] text-xl font-normal leading-9'> <span className='text-[#81358A] font-bold'>SISPN Technology </span> helps you scale your business faster than you think possible. Partnering with us gives you access to our custom website development services. We are a leading provider of digital marketing services for small businesses, with innovative designers and some of the most creative writers in the industry. Our white-label services ensure that 100% of your requirements are fulfilled, and you own 100% of the work. Our partners enjoy unlimited changes, rechecks, and projects, fast turnaround, flawless human support, and flexible pricing.</p>
                <span className='text-[#414141] text-xl font-bold'>What’s stopping you? <br /> Budget? Time? Trust?</span>
                <button className='px-6 py-3.5 rounded-lg text-white text-xl font-medium cursor-pointer  bg-linear-to-t hover:scale-[0.9] transition-all to-[#8E2391] from-[#421C47] w-fit'>Let’s take your business to the next level!</button>
            </section>
            <section className='my-20 grid lg:grid-cols-3 gap-8 grid-cols-1 lg:px-20 px-7'>
                {services?.map((item) => (
                    <ProjectCard key={item.id} image={item.image} title={item.title} description={item.description}/>
                ))}
            </section>
            <Newsletter/>
            <RequestForm/>
        </main>
    )
}
