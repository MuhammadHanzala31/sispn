import Image from 'next/image'
import React from 'react'
import brand from '@/public/brand-1/Component 87 – 9.png'
import ProjectCard from '@/app/(components)/ProjectCard'
import Newsletter from '@/app/(components)/Newsletter'
import RequestForm from '@/app/(components)/RequestForm'


const services = [
  {
    title: "Custom Web Development",
    description:
      "We build powerful, scalable web apps tailored to your business logic — from CRM and ERP to booking platforms and social networks. Using frameworks like React, Angular, Django, and Node.js, we deliver applications that are secure, efficient, and user-friendly.",
  },
  {
    title: "CMS Development",
    description:
      "Easily manage your site content with customized CMS platforms. Whether it's WordPress, Drupal, Joomla, or a headless CMS solution, we tailor the setup to give you full control without requiring technical expertise.",
  },
  {
    title: "E-Commerce Development",
    description:
      "Turn visitors into customers with secure, fast, and conversion-focused online product catalogs. From setup, payment gateway integration, inventory sync, and smooth checkout flows designed to reduce cart abandonment.",
  },
  {
    title: "Front-End & Back-End Development",
    description:
      "From sleek user interfaces to solid, secure backend systems, we handle both ends of development. Our front-end stack includes HTML5, CSS3, JavaScript, React, Angular, and Vue.js. On the backend, we use Python, Java, PHP, .NET, and more to ensure your site runs smoothly at scale.",
  },
  {
    title: "Web Portals & Intranets",
    description:
      "We design secure, role-based portals for employees, customers, or partners. From document sharing to real-time dashboards, we help streamline internal processes and external collaboration.",
  },
  {
    title: "Mobile-Responsive Web Design",
    description:
      "We create websites that adapt perfectly to any device — desktop, tablet, or mobile. With a mobile-first approach and SEO optimization built in, your site won’t just look good; it will perform and rank better, too.",
  },
  {
    title: "Maintenance & Support",
    description:
      "Your digital platform is never 'done' — it evolves. That’s why we offer proactive post-launch services: performance monitoring, bug fixes, feature enhancements, and security patches to keep your site running flawlessly.",
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
                                <Image src={brand} alt='brand1' />
                                <Image src={brand} alt='brand1' className='relative -top-28' />
                                <Image src={brand} alt='brand1' />
                            </div>
                        </div>
                        <div className='flex flex-row items-center gap-4'>
                            <div className='grid grid-cols-3 gap-8 lg:w-1/2 w-full relative'>
                                <Image src={brand} alt='brand1' />
                                <Image src={brand} alt='brand1' className='relative top-28' />
                                <Image src={brand} alt='brand1' />
                            </div>
                            <div className='grid grid-cols-3 gap-8 lg:w-1/2 w-full relative'>
                                <Image src={brand} alt='brand1 ' className='relative top-18' />
                                <Image src={brand} alt='brand1' className='relative -top-22' />
                                <Image src={brand} alt='brand1' />
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
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
            </section>
            <Newsletter/>
            <RequestForm/>
        </main>
    )
}
