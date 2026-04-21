'use client';

import Image from "next/image";
const currentYear = new Date().getFullYear();

import logo1 from '@/public/logo.png'

const menu = [
    {
        title: 'Resources',
        links: [
            { label: 'About Us', href: '/about-us' },
            { label: 'Terms & Conditions', href: '/terms-and-conditions' },
            { label: 'Services', href: '/services' },
            { label: 'Blogs', href: '/blogs' },
        ],
    },
    {
        title: 'Services',
        links: [
            { label: 'Search Engine Optimization', href: '/services/seo' },
            { label: 'Website Development', href: '/website-design-and-development' },
            { label: 'Google Ads', href: '/services/google-ads' },
            { label: 'Graphic Designing', href: '/services/graphic-designing' },
        ],
    },
];

const socialLinks = [
    { label: 'Facebook', href: 'https://www.facebook.com/sispntech', iconClass: 'ri-facebook-circle-fill' },
    { label: 'Instagram', href: 'https://www.instagram.com/sispntech', iconClass: 'ri-instagram-line' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/sispntech/', iconClass: 'ri-linkedin-box-fill' },
    { label: 'Twitter', href: 'https://x.com/sispntech', iconClass: 'ri-twitter-x-fill' },
];

export default function Footer() {
    return (
        <footer className="bg-white border-t-2 border-black">
            <div className="mx-auto px-6 lg:px-20 pt-20 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
                    <div>
                        <Image src={logo1} alt="logo" width={200} />
                    </div>
                    <div>
                        <h3 className="font-bold text-[#662C6D] mb-4">Resources</h3>
                        <ul className="space-y-3">
                            {menu[0].links.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-[#662C6D] hover:text-purple-800">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-[#662C6D] mb-4">Services</h3>
                        <ul className="space-y-3">
                            {menu[1].links.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-[#662C6D] hover:text-purple-800">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-[#662C6D] mb-4">Locations</h3>

                        <p className="font-semibold text-[#414141]">
                            United States - SISPN Technology LLC
                        </p>

                        <p className="text-[#662C6D] text-sm mb-3">
                            364 E Main Street Suite 1902 Middletown, DE 19709
                        </p>

                        <p className="text-[#662C6D] text-sm">
                            Phone: +1 (315)-999-4142
                        </p>
                    </div>
                    <div>
                        <h3 className="font-bold text-[#662C6D] mb-4 text-sm">
                            You Will Get Weekly Update On Email
                        </h3>
                        <form className="space-y-3">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
                            />
                            <button
                                type="submit"
                                className="w-full bg-purple-700 hover:bg-purple-800 text-white font-semibold py-2 px-4 rounded transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                        <div className="flex gap-4 mt-4">
                            {socialLinks.map((social) => (
                                <a key={social.label} href={social.href}>
                                    <i className={`${social.iconClass} text-2xl text-purple-600`} />
                                </a>
                            ))}
                        </div>
                        <p className="text-xs text-gray-600 mt-4">
                            By clicking the button you agree to the{' '}
                            <a href="#" className="text-purple-600 hover:underline">Privacy Policy</a>{' '}
                            and{' '}
                            <a href="#" className="text-purple-600 hover:underline">Terms and Conditions</a>.
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-black text-white py-4">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-sm text-right">
                        © {currentYear}, SISPNTECH PVT LTD
                    </p>
                </div>
            </div>
        </footer>
    );
}