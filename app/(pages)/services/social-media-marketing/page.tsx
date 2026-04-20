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
        title: "Strategic Discovery & Onboarding",
        description:
            "We start by immersing ourselves in your business. A strategist studies your objectives, customers, competitors, and current position to craft a strategy aligned with your brand vision."
    },
    {
        id: 2,
        title: "Audience-Centric Platform Strategy",
        description:
            "We identify where your audience is most active and create tailored strategies for platforms like Facebook, Instagram, LinkedIn, TikTok, and more to meet your KPIs."
    },
    {
        id: 3,
        title: "Content Planning & Creative Production",
        description:
            "We build monthly content calendars based on trends, user behavior, and brand voiceâ€”covering static posts, carousels, motion graphics, and short-form videos."
    },
    {
        id: 4,
        title: "Paid Social Campaigns with Laser-Focused Targeting",
        description:
            "We create conversion-driven ad campaigns with precise targeting, ensuring your ads reach the most relevant audience likely to take action."
    },
    {
        id: 5,
        title: "Data-Driven Optimization & Transparent Reporting",
        description:
            "We track performance metrics like impressions, clicks, and conversions, providing actionable insights and continuously optimizing campaigns."
    },
    {
        id: 6,
        title: "Ongoing Strategy Evolution & Adaptive Optimization",
        description:
            "We continuously monitor performance, engage audiences, and adapt strategies based on algorithm changes to keep your brand competitive and relevant."
    }
];


const seoBenefits = [
    {
        id: 1,
        title: "Direct Access to Targeted Audiences",
        description:"With precise targeting based on the characteristics, interests, or demographics, you can reach actual potential customers. Not just followers."    },
    {
        id: 2,
        title: "Design & Develop",
        description:
            "Our designers create initial conceptsâ€”sketches or digital mockupsâ€”based on your brief. We then refine these designs internally before sharing them with you."
    },
    {
        id: 3,
        title: "Review & Refine",
        description:
            "You review the drafts and request changes as needed. Thanks to our unlimited revision policy, we iterate until the design is flawless and aligns exactly with your goals."
    },
    {
        id: 4,
        title: "Delivery",
        description:
            "Once finalized, we deliver the polished designs in all required formats. Whether for web, print, or social media, your files are ready to go live."
    }
];


const marketingFeatures = [
    {
      title: "Platform-Specific Strategies",
      description: "We do not believe in generic campaigns. No matter which platform you're using, Instagram, LinkedIn, TikTok or Facebook, our strategies are tailored to the specific algorithms of each platform and user-generated behaviour."
    },
    {
      title: "ROI-Focused Campaigns",
      description: "Each post, ad, and story we write is created with performance in mind. We measure KPIs that match your objectives--be it the creation of leads, brand awareness and direct sales."
    },
    {
      title: "Proactive Content Management",
      description: "From planning to publishing, we create top-quality content calendars that are a hit with your target audience and keep a an unison brand voice across platforms."
    },
    {
      title: "Transparent Communication",
      description: "You'll always be aware of where your campaign stands. We timely share clear reports and our team is available to discuss results, ideas and future steps."
    },
    {
      title: "Experienced Marketing Team",
      description: "Our team of experts have years of experience in the field. We're more than just marketers, we're growth strategists who are committed to producing outcomes."
    },
    {
      title: "Scalable Solutions for Every Business",
      description: "No matter if you're a small-scale startup or a growing enterprise, we can tailor our Social Media Marketing Services to fit your company's size, goals and budget, so you can expand the way you want to."
    }
  ];
  

