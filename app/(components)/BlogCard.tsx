import React from 'react'
import blogImage from '@/public/blog-card.png'
import Image from 'next/image'
import Link from 'next/link'

type props = "row" | "col"

export default function BlogCard({flexDirection} : {flexDirection? : props}) {
    return (
        <div className={`flex ${flexDirection ? 'flex-'+flexDirection : 'flex-col'} items-center gap-8`}>
            <Image src={blogImage} alt="blog-image" />
            <div className='flex flex-col gap-8 pr-36 max-w-[737px]'>
                <div className='flex flex-row justify-start gap-3.5 '>
                    <p className={`text-xl ${flexDirection === 'row' ? 'text-[#414141]'  : 'text-white'}` }>25 MARCH 2026</p>
                    <span className={`text-xl ${flexDirection === 'row' ? 'text-[#414141]'  : 'text-white'}` }>|</span>
                    <p className={`text-xl ${flexDirection === 'row' ? 'text-[#414141]'  : 'text-white'}` }>DIGITAL MARKETING</p>
                </div>
                <h5 className={`text-3xl font-bold  ${flexDirection === 'row' ? 'text-[#662C6D]'  : 'text-white'}` }>The Power of Social Media Marketing: Boost Your Brand with SISPN Tech Digital</h5>
                <p className={`text-xl ${flexDirection === 'row' ? 'text-[#414141]'  : 'text-white'}` }>Increase your brand's visibility faster by using SISPN Tech, a results-focused and performance-oriented Social Media Marketing Agency.</p>
                <Link href={'/blogs'} className={`text-xl ${flexDirection === 'row' ? 'text-[#414141]'  : 'text-white'}` }>Increase your brand's visibility faster by using SISPN Tech, a results-focused and performance-oriented Social Media Marketing Agency.</Link>
            </div>
        </div>
    )
}
