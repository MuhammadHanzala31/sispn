import ProjectCard from '@/app/(components)/ProjectCard'
import React from 'react'
import imageCard from '@/public/seo-card.png';
import seop1 from '@/public/seo-p-1.png'
import seop2 from '@/public/seo-p-2.png'
import seop3 from '@/public/seo-p-3.png'
import seop4 from '@/public/seo-p-4.png'
import seop5 from '@/public/seo-p-5.png'
import seop6 from '@/public/seo-p-6.png'
import StrategyCard from '@/app/(components)/StrategyCard';
import RequestForm from '@/app/(components)/RequestForm';

const features = [
  {
    id: 1,
    title: "Hyper-Personalized Targeting",
    description:
      "We leverage customer data and behavior insights to create highly targeted campaigns. By segmenting your audience and personalizing content, we ensure every message resonates with the right people at the right time.",
  },
  {
    id: 2,
    title: "Compelling Creative Design",
    description:
      "From eye-catching, mobile-responsive templates to dynamic content (GIFs, videos, interactive elements), we ensure every email looks professional and aligns with your brand voice. A well-designed email captures attention in a crowded inbox.",
  },
  {
    id: 3,
    title: "Smart Automation & Workflows",
    description:
      "We build automated customer journeys — welcome series, abandoned cart reminders, post-purchase follow-ups, re-engagement campaigns, and more. Automation nurtures leads and reactivates dormant customers on autopilot.",
  },
  {
    id: 4,
    title: "Data-Driven Optimization",
    description:
      "We continuously analyze campaign performance using real-time data. By tracking metrics like open rates, click-through rates, and conversions, we refine strategies to maximize results and ROI.",
  },
  {
    id: 5,
    title: "Clear Calls-to-Action",
    description:
      "We engineer emails with prominent, persuasive CTAs that guide subscribers toward your goals (sales, sign-ups, downloads). Every message is crafted to move readers one step closer to conversion.",
  },
];


const benefits = [
  {
    id: 1,
    title: "High Engagement & Conversions",
    description:
      "Well-targeted email leads into leads and prompt action (clicks, purchases, sign-ups). Our campaigns nurture subscribers at every stage of the customer journey to convert interest into measurable results.",
  },
  {
    id: 2,
    title: "Personalized Customer Experience",
    description:
      "By segmenting your audience and using dynamic content, each recipient gets messages that feel personal. Personalized campaigns increase engagement, loyalty, and long-term customer value.",
  },
  {
    id: 3,
    title: "Measurable & Adaptable",
    description:
      "Every email is trackable. We measure opens, clicks, and conversions, then use these insights to continuously refine and improve your campaigns for better performance over time.",
  },
  {
    id: 4,
    title: "Time & Resource Savings",
    description:
      "Email automation reduces manual work by handling repetitive tasks like follow-ups and nurturing sequences. This saves time, cuts costs, and lets your team focus on growth.",
  },
  {
    id: 5,
    title: "Compliance & Deliverability Expertise",
    description:
      "We ensure your emails meet industry standards (CAN-SPAM, GDPR) and follow best practices like proper authentication (SPF, DKIM). This improves inbox placement and protects your sender reputation.",
  },
  {
    id: 6,
    title: "Scalable Growth",
    description:
      "As your business grows, your email strategy evolves with it. We optimize campaigns and automation systems to handle larger audiences while maintaining high performance and ROI.",
  },
];

const services = [
  {
    id: 1,
    title: "Audit & Strategy",
    description:
      "We analyze your current email efforts and audience data, then develop a custom plan.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Email Design & Copywriting",
    description:
      "Our designers and copywriters create beautiful, on-brand email templates.",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Subscriber List Growth",
    description:
      "We design sign-up forms, landing pages, and lead magnets to grow your audience.",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Automated Workflows",
    description:
      "We implement workflows that automate customer journeys and emails.",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    title: "Testing & Optimization",
    description:
      "We A/B test subject lines, designs, and copy to improve performance.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    title: "Reporting & Analytics",
    description:
      "We provide reports showing ROI, engagement, and performance insights.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
  },
];


