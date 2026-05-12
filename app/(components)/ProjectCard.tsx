import Image from 'next/image'
import Link from 'next/link'
import cardImg from '@/public/service-car.png'

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
    <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-[#ede0f0]/70 bg-white shadow-[0_8px_40px_rgba(0,0,0,0.07)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(102,44,109,0.16)]">

      {/* Top gradient accent */}
      <div className="h-[3px] w-full bg-gradient-to-r from-[#421C47] via-[#81358A] to-[#B83DC8]" />

      {/* Image */}
      <div className="relative overflow-hidden">
        <Image
          src={image ?? cardImg}
          alt={title ?? 'card-service'}
          width={500}
          height={300}
          className="h-[240px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

        {/* Category tag over image */}
        <span className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full bg-white/15 border border-white/25 backdrop-blur-sm text-white text-xs font-medium">
          Digital Solutions
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 p-7 flex-1">
        <h3 className="text-xl font-bold text-[#421C47] leading-snug transition-colors duration-300 group-hover:text-[#81358A]">
          {title ?? 'Why SEO Is Important'}
        </h3>

        <p className="line-clamp-4 text-base leading-7 text-[#555]">
          {description ?? 'Unlocking success with powerful digital strategies and modern marketing solutions that help brands grow faster and connect with the right audience.'}
        </p>

        {link && (
          <Link
            href={link}
            className="mt-auto flex w-fit items-center gap-2 rounded-full bg-gradient-to-br from-[#421C47] to-[#81358A] px-6 py-2.5 text-sm font-semibold text-white hover:shadow-[0_6px_20px_rgba(129,53,138,0.35)] hover:gap-3 transition-all duration-300"
          >
            Read More
            <i className="ri-arrow-right-line text-sm"></i>
          </Link>
        )}
      </div>
    </div>
  )
}
