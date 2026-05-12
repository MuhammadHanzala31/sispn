"use client"
import ProjectCard from '@/app/(components)/ProjectCard'
import p1 from '@/public/d-p-1/daniel-korpai-pKRNxEguRgM-unsplash.png'
import p2 from '@/public/d-p-2/aashish-yadav-YIHEZ8neNBE-unsplash (1).png'
import p3 from '@/public/d-p-3/viseo-conseil-8XaM86qk9Ac-unsplash.png'
import p4 from '@/public/d-p-4/nubelson-fernandes-jKL2PvKN8Q0-unsplash.png'
import p5 from '@/public/d-p-5/team-nocoloco-Yt9wUh3ZB3Q-unsplash.png'
import p6 from '@/public/d-p-6/azwedo-l-lc-nT4WsKUoLo4-unsplash.png'
import p7 from '@/public/d-p-7/dmitriy-demidov-iuuJC_pjLU0-unsplash.png'
import StrategyCard from '@/app/(components)/StrategyCard'
import RequestForm from '@/app/(components)/RequestForm'
import { webDevPricing } from '@/app/pricingData'
import PricingCard from '@/app/(components)/PricingCard'
import Image from 'next/image'
import bg from '@/public/packages-bg.webp'
import { useModal } from '@/app/context/store'
import Popup from '@/app/(components)/Popup'
import ServiceForm from '@/app/(components)/ServicesForm'
import BenefitCard from '@/app/(components)/BenefitCard'

const services = [
  { image: p1, title: "Custom Web Development", description: "We build powerful, scalable web apps tailored to your business logic — from CRM and ERP to booking platforms and social networks. Using React, Angular, Django, and Node.js, we deliver applications that are secure, efficient, and user-friendly." },
  { image: p2, title: "CMS Development", description: "Easily manage your site content with customised CMS platforms. Whether it's WordPress, Drupal, Joomla, or a headless CMS, we tailor the setup to give you full control without requiring technical expertise." },
  { image: p3, title: "E-Commerce Development", description: "Convert visitors into customers with secure, fast, conversion-focused online stores — from setup and payment gateway integration to inventory sync and smooth checkout flows that reduce cart abandonment." },
  { image: p4, title: "Front-End & Back-End Development", description: "From sleek UIs to solid, secure backend systems, we handle both ends. Front-end: React, Angular, Vue.js. Back-end: Python, PHP, .NET, and more — built to scale." },
  { image: p5, title: "Web Portals & Intranets", description: "Secure, role-based portals for employees, customers, or partners — with document sharing, real-time dashboards, and tools that streamline internal and external collaboration." },
  { image: p6, title: "Mobile-Responsive Design", description: "Mobile-first websites that adapt perfectly to any device. With SEO optimisation built in, your site won't just look great — it will perform and rank better too." },
  { image: p7, title: "Maintenance & Support", description: "Post-launch services including performance monitoring, bug fixes, feature enhancements, and security patches to keep your digital platform running flawlessly." },
]

const processSteps = [
  { title: "Initial Assessment", description: "We dive deep into your business environment, target audience, and competitors to design a strategy that establishes the basis for long-term growth." },
  { title: "Strategic Planning", description: "A detailed roadmap with timelines, technologies, and milestones — including risk assessment to ensure smooth execution and clear goals." },
  { title: "Implementation", description: "Precise execution with a focus on site structure, content quality, mobile-friendliness, backlink building, and a seamless user experience." },
  { title: "Performance Monitoring", description: "Continuous evaluation of key performance indicators with transparent reporting to keep you informed and ensure real outcomes." },
]

const devProcess = [
  { title: "Requirement Gathering", description: "We analyse your business needs to define scope and objectives. Our team collaborates closely to ensure every detail aligns with your vision." },
  { title: "Planning & Strategy", description: "A detailed roadmap with timelines, technologies, and milestones tailored to your project — including risk assessment for smooth execution." },
  { title: "UI/UX Design", description: "Intuitive, engaging interfaces with interactive prototypes. User-friendly designs that enhance engagement and reflect your brand identity." },
  { title: "Development", description: "Robust solutions built using agile methodologies and cutting-edge technologies, ensuring scalability and performance for your growing business." },
  { title: "Testing & QA", description: "Rigorous testing for functionality, performance, security, and compatibility. Multiple cycles guarantee a reliable and secure final product." },
  { title: "Support & Maintenance", description: "Continuous updates, optimisation, and support post-launch — keeping your website secure, current, and performing at its best." },
]

