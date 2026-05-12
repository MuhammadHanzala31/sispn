"use client"
import ProjectCard from '@/app/(components)/ProjectCard'
import seop1 from '@/public/seo-p-1.jpg'
import seop2 from '@/public/seo-p-2.png'
import seop3 from '@/public/seo-p-3.png'
import seop4 from '@/public/seo-p-4.png'
import seop5 from '@/public/seo-p-5.jpg'
import seop6 from '@/public/seo-p-6.jpg'
import StrategyCard from '@/app/(components)/StrategyCard'
import RequestForm from '@/app/(components)/RequestForm'
import { seoPricig } from '@/app/pricingData'
import Image from 'next/image'
import PricingCard from '@/app/(components)/PricingCard'
import bg from '@/public/packages-bg.webp'
import { useModal } from '@/app/context/store'
import Popup from '@/app/(components)/Popup'
import ServiceForm from '@/app/(components)/ServicesForm'
import BenefitCard from '@/app/(components)/BenefitCard'

const seoProcess = [
  { title: "Initial Assessment", description: "We dive deep into your business, target audience, and competitors to discover opportunities and barriers — designing a strategy aligned with your objectives and the basis for long-term growth." },
  { title: "Strategic Planning", description: "Using collected insights, we build a customised SEO strategy covering keyword selection, on-page optimisation, technical improvements, and off-page actions to maximise visibility." },
  { title: "Implementation", description: "We optimise site structure, improve content quality, ensure mobile-friendliness, build quality backlinks, and enhance user experience to meet both search engine and visitor expectations." },
  { title: "Performance Monitoring", description: "Continuous evaluation of organic traffic, keyword rankings, and conversion rates with transparent reporting keeps you informed and ensures your investment produces real outcomes." },
]

const seoBenefits = [
  { id: 1, title: "Enhance Online Visibility & Rankings", description: "Higher rankings ensure your website is visible to the right people at the right time, establishing your brand authority and driving more relevant traffic." },
  { id: 2, title: "Drive Targeted Organic Traffic", description: "We align content with audience intent to attract visitors who are genuinely interested — resulting in greater engagement, higher CTR, and better ROI." },
  { id: 3, title: "Build Trust & Credibility", description: "First-page rankings signal reliability. Quality content, optimised UX, and good reviews make it easier for customers to choose you over competitors." },
  { id: 4, title: "Improved User Experience", description: "SEO covers site speed, mobile responsiveness, and seamless navigation — directly improving user satisfaction and conversion rates." },
  { id: 5, title: "Long-Term Results & ROI", description: "Unlike paid ads, SEO delivers sustainable, compounding advantages. A well-implemented strategy continues attracting loyal customers long after launch." },
]

const seoServices = [
  { image: seop1, title: "On-Page SEO", description: "We optimise your site's content and HTML structure with strategically integrated keywords, meta refinement, and content optimisation — aligning your pages with search engine algorithms to drive targeted traffic." },
  { image: seop2, title: "Off-Page SEO", description: "Building domain authority through high-quality backlinks, social media interaction, and online reputation management — improving credibility and climbing search rankings." },
  { image: seop3, title: "Technical SEO", description: "We address site speed, mobile responsiveness, crawlability, structured data, and site architecture — resolving technical barriers that prevent search engines from properly indexing your content." },
  { image: seop4, title: "Local SEO", description: "For local markets, we optimise your Google Business Profile, manage local citations, and promote customer reviews to attract nearby customers both online and in person." },
  { image: seop5, title: "eCommerce SEO", description: "We craft keyword-rich product descriptions, optimise category pages, and build proper site architecture to improve search rankings and drive online sales." },
  { image: seop6, title: "Content Writing", description: "High-quality, SEO-optimised content tailored to your brand voice — from blog articles to product descriptions — that engages users, improves dwell time, and boosts authority." },
]

