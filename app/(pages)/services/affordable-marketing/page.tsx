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

const seoProcess = [
    {
        "title": "Data-Driven Digital Marketing Strategies",
        "description": "SSPN Tech uses digital data and analytics through deep research for its digital marketing services. Our data-driven research through a clear-cut methodology ensures that the marketing strategies we design are effective and help achieve optimal results for every client."
    },
    {
        "title": "Industry Experts",
        "description": "Our strength lies in our team of industry experts in the world of digital marketing. With their experience, they understand the nuances of the digital market and craft strategies that align with current trends to deliver effective results."
    },
    {
        "title": "Affordable Services",
        "description": "Every digital marketing agency strives to be the best in the industry. SSPN’s Internet Marketing Agency stands out by offering cost-effective services that are tailored to client needs while maintaining high-quality results."
    },
    {
        "title": "Customized Solution in Digital Marketing",
        "description": "SSPN Tech implements a holistic framework in online marketing by understanding each client’s working process and business goals. We focus on delivering customized strategies that ensure maximum ROI."
    },
    {
        "title": "Real Business Outcome",
        "description": "From business leads to actual returns and sales, SSPN Tech ensures real and impactful outcomes. Our team analyzes different approaches to deliver results that ensure sustained growth and profitability."
    }
];


const seoBenefits = [
    { "title": "Google Ads" },
    { "title": "Search Engine Optimization" },
    { "title": "Social Media Marketing" },
    { "title": "Branding and ORM" },
    { "title": "eCommerce Marketing" },
    { "title": "Email Marketing" },
    { "title": "Web Development" },
    { "title": "Graphics Designing" },
    { "title": "Content Marketing" }
]

const features = [
    {
        id: 1,
        title: "Strategic Discovery",
        description:
            "We begin with listening to you, your aspirations, business sector, and clientele so that we can create an authentic strategy seamlessly integrated with your business vision.",
        image: "/images/strategic-discovery.jpg",
    },
    {
        id: 2,
        title: "Comprehensive Tech Audit",
        description:
            "We perform an all-inclusive audit of your company. It includes examining your website performance, UI & UX, SEO, social pages, and overall system infrastructure to identify gaps and areas where growth is achievable.",
        image: "/images/tech-audit.jpg",
    },
    {
        id: 3,
        title: "Custom Solution Development",
        description:
            "We create custom solutions designed for your specific problems, custom marketing strategies, application development, or cloud solutions integration.",
        image: "/images/custom-solution.jpg",
    },
    {
        id: 4,
        title: "Professional Implementation",
        description:
            "Our professionals utilize advanced technologies and tools while implementing the strategy to ensure smooth execution at all deployment levels and full alignment with the defined goals.",
        image: "/images/professional-implementation.jpg",
    },
    {
        id: 5,
        title: "Live Monitoring For Improvement",
        description:
            "We ensure constant optimization using real-time tracking, A/B testing, and agile shifts with the goal of keeping your assets at the forefront long after launch.",
        image: "/images/live-monitoring.jpg",
    },
    {
        id: 6,
        title: "Transparent Reporting",
        description:
            "Seamless, actionable reports are delivered to illustrate precise progress, goals achieved, and next targets using our adaptable technological strategies as you expand your business reach.",
        image: "/images/reporting.jpg",
    },
];


