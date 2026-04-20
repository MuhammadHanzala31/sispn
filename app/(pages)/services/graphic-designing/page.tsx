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
      title: "Technology & Startups",
      description:
        "Clear, innovative designs to launch and grow your digital products."
    },
    {
      id: 2,
      title: "Healthcare & Pharma",
      description:
        "Trust-building visuals that convey professionalism and care."
    },
    {
      id: 3,
      title: "Finance & Legal",
      description:
        "Clean, credible branding to reinforce trust and expertise."
    },
    {
      id: 4,
      title: "Retail & E-commerce",
      description:
        "Eye-catching graphics to showcase products and promotions."
    },
    {
      id: 5,
      title: "Education & Non-profits",
      description:
        "Informative designs that inspire and inform."
    },
    {
      id: 6,
      title: "Hospitality & Real Estate",
      description:
        "Attractive visuals that highlight experiences and properties."
    },
    {
      id: 7,
      title: "Manufacturing & Industrial",
      description:
        "Technical diagrams and brochures that communicate product details."
    },
    {
      id: 8,
      title: "Entertainment & Media",
      description:
        "Vibrant, creative content to engage audiences."
    },
    {
      id: 9,
      title: "Food & Beverage",
      description:
        "Mouth-watering design for packaging, menus, and advertisements."
    },
    {
      id: 10,
      title: "Government & NGOs",
      description:
        "Clear, authoritative graphics for public information and campaigns."
    }
  ];


