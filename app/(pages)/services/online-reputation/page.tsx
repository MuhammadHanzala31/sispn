"use client"
import ProjectCard from '@/app/(components)/ProjectCard'
import p2 from '@/public/online-p-2.jpg'
import p3 from '@/public/online-p-3.jpg'
import p5 from '@/public/online-p-5.jpg'
import p6 from '@/public/online-p-6.jpg'
import StrategyCard from '@/app/(components)/StrategyCard'
import RequestForm from '@/app/(components)/RequestForm'
import { useModal } from '@/app/context/store'
import Popup from '@/app/(components)/Popup'
import ServiceForm from '@/app/(components)/ServicesForm'
import BenefitCard from '@/app/(components)/BenefitCard'

const ormBenefits = [
  { id: 1, title: "Enhance Trust & Credibility", description: "By strategically promoting positive reviews, SISPN Tech positions your brand as trustworthy and authentic — influencing buying decisions and solidifying customer confidence at every stage of the journey." },
  { id: 2, title: "Improve Search Engine Visibility", description: "We push optimised, positive content higher in search results while reducing harmful content — ensuring clients see the best version of your company at first glance." },
  { id: 3, title: "Increase Customer Engagement", description: "A well-managed reputation attracts more engagement across platforms, encouraging interaction, loyalty, and conversions — transforming passive users into active advocates." },
  { id: 4, title: "Attract Top Talent", description: "A professional online image doesn't just draw clients — it attracts quality job seekers who want to work for a trusted, reputable brand with a future-oriented image." },
]

const ormProcess = [
  { id: 1, title: "Targeted Reach", description: "We precisely monitor and manage your brand's footprint across search engines, social platforms, and review sites — ensuring the right audience sees the right message." },
  { id: 2, title: "Instant Visibility Management", description: "As soon as issues arise, our team responds immediately to mitigate damage and maintain a consistent, positive narrative around your brand." },
  { id: 3, title: "Measurable Results", description: "With detailed analysis and reporting, you can monitor the effectiveness of your ORM strategy, track sentiment improvements, and see real-time results." },
  { id: 4, title: "Budget Control", description: "Set clear investment levels aligned with your goals to ensure efficient use of resources while maintaining a robust online reputation." },
  { id: 5, title: "Brand Awareness", description: "Consistent positive visibility across Google's display network and social platforms strengthens brand recognition and trust over time." },
]

const ormServices = [
  { id: 1, title: "Customised Strategies", description: "Custom ORM funnels aligned with your business goals and industry nuances — for higher engagement and a stronger digital reputation.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80" },
  { id: 2, title: "Data-Driven Decisions", description: "Performance monitored constantly, user behaviour analysed, and strategies adapted in real-time to maximise outcomes and protect your brand.", image: p2.src },
  { id: 3, title: "Transparent Reporting", description: "Regular, comprehensive reports on brand sentiment and reputation performance. Our team is always available for discussions.", image: p3.src },
  { id: 4, title: "Advanced Tools", description: "Up-to-date tools and monitoring technologies that keep us ahead in managing and strengthening your digital reputation.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80" },
  { id: 5, title: "Certified Professionals", description: "ORM experts who ensure your campaigns are optimised, ethical, and aligned with industry best practices.", image: p5.src },
  { id: 6, title: "Dedicated Support", description: "A dedicated account manager focused on your brand's success — providing the personal attention your reputation deserves.", image: p6.src },
]

export default function page() {
  const { isOpen, closeModal, openModal } = useModal()

  return (
    <main>
      {/* ── Hero ── */}
      <section className='min-h-160 lg:px-20 md:px-10 px-6 repo relative flex lg:flex-row flex-col justify-between items-center pt-28 pb-16 gap-10'>
        <div className='service-hero-overlay' />
        <div className='relative z-10 flex flex-col gap-7 text-start max-w-2xl'>
          <span className='section-badge border-white/20 text-white/80 bg-white/10'>
            <i className="ri-shield-check-line"></i>Online Reputation
          </span>
          <h1 className='text-white font-bold text-4xl lg:text-5xl leading-tight'>
            Online Reputation<br />
            <span className='bg-linear-to-r from-[#e070f0] to-[#B83DC8] bg-clip-text text-transparent'>Services With SISPN Tech</span>
          </h1>
          <p className='text-white/80 text-lg leading-8'>Your online reputation isn't just a list of reviews — it's a reflection of your brand's reliability and credibility. SISPN Tech helps you build and protect a strong digital image that matches your business vision and drives growth.</p>
          <button onClick={openModal} className='btn-primary w-fit'>
            Get a Free Consultation
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
        <div className='relative z-10 w-full lg:max-w-md'>
          <ServiceForm />
        </div>
      </section>

      {/* ── Intro + Benefits ── */}
      <section className='py-16 lg:py-20 lg:px-20 md:px-10 px-6'>
        <div className='flex flex-col gap-8 max-w-5xl mx-auto items-center'>
          <span className='section-badge'>
            <i className="ri-rocket-line"></i>What Can We Do
          </span>
          <h2 className='text-3xl lg:text-4xl font-bold text-[#1a1a1a] text-center leading-tight'>
            Align Your Digital Image with <span className='gradient-text'>Your Brand Vision</span>
          </h2>
          <p className='text-[#555] text-lg leading-8 text-center max-w-3xl'>
            Your online reputation can be a powerful tool to propel your company ahead. At SISPN Tech, we help you build a strong image that matches your business goals. Here's how:
          </p>
          <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 w-full'>
            {ormBenefits.map((item, idx) => (
              <StrategyCard key={idx} index={idx} title={item.title} description={item.description} />
            ))}
          </div>
        </div>
      </section>

      {/* ── ORM Services Grid ── */}
      <section className='pb-16 lg:px-20 md:px-10 px-6'>
        <div className='flex flex-col gap-8'>
          <div className='flex flex-col gap-3 max-w-3xl mx-auto text-center'>
            <h2 className='text-3xl lg:text-4xl font-bold text-[#1a1a1a]'>
              Tailored ORM Solutions <span className='gradient-text'>For Your Business</span>
            </h2>
            <p className='text-[#555] text-lg leading-8'>A diversity of Online Reputation Management services customised to your specific needs.</p>
          </div>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
            {ormServices.map(service => (
              <ProjectCard key={service.id} image={service.image} description={service.description} title={service.title} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Why SISPN Tech ── */}
      <section className='project relative'>
        <div className='absolute inset-0 bg-black/55' />
        <div className='relative z-10 py-20 lg:px-20 md:px-10 px-6 flex flex-col gap-8 items-center'>
          <h2 className='text-3xl lg:text-4xl font-bold text-white text-center max-w-3xl leading-tight'>
            Choose SISPN Tech for <span className='text-[#e070f0]'>Online Reputation Management</span>
          </h2>
          <p className='text-white/80 text-lg text-center max-w-3xl leading-8'>
            SISPN Tech is an industry-leading Brand Reputation Management Company. We help businesses flourish in the digital world by building and maintaining a reputable online presence. Here's why we stand out:
          </p>
          <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 w-full max-w-4xl'>
            {ormProcess.map((item, idx) => (
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
