import React from 'react'
import ProjectCard from '../ProjectCard'
import seoImage from '@/public/seo.png'
import ads from '@/public/ads.png'

export default function Projects() {
  return (
    <section data-aos="fade-right" className='p-12 grid lg:grid-cols-3 grid-cols-1 gap-4 project'>
      <ProjectCard image={seoImage} description={'SEO helps your business rank higher on search engines, making it easier for potential customers to find you online. It increases website traffic, builds credibility, improves user experience, and drives long-term growth without relying only on paid ads.'} title={'Why SEO Is Important'}/>
      <ProjectCard title={'WooCommerce vs Shopify: Which is Better…'} description={'WooCommerce offers full customization and better control, making it ideal for businesses that want flexibility and advanced SEO. Shopify is easier to set up and manage, making it perfect for beginners and fast-growing online stores. In short: WooCommerce gives more control, while Shopify offers more convenience.'}/>
      <ProjectCard image={ads} title={'Why Google Ads is Important'} description={'Google Ads helps businesses reach the right audience instantly by showing ads to people actively searching for related products or services. It increases visibility, drives targeted traffic, generates leads and sales, and delivers measurable results with flexible budgeting.'}/>
    </section>
  )
}
