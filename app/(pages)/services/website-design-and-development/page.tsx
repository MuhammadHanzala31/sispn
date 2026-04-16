import ProjectCard from '@/app/(components)/ProjectCard'
import React from 'react'
import imageCard from '@/public/seo-card.png'
import p1 from '@/public/d-p-1/daniel-korpai-pKRNxEguRgM-unsplash.png'
import p2 from '@/public/d-p-2/aashish-yadav-YIHEZ8neNBE-unsplash (1).png'
import p3 from '@/public/d-p-3/viseo-conseil-8XaM86qk9Ac-unsplash.png'
import p4 from '@/public/d-p-4/nubelson-fernandes-jKL2PvKN8Q0-unsplash.png'
import p5 from '@/public/d-p-5/team-nocoloco-Yt9wUh3ZB3Q-unsplash.png'
import p6 from '@/public/d-p-6/azwedo-l-lc-nT4WsKUoLo4-unsplash.png'
import p7 from '@/public/d-p-7/dmitriy-demidov-iuuJC_pjLU0-unsplash.png'
import StrategyCard from '@/app/(components)/StrategyCard';
import RequestForm from '@/app/(components)/RequestForm'



const services = [
    {
        image: p1,
        title: "Custom Web Development",
        description:
            "We build powerful, scalable web apps tailored to your business logic — from CRM and ERP to booking platforms and social networks. Using frameworks like React, Angular, Django, and Node.js, we deliver applications that are secure, efficient, and user-friendly.",
    },
    {
        image: p2,
        title: "CMS Development",
        description:
            "Easily manage your site content with customized CMS platforms. Whether it's WordPress, Drupal, Joomla, or a headless CMS solution, we tailor the setup to give you full control without requiring technical expertise.",
    },
    {
        image : p3,
        title: "E-Commerce Development",
        description:
            "Turn visitors into customers with secure, fast, and conversion-focused online product catalogs. From setup, payment gateway integration, inventory sync, and smooth checkout flows designed to reduce cart abandonment.",
    },
    {
        image : p4,
        title: "Front-End & Back-End Development",
        description:
            "From sleek user interfaces to solid, secure backend systems, we handle both ends of development. Our front-end stack includes HTML5, CSS3, JavaScript, React, Angular, and Vue.js. On the backend, we use Python, Java, PHP, .NET, and more to ensure your site runs smoothly at scale.",
    },
    {
        image : p5,
        title: "Web Portals & Intranets",
        description:
            "We design secure, role-based portals for employees, customers, or partners. From document sharing to real-time dashboards, we help streamline internal processes and external collaboration.",
    },
    {
        image : p6,
        title: "Mobile-Responsive Web Design",
        description:
            "We create websites that adapt perfectly to any device — desktop, tablet, or mobile. With a mobile-first approach and SEO optimization built in, your site won’t just look good; it will perform and rank better, too.",
    },
    {
        image : p7,
        title: "Maintenance & Support",
        description:
            "Your digital platform is never 'done' — it evolves. That’s why we offer proactive post-launch services: performance monitoring, bug fixes, feature enhancements, and security patches to keep your site running flawlessly.",
    },
];


const seoProcess = [
    {
        title: "Initial Assessment",
        description:
            "In SISPN Tech, our SEO process starts with a thorough understanding of your company's business environment. We dive deep into your business, target audience in the relevant market and analyse your competitors to discover potential opportunities and barriers. With the help of this thorough analysis, we design a strategy that is in line with your company's objectives and establishes the basis for long-term growth.",
    },
    {
        title: "Strategic Planning",
        description:
            "Based on the information and insights collected, we create a customized SEO strategy that meets the specific requirements of your business. This includes selecting the best-targeted keywords, categorizing the on-page elements, improving the technical aspects, as well as planning off-page actions. Our aim is to design an integrated plan that increases your website's visibility and brings targeted traffic.",
    },
    {
        title: "Implementation",
        description:
            "Implementing the strategy requires precise focus on the smallest of the details. We optimize your website's structure, improve the quality of your content and ensure the site is mobile-friendly. Our team also concentrates on building quality backlinks and on the other hand improves the user experience in order to meet the required criteria of the search engines as well as user expectations.",
    },
    {
        title: "Performance Monitoring",
        description:
            "To ensure the efficiency of our SEO strategies, we continuously evaluate key performance indicators, like organic traffic, keywords rankings as well as conversion rate. Our transparent reporting keeps you up-to-date about the progress we've made and gives you insight into areas of improvement to ensure that your investment produces real outcomes.",
    },
    {
        title: "Continuous Improvement",
        description:
            "SEO is an ongoing process. At SISPN Tech, we believe in continuous refinements and the required adjustments. We stay aware of the algorithms and industry trends and keep updating our strategies accordingly in order to ensure you improve and maintain the search engine ranking of your website. Continuous optimization guarantees the long-term success of your web presence.",
    },
];