const googleAdsServices = [
    {
        id: 1,
        title: "Reputation & Review Management",
        description:
            "We help you manage your brand's image across platforms by responding to feedback, monitoring mentions, and optimizing social profiles to build trust and credibility.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
    },
    {
        id: 2,
        title: "Paid Marketing Ads",
        description:
            "Reach the right audience through targeted, data-driven campaigns across platforms like Meta, LinkedIn, and TikTok with creatives that convert.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80"
    },
    {
        id: 3,
        title: "Organic Marketing",
        description:
            "Build a consistent presence with a balanced content strategy that drives engagement, builds trust, and ensures long-term visibility.",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80"
    },
    {
        id: 4,
        title: "Brand Development",
        description:
            "We align your brandâ€™s visuals and messaging across platforms to create a distinct, recognizable, and consistent identity.",
        image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=800&q=80"
    },
    {
        id: 5,
        title: "Influencer Marketing",
        description:
            "We collaborate with macro and micro influencers aligned with your niche to generate authentic engagement and build trust.",
        image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=800&q=80"
    },
    {
        id: 6,
        title: "Social Media Strategy & Consulting",
        description:
            "We identify growth opportunities, define content direction, and create strategies that improve your social media performance.",
        image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
    },
    {
        id: 7,
        title: "Community Building",
        description:
            "We help create loyal, active communities through discussions, engagement strategies, and meaningful interactions.",
        image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80"
    },
    {
        id: 8,
        title: "Content Creation",
        description:
            "We design platform-specific content including reels, posts, and creatives tailored to your brand voice and audience.",
        image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&q=80"
    }
];






