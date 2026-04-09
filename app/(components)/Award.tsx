'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Award {
  id: number;
  title: string;
  year: string;
  image: string;
  alt: string;
}

const awards: Award[] = [
  {
    id: 1,
    title: 'Top IT Services',
    year: '2021',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=400&h=400&fit=crop',
    alt: 'Clutch Award 2021'
  },
  {
    id: 2,
    title: 'Best of Clutch',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=400&fit=crop',
    alt: 'Best of Clutch 2023'
  },
  {
    id: 3,
    title: 'Clutch Champion',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1560264357-8d9766a43a28?w=400&h=400&fit=crop',
    alt: 'Clutch Champion 2024'
  },
  {
    id: 4,
    title: 'Top Digital Agency',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1621905167918-48416bd8575a?w=400&h=400&fit=crop',
    alt: 'Top Digital Agency 2024'
  }
];

export default function AwardsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto-play slider
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % awards.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + awards.length) % awards.length);
    setIsAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % awards.length);
    setIsAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
        <p className='text-[#414141] font-normal text-2xl mb-5'>Our Awards</p>
        <h3 className='text-[#414141] text-5xl font-normal'>DIGITAL  <span className='text-[#81358A] font-bold'>MARKETING AGENCY</span> </h3>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-16">
          <div className="border border-gray-300 px-6 py-3 rounded flex items-center gap-2">
            <span className="text-green-500 text-xl">★</span>
            <span className="text-gray-700 font-medium">Review us on Trustpilot</span>
          </div>
          <div className="bg-blue-900 text-white px-6 py-3 rounded font-bold text-sm">
            REVIEW US
            <div className="text-xs">ON DESIGNRUSH</div>
            <div className="text-yellow-400">★★★★★</div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-[#414141] font-normal tracking-wide">WE'VE GOT</span>
              <br />
              <span className="text-[#81358A] pt-4">CLUTCH AWARDS</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Being appreciated by the clients we work with means the world to us. It also translates beautifully into our official ratings and awards.
            </p>

            {/* Navigation Arrows */}
            <div className="flex items-center gap">
              <button
                onClick={goToPrevious}
                className="inline-flex items-center justify-center w-12 h-12  rounded hover:bg-[#414141] hover:text-white transition-colors duration-300"
                aria-label="Previous slide"
              >
                <span className="text-2xl">←</span>
              </button>
              <button
                onClick={goToNext}
                className="inline-flex items-center justify-center w-12 h-12 rounded hover:bg-[#414141] hover:text-white transition-colors duration-300"
                aria-label="Next slide"
              >
                <span className="text-2xl">→</span>
              </button>
            </div>
          </div>

          {/* Right Side - Slider */}
          <div className="relative">
            {/* Slider Container - Shows 3 items */}
            <div className="overflow-hidden rounded-lg bg-gray-100">
              <div className="flex gap-4">
                {awards.map((award, index) => {
                  const position = (index - currentIndex + awards.length) % awards.length;
                  const isVisible = position < 3;
                  
                  return (
                    <div
                      key={award.id}
                      className={`flex-shrink-0 w-full md:w-1/3 h-64 md:h-80 rounded-lg overflow-hidden transition-all duration-500 ease-in-out ${
                        isVisible ? 'opacity-100' : 'hidden'
                      }`}
                    >
                      {/* <Image
                        src={award.image}
                        alt={award.alt}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover"
                        priority={index === 0}
                      /> */}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