export default function page() {
  const { isOpen, closeModal, openModal } = useModal()

  return (
    <main>
      {/* ── Hero ── */}
      <section className='min-h-160 lg:px-20 md:px-10 px-6 web relative flex lg:flex-row flex-col justify-between items-center pt-28 pb-16 gap-10'>
        <div className='service-hero-overlay' />
        <div className='relative z-10 flex flex-col gap-7 text-start max-w-2xl'>
          <span className='section-badge border-white/20 text-white/80 bg-white/10'>
            <i className="ri-code-s-slash-line"></i>Web Development
          </span>
          <h1 className='text-white font-bold text-4xl lg:text-5xl leading-tight'>
            Custom Website Development<br />
            <span className='bg-linear-to-r from-[#e070f0] to-[#B83DC8] bg-clip-text text-transparent'>Services With SISPN Tech</span>
          </h1>
          <p className='text-white/80 text-lg leading-8'>Transform your digital identity with SISPN Tech's professional website development services. Our seasoned team creates attractive, responsive, high-performance websites and e-commerce stores that engage users and drive business growth — blending intuitive UI/UX with scalable, secure back-end development.</p>
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
            <i className="ri-rocket-line"></i>What Can We Do
          </span>
          <h2 className='text-3xl lg:text-4xl font-bold text-[#1a1a1a] leading-tight'>
            SISPN Tech — Your <span className='gradient-text'>Digital Growth Partner</span>
          </h2>
          <div className='flex flex-col gap-4 text-[#555] text-lg leading-8'>
            <p>We don't just build websites — we build digital ecosystems that grow with your business. At SISPN Tech, every line of code serves a purpose. We create custom solutions that blend aesthetics, speed, functionality, and user experience to deliver tangible business outcomes.</p>
            <p>From corporate websites to complex web portals, we've helped brands across industries enhance their digital footprint. Let your website do more than look good — let it perform, scale, and convert.</p>
          </div>
        </div>
      </section>

      {/* ── Packages ── */}
      <section className='packages-section'>
        <div className='relative z-10 flex flex-col gap-8 items-center'>
          <span className='section-badge border-white/20 text-white/80 bg-white/10'>
            <i className="ri-price-tag-3-line"></i>Pricing
          </span>
          <h2 className='text-3xl font-bold text-white text-center'>Web Development Packages</h2>
          <div className='flex flex-wrap justify-center gap-6 px-4 w-full'>
            {webDevPricing.map((plan, index) => (
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
              Complete Web Development <span className='gradient-text'>Solutions</span>
            </h2>
            <p className='text-[#555] text-lg leading-8'>A full spectrum of services to meet the needs of modern businesses — from startups to enterprises.</p>
          </div>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
            {services.map((service, idx) => (
              <ProjectCard key={idx} image={service.image} title={service.title} description={service.description} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Strategy ── */}
      <section className='py-16 lg:px-20 md:px-10 px-6 bg-[#faf5fb]'>
        <div className='flex flex-col gap-8 items-center max-w-5xl mx-auto'>
          <span className='section-badge'>
            <i className="ri-map-2-line"></i>Our Methodology
          </span>
          <h2 className='text-3xl lg:text-4xl font-bold text-[#1a1a1a] text-center leading-tight'>
            Tailored Strategy for <span className='gradient-text'>Sustainable Growth</span>
          </h2>
          <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 w-full'>
            {processSteps.map((item, idx) => (
              <StrategyCard key={idx} index={idx} title={item.title} description={item.description} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Dev Process on dark bg ── */}
      <section className='project relative'>
        <div className='absolute inset-0 bg-black/55' />
        <div className='relative z-10 py-20 lg:px-20 md:px-10 px-6 flex flex-col gap-8 items-center'>
          <h2 className='text-3xl lg:text-4xl font-bold text-white text-center max-w-3xl leading-tight'>
            Our Web Development <span className='text-[#e070f0]'>Process</span>
          </h2>
          <p className='text-white/80 text-lg text-center max-w-3xl leading-8'>
            At SISPN Tech, we deliver tailored web solutions with a structured, client-focused approach. Our six-step process combines expertise, innovation, and dedication to build high-performing websites that meet your unique business goals.
          </p>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 w-full max-w-5xl'>
            {devProcess.map((item, idx) => (
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
