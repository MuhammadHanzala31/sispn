"use client"

import PortfolioSection from '@/app/(components)/PortfolioTabs'
import RequestForm from '@/app/(components)/RequestForm';
import VideoBg from '@/app/(components)/Video';
import React, { useState } from 'react'

const tabs = ["All", "Web Design", "UI/UX Design", "Mobile Apps", "Logo Design"];

const projects = [
    {
        id: 1,
        category: "Web Design",
        title: "Le Buzz Interior",
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80",
    },
    {
        id: 2,
        category: "UI/UX Design",
        title: "Make – Workflow Platform",
        image: "https://images.unsplash.com/photo-1618788372246-79faff0c3742?w=600&q=80",
    },
    {
        id: 3,
        category: "Web Design",
        title: "Product Showcase",
        image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=600&q=80",
    },
    {
        id: 4,
        category: "Mobile Apps",
        title: "Connect Social App",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80",
    },
    {
        id: 5,
        category: "Logo Design",
        title: "Brand Identity Kit",
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&q=80",
    },
    {
        id: 6,
        category: "UI/UX Design",
        title: "Dashboard Analytics",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    },
];

export default function page() {
    const [activeTab, setActiveTab] = useState("All");

    const filtered =
        activeTab === "All"
            ? projects
            : projects.filter((p) => p.category === activeTab);

    return (
        <main>

            {/* HERO */}
            <section className='relative z-10 lg:px-[80px] md:px-[40px] px-6 lg:py-52 py-10'>
                
                <VideoBg/>

                <h2 
                    data-aos="fade-down"
                    className='text-[69px] text-white font-bold text-center'
                >
                    SISPN FOLIO
                </h2>

                <div className='flex flex-row items-center justify-between'>

                    <div 
                        data-aos="fade-right"
                        className='flex flex-col gap-4'
                    >
                        <p className='text-white text-2xl'>Our Portfolio</p>
                        <h4 className='text-[#B83DC8] text-4xl font-bold'>
                            SOME RECENT WORK
                        </h4>
                    </div>

                    <div 
                        data-aos="fade-left"
                        className="border-b border-white flex flex-wrap gap-2"
                    >
                        {tabs.map((tab, index) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                data-aos="zoom-in"
                                data-aos-delay={index * 80}
                                className={`px-5 py-3 font-semibold transition-all duration-300 cursor-pointer text-xl ${
                                    activeTab === tab
                                        ? "text-[#e040fb] border-b-2 border-[#e040fb]"
                                        : "text-white"
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                </div>

                {/* PROJECT GRID */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 mt-7">

                    {filtered.map((project, index) => (
                        <div
                            key={project.id}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="group relative overflow-hidden rounded-2xl shadow-2xl shadow-white"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-72"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">

                                <span className="mb-1 text-xs font-semibold uppercase tracking-widest text-[#e040fb]">
                                    {project.category}
                                </span>

                                <h3 className="text-lg font-bold text-white">
                                    {project.title}
                                </h3>

                            </div>

                        </div>
                    ))}

                </div>

            </section>

            {/* FORM */}
            <div data-aos="fade-up">
                <RequestForm/>
            </div>

        </main>
    )
}