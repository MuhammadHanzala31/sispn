"use client"
import ProjectCard from '@/app/(components)/ProjectCard'
import p1 from '@/public/ads-p-1.jpg'
import p2 from '@/public/ads-p-3.jpg'
import p22 from '@/public/ads-2.jpg'
import p3 from '@/public/ads-p-3.jpg'
import p4 from '@/public/ads-p-4.jpg'
import p5 from '@/public/ads-p-5.jpg'
import p6 from '@/public/ads-p-6.jpg'
import p7 from '@/public/ads-p-7.jpg'
import p8 from '@/public/ads-p-8.jpg'
import p9 from '@/public/ads-p-9.jpg'
import StrategyCard from '@/app/(components)/StrategyCard'
import RequestForm from '@/app/(components)/RequestForm'
import { useModal } from '@/app/context/store'
import Popup from '@/app/(components)/Popup'
import ServiceForm from '@/app/(components)/ServicesForm'
import BenefitCard from '@/app/(components)/BenefitCard'

const googleAdsProcess = [
  {
    id: 1,
    title: "Targeted Reach",
    description: "Google Ads allows users to target specific areas, demographics, interests, behaviour, and devices — making sure your ads are seen by the right audience at the right moment, with the most relevant keywords and messaging.",
  },
  {
    id: 2,
    title: "Instant Visibility",
    description: "Once your campaign goes live, your ads are activated instantly, giving your business immediate visibility across your target audience — driving traffic and generating leads from the very first moment.",
  },
  {
    id: 3,
    title: "Measurable Results",
    description: "With detailed analytics, you can monitor effectiveness, track conversions, and make real-time adjustments to continuously increase ROI.",
  },
  {
    id: 4,
    title: "Budget Control",
    description: "Set a daily or monthly budget aligned with your financial goals to ensure you never overspend while reaching your objectives.",
  },
]

const googleAdsServices = [
  { id: 1, title: "Search Ads", image: p1, description: "We create high-intent keyword ads that appear at the top of Google Search, capturing leads who are ready to buy and driving relevant, purchase-intent traffic to your site." },
  { id: 2, title: "Display Ads", image: p22, description: "Visually appealing banner ads running on the Google Display Network — reaching potential customers across millions of apps and websites to boost brand visibility." },
  { id: 3, title: "Shopping Ads", image: p3, description: "For e-commerce businesses, our shopping campaigns display product images, prices, and details directly in Google results — converting browsers into buyers." },
  { id: 4, title: "Video Ads", image: p4, description: "Compelling video ads on YouTube and Google partner sites that use storytelling and creative visuals to capture viewer attention and build brand loyalty." },
  { id: 5, title: "Remarketing Ads", image: p5, description: "Re-engage visitors who have previously shown interest in your brand, keeping your business top-of-mind and encouraging them to return and convert." },
  { id: 6, title: "Local Service Ads", image: p6, description: "Connect with local customers searching for your services. Displayed with a 'Google Guaranteed' badge and direct contact options for instant lead capture." },
  { id: 7, title: "App Promotion Ads", image: p7, description: "Drive app installs and engagement through targeted ads on Google Search, YouTube, and the Play Store — designed for users most likely to download your app." },
  { id: 8, title: "PPC Management", image: p8, description: "Full-service PPC management with ongoing bid, budget, and targeting optimisation across campaigns to maximise ROI on every dollar spent." },
  { id: 9, title: "Performance Max", image: p9, description: "AI-powered campaigns that deliver goal-driven ads across all Google channels — Search, Display, YouTube, Gmail, Maps, and Discover — from a single campaign." },
]

const whyChooseUs = [
  { id: 1, title: "Customized Strategies", description: "We build bespoke Google Ads funnels aligned to your specific business objectives, industry nuances, and target audience for maximum engagement and ROI." },
  { id: 2, title: "Data-Driven Decisions", description: "Performance is monitored constantly. We analyse user behaviour and adapt strategies in real-time, ensuring your budget is always working as hard as possible." },
  { id: 3, title: "Transparent Reporting", description: "Regular, comprehensive reports on campaign performance. Our team is always available to discuss strategy, answer questions, and share insights." },
  { id: 4, title: "Advanced Tools", description: "We use the most up-to-date techniques and platforms to stay ahead in the constantly evolving digital advertising landscape." },
  { id: 5, title: "Certified Professionals", description: "Our certified Google Ads experts bring authentic expertise to your campaigns, ensuring best-practice optimisation and compliance." },
  { id: 6, title: "Dedicated Support", description: "You get a dedicated account manager focused on your success — not just another client number." },
]

