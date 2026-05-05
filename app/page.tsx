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
import { useModal } from "./context/store";

export default function Home() {
  const { isOpen, closeModal } = useModal()
  return (
    <main>
      <Hero />
      <Services />
      <About />
      {/* <PricingSection/> */}
      <Portfolio />
      <AwardsSlider />
      <Projects />
      <Popup isOpen={isOpen} onClose={closeModal} />
      <Newsletter />
      <RequestForm />

    </main>
  );
}
