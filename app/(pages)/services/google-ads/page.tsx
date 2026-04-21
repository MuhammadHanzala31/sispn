import ProjectCard from '@/app/(components)/ProjectCard'
import React from 'react'
import imageCard from '@/public/seo-card.png'
import StrategyCard from '@/app/(components)/StrategyCard';
import RequestForm from '@/app/(components)/RequestForm';


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
        title: "Search Ads",
        image:
            "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1000&q=80",
        description:
            "We create ads for the keywords with high intent so that your advertisements appear at the very top in Google Search when customers look for services or products similar to yours. This identifies leads who are ready to buy and brings relevant and purchase-intent traffic to your website.",
    },
    {
        id: 2,
        title: "Display Ads",
        image:
            "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1000&q=80",
        description:
            "SISPN Tech designs visually appealing images and banner ads that run on the Google Display Network, reaching potential customers across millions of apps and websites. Through showcasing your company’s brand on relevant websites, display campaigns increase the visibility of your business.",
    },
    {
        id: 3,
        title: "Shopping Ads",
        image:
            "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?auto=format&fit=crop&w=1000&q=80",
        description:
            "For e-commerce businesses, our shopping campaigns display captivating product images as well as prices and other details directly in Google results. The customers see your products and are able to click through to purchase, which increases the likelihood of buying and can help you convert browsers into customers.",
    },
    {
        id: 4,
        title: "Video Ads",
        image:
            "https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1000&q=80",
        description:
            "We create compelling video advertisements on YouTube along with other Google partner websites, employing the power of storytelling and innovative visuals to draw the attention of viewers. Video ads are perfect to showcase products and build brand loyalty in a format that is engaging beyond the text-based approach.",
    },
    {
        id: 5,
        title: "Remarketing Ads",
        image:
            "https://images.unsplash.com/photo-1556742049-908d8e5f8b46?auto=format&fit=crop&w=1000&q=80",
        description:
            "We encourage the visitors to return who have previously visited your website or shown any interest in the displayed ads while browsing the internet or apps. In keeping your brand at the forefront of their minds, remarketing campaigns help to encourage potential customers to come back and make a purchase.",
    },
    {
        id: 6,
        title: "Local Service Ads",
        image:
            "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1000&q=80",
        description:
            "SISPN Tech offers Local Service Ads that connect your business with customers in the area where they are searching for your services. These ads highlight your company prominently (often with a “Google Guaranteed” badge) and offer direct phone or text messaging options that make it easy for potential customers in the area to reach out right away.",
    },
    {
        id: 7,
        title: "App Promotion Ads",
        image:
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1000&q=80",
        description:
            "If you’ve developed a mobile app, our App Promotion Ads can target advertisements on smartphones on Google Search, YouTube, and the Play Store to encourage installations and increase engagement. We make use of the data from the app store to design advertisements that are appealing to those who are most susceptible to downloading and installing your app.",
    },
    {
        id: 8,
        title: "PPC Management",
        image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
        description:
            "We offer full-service PPC management that ties the various channels. Our experts constantly tweak bids, budgets and the targeting across campaigns to ensure that each dollar is optimized to yield the highest ROI and sales.",
    },
    {
        id: 9,
        title: "Performance Max",
        image:
            "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&q=80",
        description:
            "Performance Max campaigns of SISPN Tech utilize Google’s AI to deliver goal-driven ads across all Google channels from a single campaign, including Search, Display, YouTube, Gmail, Maps, and Discover. By using your marketing objective, creative assets, and budget, Performance Max optimizes the ads and bids for maximum conversions and ROI.",
    },
];

