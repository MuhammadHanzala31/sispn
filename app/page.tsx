"use client"

import Hero from "./(components)/homepage/Hero";
import About from "./(components)/homepage/About";
import Services from "./(components)/homepage/Services";
import Projects from "./(components)/homepage/Projects";
import Portfolio from "./(components)/Portfolio";
import AwardsSlider from "./(components)/Award";
import RequestForm from "./(components)/RequestForm";
import Newsletter from "./(components)/Newsletter";
import PricingSection from "./(components)/PricingSection";
import Popup from "./(components)/Popup";
import { useState } from "react";

export default function Home() {
    const [open, setOpen] = useState(true);

  return (
    <main>
      <Hero />
      <About/>
      <Services/>
      {/* <PricingSection/> */}
      <Portfolio/>
      <AwardsSlider/>
      <Projects/>
      {/* <Popup isOpen={open} onClose={()=>setOpen(false)}/> */}
      <Newsletter/>
      <RequestForm/>
      
    </main>
  );
}