export default function page() {
    return (
        <main className=''>
            <section className='lg:py-50 py-12 lg:px-[80px] md:px-[40px] px-6 seo flex justify-center items-center'>
                <div className='flex flex-col gap-8 items-end justify-center text-center max-w-[1298px] mx-auto'>
                    <h4 className='text-white font-medium text-[50px] leading-18' >AFFORDABLE DIGITAL MARKETING <br /> <span className='font-bold'>DELIVER MORE SALES WITH SISPN TECH</span></h4>
                    <p className='text-white text-lg leading-9 px-12'>SISPN Tech's comprehensive digital marketing services deliver more sales, leads, conversions, and revenue by leveraging years of industry experience and proven strategies. We serve businesses of all sizes across diverse industries with transparent methods grounded in organic and paid marketing best practices to maximize ROI and align with your business objectives. With worldwide reach and a reliable, performance-focused approach, our experienced team ensures every marketing investment drives measurable success.</p>
                </div>
            </section>
            <section className='lg:py-15 py-12 lg:px-[80px] md:px-[40px] px-6'>
                <div className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-2 max-w-[791px] mx-auto'>
                        <p className='text-xl text-[#414141] text-center'>What Can We Do</p>
                        <h4 className='text-4xl font-bold text-[#81358A] text-center'>OUR DIGITAL MARKETING SERVICE DRIVES BUSINESS GROWTH</h4>
                    </div>
                    <div className='flex flex-col gap-8 items-center max-w-[1566px] mx-auto'>
                        <p className='text-[#414141] text-xl text-center'> At SISPN Tech, we provide a combination of advanced digital marketing services that are customer-oriented and guaranteed to surpass expectations. Our work starts with an in-depth analysis of the industry and the audience to ensure the marketing campaigns resonate well with your business's objectives. Our exclusive technology and advanced software tools help optimize custom strategies for our clients in the changing digital landscape. We develop long-lasting business partnerships with our clients to enable direct communication and build trust with each step taken, ensuring their business receives tailored marketing strategies beyond simple marketing services. This allows clients to target social media and other channels where audiences can be accessed with precision. This methodology of digital marketing, coupled with our industry experience ensures that the outcomes achieve the desired results, leading to a dual win scenario for both us and the client through an increase in profits. Clients are provided with professional-grade reports stating real-time business insights. SISPN Tech has dedicated itself to the continuous enhancement of business performance and customer engagement through unparalleled streamlining.</p>
                    </div>
                </div>
            </section>
            <div className='lg:py-15 py-12 lg:px-[80px] md:px-[40px] px-6 gap-4 project'>
                <div className='flex flex-col gap-4'>
                    <h4 className='text-4xl font-bold text-white text-center '>OUR SEO PROCESS</h4>
                    <p className='text-white text-xl text-center max-w-[1450px] mx-auto'>In today’s digital world, having a website is just the beginning of your online journey. In order to be truly successful online, your business needs to be credible, visible and easily discoverable by your target audience. This is the reason that Search Engine Optimization (SEO) is in the picture. In SISPN Tech, we specialize in offering comprehensive SEO services specifically tailored to your business goals to improve your web presence, bring relevant traffic, and convert visitors to loyal customers.</p>
                    <div className='grid lg:grid-cols-3 grid-cols-2 gap-5'>
                        {seoBenefits?.map((item, idx) => (<div key={idx} className='flex flex-col gap-2 border-2 bg-white border-white rounded-2xl p-4'>
                            <h4 className='text-2xl font-bold text-[#81358A] text-center'>{item.title}</h4>
                        </div>))}
                    </div>
                </div>
            </div>
            <section className='lg:py-15 py-12 lg:px-[80px] md:px-[40px] px-6'>
                <div className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-2 max-w-[791px] mx-auto'>
                        <h4 className='text-4xl font-bold text-center text-[#81358A]'>FEATURED ONLINE MARKETING SERVICES BY SISPN TECH</h4>
                    </div>
                    <p className='text-[#414141] text-xl max-w-[1566px] mx-auto text-center px-36'>At SISPN Tech, we provide a complete suite of customizable online marketing services that drive tangible business growth. We do not use a formulaic approach unlike other firms. Instead, we use a tailored approach to each campaign designed with distinct goals, ideal customers, and marketplace nuances. Our experts blend cutting-edge analytics and tailored strategies to achieve superior SEO, PPC, content, and social media marketing results. SISPN Tech will help you achieve optimal brand visibility, conversions, and sustained loyalty, and partner with you every step of the way.</p>
                    <div className='grid lg:grid-cols-3 grid-cols-1 gap-4'>
                        {features?.map((item => (
                            <ProjectCard key={item.id} title={item.title} description={item.description} image={seop1} />
                        )))}
                    </div>
                </div>
            </section>
            <section className='lg:py-15 py-12 lg:px-[80px] md:px-[40px] px-6'>
                <div className='flex flex-col gap-4 items-center'>
                    <h4 className='text-4xl font-bold text-[#81358A]'>TAILORED SEO STRATEGY FOR SUSTAINABLE GROWTH</h4>
                    <p className='text-[#414141] text-xl text-center max-w-[1450px] mx-auto'>SISPN Tech understands that a universal approach doesn't perform in SEO campaigns. Our customized strategies are developed to meet your specific business goals. This ensures the long-term expansion of a digital business in a constantly evolving digital world. By focusing on long-term success and adjusting to the most recent SEO trends, we can help your business to stay ahead of your competitors.</p>
                    <div className='grid lg:grid-cols-3 grid-cols-1 gap-5'>
                        {seoProcess?.map((item, idx) => (<StrategyCard key={idx} title={item.title} description={item.description} />))}
                    </div>
                </div>
            </section>
            <section>
            </section>
            <RequestForm />
        </main>
    )
}
