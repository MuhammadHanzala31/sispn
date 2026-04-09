import Image from 'next/image'
import React from 'react'
import about1 from '@/public/about-1.png'
import about2 from '@/public/about-2.png'
import about3 from '@/public/about-3.png'

export default function page() {
    return (
        <main>
            <section className='lg:py-52 py-10 flex flex-col justify-center items-center hero-banner'>
                <div className='container mx-auto max-w-[1344px] '>
                    <div className='flex flex-col items-center gap-8 justify-center'>
                        <h1 className='text-[69px] font-white text-shadow-amber-50 text-center text-white font-bold'>ABOUT US</h1>
                        <div className='flex lg:flex-row flex-col gap-8 items-center w-full'>
                            <div className='flex flex-col gap-8 lg:w-1/2 w-full'>
                                <p className='text-xl font-sans text-white'>SISPN Technology provides you with cutting-edge solutions to fulfill all of your growing business needs. Our team of experienced creative talents will use their expertise to help you achieve your targets as swiftly as possible. Our services include graphic designing, UI/UX creation, website development, app development, web portals, e-commerce-related services, and digital marketing. With some of the best professionals in the business, we help our clients reach their targets – and even surpass them – every day!</p>
                                <span className='text-2xl font-sans font-bold text-white'>Is there anything we can help you with? Contact Us now for a free consultation!</span>
                                <button className='px-6 py-3.5 rounded-lg text-white text-xl font-medium cursor-pointer  bg-linear-to-t hover:scale-[0.9] transition-all to-[#8E2391] from-[#421C47] w-fit'>Contact for free cousultation</button>
                            </div>
                            <div className='flex flex-col gap-8 lg:w-1/2 w-full'>
                                <Image src={about1} alt='about1' />
                            </div>
                        </div>
                        <div className='flex lg:flex-row flex-col gap-8 items-center w-full'>
                            <div className='flex flex-col gap-8 lg:w-1/2 w-full'>
                                <Image src={about1} alt='about1' />
                            </div>
                            <div className='flex flex-col gap-8 lg:w-1/2 w-full'>
                                <Image src={about1} alt='about1' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='flex lg:flex-row flex-col items-center gap-5 lg:px-28 px-4 lg:py-16 py-4 max-w-[1585px] mx-auto bg-white opacity-90 brightness-90  lg:rounded-3xl rounded-lg backdrop-blur-lg  my-15'>
                <div className='flex flex-col gap-8 items-center w-full'>
                    <h4 className='text-black text-[50px] font-sans font-medium'>ABOUT <span className='text-[#81358A] font-bold'>SISPNTECH</span> </h4>
                    <p className='text-[#414141] text-xl font-sans font-normal leading-9 text-center'>At SISPN, we specialize in digital marketing services, including web and mobile app development, social media marketing, social media management, and SEO, delivering custom solutions to help businesses enhance their online presence. Our skilled team creates cutting-edge, responsive websites and e-commerce platforms that are both functional and visually appealing. We also offer CMS development, allowing clients to easily manage their content.</p>
                    <p className='text-[#414141] text-xl font-sans font-normal leading-9 text-center'>For mobile, we develop custom iOS and Android apps tailored to specific business needs. From simple utility apps to complex enterprise solutions, SISPN delivers high-quality apps designed to engage and perform.</p>
                </div>
            </section>
            <section className='my-15 mx-auto lg:px-[80px] md:px-[40px] px-6'>
                <div className='flex lg:flex-row flex-col gap-8 items-center w-full'>
                    <div className='flex flex-col gap-8 lg:w-1/2 w-full'>
                        <Image src={about2} alt='about1' />
                    </div>
                    <div className='flex flex-col gap-8 lg:w-1/2 w-full'>
                        <p className='text-xl font-sans text-[#414141] leading-9'>One of the key strengths of our company is our commitment to customer satisfaction. By working closely with clients throughout the development process, we make sure the client’s needs are understood.We provide ongoing support and maintenance to ensure that the website and apps we develop continue to function properly and meet our clients’ needs.</p>
                        <p className='text-xl font-sans text-[#414141] leading-9'>Our web development & mobile app development company is an excellent choice for businesses and individuals looking to build a strong online presence. With a focus on quality, customer satisfaction, and ongoing support, our company is well positioned to help clients achieve their goals and succeed in today’s digital landscape.</p>
                    </div>
                </div>
            </section>
            <section className='my-15 project py-14'>
                <div className='flex flex-col mx-auto gap-8 items-center max-w-[1537px] w-full'>
                    <h4 className='text-white text-[50px] font-sans font-medium'>SISPN Tech  <span className='text-[#81358A] font-bold'>Mission</span> </h4>
                    <p className='text-white text-xl font-sans font-normal leading-9 text-center'>Our mission is to bridge the gap between the tools of business innovation, and businesses that most need it. At SISPN Tech, we aim to aid businesses in achieving their growth objectives by providing them with cutting-edge tech solutions. From designing the most aesthetic websites to developing the most intuitive applications, we believe in enhancing and complimenting the online presence of all our business partners. We believe in constant improvement and strive every day to make something better than yesterday. Furthermore, we are committed not only to providing the greatest services possible, but to doing so while nurturing our partnership with our clients as well. Every line of code and every frame of every video is meticulously crafted with only one goal in mind: to make your business shine brighter than the competition.</p>
                </div>
            </section>
            <section className='my-15 mx-auto lg:px-[80px] md:px-[40px] px-6'>
                <div className='flex lg:flex-row flex-col gap-8 items-center w-full'>
                    <div className='flex flex-col gap-8 lg:w-1/2 w-full order-2'>
                        <Image src={about3} alt='about1' />
                    </div>
                    <div className='flex flex-col gap-8 lg:w-1/2 w-full order-1'>
                        <p className='text-xl font-sans text-[#414141] leading-9'>We envision a future in which we are at the forefront of innovative technological solutions. We aim to be the leading force in changing the online business landscape and to elevate our clients while we do it. Regardless of size, capital, or physicality, we envision a world in which all businesses can have equal access to the complete arsenal of online tools that can help businesses overcome their limitations. Going above and beyond the call of duty, we aim to form the kind of infallible bond that leaves an indelible mark on our client’s records and leaves us with a lifelong business partnership.</p>
                        <p className='text-xl font-sans text-[#414141] leading-9'>We advocate a client-centric approach to business, offering innovative solutions for their problems and opening up new avenues of growth for them and ourselves. With a profound understanding of the online landscape, a commitment to only offer the most effective and innovative solutions, and an unstoppable pursuit of perfection, we aim to be the catalysts for unprecedented growth for all our partners.</p>
                    </div>
                </div>
            </section>
            <section className='my-15 project py-14'>
                <div className='flex flex-col mx-auto gap-12 items-center max-w-[1199px] w-full'>
                    <h4 className='text-[50px] font-white text-shadow-amber-50 text-center text-white'>WE DELIVER QUALITY RESULTS QUICKLY & CAN HELP YOU ACHIEVE YOUR GOALS EFFICIENTLY. </h4>
                    <button className='px-6 py-3.5 rounded-lg text-white text-xl font-medium cursor-pointer  bg-linear-to-t hover:scale-[0.9] transition-all to-[#8E2391] from-[#421C47] w-fit'>Let's Discuss The Project</button>
                </div>
            </section>
        </main>
    )
}
