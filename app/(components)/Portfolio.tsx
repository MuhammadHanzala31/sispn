"use client"

import Image from 'next/image'
import React from 'react'
import port1 from '@/public/port1.png'
import port2 from '@/public/port2.png'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Portfolio() {

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
        <Image src={port1} alt='port1' />
        <Image src={port2} alt='port2' />
        <Image src={port1} alt='port1' />
        <Image src={port1} alt='port1' />
        <Image src={port1} alt='port1' />
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