export default function page() {
  const { isOpen, closeModal, openModal } = useModal()

  return (
    <main>
      {/* ── Hero ── */}
      <section className='min-h-160 lg:px-20 md:px-10 px-6 seo relative flex lg:flex-row flex-col justify-between items-center pt-28 pb-16 gap-10'>
        <div className='service-hero-overlay' />
        <div className='relative z-10 flex flex-col gap-7 text-start max-w-2xl'>
          <span className='section-badge border-white/20 text-white/80 bg-white/10'>
            <i className="ri-search-line"></i>SEO Services
          </span>
          <h1 className='text-white font-bold text-4xl lg:text-5xl leading-tight'>
            Increase Targeted Traffic<br />
            <span className='bg-linear-to-r from-[#e070f0] to-[#B83DC8] bg-clip-text text-transparent'>With SISPN Tech</span>
          </h1>
          <p className='text-white/80 text-lg leading-8'>At SISPN Tech, we provide tailored SEO services that increase targeted traffic, improve your website's visibility, and boost conversion rates. Our strategies are aligned with your business goals, delivering real growth and a competitive edge in the digital world.</p>
          <p className='text-white/70 text-base leading-7'>Ready to dominate search rankings and accelerate your business growth? Join SISPN Tech today.</p>
          <button onClick={openModal} className='btn-primary w-fit'>
            Get a Free Consultation
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
        <div className='relative z-10 w-full lg:max-w-md'>
          <ServiceForm />
        </div>
      </section>

      {/* ── Intro ── */}
      <section className='py-16 lg:py-20 lg:px-20 md:px-10 px-6'>
        <div className='flex flex-col gap-6 max-w-4xl mx-auto items-center text-center'>
          <span className='section-badge'>
            <i className="ri-lightbulb-line"></i>What Can We Do
          </span>
          <h2 className='text-3xl lg:text-4xl font-bold text-[#1a1a1a] leading-tight'>
            The SEO Company <span className='gradient-text'>Your Website Needs</span>
          </h2>
          <div className='flex flex-col gap-4 text-[#555] text-lg leading-8'>
            <p>At SISPN Tech, we understand the difficulties businesses face getting noticed online. Whether your site is underperforming, declining in traffic, or you're launching fresh — our team of expert SEO professionals is ready to help.</p>
            <p>We specialise in custom strategies covering site audits, performance optimisation, in-depth keyword research, and compelling content development. We value transparency, providing regular updates and comprehensive performance reports.</p>
          </div>
        </div>
      </section>

      {/* ── Packages ── */}
      <section className='packages-section'>
        <div className='relative z-10 flex flex-col gap-8 items-center'>
          <span className='section-badge border-white/20 text-white/80 bg-white/10'>
            <i className="ri-price-tag-3-line"></i>Pricing
          </span>
          <h2 className='text-3xl font-bold text-white text-center'>SEO Packages</h2>
          <div className='flex flex-wrap justify-center gap-6 px-4 w-full'>
            {seoPricig.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>
        </div>
        <Image src={bg} alt="packages background" className='w-full h-full absolute inset-0 object-cover -z-10 opacity-30' />
      </section>

      {/* ── Services Grid ── */}
      <section className='py-16 lg:px-20 md:px-10 px-6'>
        <div className='flex flex-col gap-8'>
          <div className='flex flex-col gap-3 max-w-3xl mx-auto text-center'>
            <h2 className='text-3xl lg:text-4xl font-bold text-[#1a1a1a]'>
              Comprehensive SEO Services <span className='gradient-text'>Designed for Your Website</span>
            </h2>
            <p className='text-[#555] text-lg leading-8'>Our custom SEO strategies cover every dimension of search optimisation:</p>
          </div>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
            {seoServices.map((service, idx) => (
              <ProjectCard key={idx} image={service.image} title={service.title} description={service.description} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Strategy ── */}
      <section className='py-16 lg:px-20 md:px-10 px-6 bg-[#faf5fb]'>
        <div className='flex flex-col gap-8 items-center max-w-5xl mx-auto'>
          <span className='section-badge'>
            <i className="ri-map-2-line"></i>Our Approach
          </span>
          <h2 className='text-3xl lg:text-4xl font-bold text-[#1a1a1a] text-center leading-tight'>
            Tailored SEO Strategy for <span className='gradient-text'>Sustainable Growth</span>
          </h2>
          <p className='text-[#555] text-lg leading-8 text-center max-w-3xl'>
            A universal approach doesn't work in SEO. Our customised strategies are built for your specific business goals, ensuring long-term digital expansion in a constantly evolving landscape.
          </p>
          <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 w-full'>
            {seoProcess.map((item, idx) => (
              <StrategyCard key={idx} index={idx} title={item.title} description={item.description} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits on dark bg ── */}
      <section className='project relative'>
        <div className='absolute inset-0 bg-black/55' />
        <div className='relative z-10 py-20 lg:px-20 md:px-10 px-6 flex flex-col gap-8 items-center'>
          <h2 className='text-3xl lg:text-4xl font-bold text-white text-center max-w-3xl leading-tight'>
            Our <span className='text-[#e070f0]'>SEO Process</span>
          </h2>
          <p className='text-white/80 text-lg text-center max-w-3xl leading-8'>
            In today's digital world, having a website is just the beginning. To be truly successful, your business needs to be credible, visible, and easily discoverable by your target audience. That's where SISPN Tech's SEO services come in.
          </p>
          <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 w-full max-w-4xl'>
            {seoBenefits.map((item, idx) => (
              <BenefitCard key={idx} index={idx} title={item.title} description={item.description} />
            ))}
          </div>
        </div>
      </section>

      <RequestForm />
      <Popup isOpen={isOpen} onClose={closeModal} />
    </main>
  )
}
