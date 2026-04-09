"use client"

import BlogCard from '@/app/(components)/BlogCard'
import React, { useState } from 'react'

export default function page() {

    const blogData = Array.from({ length: 20 }, (_, i) => ({
        id: i + 1
    }))

    const blogsPerPage = 5
    const [currentPage, setCurrentPage] = useState(1)

    const totalPages = Math.ceil(blogData.length / blogsPerPage)

    const startIndex = (currentPage - 1) * blogsPerPage
    const endIndex = startIndex + blogsPerPage
    const currentBlogs = blogData.slice(startIndex, endIndex)

    return (
        <main>
            <section className='lg:py-52 py-10 lg:px-[80px] md:px-[40px] px-6 hero-banner'>
                <div className='flex flex-col lg:flex-row items-center gap-8'>
                    <div className='lg:w-1/2'>
                        {/* blog card */}
                        <BlogCard />
                    </div>
                    <div className='lg:w-[35%] w-full flex flex-col gap-8 '>
                        <h6 className='text-white text-3xl font-bold'>Search</h6>
                        <div className='relative w-full'>
                            <input type="text" className='p-3 placeholder:text-white text-white w-full border-b border-[#FFFFFF] pr-10 focus:outline-none' />
                            <button className='absolute right-0 top-0 bottom-3 px-4'>
                                <i className="ri-search-2-line text-white text-2xl "></i>
                            </button>
                        </div>

                        <div className='flex flex-col gap-3'>
                            <div className='flex flex-row items-center gap-1'>
                                <i className="ri-arrow-right-double-fill text-white text-2xl"></i>
                                <h6 className='text-white text-xl font-bold'>GRAPHICS DESIGNING</h6>
                            </div>
                            <div className='flex flex-row items-center gap-1 cursor-pointer'>
                                <i className="ri-arrow-right-double-fill text-white text-2xl"></i>
                                <h6 className='text-white text-xl font-bold'>WEB APPS​</h6>
                            </div>
                            <div className='flex flex-row items-center gap-1 cursor-pointer'>
                                <i className="ri-arrow-right-double-fill text-white text-2xl"></i>
                                <h6 className='text-white text-xl font-bold'>DBRANDING</h6>
                            </div>
                            <div className='flex flex-row items-center gap-1 cursor-pointer'>
                                <i className="ri-arrow-right-double-fill text-white text-2xl"></i>
                                <h6 className='text-white text-xl font-bold'>MOBILE APPS</h6>
                            </div>
                            <div className='flex flex-row items-center gap-1 cursor-pointer'>
                                <i className="ri-arrow-right-double-fill text-white text-2xl"></i>
                                <h6 className='text-white text-xl font-bold'>LOGO DESIGNING</h6>
                            </div>
                            <div className='flex flex-row items-center gap-1 cursor-pointer'>
                                <i className="ri-arrow-right-double-fill text-white text-2xl"></i>
                                <h6 className='text-white text-xl font-bold'>DIGITAL MARKETING</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='my-15 lg:px-[80px] md:px-[40px] px-6'>
                <h4 className='text-4xl font-medium text-[#39393A] mb-7'>
                    Latest <span className='font-bold text-[#81358A]'>Post</span>
                </h4>

                {/* Showing 5 Blog Cards per Page */}
                <div className="flex flex-col gap-6">
                    {currentBlogs.map((blog) => (
                        <BlogCard key={blog.id} flexDirection='row' />
                    ))}
                </div>

                {/* Pagination Buttons */}
                <div className="flex justify-center items-center gap-3 mt-10">

                    {/* Prev Button */}
                    <button
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(currentPage - 1)}
                        className={`px-4 py-2 rounded-md border 
                        ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-[#81358A] hover:text-white"}
                        `}
                    >
                        Prev
                    </button>

                    {/* Page Numbers */}
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(index + 1)}
                            className={`px-4 py-2 rounded-md border 
                            ${currentPage === index + 1 ? "bg-[#81358A] text-white" : "hover:bg-[#81358A] hover:text-white"}
                            `}
                        >
                            {index + 1}
                        </button>
                    ))}

                    {/* Next Button */}
                    <button
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage(currentPage + 1)}
                        className={`px-4 py-2 rounded-md border 
                        ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-[#81358A] hover:text-white"}
                        `}
                    >
                        Next
                    </button>

                </div>
            </section>
        </main>
    )
}