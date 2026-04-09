import ProjectCard from '@/app/(components)/ProjectCard'
import React from 'react'
import imageCard from '@/public/seo-card.png'
import StrategyCard from '@/app/(components)/StrategyCard';


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
      id: 1,
      title: "Enhance Online Visibility And Rankings",
      description:
        "Effective SEO strategies ensure higher rankings in search results. By optimizing your website for targeted keywords, your website is more likely to be visible to prospective customers searching for your services or products or for the content you've published. The higher rankings do more than just improve the website’s visibility and establish your company's standing in the market.",
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


export default function page() {
    return (
        <main className=''>
            <section className='lg:py-50 py-12 lg:px-[80px] md:px-[40px] px-6 seo flex justify-center items-center'>
                <div className='flex flex-col gap-8 items-end justify-center text-center max-w-[1298px] mx-auto'>
                    <h4 className='text-white font-medium text-[50px] leading-18' >SEARCH ENGINE OPTIMIZATION <br /> <span className='font-bold'>INCREASE TARGETED TRAFFIC WITH SISPN TECH</span></h4>
                    <p className='text-white text-lg leading-9 px-12'>At SISPN Tech, we specialize in providing Search Engine Optimization services that are tailored to your needs, increase targeted traffic, improve the visibility of your website, and improve the conversion rates as well. Our extensive SEO Services are created to be in line with your business goals, providing real growth and an advantage in the competitive digital world.</p>
                    <p className='text-white text-lg leading-9 px-12'>Are you ready to dominate search engine rankings and speed up your business's expansion? Join SISPN Tech today and experience the difference in SEO strategy with visible results.</p>
                </div>
            </section>
            <section className='lg:py-15 py-12 lg:px-[80px] md:px-[40px] px-6'>
                <div className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-2 max-w-[791px] mx-auto'>
                        <p className='text-xl text-[#414141] text-center'>What Can We Do</p>
                        <h4 className='text-4xl font-bold text-[#81358A]'>THE SEO COMPANY YOUR WEBSITE NEEDS</h4>
                    </div>
                    <div className='flex flex-col gap-8 items-center max-w-[1566px] mx-auto'>
                        <p className='text-[#414141] text-xl text-center'> At SISPN Tech, we understand the difficulties that people or businesses experience in getting their websites noticed online. If your site isn't performing according to expectations, showing a decline in traffic or, on the other side, you are planning to launch your first website, our team is ready to assist.</p>
                        <p className='text-[#414141] text-xl text-center'> <span className='font-bold'> SISPN Tech </span> has a dedicated team of expert SEO professionals. We specialize in designing customized strategies that are in line with your company's goals. Our strategy includes thorough site audits, optimization of the website’s performance for a better user experience, in-depth keyword research, and well-crafted, compelling content development to boost the rankings of your site in search engines.</p>
                        <p className='text-[#414141] text-xl text-center'> We value transparency in communication. We provide regular updates and information about the effectiveness of the campaigns with the help of comprehensive performance reports.</p>
                        <p className='text-[#414141] text-xl text-center'> By joining <span className='font-bold'> SISPN Tech </span>, you're choosing a digital marketing company with a proficient SEO team dedicated to bringing real outcomes and long-term growth and expansion for your business.</p>
                    </div>
                </div>
            </section>
            <section className='lg:py-15 py-12 lg:px-[80px] md:px-[40px] px-6'>
                <div className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-2 max-w-[791px] mx-auto'>
                        <h4 className='text-4xl font-bold text-center text-[#81358A]'>COMPREHENSIVE SEO SERVICES DESIGNED FOR YOUR WEBSITE</h4>
                    </div>
                    <p className='text-[#414141] text-xl max-w-[1566px] mx-auto text-center'>SISPN Tech offers an extensive range of SEO solutions designed to boost your website performance, enhance the site’s online presence and generate visible growth. Our custom SEO strategies include the following areas of expertise:</p>
                     <div className='grid grid-cols-3 gap-4'>
                        <ProjectCard image={imageCard} title={"On-Page SEO"} description={'We at SISPN Tech precisely improve the content on your site and HTML structure to improve the visibility of your website to search engines. The on-page SEO services include strategically integrated keywords, meta tags refinement and content optimization, making sure your website ranks higher in relevant searches. Aligning with the elements of your website to search engine algorithms, we aim to get more targeted traffic to your website and boost engagement with users.'}/>
                        <ProjectCard image={imageCard} title={"Off-Page SEO"} description={'Building the authority of your website over its different pages is vital. Off-page SEO strategies aim to acquire high-quality backlinks, promote social media interaction, and enhance your website’s online image. All of these efforts increase the credibility of your website and improve its ranking in search engine results, leading to an increase in organic traffic.'}/>
                        <ProjectCard image={imageCard} title={"Technical SEO"} description={"We ensure that your site's technical aspects are designed to meet the needs of users as well as the required conditions of search engines. Our technical SEO solutions address your website speed, mobile responsiveness, crawlability, structure, and data implementation for swift performance. By resolving the technical issues, we improve user experience to facilitate better ranking in the search engines which leads to higher results."}/>
                        <ProjectCard image={imageCard} title={"Local SEO"} description={"For businesses targeting the local markets, we offer local SEO solutions specifically designed to boost your presence in local search results in Google. We will optimize your Google Business Profile, manage local citations, and promote customer reviews, allowing you to draw more customers from nearby areas online and bring them to your physical business location."}/>
                        <ProjectCard image={imageCard} title={"eCommerce SEO"} description={"In this highly competitive online retail sector, our eCommerce SEO services will help increase your product's visibility and generate sales. We write clear product descriptions that include targeted keywords, create pages for different categories and build proper site architecture to increase search ranking along with enhanced user experience, eventually improving your online sales conversion rates."}/>
                        <ProjectCard image={imageCard} title={"Content Writing"} description={"High-quality content is the foundation and core of an effective SEO strategy. Our content writing experts create engaging, original and SEO-optimized content that is tailored to your unique brand's voice. We write for each and every segment of your website, from blog articles to the descriptions of products and commercial-intent category content; we create interactive content that engages your customers, increases the session time of the visitors and boosts the authority of your website."}/>
                     </div>
                </div>
            </section>
            <section className='lg:py-15 py-12 lg:px-[80px] md:px-[40px] px-6'>
                <div className='flex flex-col gap-4 items-center'>
                    <h4 className='text-4xl font-bold text-[#81358A]'>TAILORED SEO STRATEGY FOR SUSTAINABLE GROWTH</h4>
                    <p className='text-[#414141] text-xl text-center max-w-[1450px] mx-auto'>SISPN Tech understands that a universal approach doesn't perform in SEO campaigns. Our customized strategies are developed to meet your specific business goals. This ensures the long-term expansion of a digital business in a constantly evolving digital world. By focusing on long-term success and adjusting to the most recent SEO trends, we can help your business to stay ahead of your competitors.</p>
                    <div className='grid grid-cols-3 gap-5'>
                        {seoProcess?.map((item, idx) => (<StrategyCard key={idx} title={item.title} description={item.description}/>))}
                    </div>``
                </div>
            </section>
            <section>
                <div className='lg:py-15 py-12 lg:px-[80px] md:px-[40px] px-6 gap-4 project'>
                    <div className='flex flex-col gap-4'>
                    <h4 className='text-4xl font-bold text-white text-center '>OUR SEO PROCESS</h4>
                    <p className='text-white text-xl text-center max-w-[1450px] mx-auto'>In today’s digital world, having a website is just the beginning of your online journey. In order to be truly successful online, your business needs to be credible, visible and easily discoverable by your target audience. This is the reason that Search Engine Optimization (SEO) is in the picture. In SISPN Tech, we specialize in offering comprehensive SEO services specifically tailored to your business goals to improve your web presence, bring relevant traffic, and convert visitors to loyal customers.</p>
                    <div className='grid grid-cols-2 gap-5'>
                        {seoBenefits?.map((item, idx) => (<div key={idx} className='flex flex-col gap-2 border-2 bg-white border-white rounded-2xl p-4'>
                            <h4 className='text-2xl font-bold text-[#81358A] text-center'>{item.title}</h4>
                            <p className='text-[#414141] text-xl text-center'>{item.description}</p>
                        </div>))}
                    </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
