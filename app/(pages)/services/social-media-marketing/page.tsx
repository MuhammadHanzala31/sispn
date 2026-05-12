"use client"
import ProjectCard from '@/app/(components)/ProjectCard'
import p3 from '@/public/social-p-3.png'
import p4 from '@/public/social-p-4.png'
import StrategyCard from '@/app/(components)/StrategyCard'
import RequestForm from '@/app/(components)/RequestForm'
import { useModal } from '@/app/context/store'
import Popup from '@/app/(components)/Popup'
import ServiceForm from '@/app/(components)/ServicesForm'
import BenefitCard from '@/app/(components)/BenefitCard'

const processSteps = [
  { id: 1, title: "Strategic Discovery & Onboarding", description: "We immerse ourselves in your business — studying your objectives, customers, competitors, and current position to craft a strategy aligned with your brand vision." },
  { id: 2, title: "Audience-Centric Platform Strategy", description: "We identify where your audience is most active and build tailored strategies for Facebook, Instagram, LinkedIn, TikTok, and more to hit your KPIs." },
  { id: 3, title: "Content Planning & Creative Production", description: "Monthly content calendars based on trends, user behaviour, and brand voice — covering static posts, carousels, motion graphics, and short-form videos." },
  { id: 4, title: "Paid Social Campaigns", description: "Conversion-driven ad campaigns with precise targeting, ensuring your ads reach the most relevant audience most likely to take action." },
  { id: 5, title: "Data-Driven Optimisation", description: "We track impressions, clicks, and conversions — providing actionable insights and continuously optimising campaigns for maximum ROI." },
  { id: 6, title: "Ongoing Strategy Evolution", description: "We continuously monitor performance, engage audiences, and adapt strategies based on algorithm changes to keep your brand competitive." },
]

const benefits = [
  { id: 1, title: "Direct Access to Targeted Audiences", description: "With precise targeting based on characteristics, interests, and demographics, you reach real potential customers — not just followers." },
  { id: 2, title: "ROI-Focused Campaigns", description: "Every post, ad, and story is created with performance in mind. We measure KPIs that match your objectives — leads, brand awareness, or direct sales." },
  { id: 3, title: "Proactive Content Management", description: "From planning to publishing, we create content calendars that resonate with your audience while maintaining a consistent brand voice across all platforms." },
  { id: 4, title: "Transparent Communication", description: "You'll always know where your campaign stands. Clear reports delivered on time, with our team available to discuss results and next steps." },
]