export default function page() {
    return (
        <main className=''>
            <section className='lg:py-50 py-12 lg:px-[80px] md:px-[40px] px-6 social relative flex justify-center items-center'>
                <div className='flex flex-col gap-8  text-center max-w-[1298px] mx-auto'>
                    <h4 className='text-white font-medium text-[50px] leading-18' >STRATEGIES THAT DRIVE REAL GROWTH & ROI <br /> <span className='font-bold'>SOCIAL MEDIA MARKETING SERVICES WITH SISPN TECH</span></h4>
                    <p className='text-white text-lg leading-9 px-12'>Increase your brand's visibility faster by using SISPN Tech, a results-focused and performance-oriented Social Media Marketing Agency. We assist businesses in converting audience to recurring customers using strategies that are specifically tailored to platforms like Facebook, Instagram, LinkedIn, TikTok & more. Our skilled team blends imagination with analytics to design campaigns that not only appear attractive but are actually effective for conversions. From captivating content to hyper-targeted advertisements, we provide social media marketing solutions that are in line with your company's goals and ensure an ongoing, sustainable success.</p>
                </div>
            </section>
            <section className='lg:py-15 py-12 lg:px-[80px] md:px-[40px] px-6'>
                <div className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-2 max-w-[791px] mx-auto'>
                        <p className='text-xl text-[#414141] text-center'>What Can We Do</p>
                        <h4 className='text-4xl font-bold text-[#81358A] text-center'>RESULTS-DRIVEN SOCIAL MEDIA MARKETING AGENCY</h4>
                    </div>
                    <div className='flex flex-col gap-8 items-center max-w-[1566px] mx-auto'>
                        <p className='text-[#414141] text-xl text-center'> In SISPN Tech, we don't just publish the content, we plan, optimize, and make it easier to convert. As your reliable Social Media Marketing Agency, we create data-driven campaigns that don't just increase engagement, but also yield tangible business outcomes. If you're looking to enhance your brand recognition, improve site traffic, or inicrease the number of conversions, you can consider our tried and true method that makes sure your goals are achieved and even excelled.</p>
                        <p className='text-[#414141] text-xl text-center'>We design and create content that is highly impactful and engaging, leverage viral trends, and create ad campaigns that are precisely targeted on the platform where your audience is located. With the help of experts in specific platforms and real-time analytics, our team can turn your social media presence into a real lead-generation source.</p>
                        <ul className='flex flex-col gap-4'>
                            <p className='text-[#414141] text-xl text-center'>- Campaigns that are specifically tailored to your business goals </p>
                            <p className='text-[#414141] text-xl text-center'>- Synchronized work in Paid and Organic strategies</p>
                            <p className='text-[#414141] text-xl text-center'>- AI-powered insight and performance monitoring </p>
                            <p className='text-[#414141] text-xl text-center'>- Continuous testing and optimization </p>
                            <p className='text-[#414141] text-xl text-center'>- Transparent reporting with measurable KPIs and Stats</p>
                        </ul>
                    </div>
                    {/* <div className='grid grid-cols-3 gap-5'>
                        {reputationManagementBenefits?.map((item, idx) => (<StrategyCard key={idx} title={item.title} description={item.description} />))}
                    </div> */}
                </div>
             
            </section>
            <section className='lg:py-15 py-12 lg:px-[80px] md:px-[40px] px-6'>
                <div className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-2 max-w-[791px] mx-auto'>
                        <h4 className='text-4xl font-bold text-center text-[#81358A]'>TAILORED SMM SERVICES THAT FUEL THE GROWTH</h4>
                    </div>
                    <p className='text-[#414141] text-xl max-w-[1566px] mx-auto text-center'>In SISPN Tech, our services surpass the basic ones. We are a result-oriented Social Media Marketing Agency. We offer customized solutions that are suited to the goals of your company, whether it's sales, gaining visibility, or creating an engaged community.</p>
                    <div className='grid grid-cols-3 gap-4'>
                        {googleAdsServices?.map(service => (
                            <ProjectCard image={service.image} description={service.description} title={service.title} key={service.id} />
                        ))}
                    </div>
                </div>
            </section>
            <section className='lg:py-15 py-12 lg:px-[80px] md:px-[40px] px-6'>
                    <div className='flex flex-col gap-4 items-center'>
                        <h4 className='text-4xl font-bold text-[#81358A]'>OUR PROVEN SOCIAL MEDIA MARKETING EXECUTION FRAMEWORK</h4>
                        <p className='text-[#414141] text-xl text-center max-w-[1450px] mx-auto'>Here at SISPN Tech, we don't believe in guesswork. We are a result-driven Social Media Marketing Agency. Our approach is built on the clarity of performance, as well as the real ROI. We can turn your social channels into profit- generating machines:</p>
                        <div className='grid grid-cols-3 gap-5'>
                            {seoProcess?.map((item, idx) => (<StrategyCard key={idx} title={item.title} description={item.description} />))}
                        </div>
                    </div>
                </section>
            <section>
                <div className='lg:py-15 py-12 lg:px-[80px] md:px-[40px] px-6 gap-4 project'>
                    <div className='flex flex-col gap-4'>
                        <h4 className='text-4xl font-bold text-white text-center '>SOCIAL MEDIA IS A GROWTH ENGINE FOR BRANDS</h4>
                        <p className='text-white text-xl text-center max-w-[1450px] mx-auto'>Social media marketing goes beyond just posting updates. It's also an effective method to connect with your customers where they go to spend their time and influence their decisions to convert clicks into sales. Here at SISPN Tech, our Social Media Marketing Services are created to not only increase visibility but also directly impact the sales, retention and engagement.</p>
                        <p className='text-white text-xl text-center max-w-[1450px] mx-auto'>If you're looking to improve the visibility of your brand, increase leads, or improve customer loyalty, the social networks such as Facebook, Instagram, LinkedIn and TikTok provide unrivalled, personalized and targeted advertising.</p>
                        <div className='grid grid-cols-2 gap-5'>
                            {seoBenefits?.map((item, idx) => (<div key={idx} className='flex flex-col gap-2 border-2 bg-white border-white rounded-2xl p-4'>
                                <h4 className='text-2xl font-bold text-[#81358A] text-center'>{item.title}</h4>
                                <p className='text-[#414141] text-xl text-center'>{item.description}</p>
                            </div>))}
                        </div>
                    </div>
                </div>
            </section>
            <section className='lg:py-15 py-12 lg:px-[80px] md:px-[40px] px-6'>
                <div className='flex flex-col gap-4 items-center'>
                    <h4 className='text-4xl font-bold text-[#81358A]'>OUR PROVEN SOCIAL MEDIA MARKETING EXECUTION FRAMEWORK</h4>
                    <p className='text-[#414141] text-xl text-center max-w-[1450px] mx-auto'>Here at SISPN Tech, we don't believe in guesswork. We are a result-driven Social Media Marketing Agency. Our approach is built on the clarity of performance, as well as the real ROI. We can turn your social channels into profit- generating machines:</p>
                    <div className='grid grid-cols-3 gap-5'>
                        {marketingFeatures?.map((item, idx) => (<StrategyCard key={idx} title={item.title} description={item.description} />))}
                    </div>`
                </div>
            </section>
            <RequestForm />
        </main>
    )
}