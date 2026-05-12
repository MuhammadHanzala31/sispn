'use client';

import Image from 'next/image';
import Link from 'next/link';
import logo1 from '@/public/logo.png'

const currentYear = new Date().getFullYear();

const resourceLinks = [
  { label: 'About Us', href: '/about-us' },
  { label: 'Terms & Conditions', href: '/terms-and-conditions' },
  { label: 'Services', href: '/services' },
  { label: 'Blogs', href: '/blogs' },
]

const serviceLinks = [
  { label: 'Search Engine Optimization', href: '/services/seo' },
  { label: 'Website Development', href: '/services/website-design-and-development' },
  { label: 'Google Ads', href: '/services/google-ads' },
  { label: 'Graphic Designing', href: '/services/graphic-designing' },
  { label: 'Social Media Marketing', href: '/services/social-media-marketing' },
  { label: 'Email Marketing', href: '/services/email-marketing' },
]

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/sispntech', iconClass: 'ri-facebook-circle-fill' },
  { label: 'Instagram', href: 'https://www.instagram.com/sispntech', iconClass: 'ri-instagram-line' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/sispntech/', iconClass: 'ri-linkedin-box-fill' },
  { label: 'Twitter / X', href: 'https://x.com/sispntech', iconClass: 'ri-twitter-x-fill' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0d0010] text-white">
      {/* Gradient top border */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#81358A] to-transparent" />

      {/* Subtle purple glow at top */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#B83DC8]/30 to-transparent mb-0" />

      <div className="mx-auto px-6 lg:px-20 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-1 flex flex-col gap-5">
            <Image src={logo1} alt="SISPN Tech" width={160} className="brightness-0 invert" />
            <p className="text-white/50 text-sm leading-relaxed max-w-[200px]">
              Your trusted partner for digital growth, design, and development.
            </p>
            <div className="flex gap-3 mt-1">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-white/8 border border-white/10 flex items-center justify-center text-white/60 hover:text-[#B83DC8] hover:border-[#B83DC8]/40 hover:bg-[#B83DC8]/10 transition-all duration-200"
                >
                  <i className={`${social.iconClass} text-base`} />
                </a>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-5">Resources</h3>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-[#B83DC8] text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200 text-[#B83DC8]">→</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-5">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-[#B83DC8] text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200 text-[#B83DC8]">→</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-5">Location</h3>
            <div className="flex flex-col gap-3">
              <p className="text-white/80 text-sm font-semibold">SISPN Technology LLC</p>
              <p className="text-white/50 text-sm leading-relaxed">
                364 E Main Street Suite 1902<br />
                Middletown, DE 19709
              </p>
              <a href="tel:+13159994142" className="text-white/60 hover:text-[#B83DC8] text-sm transition-colors flex items-center gap-2">
                <i className="ri-phone-line text-[#81358A]"></i>
                +1 (315)-999-4142
              </a>
              <a href="mailto:sales@sispntech.com" className="text-white/60 hover:text-[#B83DC8] text-sm transition-colors flex items-center gap-2">
                <i className="ri-mail-line text-[#81358A]"></i>
                sales@sispntech.com
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-5">Weekly Updates</h3>
            <p className="text-white/50 text-sm mb-4 leading-relaxed">Get digital marketing insights straight to your inbox.</p>
            <form className="flex flex-col gap-3" onSubmit={e => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full bg-white/8 border border-white/12 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/35 focus:outline-none focus:border-[#B83DC8]/50 focus:bg-white/12 transition-all duration-200"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-br from-[#421C47] to-[#8E2391] hover:shadow-[0_4px_20px_rgba(129,53,138,0.4)] text-white font-semibold py-2.5 px-4 rounded-xl transition-all duration-200 text-sm"
              >
                Subscribe
              </button>
            </form>
            <p className="text-white/30 text-xs mt-3 leading-relaxed">
              By subscribing you agree to our{' '}
              <a href="/terms-and-conditions" className="text-[#B83DC8]/70 hover:text-[#B83DC8] transition-colors">Privacy Policy</a>.
            </p>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8 py-5 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/35 text-sm">
            © {currentYear} SISPN Technology LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-white/35">
            <Link href="/terms-and-conditions" className="hover:text-white/60 transition-colors">Terms</Link>
            <span>·</span>
            <Link href="/terms-and-conditions" className="hover:text-white/60 transition-colors">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
