'use client';

import Image from "next/image";
import React from "react";
const currentYear = new Date().getFullYear();

import logo1 from '@/public/logo.png'


const menu = [
    {
        title: 'Resources',
        links: [
            { label: 'About Us', href: '#' },
            { label: 'Privacy and refund Policy', href: '#' },
            { label: 'Terms and Condition', href: '#' },
            { label: 'SISPN TECH Blogs', href: '#' },
        ],
    },
    {
        title: 'Services',
        links: [
            { label: 'Search Engine Optimization', href: '#' },
            { label: 'Affordable Digital Marketing', href: '#' },
            { label: 'Content Marketing', href: '#' },
            { label: 'E-Commerce Marketing', href: '#' },
        ],
    },
];

const socialLinks = [
    { label: 'Facebook', href: '#', iconClass: 'ri-facebook-circle-fill' },
    { label: 'Instagram', href: '#', iconClass: 'ri-instagram-line' },
    { label: 'LinkedIn', href: '#', iconClass: 'ri-linkedin-box-fill' },
    { label: 'Twitter', href: '#', iconClass: 'ri-twitter-x-fill' },
];

export default function Footer() {
    return (
        <footer className="bg-white border-t-2 border-black">
            {/* Main Footer Content */}
            <div>
                <div className="mx-auto px-20 pt-20 pb-12.5">
                    <div className="flex flex-col md:flex-row justify-between">
                        {/* Logo Section */}

                        <div className="w-1/3">

                            <Image src={logo1} alt="logo" width={250} height={100} />
                        </div>


                        {/* Navigation Links - Dynamic from menu array */}
                        <div className="flex flex-wrap gap-9.5 w-2/3">
                            {menu.map((section) => (
                                <div key={section.title}>
                                    <h3 className="font-bold text-[#662C6D] mb-4 text-[16px]">
                                        {section.title}
                                    </h3>
                                    <ul className="space-y-3">
                                        {section.links.map((link) => (
                                            <li key={link.label} className="mb-3.25">
                                                <a
                                                    href={link.href}
                                                    className="text-[#662C6D] hover:text-purple-800 text-[16px]"
                                                >
                                                    {link.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}

                            {/* Locations Section */}
                            <div>
                                <h3 className="font-bold text-[#662C6D] mb-4 text-[16px]">Locations</h3>
                                <div className="space-y-3 text-sm">
                                    <p className="font-semibold text-[#414141]">
                                        United States of America - SISPN Technology LLC
                                    </p>
                                    <p className="text-[#662C6D]">
                                        364 E Main Street Suite 1902 Middletown, DE 19709
                                    </p>
                                    <div className="space-y-1 text-[#662C6D]">
                                        <p className="mb-3.25"><span className="font-semibold text-[#414141]">Phone:</span> +1 (315)-999-4142</p>
                                        <p className="mb-3.25"><span className="font-semibold text-[#414141]">WhatsApp:</span> +1 (480) 531-2018</p>
                                        <p className="mb-3.25"><span className="font-semibold text-[#414141]">Email:</span> info@sispntech.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Newsletter Section */}
                        <div className="w-1/4">
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

                            {/* Social Icons */}
                            <div className="flex gap-4 mt-4">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        className="text-purple-600 hover:text-purple-800 transition-colors"
                                        aria-label={social.label}
                                        title={social.label}
                                    >
                                        <i className={`${social.iconClass} text-2xl`} aria-hidden="true" />
                                    </a>
                                ))}
                            </div>

                            {/* Privacy Links */}
                            <p className="text-xs text-gray-600 mt-4">
                                By clicking the button you agree to the{' '}
                                <a href="#" className="text-purple-600 hover:underline">Privacy Policy</a>{' '}
                                and{' '}
                                <a href="#" className="text-purple-600 hover:underline">Terms and Conditions</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-black text-white py-4">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-sm text-right">
                        © Copyright {currentYear}, SISPNTECH PVT LTD, All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
}