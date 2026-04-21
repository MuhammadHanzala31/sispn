"use client"

import React, { useState } from 'react'
import toast from 'react-hot-toast';

export default function page() {

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        city: '',
        message: '',
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e : any) => {
        e.preventDefault()
        try {
            setLoading(true);
            setSuccess(false);

            const res = await fetch('/api/email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (data.success) {
                setSuccess(true);
                setForm({
                    name: '',
                    email: '',
                    phone: '',
                    city: '',
                    message: '',
                });

                toast.success('email send successfully')
            }
        } catch (error) {
            console.log(error);
            toast.error('email not sent')
        } finally {
            setLoading(false);
        }
    };



    return (
        <main>
            <section className='lg:py-52 py-10 flex flex-col justify-center items-center relative z-10'>
                <div className="w-screen absolute left-0 justify-center top-0 -z-1 items-center flex h-full">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src="/hero-bg.mp4" type="video/mp4" />
                    </video>
                </div>
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
                                </div>
                            </div>
                            <div className=' lg:w-[60%] w-full bg-black/70 p-4 rounded-2xl'>
                                <div className='flex flex-col gap-6 w-full'>

                                    {/* Row 1 */}
                                    <div className='flex lg:flex-row flex-col gap-5 items-center'>
                                        <input
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                            className='text-white p-3 border-b border-white/70 w-1/2 outline-none'
                                            placeholder='Name *'
                                        />

                                        <input
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            className='text-white p-3 border-b border-white/70 w-1/2 outline-none'
                                            placeholder='Email *'
                                        />
                                    </div>

                                    {/* Row 2 */}
                                    <div className='flex lg:flex-row flex-col gap-5 items-center'>
                                        <input
                                            name="phone"
                                            value={form.phone}
                                            onChange={handleChange}
                                            className='text-white p-3 border-b border-white/70 w-1/2 outline-none'
                                            placeholder='Phone Number *'
                                        />

                                        <input
                                            name="city"
                                            value={form.city}
                                            onChange={handleChange}
                                            className='text-white p-3 border-b border-white/70 w-1/2 outline-none'
                                            placeholder='Country / City *'
                                        />
                                    </div>

                                    {/* Message */}
                                    <textarea
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        className="text-white h-[120px] resize-none p-3 border-b border-white/70 outline-none w-full"
                                        placeholder='How can we help you *'
                                    />

                                    {/* Checkbox */}
                                    <div className='flex items-center gap-2 justify-center'>
                                        <input type='checkbox' />
                                        <span className='text-white text-sm'>
                                            By submitting you agree to our terms and policy.
                                        </span>
                                    </div>

                                    {/* Button */}
                                    <button
                                        onClick={handleSubmit}
                                        disabled={loading}
                                        className='px-6 py-3.5 rounded-lg text-white bg-gradient-to-t from-[#421C47] to-[#8E2391] w-fit mx-auto'
                                    >
                                        {loading ? 'Sending...' : 'Send Message'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
