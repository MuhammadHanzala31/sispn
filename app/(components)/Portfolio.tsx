"use client"

import Image from 'next/image'
import React from 'react'
import port1 from '@/public/port1.png'
import port2 from '@/public/port2.png'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Portfolio() {


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


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,      // 3 slides ek saath dikhein
    slidesToScroll: 1,    // ek ek karke scroll ho
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots: React.ReactNode) => (
      <div style={{ bottom: '-40px' }}>{dots}</div>
    ),
  }

  return (
    <section className='flex flex-col gap-8 py-10 overflow-x-hidden overflow-y-hidden'>
      <div className='flex flex-col gap-4 items-center text-center'>
        <p className='text-[#414141] font-normal text-3xl '>Our Latest Projects</p>
        <h3 className='text-[#414141] text-5xl font-normal'>EXPLORE <span className='text-[#81358A] font-bold'>OUR PORTFOLIO</span> </h3>
      </div>
      <Slider {...settings}>
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative overflow-hidden rounded-2xl shadow-2xl shadow-white mx-"
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
              <h3 className="text-lg font-bold text-white">{project.title}</h3>
            </div>
          </div>
        ))}
      </Slider>

      <style>{`
        .slick-custom-arrow {
          position: absolute;
          bottom: -50px;
          background: white;
          color: #81358A;
          border: 1px solid #81358A;
          border-radius: 12px;
          width: 40px;
          height: 40px;
          font-size: 24px;
          cursor: pointer;
          z-index: 10;
          display: flex !important;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
        }
        .slick-custom-arrow:hover {
              transform : scale(1.1)
        }
        .slick-prev-arrow {
          left: calc(50% - 50px);
        }
        .slick-next-arrow {
          left: calc(50% + 10px);
        }
        .slick-dots {
          display: none !important;
        }
      `}</style>
    </section>
  )
}


function NextArrow({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="slick-custom-arrow slick-next-arrow "
      aria-label="Next"
    >
      ›
    </button>
  )
}

function PrevArrow({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="slick-custom-arrow slick-prev-arrow"
      aria-label="Previous"
    >
      ‹
    </button>
  )
}