const googleAdsWhyChooseUs = [
    {
        id: 1,
        title: "Customized Strategies",
        image:
            "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
        description:
            "We know very well that each business is different from the other. Our team creates custom Google Ads strategies and funnel that are aligned with your business's specific objectives, goals and the specific industry aspects. This approach is customized to ensure higher engagement and higher return on investment.",
    },
    {
        id: 2,
        title: "Data-Driven Decision Making",
        image:
            "https://images.unsplash.com/photo-1556155092-8707de31f9c4",
        description:
            "Our campaigns are rooted in facts. We monitor the performance of our campaigns on regular basis as well as analyze user behaviour and adapt strategies in real time to maximize the outcomes. Our commitment to analytics will ensure that the advertising budget you pay for is utilized efficiently.",
    },
    {
        id: 3,
        title: "Transparent Communication",
        image:
            "https://images.unsplash.com/photo-1556761175-b413da4baf72",
        description:
            "Our company believes in establishing trust by being transparent. We will send you regular, comprehensive reports of your campaign's success and our team is always ready for discussions on strategies and to respond the questions for sharing information.",
    },
    {
        id: 4,
        title: "Advanced Tools and Technologies",
        image:
            "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
        description:
            "SISPN Tech uses the most up-to-date techniques and tools to remain ahead of this changing digital advertising industry. This lets us implement new and innovative strategies that yield higher results from your advertising campaigns.",
    },
    {
        id: 5,
        title: "Certified Google Ads Professionals",
        image:
            "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
        description:
            "Our team at SISPN consists of experts who are certified Google Ads professionals. We bring the most authentic expertise and experience to your ads. This ensures that your advertisements are optimized for effectiveness and are in compliance with the most effective practices.",
    },
    {
        id: 6,
        title: "Dedicated Support",
        image:
            "https://images.unsplash.com/photo-1551434678-e076c223a692",
        description:
            "When you work with SISPN Tech, you're not just another customer for us. You'll get an account manager who understands your needs and is dedicated to your achievement. This personal service ensures that your campaigns receive the right time and attention they need.",
    },
];




