"use client"
import ProjectCard from '@/app/(components)/ProjectCard'
import p1 from '@/public/email-p-1.jpg'
import p2 from '@/public/email-p-2.jpg'
import p3 from '@/public/email-p-3.jpg'
import p4 from '@/public/email-p-4.jpg'
import StrategyCard from '@/app/(components)/StrategyCard'
import RequestForm from '@/app/(components)/RequestForm'
import { useModal } from '@/app/context/store'
import Popup from '@/app/(components)/Popup'
import ServiceForm from '@/app/(components)/ServicesForm'
import BenefitCard from '@/app/(components)/BenefitCard'

const features = [
  { id: 1, title: "Hyper-Personalised Targeting", description: "We leverage customer data and behaviour insights to create highly targeted campaigns — segmenting your audience and personalising content so every message resonates with the right people at the right time." },
  { id: 2, title: "Compelling Creative Design", description: "From eye-catching, mobile-responsive templates to dynamic content (GIFs, videos, interactive elements), every email looks professional and aligns with your brand voice — capturing attention in a crowded inbox." },
  { id: 3, title: "Smart Automation & Workflows", description: "We build automated customer journeys — welcome series, abandoned cart reminders, post-purchase follow-ups, and re-engagement campaigns. Automation nurtures leads and reactivates dormant customers on autopilot." },
  { id: 4, title: "Data-Driven Optimisation", description: "Continuous analysis of campaign performance using real-time data. We track open rates, click-through rates, and conversions — refining strategies to maximise results and ROI." },
]

const benefits = [
  { id: 1, title: "High Engagement & Conversions", description: "Well-targeted emails nurture subscribers at every stage of the customer journey, converting interest into measurable results — clicks, purchases, and sign-ups." },
  { id: 2, title: "Personalised Customer Experience", description: "Segmentation and dynamic content ensure each recipient gets messages that feel personal — increasing engagement, loyalty, and long-term customer value." },
  { id: 3, title: "Measurable & Adaptable", description: "Every email is trackable. We measure opens, clicks, and conversions — then use these insights to continuously refine campaigns for better performance." },
  { id: 4, title: "Time & Resource Savings", description: "Email automation handles repetitive tasks like follow-ups and nurturing sequences, saving time and cutting costs so your team can focus on growth." },
  { id: 5, title: "Compliance & Deliverability", description: "We ensure campaigns meet CAN-SPAM and GDPR standards with proper authentication (SPF, DKIM), improving inbox placement and protecting your sender reputation." },
  { id: 6, title: "Scalable Growth", description: "As your business grows, your email strategy evolves with it — optimised to handle larger audiences while maintaining high performance and ROI." },
]

