"use client"
import ProjectCard from '@/app/(components)/ProjectCard'
import p1 from '@/public/design-p-1.jpg'
import p2 from '@/public/design-p-2.jpg'
import p3 from '@/public/design-p-3.jpg'
import p4 from '@/public/design-p-4.jpg'
import p5 from '@/public/design-p-5.jpg'
import p11 from '@/public/design-p-11.jpg'
import StrategyCard from '@/app/(components)/StrategyCard'
import RequestForm from '@/app/(components)/RequestForm'
import { graphicPrice } from '@/app/pricingData'
import PricingCard from '@/app/(components)/PricingCard'
import Image from 'next/image'
import bg from '@/public/packages-bg.webp'
import { useModal } from '@/app/context/store'
import Popup from '@/app/(components)/Popup'
import ServiceForm from '@/app/(components)/ServicesForm'
import BenefitCard from '@/app/(components)/BenefitCard'

const designServices = [
  { id: 1, title: "Logo Design", description: "Memorable, custom logo designs that form the cornerstone of your brand identity and help you stand out in a crowded market.", image: p1.src },
  { id: 2, title: "Advertising Design", description: "Eye-catching ad creatives and promotional materials for print and digital campaigns that boost engagement and brand awareness.", image: p2.src },
  { id: 3, title: "Brochure Design", description: "Professional brochures, catalogs, and flyers crafted to inform and inspire your audience while maintaining brand consistency.", image: p3.src },
  { id: 4, title: "Social Media Graphics", description: "Custom graphics for Facebook, Instagram, LinkedIn, Twitter, and more — optimised to increase likes, shares, and engagement.", image: p4.src },
  { id: 5, title: "Banners (Web & Physical)", description: "High-impact web banners and physical banners that capture attention at every touchpoint — from trade shows to digital campaigns.", image: p5.src },
  { id: 6, title: "UI/UX Design", description: "User-centric interface and experience design for websites and mobile apps, focused on intuitive navigation and sleek visuals.", image: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=800&q=80" },
  { id: 7, title: "Website Graphics", description: "Striking website visuals including hero images, icons, infographics, and custom illustrations that enrich your online presence.", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80" },
  { id: 8, title: "Motion Graphics & Animation", description: "Engaging animated videos, explainer animations, and social clips that bring your brand story to life in a format audiences love.", image: "https://images.unsplash.com/photo-1690228254548-31ef53e40cd1?w=800&q=80" },
  { id: 9, title: "Print & Packaging Design", description: "From product packaging and labels to business stationery — print-ready designs that make your brand assets stand out on the shelf.", image: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=800&q=80" },
  { id: 10, title: "Book Cover Design", description: "Professional cover designs for books, eBooks, magazines, and reports that attract readers and convey your message at first glance.", image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=80" },
  { id: 11, title: "Branding & Identity", description: "Elegant, branded business card and identity designs that leave a lasting first impression and reinforce your professional image.", image: p11.src },
]

const processSteps = [
  { id: 1, title: "Collaborate & Plan", description: "We start by understanding your brand — project requirements, brand guidelines, and inspiration. Our team listens closely to capture your vision and outline priorities." },
  { id: 2, title: "Design & Develop", description: "Our designers create initial concepts — sketches or digital mockups — based on your brief. We refine internally before sharing with you." },
  { id: 3, title: "Review & Refine", description: "You review drafts and request changes as needed. Thanks to our unlimited revision policy, we iterate until the design is flawless and aligned with your goals." },
  { id: 4, title: "Delivery", description: "Once finalised, we deliver polished designs in all required formats — web, print, or social media. Your files are ready to go live." },
]

const industries = [
  { id: 1, title: "Technology & Startups", description: "Clear, innovative designs to launch and grow your digital products." },
  { id: 2, title: "Healthcare & Pharma", description: "Trust-building visuals that convey professionalism and care." },
  { id: 3, title: "Finance & Legal", description: "Clean, credible branding to reinforce trust and expertise." },
  { id: 4, title: "Retail & E-commerce", description: "Eye-catching graphics to showcase products and promotions effectively." },
  { id: 5, title: "Education & Non-profits", description: "Informative designs that inspire, inform, and drive engagement." },
  { id: 6, title: "Hospitality & Real Estate", description: "Attractive visuals that highlight experiences and properties beautifully." },
  { id: 7, title: "Entertainment & Media", description: "Vibrant, creative content designed to engage and retain audiences." },
  { id: 8, title: "Food & Beverage", description: "Mouth-watering design for packaging, menus, and advertisements." },
  { id: 9, title: "Manufacturing & Industrial", description: "Technical diagrams and brochures that communicate product details clearly." },
  { id: 10, title: "Government & NGOs", description: "Clear, authoritative graphics for public information and campaigns." },
]

export default function page() {
  const { isOpen, closeModal, openModal } = useModal()

  return (
    <main>
      {/* ── Hero ── */}
      <section className='min-h-160 lg:px-20 md:px-10 px-6 graphic relative flex lg:flex-row flex-col justify-between items-center pt-28 pb-16 gap-10'>
        <div className='service-hero-overlay' />
        <div className='relative z-10 flex flex-col gap-7 text-start max-w-2xl'>
          <span className='section-badge border-white/20 text-white/80 bg-white/10'>
            <i className="ri-brush-line"></i>Graphic Design
          </span>
          <h1 className='text-white font-bold text-4xl lg:text-5xl leading-tight'>
            Custom Graphic Design<br />
            <span className='bg-linear-to-r from-[#e070f0] to-[#B83DC8] bg-clip-text text-transparent'>Services With SISPN Tech</span>
          </h1>
          <p className='text-white/80 text-lg leading-8'>At SISPN Tech, we turn your ideas into stunning visual realities. Our award-winning design team specialises in everything from logo design to motion graphics — crafting every asset to captivate your audience and drive results.</p>
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
            <i className="ri-eye-line"></i>Why Visual Excellence Matters
          </span>
          <h2 className='text-3xl lg:text-4xl font-bold text-[#1a1a1a] leading-tight'>
            Design That <span className='gradient-text'>Speaks Before You Do</span>
          </h2>
          <div className='flex flex-col gap-4 text-[#555] text-lg leading-8'>
            <p>In today's fast-paced digital landscape, your brand has seconds to make an impression — and most often, it's your design that speaks first. Research shows 81% of marketers consider creative effectiveness the top factor in a campaign.</p>
            <p>SISPN Tech is a forward-thinking design agency utilising Adobe Photoshop, Illustrator, and InDesign — tailoring each design to your brand's voice, vision, and goals. We bridge creativity with strategy, delivering substance and style with the agility and affordability today's businesses need.</p>
          </div>
        </div>
      </section>

      {/* ── Packages ── */}
      <section className='packages-section'>
        <div className='relative z-10 flex flex-col gap-8 items-center'>
          <span className='section-badge border-white/20 text-white/80 bg-white/10'>
            <i className="ri-price-tag-3-line"></i>Pricing
          </span>
          <h2 className='text-3xl font-bold text-white text-center'>Graphic Design Packages</h2>
          <div className='flex flex-wrap justify-center gap-6 px-4 w-full'>
            {graphicPrice.map((plan, index) => (
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
              Our <span className='gradient-text'>Graphic Design Services</span>
            </h2>
            <p className='text-[#555] text-lg leading-8'>From branding assets to digital experiences — our design experts handle it all.</p>
          </div>
          <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5'>
            {designServices.map(service => (
              <ProjectCard key={service.id} image={service.image} description={service.description} title={service.title} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Process on dark bg ── */}
      <section className='project relative'>
        <div className='absolute inset-0 bg-black/55' />
        <div className='relative z-10 py-20 lg:px-20 md:px-10 px-6 flex flex-col gap-8 items-center'>
          <h2 className='text-3xl lg:text-4xl font-bold text-white text-center max-w-3xl leading-tight'>
            How Our <span className='text-[#e070f0]'>Design Process Works</span>
          </h2>
          <p className='text-white/80 text-lg text-center max-w-2xl leading-8'>
            We make it easy to get started and stay informed at every stage. Our streamlined 4-step process ensures clarity and collaboration throughout.
          </p>
          <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 w-full max-w-4xl'>
            {processSteps.map((item, idx) => (
              <BenefitCard key={idx} index={idx} title={item.title} description={item.description} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Industries ── */}
      <section className='py-16 lg:px-20 md:px-10 px-6 bg-[#faf5fb]'>
        <div className='flex flex-col gap-8 items-center max-w-5xl mx-auto'>
          <span className='section-badge'>
            <i className="ri-building-2-line"></i>Industries We Serve
          </span>
          <h2 className='text-3xl lg:text-4xl font-bold text-[#1a1a1a] text-center leading-tight'>
            Compelling Visuals for <span className='gradient-text'>Every Industry</span>
          </h2>
          <p className='text-[#555] text-lg leading-8 text-center max-w-3xl'>
            Compelling visuals are crucial in every sector. No matter your field, we adapt our creative approach to fit your market and speak the language of your audience.
          </p>
          <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 w-full'>
            {industries.map((item, idx) => (
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