export default function page() {
  return (
    <main className=''>
      <section className='lg:py-50 py-12 lg:px-[80px] md:px-[40px] px-6 email flex justify-center items-center'>
        <div className='flex flex-col gap-8 items-end justify-center text-center max-w-[1298px] mx-auto'>
          <h4 className='text-white font-medium text-[50px] leading-18' >EMAIL MARKETING <br /> <span className='font-bold'>FULL-SERVICE EMAIL MARKETING WITH SISPN TECH</span></h4>
          <p className='text-white text-lg leading-9 px-12'>As a leading full-service email marketing agency, SISPN Tech transforms your email campaigns into revenue-generating assets. We craft targeted, data-driven strategies that build customer loyalty and drive conversions. By blending creative content, precise segmentation, and advanced automation, our email marketing services ensure your messages reach the right inbox at the right time— unlocking measurable ROI and accelerating your business growth.</p>
        </div>
      </section>
      <section className='lg:py-15 py-12 lg:px-[80px] md:px-[40px] px-6'>
        <div className='flex flex-col gap-5'>
          <div className='flex flex-col gap-2 max-w-[791px] mx-auto'>
            <p className='text-xl text-[#414141] text-center'>What Can We Do</p>
            <h4 className='text-4xl font-bold text-[#81358A] text-center'>THE EMAIL MARKETING COMPANY THAT GETS RESULTS</h4>
          </div>
          <div className='flex flex-col gap-8 items-center max-w-[1566px] mx-auto'>
            <p className='text-[#414141] text-xl text-center'> At SISPN Tech, we don’t just send emails — we build intelligent, conversion-ready communication systems tailored to your business. As a full-service email marketing agency, we align strategy, design, automation, and analytics to help you turn subscribers into loyal customers.</p>
            <p className='text-[#414141] text-xl text-center'> Whether you're scaling an ecommerce brand, launching a new product, or reactivating dormant leads, our campaigns are designed to deliver measurable impact — not just opens and clicks, but real business growth. With a dedicated team, proven tools, and a data-first mindset, SISPN Tech is the email marketing company businesses trust to drive results that matter.</p>
            <p className='text-[#414141] text-xl text-center'>Let’s turn your inbox into your highest-performing sales channel</p>
          </div>
        </div>
      </section>
      <section className='lg:py-15 py-12 lg:px-[80px] md:px-[40px] px-6'>
        <div className='flex flex-col gap-4 items-center'>
          <h4 className='text-4xl font-bold text-[#81358A]'>STRATEGIC EMAIL CAMPAIGNS THAT CONVERT</h4>
          <p className='text-[#414141] text-xl text-center max-w-[1450px] mx-auto'>Effective email marketing is more than just sending messages – it’s about creating meaningful connections. Our approach includes:</p>
          <div className='grid lg:grid-cols-3 grid-cols-1 gap-5'>
            {features?.map((item, idx) => (<StrategyCard key={idx} title={item.title} description={item.description} />))}
          </div>
        </div>
      </section>
      <section className='lg:py-15 py-12 lg:px-[80px] md:px-[40px] px-6'>
        <div className='flex flex-col gap-5'>
          <div className='flex flex-col gap-2 max-w-[791px] mx-auto'>
            <h4 className='text-4xl font-bold text-center text-[#81358A]'>OUR COMPANY’S EMAIL MARKETING SERVICES</h4>
          </div>
          <p className='text-[#414141] text-xl max-w-[1566px] mx-auto text-center'>SISPN Tech offers a comprehensive suite of email marketing services designed to fit any business need:</p>
          <div className='grid lg:grid-cols-3 grid-cols-1 gap-4'>
            {
              services?.map(items => (
                <ProjectCard title={items.title} description={items.description} image={items.image} key={items.id} />
              ))
            }
          </div>
        </div>
      </section>

      <section>
        <div className='lg:py-15 py-12 lg:px-[80px] md:px-[40px] px-6 gap-4 project'>
          <div className='flex flex-col gap-4'>
            <h4 className='text-4xl font-bold text-white text-center '>BENEFITS OF PROFESSIONAL EMAIL MARKETING</h4>
            <p className='text-white text-xl text-center max-w-[1450px] mx-auto'>Email marketing remains one of the most powerful channels for engaging customers. Working with SISPN Tech’s full-service email marketing agency offers many advantages</p>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
              {benefits?.map((item, idx) => (<div key={idx} className='flex flex-col gap-2 border-2 bg-white border-white rounded-2xl p-4'>
                <h4 className='text-2xl font-bold text-[#81358A] text-center'>{item.title}</h4>
                <p className='text-[#414141] text-xl text-center'>{item.description}</p>
              </div>))}
            </div>
          </div>
        </div>
      </section>
      <RequestForm />
    </main>
  )
}