const smmServices = [
  { id: 1, title: "Reputation & Review Management", description: "We manage your brand's image across platforms by responding to feedback, monitoring mentions, and optimising social profiles to build trust and credibility.", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" },
  { id: 2, title: "Paid Marketing Ads", description: "Reach the right audience through targeted, data-driven campaigns across Meta, LinkedIn, and TikTok — with creatives that convert.", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80" },
  { id: 3, title: "Organic Marketing", description: "Build a consistent presence with a balanced content strategy that drives engagement, builds trust, and ensures long-term visibility.", image: p3.src },
  { id: 4, title: "Brand Development", description: "We align your brand's visuals and messaging across platforms to create a distinct, recognisable, and consistent identity.", image: p4.src },
  { id: 5, title: "Influencer Marketing", description: "We collaborate with macro and micro influencers aligned with your niche to generate authentic engagement and build trust.", image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=800&q=80" },
  { id: 6, title: "Social Media Strategy & Consulting", description: "We identify growth opportunities, define content direction, and create strategies that improve your social media performance.", image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80" },
  { id: 7, title: "Community Building", description: "We help create loyal, active communities through discussions, engagement strategies, and meaningful interactions that convert passive users into advocates.", image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80" },
  { id: 8, title: "Content Creation", description: "Platform-specific content including reels, posts, and creatives — all tailored to your brand voice and audience preferences.", image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&q=80" },
]

const whyUs = [
  { title: "Platform-Specific Strategies", description: "No generic campaigns. Whether Instagram, LinkedIn, TikTok, or Facebook — strategies are tailored to each platform's algorithms and user behaviour." },
  { title: "ROI-Focused Campaigns", description: "Every piece of content is created with performance in mind. We measure KPIs that match your goals — leads, awareness, or direct sales." },
  { title: "Proactive Content Management", description: "Top-quality content calendars that resonate with your audience while maintaining a consistent brand voice across all platforms." },
  { title: "Transparent Communication", description: "Clear, timely reports and a team always available to discuss results, ideas, and future steps." },
  { title: "Experienced Marketing Team", description: "Years of industry expertise. We're growth strategists committed to producing real, measurable outcomes." },
  { title: "Scalable Solutions", description: "Whether you're a startup or an enterprise, our SMM services adapt to your size, goals, and budget." },
]

export default function page() {
  const { isOpen, closeModal, openModal } = useModal()

  return (
    <main>
      {/* ── Hero ── */}
      <section className='min-h-160 lg:px-20 md:px-10 px-6 social relative flex lg:flex-row flex-col justify-between items-center pt-28 pb-16 gap-10'>
        <div className='service-hero-overlay' />
        <div className='relative z-10 flex flex-col gap-7 text-start max-w-2xl'>
          <span className='section-badge border-white/20 text-white/80 bg-white/10'>
            <i className="ri-instagram-line"></i>Social Media Marketing
          </span>
          <h1 className='text-white font-bold text-4xl lg:text-5xl leading-tight'>
            Social Media Marketing<br />
            <span className='bg-linear-to-r from-[#e070f0] to-[#B83DC8] bg-clip-text text-transparent'>Services With SISPN Tech</span>
          </h1>
          <p className='text-white/80 text-lg leading-8'>Increase your brand's visibility with SISPN Tech — a results-focused Social Media Marketing Agency. We convert audiences into recurring customers using strategies tailored for Facebook, Instagram, LinkedIn, TikTok and more.</p>
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
            <i className="ri-bar-chart-grouped-line"></i>What Can We Do
          </span>
          <h2 className='text-3xl lg:text-4xl font-bold text-[#1a1a1a] leading-tight'>
            Results-Driven <span className='gradient-text'>Social Media Marketing Agency</span>
          </h2>
          <div className='flex flex-col gap-4 text-[#555] text-lg leading-8'>
            <p>At SISPN Tech, we don't just publish content — we plan, optimise, and make it convert. We create data-driven campaigns that increase engagement and yield tangible business outcomes.</p>
            <p>We design high-impact content, leverage viral trends, and create precisely targeted ad campaigns on the platforms where your audience lives. With platform experts and real-time analytics, we turn your social media into a lead-generation machine.</p>
          </div>
          <div className='flex flex-wrap justify-center gap-3 mt-2'>
            {["Campaigns tailored to your business goals", "Paid & Organic strategy in sync", "AI-powered insights", "Continuous testing & optimisation", "Transparent KPI reporting"].map(item => (
              <span key={item} className='flex items-center gap-2 px-4 py-2 rounded-full bg-[#f6edf7] text-[#81358A] text-sm font-medium border border-[#81358A]/15'>
                <i className="ri-check-line text-xs"></i>{item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className='pb-16 lg:px-20 md:px-10 px-6'>
        <div className='flex flex-col gap-8'>
          <div className='flex flex-col gap-3 max-w-3xl mx-auto text-center'>
            <h2 className='text-3xl lg:text-4xl font-bold text-[#1a1a1a]'>
              Tailored SMM Services That <span className='gradient-text'>Fuel Growth</span>
            </h2>
            <p className='text-[#555] text-lg leading-8'>Customised solutions suited to your goals — whether it's sales, visibility, or building an engaged community.</p>
          </div>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
            {smmServices.map(service => (
              <ProjectCard key={service.id} image={service.image} description={service.description} title={service.title} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className='py-16 lg:px-20 md:px-10 px-6 bg-[#faf5fb]'>
        <div className='flex flex-col gap-8 items-center max-w-5xl mx-auto'>
          <span className='section-badge'>
            <i className="ri-flow-chart"></i>Our Framework
          </span>
          <h2 className='text-3xl lg:text-4xl font-bold text-[#1a1a1a] text-center leading-tight'>
            Our Proven SMM <span className='gradient-text'>Execution Framework</span>
          </h2>
          <p className='text-[#555] text-lg leading-8 text-center max-w-3xl'>
            We don't believe in guesswork. Our approach is built on performance clarity and real ROI — turning your social channels into profit-generating machines.
          </p>
          <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 w-full'>
            {processSteps.map((item, idx) => (
              <StrategyCard key={idx} index={idx} title={item.title} description={item.description} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Social is a growth engine ── */}
      <section className='project relative'>
        <div className='absolute inset-0 bg-black/55' />
        <div className='relative z-10 py-20 lg:px-20 md:px-10 px-6 flex flex-col gap-8 items-center'>
          <h2 className='text-3xl lg:text-4xl font-bold text-white text-center max-w-3xl leading-tight'>
            Social Media Is a <span className='text-[#e070f0]'>Growth Engine for Brands</span>
          </h2>
          <p className='text-white/80 text-lg text-center max-w-3xl leading-8'>
            Social media marketing is more than posting updates — it's a powerful channel to connect with customers where they spend their time and influence purchase decisions. SISPN Tech's SMM services increase visibility and directly impact sales, retention, and engagement.
          </p>
          <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 w-full max-w-4xl'>
            {benefits.map((item, idx) => (
              <BenefitCard key={idx} index={idx} title={item.title} description={item.description} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Why SISPN Tech ── */}
      <section className='py-16 lg:px-20 md:px-10 px-6'>
        <div className='flex flex-col gap-8 items-center max-w-5xl mx-auto'>
          <span className='section-badge'>
            <i className="ri-shield-star-line"></i>Why Choose Us
          </span>
          <h2 className='text-3xl lg:text-4xl font-bold text-[#1a1a1a] text-center leading-tight'>
            Why SISPN Tech for <span className='gradient-text'>Social Media Marketing?</span>
          </h2>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 w-full'>
            {whyUs.map((item, idx) => (
              <StrategyCard key={idx} index={idx} title={item.title} description={item.description} />
            ))}
          </div>
        </div>
      </section>

      <RequestForm />
      <Popup isOpen={isOpen} onClose={closeModal} />
    </main>
  )
}
