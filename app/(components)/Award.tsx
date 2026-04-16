'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import image1 from '@/public/aw-1/Group 163129.png'
import image2 from '@/public/aw-2/Group 163130.png'
import image3 from '@/public/aw-3/Group 163131.png'

interface Award {
  id: number;
  title: string;
  year: string;
  image: string | any;
  alt: string;
}

const awards: Award[] = [
  {
    id: 1,
    title: 'Top IT Services',
    year: '2021',
    image: image1,
    alt: 'Clutch Award 2021'
  },
  {
    id: 2,
    title: 'Best of Clutch',
    year: '2023',
    image: image2,
    alt: 'Best of Clutch 2023'
  },
  {
    id: 3,
    title: 'Clutch Champion',
    year: '2024',
    image: image3,
    alt: 'Clutch Champion 2024'
  },
  {
    id: 4,
    title: 'Top Digital Agency',
    year: '2024',
    image: image1,
    alt: 'Top Digital Agency 2024'
  },
  {
    id: 5,
    title: 'Global Excellence',
    year: '2022',
    image: image2,
    alt: 'Global Excellence'
  }
];

export default function AwardsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const visibleCards = 3;
  const maxIndex = awards.length - visibleCards;

  // ✅ FIXED useEffect (no dependency error)
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const max = awards.length - visibleCards;
        return prev >= max ? 0 : prev + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay]); // ✅ stable

  const goToNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    setIsAutoPlay(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    setIsAutoPlay(false);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p className='text-[#414141] text-xl md:text-2xl mb-4'>Our Awards</p>
          <h3 className='text-[#414141] text-3xl md:text-5xl'>
            DIGITAL <span className='text-[#81358A] font-bold'>MARKETING AGENCY</span>
          </h3>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-[#414141] font-normal">WE'VE GOT</span>
              <br />
              <span className="text-[#81358A]">CLUTCH AWARDS</span>
            </h2>

            <p className="text-gray-600 text-base md:text-2xl mb-8">
              Being appreciated by clients we work with means world to us. it also translate beautifully into our official ratings and awards.
            </p>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={goToPrevious}
                className="text-4xl  cursor-pointer rounded text-[#81358A] transition"
              >
                ←
              </button>
              <button
                onClick={goToNext}
                className="text-4xl cursor-pointer rounded text-[#81358A]  transition"
              >
                →
              </button>
            </div>
          </div>

          {/* RIGHT SLIDER */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
              }}
            >
              {awards.map((award) => (
                <div
                  key={award.id}
                  className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 p-2"
                >
                  <div className="h-64 md:h-80 rounded-lg overflow-hidden bg-gray-200 hover:scale-105 transition duration-300">
                    <Image
                      src={award.image}
                      alt={award.alt}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="mt-2 text-center">
                    <h4 className="font-semibold text-[#414141]">
                      {award.title}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {award.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}