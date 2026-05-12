import Image from 'next/image'
import React from 'react'
import cardImg from '@/public/service-car.png'
import Link from 'next/link'

export default function ProjectCard({
  image,
  title,
  description,
  link,
}: {
  image?: any
  title?: string
  description?: string
  link?: string
}) {
  return (
    <div className="group relative overflow-hidden rounded-[28px] border border-[#f1e8f3] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(102,44,109,0.18)] ">
      
      {/* Top Glow */}
      <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[#81358A] to-[#662C6D]" />

      {/* Image */}
      <div className="relative overflow-hidden rounded-t-[28px]">
        <Image
          src={image ? image : cardImg}
          alt="card-service"
          width={500}
          height={300}
          className="h-[260px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-70" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-5 p-7 ">
        
        {/* Tag */}
        <div className="w-fit rounded-full bg-[#f6edf7] px-4 py-2 text-sm font-medium text-[#81358A]">
          Digital Solutions
        </div>

        {/* Title */}
        <h3 className="text-[30px] leading-tight font-bold text-[#662C6D] transition-colors duration-300 group-hover:text-[#81358A]">
          {title ? title : 'Why SEO Is Important'}
        </h3>

        {/* Description */}
        <p className="line-clamp-4 text-[18px] leading-[32px] text-[#414141]">
          {description
            ? description
            : 'Unlocking success with powerful digital strategies and modern marketing solutions that help brands grow faster and connect with the right audience.'}
        </p>

        {/* Button */}
        {link ? (
          <Link
            href={link}
            className="mt-2 flex w-fit items-center gap-2 rounded-full bg-[#662C6D] px-6 py-3 text-base font-medium text-white transition-all duration-300 hover:bg-[#81358A] hover:gap-4"
          >
            Read More
            <span>→</span>
          </Link>
        ) : null}
      </div>
    </div>
  )
}