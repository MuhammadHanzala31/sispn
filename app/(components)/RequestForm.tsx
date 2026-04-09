import Image from 'next/image'
import React from 'react'
import img from '@/public/r-form-img.png'

export default function RequestForm() {
    return (
        <section className='lg:px-[80px] md:px-[40px] px-6 my-15 flex lg:flex-row flex-col items-center gap-8'>
            <div className='lg:w-1/2 w-full'>
                <Image src={img} alt='r-form' />
            </div>
            <div className='flex flex-col gap-6 items-center lg:w-1/2 w-full'>
                <div className='flex flex-col gap-4 items-center text-center'>
                    <h3 className='text-[#414141] text-5xl font-normal'>LET'S TALK ABOUT   <span className='text-[#81358A] font-bold'>YOUR PROJECT</span> </h3>
                    <p className='text-[#414141] font-normal text-xl '>You can significantly enhance your online visibility by utilizing our custom website development services. and web design services for small business. The satisfaction and trust of our customers is our priority and identity. We believe that the success of our clients is our success.</p>
                </div>
                <div className=' flex flex-col gap-6 w-full' >
                    <div className='flex lg:flex-row flex-col gap-5 items-center'>
                        <input type="text"  className='text-[#303030]/30 placeholder:text-[#303030]/30 text-xl placeholder:text-xl p-3 border-b-2 border-[#303030]/30 outline-none w-1/2' placeholder='Name *'/>
                        <input type="Email"  className='text-[#303030]/30 placeholder:text-[#303030]/30 text-xl placeholder:text-xl p-3 border-b-2 border-[#303030]/30 outline-none w-1/2' placeholder='Email *'/>
                    </div>
                    <div className='flex lg:flex-row flex-col items-center'>
                        <input type="tel"  className='text-[#303030]/30 placeholder:text-[#303030]/30 text-xl placeholder:text-xl p-3 border-b-2 border-[#303030]/30 outline-none w-1/2' placeholder='Phone Number*'/>
                        <input type="text"  className='text-[#303030]/30 placeholder:text-[#303030]/30 text-xl placeholder:text-xl p-3 border-b-2 border-[#303030]/30 outline-none w-1/2' placeholder='Country*'/>
                    </div>
                    <textarea  className="text-[#303030]/30/30 h-[120px] resize-none placeholder:text-[#303030]/30 text-xl placeholder:text-xl p-3 border-b-2 border-[#303030]/30 outline-none w-full" placeholder='How can we help you*'></textarea>
                    <div className='flex flex-row items-center gap-2 justify-center'>
                        <input type={'checkbox'}/>
                        <span className='text-xl text-[#303030] font-normal'>By submitting you agree to our terms and policy.</span>
                    </div>
                    <button className='px-6 py-3.5 rounded-lg text-white text-xl font-medium cursor-pointer  bg-linear-to-t hover:scale-[0.9] transition-all to-[#8E2391] from-[#421C47] w-fit mx-auto'>Submit</button>
                </div>
            </div>
        </section>
    )
}
