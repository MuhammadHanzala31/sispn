import React from 'react'

export default function page() {
    return (
        <main>
            <section className='lg:py-52 py-10 flex flex-col justify-center items-center hero-banner'>
                <div className='container mx-auto max-w-[1344px] '>
                    <div className='flex flex-col items-center gap-12 justify-center'>
                        <div className='flex flex-col gap-5 max-w-[996px] mx-auto'>
                            <h1 className='text-[69px] font-white text-shadow-amber-50 text-center text-white font-bold'>Contact Us</h1>
                            <p className='text-white text-2xl text-center '>We Are A Software Development, Design, And Digital Marketing Firm Commied To Assisting Businesses In Creating And Improving Their Products.</p>
                        </div>
                        <div className='flex lg:flex-row flex-col gap-8 items-center w-full'>
                            <div className='flex flex-col gap-4 lg:w-[40%] w-full'>
                                <p className='text-2xl font-sans text-white'>Getting Touch</p>
                                <span className='text-5xl font-sans font-bold text-[#B83DC8]'>DO YOU HAVE AN IDEA FOR A PROJECT?</span>
                                <div className='flex flex-row justify-between items-center'>
                                    <div className='flex flex-col gap-4'>
                                        <div className='flex flex-row items-center gap-4'>
                                            <div className='bg-[#B83DC8] w-12 h-12 rounded-full flex justify-center items-center'>
                                            <i className="ri-phone-line text-white text-2xl"></i>
                                            </div>
                                            <span className='text-xl font-sans text-white'>+1 (718) 395-9596</span>
                                        </div>
                                        <div className='flex flex-row items-center gap-4'>
                                            <div className='bg-[#B83DC8] w-12 h-12 rounded-full flex justify-center items-center'>
                                            <i className="ri-whatsapp-line text-white text-2xl"></i>
                                            </div>
                                            <span className='text-xl font-sans text-white'>+1 (602) 566-0822</span>
                                        </div>
                                        <div className='flex flex-row items-center gap-4'>
                                            <div className='bg-[#B83DC8] w-12 h-12 rounded-full flex justify-center items-center'>
                                            <i className="ri-mail-line text-white text-2xl"></i>
                                            </div>
                                            <span className='text-xl font-sans text-white'>info@sispntech.com</span>
                                        </div>
                                        {/* <div className='flex flex-row items-center gap-4'>
                                            <div className='bg-[#B83DC8] w-12 h-12 rounded-full flex justify-center items-center'>
                                            <i className="ri-map-pin-line text-white text-2xl"></i>
                                            </div>
                                            <span className='text-2xl font-sans text-white'>364 E Main Street Suite 1902 Middletown, DE 19709</span>
                                        </div> */}
                                    </div>
                                    <div className='flex flex-col gap-4'>
                                        <div className='flex flex-row items-center gap-4'>
                                            <div className='bg-[#B83DC8] w-12 h-12 rounded-full flex justify-center items-center'>
                                            <i className="ri-phone-line text-white text-2xl"></i>
                                            </div>
                                            <span className='text-xl font-sans text-white'>+92 326 4774776</span>
                                        </div>
                                        <div className='flex flex-row items-center gap-4'>
                                            <div className='bg-[#B83DC8] w-12 h-12 rounded-full flex justify-center items-center'>
                                            <i className="ri-whatsapp-line text-white text-2xl"></i>
                                            </div>
                                            <span className='text-xl font-sans text-white'>+92 326 4774776</span>
                                        </div>
                                        <div className='flex flex-row items-center gap-4'>
                                            <div className='bg-[#B83DC8] w-12 h-12 rounded-full flex justify-center items-center'>
                                            <i className="ri-mail-line text-white text-2xl"></i>
                                            </div>
                                            <span className='text-xl font-sans text-white'>info@sispntech.com</span>
                                        </div>
                                        {/* <div className='flex flex-row items-center gap-4'>
                                            <div className='bg-[#B83DC8] w-12 h-12 rounded-full flex justify-center items-center'>
                                            <i className="ri-map-pin-line text-white text-2xl"></i>
                                            </div>
                                            <span className='text-2xl font-sans text-white'>364 E Main Street Suite 1902 Middletown, DE 19709</span>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                            <div className=' lg:w-[60%] w-full bg-black/70 p-4 rounded-2xl'>
                                <div className=' flex flex-col gap-6 w-full' >
                                    <div className='flex lg:flex-row flex-col gap-5 items-center'>
                                        <input type="text" className='text-white placeholder:text-white text-lg placeholder:text-lg p-3 border-b border-white/70 outline-none w-1/2' placeholder='Name *' />
                                        <input type="Email" className='text-white placeholder:text-white text-lg placeholder:text-lg p-3 border-b border-white/70 outline-none w-1/2' placeholder='Email *' />
                                    </div>
                                    <div className='flex lg:flex-row gap-5 flex-col items-center'>
                                        <input type="tel" className='text-white placeholder:text-white text-lg placeholder:text-lg p-3 border-b border-white/70 outline-none w-1/2' placeholder='Phone Number*' />
                                        <input type="text" className='text-white placeholder:text-white text-lg placeholder:text-lg p-3 border-b border-white/70 outline-none w-1/2' placeholder='Country*' />
                                    </div>
                                    <textarea className="text-white/30 h-[120px] resize-none placeholder:text-white text-lg placeholder:text-lg p-3 border-b border-white/70 outline-none w-full" placeholder='How can we help you*'></textarea>
                                    <div className='flex flex-row items-center gap-2 justify-center'>
                                        <input type={'checkbox'} />
                                        <span className='text-lg text-white font-normal'>By submitting you agree to our terms and policy.</span>
                                    </div>
                                    <button className='px-6 py-3.5 rounded-lg text-white text-lg font-medium cursor-pointer  bg-linear-to-t hover:scale-[0.9] transition-all to-[#8E2391] from-[#421C47] w-fit mx-auto'>Send Message</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
