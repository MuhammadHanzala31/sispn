'use client';

import { useState } from "react";
import PricingCard from "./PricingCard";
import { pricingTabs } from "./../pricingData";
import Image from "next/image";
import bg from '@/public/packages-bg.webp'

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState(pricingTabs[0].id);

  const currentTab = pricingTabs.find(tab => tab.id === activeTab);

  return (
    <section className="py-16 bg-black relative z-1">
        <h3 className="text-white text-4xl font-semibold text-center mb-4">Packages</h3>
        <Image src={bg} alt="bg" className="w-full h-full absolute top-0 left-0 -z-1"/>
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {pricingTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2 rounded-full border transition-all duration-300
              ${
                activeTab === tab.id
                  ? "bg-[#81358A] text-white border-[#81358A]"
                  : "border-[#662C6D] text-[#414141] bg-white"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {currentTab?.plans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>

    </section>
  );
}