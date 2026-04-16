import Image from "next/image";
import Hero from "./(components)/homepage/Hero";
import About from "./(components)/homepage/About";
import Services from "./(components)/homepage/Services";
import Projects from "./(components)/homepage/Projects";
import Portfolio from "./(components)/Portfolio";
import AwardsSlider from "./(components)/Award";
import RequestForm from "./(components)/RequestForm";
import Newsletter from "./(components)/Newsletter";

export default function Home() {
  return (
    <main>
      <Hero />
      <About/>
      <Services/>
      <Projects/>
      <Portfolio/>
      <AwardsSlider/>
      <Newsletter/>
      <RequestForm/>
    </main>
  );
}
