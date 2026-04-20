import ProjectCard from '@/app/(components)/ProjectCard'
import React from 'react'
import imageCard from '@/public/seo-card.png'
import StrategyCard from '@/app/(components)/StrategyCard';
import RequestForm from '@/app/(components)/RequestForm';


const reputationManagementBenefits = [
    {
        id: 1,
        title: "Enhance Trust and Credibility",
        description:
            "By assistance and strategical promotion of positive reviews from customers, SISPN Tech helps position your brand as trustworthy and authentic, influencing the buying decisions and solidifying the confidence at all stages of the customer's buying journey.",
    },
    {
        id: 2,
        title: "Improve Search Engine Visibility",
        description:
            "We improve your visibility through optimized, positive content that is highly ranked in search results while reducing and removing harmful, damaging content regularly, ensuring that clients see the best version of your company at their first glance.",
    },
    {
        id: 3,
        title: "Increase Customer Engagement",
        description:
            "A well-managed reputation of your brand can attract more engagement across various platforms, encouraging more interaction, loyalty, as well as conversions. It transforms the passive users into the active happy customers who speak up for your company.",
    },
    {
        id: 4,
        title: "Attract Top Talent",
        description:
            "A professional online image doesn't just draw in clients, but can also attract the top-quality job seekers who want to work for a trusted and reputable brand with a future-oriented image, showing integrity and professionalism in the industry.",
    },
    {
        id: 5,
        title: "Mitigate Risks",
        description:
            "We monitor your digital channels in real-time to identify and respond to any potential threats in a timely manner. This proactive approach stops escalation and protects your brand's credibility and guarantees a consistent management of your brand's narrative.",
    },
];



const seoProcess = [
    {
        id: 1,
        title: "Targeted Reach",
        description:
            "Google Ads allows users to target specific areas, demographics, interest, behaviour, devices or even specific channels, sites and platforms making sure that your ads are seen by the correct target audience at the right moment or when they specially search for specific keywords and your brand/products/services show up on the first page at the top of search result with most relevant keywords and Headlines and descriptions align with your business.",
    },
    {
        id: 2,
        title: "Instant Visibility",
        description:
            "When your campaign is launched, your ads will be displayed instantly, providing immediate exposure to prospective customers.",
    },
    {
        id: 3,
        title: "Measurable Results",
        description:
            "With detailed analysis, you can monitor the effectiveness of your advertisement and track conversions, monitor them, and make adjustments in real-time to increase ROI.",
    },
    {
        id: 4,
        title: "Budget Control",
        description:
            "You can create a budget for the day or month that is in line with your goals in financial terms. This will ensure that you donâ€™t overspend while reaching your goals.",
    },
    {
        id: 5,
        title: "Brand Awareness",
        description:
            "Even if people do not click on your advertisements, constant visibility across the Google display network can help increase brand recognition over the period of time.",
    },
];


const seoBenefits = [
    {
        id: 1,
        title: "Enhance Online Visibility And Rankings",
        description:
            "Effective SEO strategies ensure higher rankings in search results. By optimizing your website for targeted keywords, your website is more likely to be visible to prospective customers searching for your services or products or for the content you've published. The higher rankings do more than just improve the websiteâ€™s visibility and establish your company's standing in the market.",
    },
    {
        id: 2,
        title: "Drive Targeted Organic Traffic",
        description:
            "SEO aims to attract quality visitors and audiences who are truly interested in your products and services. We make sure that the content published on your site is aligned with the intent of targeted audience to draw visitors who are more likely to become customers. This targeted approach results in greater engagement and a higher CTR and ROI than generic traffic sources.",
    },
    {
        id: 3,
        title: "Build Trust And Credibility",
        description:
            "Being on the first page of results indicates the users that your business is well-reputed, reliable and trustworthy. High-quality consistent content, optimized website, user-friendly design and good customer reviews are the key points to improve your business credibility. This makes it easier for customers to select your product to purchase or service to avail over those of competitors.",
    },
    {
        id: 4,
        title: "Improved User Experience",
        description:
            "SEO isn't just about the web browsers. It's about offering a seamless experience to the visitors of your website. Optimized website speed, mobile responsiveness, improved user interface, and optimal content display are also ensured. Creating a seamless navigation leads to an enhanced user experience, which can ultimately increase conversion rates and customer satisfaction.",
    },
    {
        id: 5,
        title: "Deliver Long-Term Results And ROI",
        description:
            "Contrary to paid ads that stop the traffic generation when the budget reaches its limit, SEO offers sustainable, long-term advantages. A well-implemented, effective SEO strategy will continue to draw and increase the number of loyal customers it serves and provide a greater return on investment. This helps you get the opportunity to achieve continuous business growth.",
    },
];


