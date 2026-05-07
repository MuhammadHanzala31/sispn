"use client";

import { useState } from "react";

const COUNTRY_CODES = [
  { code: "+1", flag: "🇺🇸", country: "USA" },

];

export default function ServiceForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(COUNTRY_CODES[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [budget, setBudget] = useState(50);
  const [message, setMessage] = useState("");

  // Budget slider: 0 = AED 5K, 100 = AED 100K+
  const getBudgetLabel = (val: number) => {
    if (val <= 0) return "$ 5K";
    if (val >= 100) return "$ 100K+";
    const amount = Math.round(5000 + (val / 100) * 95000);
    return `$ ${amount >= 1000 ? (amount / 1000).toFixed(0) + "K" : amount}`;
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      {/* Card */}
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-black/50 backdrop-blur-sm p-8 space-y-2">
        {/* Heading */}
        <h2 className="text-white text-2xl font-semibold">
          Get A Free Consultation Today!
        </h2>

        {/* Name */}
        <input
          type="text"
          placeholder="Name*"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email*"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
        />

        {/* Phone with country code */}
        <div className="flex rounded-lg border border-white/10 bg-white/5 overflow-visible relative">
          {/* Country Selector */}
          <button
            type="button"
            onClick={() => setDropdownOpen((prev) => !prev)}
            className="flex items-center gap-1 px-3 py-3 text-white border-r border-white/10 whitespace-nowrap hover:bg-white/10 transition rounded-l-lg"
          >
            <span>{selectedCountry.flag}</span>
            <span className="text-sm">{selectedCountry.code}</span>
            <svg
              className={`w-3 h-3 ml-1 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Dropdown */}
          {dropdownOpen && (
            <div className="absolute top-full left-0 mt-1 w-48 rounded-lg border border-white/10 bg-[#1a1530] shadow-xl z-50">
              {COUNTRY_CODES.map((c) => (
                <button
                  key={c.code}
                  type="button"
                  onClick={() => {
                    setSelectedCountry(c);
                    setDropdownOpen(false);
                  }}
                  className="flex items-center gap-2 w-full px-4 py-2 text-white text-sm hover:bg-white/10 transition"
                >
                  <span>{c.flag}</span>
                  <span>{c.code}</span>
                  <span className="text-white/50">{c.country}</span>
                </button>
              ))}
            </div>
          )}

          {/* Phone input */}
          <input
            type="tel"
            placeholder="Phone No*"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="flex-1 bg-transparent px-4 py-3 text-white placeholder-white/40 outline-none"
          />
        </div>

        {/* Budget Slider */}
        <div className="space-y-2">
          <div className="flex justify-between text-white/60 text-sm">
            <span>$ 5K</span>
            <span>$ 100K+</span>
          </div>
          <div className="relative w-full">
            {/* Track background */}
            <div className="absolute top-1/2 -translate-y-1/2 w-full h-1.5 rounded-full bg-white/10" />
            {/* Filled track */}
            <div
              className="absolute top-1/2 -translate-y-1/2 h-1.5 rounded-full bg-gradient-to-r from-purple-600 to-purple-400"
              style={{ width: `${budget}%` }}
            />
            <input
              type="range"
              min={0}
              max={100}
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="relative w-full appearance-none bg-transparent cursor-pointer
                [&::-webkit-slider-thumb]:appearance-none
                [&::-webkit-slider-thumb]:w-5
                [&::-webkit-slider-thumb]:h-5
                [&::-webkit-slider-thumb]:rounded-full
                [&::-webkit-slider-thumb]:bg-white
                [&::-webkit-slider-thumb]:shadow-[0_0_0_3px_rgba(168,85,247,0.6)]
                [&::-webkit-slider-thumb]:cursor-pointer
                [&::-moz-range-thumb]:w-5
                [&::-moz-range-thumb]:h-5
                [&::-moz-range-thumb]:rounded-full
                [&::-moz-range-thumb]:bg-white
                [&::-moz-range-thumb]:border-0
                [&::-moz-range-thumb]:shadow-[0_0_0_3px_rgba(168,85,247,0.6)]
                [&::-webkit-slider-runnable-track]:h-1.5
                [&::-webkit-slider-runnable-track]:rounded-full
                [&::-webkit-slider-runnable-track]:bg-transparent
                py-2"
            />
          </div>
          <div className="text-center text-purple-400 text-sm font-medium">
            {getBudgetLabel(budget)}
          </div>
        </div>

        {/* Message */}
        <textarea
          placeholder="Tell us about your project"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition resize-none"
        />

        {/* Submit */}
        <button
          onClick={handleSubmit}
          className="w-full rounded-full bg-gradient-to-r from-purple-600 to-purple-500 py-3.5 text-white font-semibold text-base hover:from-purple-500 hover:to-purple-400 active:scale-95 transition-all duration-200 shadow-lg shadow-purple-500/30"
        >
          Submit
        </button>
      </div>
    </div>
  );
}