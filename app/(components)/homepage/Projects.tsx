import React from 'react'
import ProjectCard from '../ProjectCard'
import seoImage from '@/public/seo.png'

export default function Projects() {
  return (
    <section className='p-12 grid grid-cols-3 gap-4 project'>
      <ProjectCard image={seoImage} description={'Unlocking Success: Why SEO is a Game-Changer for Small Businesses In today’s competitive digital landscape, small businesses face…'} title={'Why SEO Is Important'}/>
      <ProjectCard title={'WooCommerce vs Shopify: Which is Better…'} description={'WooCommerce Vs Shopify: Comparison 2024? Choosing between WooCommerce and Shopify in 2024 can be overwhelming for businesses looking…'}/>
      <ProjectCard image={seoImage}/>
    </section>
  )
}