const googleAdsServices = [
    {
      id: 1,
      title: "Customized Strategies",
      description:
        "We know very well that each business is different. Our team creates custom Google Ads strategies and funnels aligned with your business goals and industry to ensure higher engagement and ROI.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
    },
    {
      id: 2,
      title: "Data-Driven Decision Making",
      description:
        "Our campaigns are rooted in facts. We monitor performance regularly, analyze user behavior, and optimize strategies in real-time to maximize outcomes and budget efficiency.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    },
    {
      id: 3,
      title: "Transparent Communication",
      description:
        "Our company believes in establishing trust by being transparent. We provide regular reports and stay available for discussions and questions.",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800&q=80"
    },
    {
      id: 4,
      title: "Advanced Tools and Technologies",
      description:
        "We use the most up-to-date tools and techniques to stay ahead in the digital advertising industry and deliver better campaign results.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80"
    },
    {
      id: 5,
      title: "Certified Google Ads Professionals",
      description:
        "Our team consists of certified Google Ads experts who ensure your campaigns are optimized and aligned with best practices.",
      image: "https://images.unsplash.com/photo-1581091870627-3d6d1c7b9b45?w=800&q=80"
    },
    {
      id: 6,
      title: "Dedicated Support",
      description:
        "Youâ€™ll get a dedicated account manager who understands your needs and ensures your campaigns receive proper attention.",
      image: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=800&q=80"
    }
  ];






export default function page() {
    return (
        <main className=''>
            <section className='lg:py-50 py-12 lg:px-[80px] md:px-[40px] px-6 repo relative flex justify-center items-center'>
            <div className='bg-black/70 absolute  h-full w-[100vw] z-0'></div>

                <div className='flex flex-col gap-8  text-center max-w-[1298px] mx-auto relative z-1'>
                    <h4 className='text-white font-medium text-[50px] leading-18' >ONLINE REPUTATION MANAGEMENT <br /> <span className='font-bold'>ONLINE REPUTATION SERVICES WITH SISPN TECH</span></h4>
                    <p className='text-white text-lg leading-9 px-12'>Are you looking to expand your business by using Google Ads Services? SISPN Tech can assist you in achieving your goals. At SISPN Tech, we help businesses realize their fullest potential in digital advertising with carefully managed Google Ads campaigns. We have certified Google Ads experts who go beyond clicks and impressions, focusing on driving tangible growth of sales, revenue and ROI for your company. We provide complete, all-inclusive assistance to all Google Ads campaign types of campaigns which include Search ads, Shopping, Video ads, and much more. Large and reputable companies across all sectors take guidance from SISPN Tech for significant gains. With advanced data-driven strategies along with real-time tools for optimization, we customize each campaign to meet your specific objectives, which ensures the highest efficiency, continual performance gains and a long-lasting competitive advantage.</p>
                </div>
            </section>
            <section className='lg:py-15 py-12 lg:px-[80px] md:px-[40px] px-6'>
                <div className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-2 max-w-[791px] mx-auto'>
                        <p className='text-xl text-[#414141] text-center'>What Can We Do</p>
                        <h4 className='text-4xl font-bold text-[#81358A] text-center'>ALIGN DIGITAL IMAGE WITH YOUR BRAND VISION</h4>
                    </div>
                    <div className='flex flex-col gap-8 items-center max-w-[1566px] mx-auto'>
                        <p className='text-[#414141] text-xl text-center'> Your online reputation isn't simply a list of reviews. It's a reflection of your company or brandâ€™s reliability and credibility for the customers. Here at SISPN Tech, we help you build a strong image that matches your vision for your business and goals. Your online reputation can be a valuable tool to propel your company ahead. Here's how it can be possible:</p>
                    </div>
                    <div className='grid grid-cols-3 gap-5'>
                        {reputationManagementBenefits?.map((item, idx) => (<StrategyCard key={idx} title={item.title} description={item.description} />))}
                    </div>
                </div>
            </section>
            <section className='lg:py-15 py-12 lg:px-[80px] md:px-[40px] px-6'>
                <div className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-2 max-w-[791px] mx-auto'>
                        <h4 className='text-4xl font-bold text-center text-[#81358A]'>TAILORED ORM SOLUTIONS FOR YOU BUSINESS</h4>
                    </div>
                    <p className='text-[#414141] text-xl max-w-[1566px] mx-auto text-center'>At SISPN Tech, we offer a diversity of Online Reputation Management Services designed to address the specific needs of your company. Our services can be customized and offer you an approach that is tailored to manage your online reputation efficiently. Our ORM Solutions include:</p>
                    <div className='grid grid-cols-3 gap-4'>
                        {googleAdsServices?.map(service => (
                            <ProjectCard image={service.image} description={service.description} title={service.title} key={service.id} />
                        ))}
                    </div>
                </div>
            </section>
            <section>
                <div className='lg:py-15 py-12 lg:px-[80px] md:px-[40px] px-6 gap-4 project'>
                    <div className='flex flex-col gap-4'>
                        <h4 className='text-4xl font-bold text-white text-center '>CHOOSE SISPN TECH FOR YOUR ONLINE REPUTATION MANAGEMENT</h4>
                        <p className='text-white text-xl text-center max-w-[1450px] mx-auto'>SISPN Tech is an industry-leading Brand Reputation Management Company, focused on helping businesses flourish in the digital world. Select SISPN Tech for the Online Reputation Management Services, and let us assist you to establish and maintain a reputable online presence that speaks to the strength of your company. This is why we stand out:</p>
                        <div className='grid grid-cols-2 gap-5'>
                            {seoBenefits?.map((item, idx) => (<div key={idx} className='flex flex-col gap-2 border-2 bg-white border-white rounded-2xl p-4'>
                                <h4 className='text-2xl font-bold text-[#81358A] text-center'>{item.title}</h4>
                                <p className='text-[#414141] text-xl text-center'>{item.description}</p>
                            </div>))}
                        </div>
                    </div>
                </div>
            </section>
            <RequestForm/>
        </main>
    )
}