const seoBenefits = [
    {
        title: "Requirement Gathering",
        description:
            "We analyze your business needs to define the project scope and objectives for SISPn Tech. Our team collaborates closely with you to ensure every detail aligns with your vision and expectations. We gather comprehensive insights to lay a solid foundation for your project.",
    },
    {
        title: "Planning & Strategy",
        description:
            "We create a detailed roadmap with timelines, technologies, and milestones tailored for SISPn Tech. We strategize to optimize resources and set clear goals for successful project outcomes. Our planning phase includes risk assessment to ensure smooth execution.",
    },
    {
        title: "UI/UX Design",
        description:
            "Our team designs intuitive and engaging interfaces with interactive prototypes for SISPn Tech. We prioritize user-friendly designs that enhance engagement and reflect your brand identity. Feedback from you is incorporated to refine the design iteratively.",
    },
    {
        title: "Development",
        description:
            "We build robust solutions using agile methodologies and cutting-edge technologies for SISPn Tech. Our developers ensure scalability and performance to support your growing business needs. Regular progress updates keep you informed throughout the development phase.",
    },
    {
        title: "Testing & QA",
        description:
            "Rigorous testing ensures functionality, performance, security, and compatibility for SISPn Tech. We address potential issues proactively to deliver a flawless end product. Multiple testing cycles guarantee a reliable and secure website.",
    },
    {
        title: "Support & Maintenance",
        description:
            "Post-launch, we provide continuous updates, optimization, and support for SISPn Tech. Our team is committed to keeping your website secure and up-to-date over time. We offer ongoing assistance to address any future enhancements or issues.",
    },
];


export default function page() {
    return (
        <main className='text-center'>
            <section className='lg:py-50 py-12 lg:px-[80px] md:px-[40px] px-6 web flex justify-center items-center'>
                <div className='flex flex-col gap-8 items-end justify-center text-center max-w-[1298px] mx-auto'>
                    <h4 className='text-white font-medium text-[50px] leading-18' >CUSTOM WEB DESIGN & DEVELOPMENT <br /> <span className='font-bold'>WEBSITE DEVELOPMENT SERVICES WITH SISPN TECH</span></h4>
                    <p className='text-white text-lg leading-9 px-12'>Transform your digital identity with our advanced CMS and Custom Website Development Services. SISPN Tech offers professional website development services designed to elevate your online presence. Our seasoned team creates attractive, user-friendly, responsive, fully functional, high-performance websites and online ecommerce stores that engage users and support business growth. We blend intuitive UI/UX design with scalable, secure back-end development to build sites that reflect your brand’s vision, ensuring a smooth user experience and strong visibility on all devices.</p>
                </div>
            </section>
            <section className='lg:py-15 py-12 lg:px-[80px] md:px-[40px] px-6'>
                <div className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-2 max-w-[791px] mx-auto'>
                        <p className='text-xl text-[#414141] text-center'>What Can We Do</p>
                        <h4 className='text-4xl font-bold text-[#81358A]'>SISPN TECH YOUR DIGITAL GROWTH PARTNER</h4>
                    </div>
                    <div className='flex flex-col gap-8 items-center max-w-[1566px] mx-auto'>
                        <p className='text-[#414141] text-xl text-center'> We don’t just build websites — we build digital ecosystems that grow with your business. At SISPN Tech, we take a strategic approach to web design and development, ensuring that every line of code serves a purpose. Our team doesn’t believe in cookie-cutter templates. Instead, we create custom solutions that blend aesthetics, speed, functionality, and user experience to deliver tangible business outcomes. </p>
                        <p className='text-[#414141] text-xl text-center'> From corporate websites to complex web portals, we’ve helped brands across industries enhance their digital footprint. As a trusted website development company, we don’t just launch websites — we deliver long-term value. </p>
                        <p className='text-[#414141] text-xl text-center'>Let your website do more than just look good. Let it perform, scale, and convert. </p>
                    </div>
                </div>
            </section>
            <section className='lg:py-15 py-12 lg:px-[80px] md:px-[40px] px-6'>
                <div className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-2 max-w-[791px] mx-auto'>
                        <h4 className='text-4xl font-bold text-center text-[#81358A]'>COMPLETE WEB DEVELOPMENT SOLUTIONS BY SISPN TECH</h4>
                    </div>
                    <p className='text-[#414141] text-xl max-w-[1566px] mx-auto text-center'>At SISPN Tech, we offer a full spectrum of website development services to meet the needs of modern businesses — whether you're launching a startup, scaling an enterprise, or optimizing your digital infrastructure.</p>
                    <div className='grid lg:grid-cols-3 grid-cols-1 gap-4'>
                        {services.map((services, id) => (
                            <ProjectCard image={services.image} key={services.title} title={services.title} description={services.description} />
                        ))}
                    </div>
                </div>
            </section>
            <section className='lg:py-15 py-12 lg:px-[80px] md:px-[40px] px-6'>
                <div className='flex flex-col gap-4 items-center'>
                    <h4 className='text-4xl font-bold text-[#81358A]'>TAILORED SEO STRATEGY FOR SUSTAINABLE GROWTH</h4>
                    <p className='text-[#414141] text-xl text-center max-w-[1450px] mx-auto'>SISPN Tech understands that a universal approach doesn't perform in SEO campaigns. Our customized strategies are developed to meet your specific business goals. This ensures the long-term expansion of a digital business in a constantly evolving digital world. By focusing on long-term success and adjusting to the most recent SEO trends, we can help your business to stay ahead of your competitors.</p>
                    <div className='grid lg:grid-cols-3 grid-cols-1 gap-5'>
                        {seoProcess?.map((item, idx) => (<StrategyCard key={idx} title={item.title} description={item.description} />))}
                    </div>``
                </div>
            </section>
            <section>
                <div className='lg:py-15 py-12 lg:px-[80px] md:px-[40px] px-6 gap-4 project'>
                    <div className='flex flex-col gap-4'>
                        <h4 className='text-4xl font-bold text-white text-center '>OUR WEB DEVELOPMENT PROCESS</h4>
                        <p className='text-white text-xl text-center max-w-[1450px] mx-auto'>At SISPN Tech, we deliver tailored web solutions with a structured and client-focused approach, ensuring your digital vision comes to life seamlessly. Our six-step process combines expertise, innovation, and dedication to build robust, high-performing websites that meet your unique business goals.</p>
                        <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
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