const emailServices = [
  { id: 1, title: "Audit & Strategy", description: "We analyse your brand, performance, and digital presence to identify growth opportunities and build smart, data-driven strategies that deliver measurable results.", image: p1.src },
  { id: 2, title: "Email Design & Copywriting", description: "Visually engaging designs and compelling copy that capture attention, strengthen your brand message, and drive customer engagement — from promotional campaigns to automated sequences.", image: p2.src },
  { id: 3, title: "Subscriber List Growth", description: "We grow your subscriber base through targeted strategies, optimised lead capture systems, and engaging campaigns that attract quality audience members and convert them into loyal subscribers.", image: p3.src },
  { id: 4, title: "Automated Workflows", description: "Smart automated workflows that streamline repetitive tasks, improve efficiency, and enhance customer experiences — saving time, reducing manual work, and scaling operations effectively.", image: p4.src },
  { id: 5, title: "Testing & Optimisation", description: "Continuous A/B testing and strategic improvements across campaigns, user experience, and performance metrics to ensure maximum engagement, conversions, and business growth.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop" },
  { id: 6, title: "Reporting & Analytics", description: "Detailed reporting that tracks performance, measures results, and delivers clear insights — turning complex data into actionable decisions that drive continuous growth.", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop" },
]

export default function page() {
  const { isOpen, closeModal, openModal } = useModal()

  return (
    <main>
      {/* ── Hero ── */}
      <section className='min-h-160 lg:px-20 md:px-10 px-6 email relative flex lg:flex-row flex-col justify-between items-center pt-28 pb-16 gap-10'>
        <div className='service-hero-overlay' />
        <div className='relative z-10 flex flex-col gap-7 text-start max-w-2xl'>
          <span className='section-badge border-white/20 text-white/80 bg-white/10'>
            <i className="ri-mail-send-line"></i>Email Marketing
          </span>
          <h1 className='text-white font-bold text-4xl lg:text-5xl leading-tight'>
            Full-Service Email Marketing<br />
            <span className='bg-linear-to-r from-[#e070f0] to-[#B83DC8] bg-clip-text text-transparent'>With SISPN Tech</span>
          </h1>
          <p className='text-white/80 text-lg leading-8'>SISPN Tech transforms your email campaigns into revenue-generating assets. We craft targeted, data-driven strategies that build customer loyalty and drive conversions — unlocking measurable ROI and accelerating business growth.</p>
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
            <i className="ri-lightbulb-flash-line"></i>What Can We Do
          </span>
          <h2 className='text-3xl lg:text-4xl font-bold text-[#1a1a1a] leading-tight'>
            The Email Marketing Company <span className='gradient-text'>That Gets Results</span>
          </h2>
          <div className='flex flex-col gap-4 text-[#555] text-lg leading-8'>
            <p>At SISPN Tech, we don't just send emails — we build intelligent, conversion-ready communication systems tailored to your business. We align strategy, design, automation, and analytics to help you turn subscribers into loyal customers.</p>
            <p>Whether you're scaling an e-commerce brand, launching a new product, or reactivating dormant leads, our campaigns are designed to deliver measurable impact — not just opens and clicks, but real business growth.</p>
            <p className='font-semibold text-[#81358A]'>Let's turn your inbox into your highest-performing sales channel.</p>
          </div>
        </div>
      </section>

      {/* ── Benefits on dark bg ── */}
      <section className='project relative'>
        <div className='absolute inset-0 bg-black/55' />
        <div className='relative z-10 py-20 lg:px-20 md:px-10 px-6 flex flex-col gap-8 items-center'>
          <h2 className='text-3xl lg:text-4xl font-bold text-white text-center max-w-3xl leading-tight'>
            Benefits of <span className='text-[#e070f0]'>Professional Email Marketing</span>
          </h2>
          <p className='text-white/80 text-lg text-center max-w-3xl leading-8'>
            Email marketing remains one of the most powerful channels for engaging customers. Working with SISPN Tech offers many advantages:
          </p>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 w-full max-w-5xl'>
            {benefits.map((item, idx) => (
              <BenefitCard key={idx} index={idx} title={item.title} description={item.description} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Strategy ── */}
      <section className='py-16 lg:px-20 md:px-10 px-6 bg-[#faf5fb]'>
        <div className='flex flex-col gap-8 items-center max-w-5xl mx-auto'>
          <span className='section-badge'>
            <i className="ri-target-line"></i>Our Approach
          </span>
          <h2 className='text-3xl lg:text-4xl font-bold text-[#1a1a1a] text-center leading-tight'>
            Strategic Email Campaigns <span className='gradient-text'>That Convert</span>
          </h2>
          <p className='text-[#555] text-lg leading-8 text-center max-w-3xl'>
            Effective email marketing is more than sending messages — it's about creating meaningful connections at every stage of the customer journey.
          </p>
          <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 w-full'>
            {features.map((item, idx) => (
              <StrategyCard key={idx} index={idx} title={item.title} description={item.description} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className='py-16 lg:px-20 md:px-10 px-6'>
        <div className='flex flex-col gap-8'>
          <div className='flex flex-col gap-3 max-w-3xl mx-auto text-center'>
            <h2 className='text-3xl lg:text-4xl font-bold text-[#1a1a1a]'>
              Our Email Marketing <span className='gradient-text'>Services</span>
            </h2>
            <p className='text-[#555] text-lg leading-8'>A comprehensive suite of email marketing services designed to fit any business need.</p>
          </div>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
            {emailServices.map(item => (
              <ProjectCard key={item.id} title={item.title} description={item.description} image={item.image} />
            ))}
          </div>
        </div>
      </section>

      <RequestForm />
      <Popup isOpen={isOpen} onClose={closeModal} />
    </main>
  )
}