const seoBenefits = [
    {
      id: 1,
      title: "Collaborate & Plan",
      description:
        "We start by understanding your brand. You'll share project requirements, brand guidelines, and inspiration. Our team listens closely to capture your vision and outline priorities."
    },
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


const googleAdsServices = [
    {
      id: 1,
      title: "Logo Design",
      description:
        "Memorable, custom logo designs that form the cornerstone of your brand identity and help you stand out in a crowded market.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
    },
    {
      id: 2,
      title: "Advertising Design",
      description:
        "Eye-catching ad creatives and promotional materials for print and digital campaigns that boost engagement and brand awareness.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80"
    },
    {
      id: 3,
      title: "Brochure Design",
      description:
        "Professional brochures, catalogs, and flyers crafted to inform and inspire your audience while maintaining brand consistency.",
      image: "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?w=800&q=80"
    },
    {
      id: 4,
      title: "Social Media Graphics",
      description:
        "Custom graphics for Facebook, Instagram, LinkedIn, Twitter, and more, optimized to increase likes, shares, and engagement.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80"
    },
    {
      id: 5,
      title: "Banners (Web & Physical)",
      description:
        "High-impact web banners and physical banners (trade shows, posters, etc.) that capture attention at every touchpoint.",
      image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=800&q=80"
    },
    {
      id: 6,
      title: "UI/UX Design",
      description:
        "User-centric interface and experience design for websites and mobile apps, focused on intuitive navigation and sleek visuals.",
      image: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=800&q=80"
    },
    {
      id: 7,
      title: "Website Graphics",
      description:
        "Striking website visuals including hero images, icons, infographics, and custom illustrations that enrich your online presence.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80"
    },
    {
      id: 8,
      title: "Motion Graphics & Animation",
      description:
        "Engaging animated videos, explainer animations, and social media clips that bring your brand story to life.",
      image: "https://images.unsplash.com/photo-1581091012184-5c1b5c8c6b0d?w=800&q=80"
    },
    {
      id: 9,
      title: "Print & Packaging Design",
      description:
        "From product packaging and labels to business stationery, our print-ready designs make your brand assets stand out.",
      image: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=800&q=80"
    },
    {
      id: 10,
      title: "Book Cover Design",
      description:
        "Professional cover designs for books, eBooks, magazines, and reports that attract readers and convey your message.",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=80"
    },
    {
      id: 11,
      title: "Branding & Identity",
      description:
        "Elegant, branded business card and identity designs that leave a lasting first impression and reinforce your professional image.",
      image: "https://images.unsplash.com/photo-1557683316-973673baf926?w=800&q=80"
    }
  ];






export default function page() {
    return (
        <main className=''>
            <section className='lg:py-50 py-12 lg:px-[80px] md:px-[40px] px-6 relative graphic flex justify-center items-center'>
                <div className='bg-black/70 absolute  h-[700px] w-[100vw] z-0'></div>
                <div className='flex flex-col gap-8  text-center max-w-[1298px] mx-auto relative z-1'>
                    <h4 className='text-white font-medium text-[50px] leading-18' >PREMIER GRAPHICS DESIGNING <br /> <span className='font-bold'>CUSTOM GRAPHIC DESIGN SERVICES WITH SISPN TECH</span></h4>
                    <p className='text-white text-lg leading-9 px-12'>At SISPN Tech, we turn your ideas into stunning visual realities. Our award-winning design team specializes in a wide range of custom graphic design services, from logo design services that build brand identity to dynamic motion graphics and everything in between . As a leading graphics and creative design agency, we craft each asset, including brochures, social media graphics, website visuals, and more, to captivate your audience and drive results. Ready to elevate your brand with professional graphics? Get started with SISPN Tech today.</p>
                </div>
            </section>
            <section className='lg:py-15 py-12 lg:px-[80px] md:px-[40px] px-6'>
                <div className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-2 max-w-[791px] mx-auto'>
                        <p className='text-xl text-[#414141] text-center'>What Can We Do</p>
                        <h4 className='text-4xl font-bold text-[#81358A] text-center'>WHY VISUAL EXCELLENCE MATTERS MORE THAN EVER</h4>
                    </div>
                    <div className='flex flex-col gap-8 items-center max-w-[1566px] mx-auto'>
                        <p className='text-[#414141] text-xl text-center'> In todayâ€™s fast-paced digital landscape, your brand has just seconds to make an impression and most often, it's your design that speaks first. Research shows that 81% of marketers consider creative effectiveness the top factor in a campaign, underlining the power of strong visual design. Whether you're a startup looking to launch with a memorable logo, an eCommerce brand striving for scroll-stopping ads, or a B2B company building trust through professionalism, graphics designing services are at the heart of your success.</p>
                        <p className='text-[#414141] text-xl text-center'>SISPN Tech is a forward-thinking graphics designing company. Utilizing industry-standard Adobe software, including Photoshop, Illustrator, and InDesign, we tailor each design to match your brandâ€™s voice, vision, and goals. From high-impact logo design services to full-spectrum identity packages, our team helps you stand out, get noticed, and stay remembered.</p>
                        <p className='text-[#414141] text-xl text-center'>We bridge creativity with strategyâ€”just like top-tier graphic design agenciesâ€”but with the agility and affordability todayâ€™s digital-first businesses need. Looking for a design graphic agency that can deliver both substance and style? Youâ€™re in the right place. Weâ€™re not just designersâ€”weâ€™re your brandâ€™s creative engine.</p>
                    </div>
                    {/* <div className='grid grid-cols-3 gap-5'>
                        {reputationManagementBenefits?.map((item, idx) => (<StrategyCard key={idx} title={item.title} description={item.description} />))}
                    </div> */}
                </div>
            </section>
            <section className='lg:py-15 py-12 lg:px-[80px] md:px-[40px] px-6'>
                <div className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-2 max-w-[791px] mx-auto'>
                        <h4 className='text-4xl font-bold text-center text-[#81358A]'>OUR GRAPHICS DESIGN SERVICES</h4>
                    </div>
                    <p className='text-[#414141] text-xl max-w-[1566px] mx-auto text-center'>SISPN Tech offers a comprehensive suite of creative design solutions for every need. From branding assets to digital experiences, our graphic design experts handle it all. Explore our key services below:</p>
                    <div className='grid grid-cols-4 gap-4'>
                        {googleAdsServices?.map(service => (
                            <ProjectCard image={service.image} description={service.description} title={service.title} key={service.id} />
                        ))}
                    </div>
                </div>
            </section>
            <section>
                <div className='lg:py-15 py-12 lg:px-[80px] md:px-[40px] px-6 gap-4 project'>
                    <div className='flex flex-col gap-4'>
                        <h4 className='text-4xl font-bold text-white text-center '>HOW OUR DESIGN PROCESS WORKS</h4>
                        <p className='text-white text-xl text-center max-w-[1450px] mx-auto'>We make it easy to get started and stay informed at every stage. Our streamlined 4-step process ensures clarity and collaboration:</p>
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
                    <h4 className='text-4xl font-bold text-[#81358A]'>INDUSTRIES WE SERVE IN GRAPHICS DESIGNING</h4>
                    <p className='text-[#414141] text-xl text-center max-w-[1450px] mx-auto'>Compelling visuals are crucial in every industry. In fact, a majority of B2B marketers make visual assets a top priority, underscoring that great design drives engagement no matter the sector. No matter your field, we adapt our creative approach to fit your market and target audience. Every industry has unique challenges; we ensure each design speaks the language of your sector. SISPN Tech has experience across a wide range of industries, including:</p>
                    <div className='grid grid-cols-3 gap-5'>
                        {seoProcess?.map((item, idx) => (<StrategyCard key={idx} title={item.title} description={item.description}/>))}
                    </div>``
                </div>
            </section>
            <RequestForm/>
        </main>
    )
}