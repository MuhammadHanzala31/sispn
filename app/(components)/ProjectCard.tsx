import Image from 'next/image'
import React from 'react'
import cardImg from '@/public/service-car.png'
import Link from 'next/link'
import { Tienne } from 'next/font/google'

export default function ProjectCard({image, title, description, link} : {image? : any, title? : any, description? : any, link? : any}) {
  return (
    <div className='flex flex-col gap-6 p-4 rounded-lg bg-white items-center shadow-2xl'>
        <Image src={image ? image : cardImg} alt='card-service'/>
        <h6 className='text-[#662C6D] font-bold text-3xl'>{title? title : 'Why SEO Is Important'}</h6>
        <p className='text-[#414141] font-normal text-xl px-4 text-center'>{description ? description : 'nlocking Success: Why SEO is a Game-Changer for Small Businesses In today’s competitive digital landscape, small businesses face…'}</p>
        {link ? <Link href={'/'} className='text-[#662C6D] font-normal text-2xl'>{'Read More >'}</Link> : null}
    </div>
  )
}