export default function page() {
    return (
        <main className='text-center'>
            <section className='lg:py-50 py-12 lg:px-[80px] md:px-[40px] px-6 google relative flex justify-center items-center'>
                <div className='flex flex-col gap-8 justify-center text-center max-w-[1298px] mx-auto'>
                    <h4 className='text-white font-medium text-[50px] leading-18' >GOOGLE ADS <br /> <span className='font-bold'>GOOGLE ADS SERVICES WITH SISPN TECH</span></h4>
                    <p className='text-white text-lg leading-9 px-12'>Are you looking to expand your business by using Google Ads Services? SISPN Tech can assist you in achieving your goals. At SISPN Tech, we help businesses realize their fullest potential in digital advertising with carefully managed Google Ads campaigns. We have certified Google Ads experts who go beyond clicks and impressions, focusing on driving tangible growth of sales, revenue and ROI for your company. We provide complete, all-inclusive assistance to all Google Ads campaign types of campaigns which include Search ads, Shopping, Video ads, and much more. Large and reputable companies across all sectors take guidance from SISPN Tech for significant gains. With advanced data-driven strategies along with real-time tools for optimization, we customize each campaign to meet your specific objectives, which ensures the highest efficiency, continual performance gains and a long-lasting competitive advantage.</p>
                </div>
            </section>
            <section className='lg:py-15 py-12 lg:px-[80px] md:px-[40px] px-6 text-center'>
                <div className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-2 max-w-[791px] mx-auto'>
                        <p className='text-xl text-[#414141] text-center'>What Can We Do</p>
                        <h4 className='text-4xl font-bold text-[#81358A]'>OUR COMPLETE SUITE OF GOOGLE ADS CAMPAIGN SERVICES</h4>
                    </div>
                    <div className='flex flex-col gap-8 items-center max-w-[1566px] mx-auto'>
                        <p className='text-[#414141] text-xl text-center'> Particularly, SISPN Tech's Google Ads expertise spans all major formats of campaigns, providing an advertising strategy that is multichannel and able to meet the needs of customers at any point in their journey. It doesn't matter if it's taking high-intent users to search, boosting brand recognition through images, re-engaging previous customers, or advertising your services and products; we'll use the appropriate campaign type to meet your goals for the business. This blend of strategies will not only increase your reach across Google's huge range of services, which includes Search, Display, YouTube, Play Store, and all Google partner sites but it will also ensure constant, relevant and effective engagements for all of the platforms.</p>
                    </div>
                </div>
            </section>
            <section className='lg:py-15 py-12 lg:px-[80px] md:px-[40px] px-6'>
                <div className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-2 max-w-[791px] mx-auto'>
                        <h4 className='text-4xl font-bold text-center text-[#81358A]'>COMPREHENSIVE SEO SERVICES DESIGNED FOR YOUR WEBSITE</h4>
                    </div>
                    <p className='text-[#414141] text-xl max-w-[1566px] mx-auto text-center'>SISPN Tech offers an extensive range of SEO solutions designed to boost your website performance, enhance the siteâ€™s online presence and generate visible growth. Our custom SEO strategies include the following areas of expertise:</p>
                    <div className='grid grid-cols-3 gap-4'>
                        {googleAdsServices?.map(service => (
                            <ProjectCard image={service.image} description={service.description} title={service.title} key={service.id} />
                        ))}
                    </div>
                </div>
            </section>
            <section className='lg:py-15 py-12 lg:px-[80px] md:px-[40px] px-6'>
                <div className='flex flex-col gap-4 items-center'>
                    <h4 className='text-4xl font-bold text-[#81358A]'>WHAT ARE GOOGLE ADS AND HOW CAN THEY BOOST YOUR BUSINESS?</h4>
                    <p className='text-[#414141] text-xl text-center max-w-[1450px] mx-auto'>Google Ads is a powerful online advertising platform created by Google. It allows businesses to place ads on Google's vast network of sites, including results from searches, YouTube, Google Maps and other partner sites. It operates on a pay-per-click (PPC) model that allows advertisers to pay only for each time a user clicks on their advertisements. This makes it an efficient method to reach customers in search of similar products or services to those of the advertisers.</p>
                    <div className='grid grid-cols-3 gap-5'>
                        {seoProcess?.map((item, idx) => (<StrategyCard key={idx} title={item.title} description={item.description} />))}
                    </div>``
                </div>
            </section>
            <section>
                <div className='lg:py-15 py-12 lg:px-[80px] md:px-[40px] px-6 gap-4 project'>
                    <div className='flex flex-col gap-4'>
                        <h4 className='text-4xl font-bold text-white text-center '>HOW DOES GOOGLE ADS BOOST BUSINESS GROWTH?</h4>
                        <p className='text-white text-xl text-center max-w-[1450px] mx-auto'>IUsing Google's wide range of reach and its advanced capabilities for targeting, you can reach out to potential customers precisely when they're looking in search of relevant goods or services. This not only drives relevant traffic towards your site but also improves the probability of conversions. This ultimately results in more sales and revenue.</p>
                        <p className='text-white text-xl text-center max-w-[1450px] mx-auto'>Additionally, the platform's flexibility makes it possible to continuously optimize the ad by using A/B experiment, keyword changes as well as performance analysis, it is possible to refine your marketing campaigns to meet the goals of your business.</p>
                    </div>
                </div>
            </section>
            <section className='lg:py-15 py-12 lg:px-[80px] md:px-[40px] px-6'>
                <div className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-2 max-w-[791px] mx-auto'>
                        <h4 className='text-4xl font-bold text-center text-[#81358A]'>WHY CHOOSE SISPN TECH FOR GOOGLE ADS SERVICES?</h4>
                    </div>
                    <p className='text-[#414141] text-xl max-w-[1566px] mx-auto text-center'>At SISPN Tech, we don't just manage Google Ads campaigns, we design them for you to ensure the greatest impact. Our strategy incorporates advanced technology, expert knowledge of the industry and a commitment to accelerate your business's development. Our achievements are the reason businesses choose us.</p>
                    <div className='grid grid-cols-3 gap-4'>
                        {googleAdsWhyChooseUs?.map(service => (
                            <ProjectCard image={service.image} description={service.description} title={service.title} key={service.id} />
                        ))}
                    </div>
                </div>
            </section>
            <RequestForm/>
        </main>
    )
}