export default function page() {
  const { isOpen, closeModal, openModal } = useModal()

  return (
    <main>
      {/* ── Hero ── */}
      <section className='min-h-[640px] lg:px-20 md:px-10 px-6 google relative flex lg:flex-row flex-col justify-between items-center pt-28 pb-16 gap-10'>
        <div className='service-hero-overlay' />
        <div className='relative z-10 flex flex-col gap-7 text-start max-w-2xl'>
          <span className='section-badge border-white/20 text-white/80 bg-white/10'>
            <i className="ri-google-line"></i>Google Ads
          </span>
          <h1 className='text-white font-bold text-4xl lg:text-5xl leading-tight'>
            Google Ads Services<br />
            <span className='bg-linear-to-r from-[#e070f0] to-[#B83DC8] bg-clip-text text-transparent'>With SISPN Tech</span>
          </h1>
          <p className='text-white/80 text-lg leading-8'>Looking to grow with Google Ads? SISPN Tech delivers data-driven campaigns that go beyond clicks — focusing on real growth in sales, revenue, and ROI. From Search and Shopping to Video, we create tailored strategies that deliver consistent, long-term performance.</p>
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
            Our Complete Suite of <span className='gradient-text'>Google Ads Campaign Services</span>
          </h2>
          <p className='text-[#555] text-lg leading-8'>
            SISPN Tech's Google Ads expertise spans all major campaign formats — providing a multichannel advertising strategy that meets customers at every stage of their journey. From high-intent Search ads to retargeting, Shopping, and Performance Max, we select the right campaign type to achieve your business goals across Google's entire network.
          </p>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className='pb-16 lg:px-20 md:px-10 px-6'>
        <div className='flex flex-col gap-8'>
          <div className='flex flex-col gap-3 max-w-2xl mx-auto text-center'>
            <h2 className='text-3xl font-bold text-[#1a1a1a]'>
              Comprehensive <span className='gradient-text'>Ad Campaign Services</span>
            </h2>
          </div>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
            {googleAdsServices.map(service => (
              <ProjectCard image={service.image} description={service.description} title={service.title} key={service.id} />
            ))}
          </div>
        </div>
      </section>

      {/* ── What are Google Ads ── */}
      <section className='py-16 lg:px-20 md:px-10 px-6 bg-[#faf5fb]'>
        <div className='flex flex-col gap-8 items-center max-w-5xl mx-auto'>
          <span className='section-badge'>
            <i className="ri-question-line"></i>Understanding Google Ads
          </span>
          <h2 className='text-3xl lg:text-4xl font-bold text-[#1a1a1a] text-center leading-tight'>
            What Are Google Ads & How Can They <span className='gradient-text'>Boost Your Business?</span>
          </h2>
          <p className='text-[#555] text-lg leading-8 text-center'>
            Google Ads is a powerful online advertising platform that allows businesses to place ads across Google's vast network — search results, YouTube, Google Maps, and partner sites. Operating on a pay-per-click (PPC) model, you only pay when a user clicks your ad, making it one of the most cost-efficient ways to reach customers actively searching for what you offer.
          </p>
          <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 w-full'>
            {googleAdsProcess.map((item, idx) => (
              <StrategyCard key={idx} index={idx} title={item.title} description={item.description} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Growth section ── */}
      <section className='project relative'>
        <div className='absolute inset-0 bg-black/55' />
        <div className='relative z-10 py-20 lg:px-20 md:px-10 px-6 flex flex-col gap-8 items-center'>
          <h2 className='text-3xl lg:text-4xl font-bold text-white text-center max-w-3xl leading-tight'>
            How Does Google Ads <span className='text-[#e070f0]'>Boost Business Growth?</span>
          </h2>
          <p className='text-white/80 text-lg text-center max-w-3xl leading-8'>
            Using Google's enormous reach and advanced targeting, you connect with potential customers at the exact moment they're searching for your products or services — driving relevant traffic, improving conversion probability, and ultimately increasing sales and revenue.
          </p>
          <p className='text-white/70 text-base text-center max-w-2xl leading-7'>
            The platform's flexibility also enables continuous optimisation through A/B testing, keyword refinement, and performance analysis — ensuring your campaigns evolve with your business goals.
          </p>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 w-full max-w-5xl'>
            {whyChooseUs.map((item, idx) => (
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
