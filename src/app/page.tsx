import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhatWeDo from "@/components/WhatWeDo";
import FamilySupport from "@/components/FamilySupport";
import Facility from "@/components/Facility";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhatWeDo />
        <FamilySupport />
        <Facility />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
