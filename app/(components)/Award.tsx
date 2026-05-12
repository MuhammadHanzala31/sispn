'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import image1 from '@/public/aw-1/Group 163129.png'
import image2 from '@/public/aw-2/Group 163130.png'
import image3 from '@/public/aw-3/Group 163131.png'
import { useModal } from '../context/store'



interface Award {
  id: number;
  title: string;
  year: string;
  image: any;
  alt: string;
}

const awards: Award[] = [
  { id: 1, title: 'Top IT Services', year: '2021', image: image1, alt: 'Clutch Award 2021' },
  { id: 2, title: 'Best of Clutch', year: '2023', image: image2, alt: 'Best of Clutch 2023' },
  { id: 3, title: 'Clutch Champion', year: '2024', image: image3, alt: 'Clutch Champion 2024' },
  { id: 4, title: 'Top Digital Agency', year: '2024', image: image1, alt: 'Top Digital Agency 2024' },
  { id: 5, title: 'Global Excellence', year: '2022', image: image2, alt: 'Global Excellence' },
]

const visibleCards = 3

export default function AwardsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const { openModal } = useModal()

  const maxIndex = awards.length - visibleCards

  useEffect(() => {
    if (!isAutoPlay) return
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1))
    }, 4000)
    return () => clearInterval(interval)
  }, [isAutoPlay, maxIndex])

  const goToNext = () => { setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1)); setIsAutoPlay(false) }
  const goToPrevious = () => { setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1)); setIsAutoPlay(false) }

  return (
    <section className="py-20 md:py-28 bg-[#faf5fb]" data-aos="fade-up">
      {/* Top gradient line */}
      <div className='h-px w-full bg-gradient-to-r from-transparent via-[#81358A]/30 to-transparent mb-16' />

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Section header */}
        <div className="text-center mb-16 flex flex-col items-center gap-4">
          <span className='section-badge'>
            <i className="ri-award-line"></i>
            Recognition
          </span>
          <h2 className='text-3xl md:text-5xl font-bold text-[#1a1a1a] leading-tight'>
            Digital{' '}
            <span className='gradient-text'>Marketing Agency</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div className='flex flex-col gap-6'>
            <h3 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] leading-tight">
              We've Got
              <br />
              <span className="gradient-text">Clutch Awards</span>
            </h3>

            <p className="text-[#555] text-base md:text-lg leading-relaxed max-w-md">
              Being appreciated by the clients we work with means the world to us. It also translates beautifully into our official ratings and awards.
            </p>

            <div className='flex flex-wrap gap-4'>
              <button onClick={openModal} className='btn-primary'>
                <i className="ri-chat-1-line"></i>
                Let's Talk Project
              </button>
            </div>

            {/* Slider controls */}
            <div className="flex items-center gap-4 mt-2">
              <button
                onClick={goToPrevious}
                className="w-11 h-11 rounded-full border-2 border-[#81358A]/30 flex items-center justify-center text-[#81358A] hover:bg-[#81358A] hover:text-white hover:border-[#81358A] transition-all duration-200 cursor-pointer"
                aria-label="Previous"
              >
                <i className="ri-arrow-left-s-line text-xl"></i>
              </button>
              <button
                onClick={goToNext}
                className="w-11 h-11 rounded-full border-2 border-[#81358A]/30 flex items-center justify-center text-[#81358A] hover:bg-[#81358A] hover:text-white hover:border-[#81358A] transition-all duration-200 cursor-pointer"
                aria-label="Next"
              >
                <i className="ri-arrow-right-s-line text-xl"></i>
              </button>
              <span className='text-sm text-[#999] ml-2'>
                {currentIndex + 1} / {maxIndex + 1}
              </span>
            </div>
          </div>

          {/* Right slider */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
            >
              {awards.map((award) => (
                <div key={award.id} className="w-full sm:w-1/2 lg:w-1/3 shrink-0 p-2">
                  <div className="group rounded-2xl overflow-hidden border border-[#e8d8ec]/60 bg-white shadow-[0_8px_30px_rgba(129,53,138,0.08)] hover:shadow-[0_16px_50px_rgba(129,53,138,0.2)] hover:-translate-y-1.5 transition-all duration-300">
                    <div className="h-56 md:h-72 overflow-hidden">
                      <Image
                        src={award.image}
                        alt={award.alt}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4 text-center border-t border-[#e8d8ec]/40">
                      <h4 className="font-semibold text-[#421C47] text-sm">{award.title}</h4>
                      <p className="text-xs text-[#81358A] font-medium mt-0.5">{award.year}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
