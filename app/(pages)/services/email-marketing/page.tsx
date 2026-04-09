"use client";

import Image from "next/image";
import React from "react";
import brand from "@/public/brand-1/Component 87 – 9.png";

export default function Page() {
  return (
    <main>

      {/* ================= HERO ================= */}
      <section className="lg:py-52 py-20 hero-banner text-white text-center">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-8">
          <h1 className="text-5xl lg:text-7xl font-bold">EMAIL MARKETING</h1>
          <p className="text-lg max-w-[700px]">
            Full-service email marketing with SISPN Tech — helping you convert,
            engage and scale your business.
          </p>

          <div className="grid grid-cols-3 gap-6 mt-10">
            {[1, 2, 3, 4, 5, 6].map((_, i) => (
              <Image key={i} src={brand} alt="brand" />
            ))}
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-20 max-w-[1000px] mx-auto text-center flex flex-col gap-6 px-5">
        <p className="text-gray-500">What Can We Do</p>
        <h2 className="text-4xl font-bold text-[#81358A]">
          THE EMAIL MARKETING COMPANY THAT GETS RESULTS
        </h2>
        <p className="text-gray-600 leading-8">
          At SISPN Tech, we don’t just send emails — we build intelligent,
          conversion-ready systems tailored to your business.
        </p>
        <p className="text-gray-600 leading-8">
          Whether you're scaling or optimizing, we craft strategies that
          generate real ROI and customer engagement.
        </p>
      </section>

      {/* ================= STRATEGY ================= */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1200px] mx-auto text-center flex flex-col gap-10 px-5">
          <h2 className="text-3xl font-bold text-[#81358A]">
            STRATEGIC EMAIL CAMPAIGNS THAT CONVERT
          </h2>

          <div className="grid lg:grid-cols-3 gap-6">
            {[
              "Hyper-Personalized Targeting",
              "Compelling Creative Design",
              "Smart Automation & Workflows",
              "Data-Driven Optimization",
              "Clear Call-to-Action",
              "Customer Journey Mapping",
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white rounded-xl shadow">
                <h3 className="font-semibold text-lg">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-20 max-w-[1200px] mx-auto px-5">
        <h2 className="text-center text-3xl font-bold text-[#81358A] mb-10">
          OUR COMPANY'S EMAIL MARKETING SERVICES
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {[
            "Audit & Strategy",
            "Email Design & Copywriting",
            "Subscriber List Growth",
            "Automated Workflows",
            "Testing & Optimization",
            "Reporting & Analytics",
          ].map((title, i) => (
            <div key={i} className="bg-white rounded-xl shadow overflow-hidden">
              <div className="h-48 bg-gray-200" />
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-2">{title}</h3>
                <p className="text-gray-500 text-sm">
                  Short description about this service.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1000px] mx-auto flex flex-col gap-6 px-5">
          <h2 className="text-center text-3xl font-bold text-[#81358A] mb-6">
            WHY CHOOSE SISPN TECH AS YOUR EMAIL MARKETING PARTNER?
          </h2>

          {[
            "Expert Team",
            "Customized Solutions",
            "Proven Technology",
            "Transparent Reporting",
            "Cost-Effective Marketing",
            "Holistic Strategy",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 bg-white p-5 rounded-lg shadow">
              <div className="w-12 h-12 bg-purple-200 rounded-lg"></div>
              <p className="font-medium">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="py-20 bg-gradient-to-r from-[#2b0a2e] to-[#6a1b6d] text-white">
        <div className="max-w-[1100px] mx-auto text-center px-5">
          <h2 className="text-3xl font-bold mb-10">
            BENEFITS OF PROFESSIONAL EMAIL MARKETING
          </h2>

          <div className="grid lg:grid-cols-3 gap-6">
            {[
              "High Engagement & Conversion",
              "Personalized Customer Experience",
              "Measurable Results",
              "Time & Cost Efficient",
              "Scalable Growth",
              "Better ROI",
            ].map((item, i) => (
              <div key={i} className="bg-white text-black p-5 rounded-lg">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-20 max-w-[1000px] mx-auto px-5">
        <h2 className="text-center text-3xl font-bold text-[#81358A] mb-10">
          FREQUENTLY ASKED QUESTIONS
        </h2>

        {[
          "What services do you offer?",
          "How is SISPN Tech different?",
          "Which tools do you use?",
          "How fast are results?",
          "Is email marketing worth it?",
        ].map((q, i) => (
          <details key={i} className="mb-4 border rounded-lg p-4">
            <summary className="cursor-pointer font-medium">{q}</summary>
            <p className="text-gray-500 mt-2">
              Answer content goes here...
            </p>
          </details>
        ))}
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-10 items-center px-5">
        <div className="h-72 bg-gray-200 rounded-lg" />

        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold">
            LET’S TALK ABOUT YOUR PROJECT
          </h2>

          <input className="border p-3 rounded" placeholder="Your Name" />
          <input className="border p-3 rounded" placeholder="Email" />
          <textarea className="border p-3 rounded" placeholder="Message" />

          <button className="bg-[#81358A] text-white py-3 rounded hover:opacity-90">
            Submit Now
          </button>
        </div>
      </section>

    </main>
  );
}