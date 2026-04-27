"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Clients from "@/components/Clients";
import AccredianEdge from "@/components/AccredianEdge";
import Programs from "@/components/Programs";
import CATFramework from "@/components/CATFramework";
import HowItWorks from "@/components/HowItWorks";
import FAQs from "@/components/FAQs";
import Testimonials from "@/components/Testimonials";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import Footer from "@/components/Footer";

export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <>
      <Navbar onEnquireClick={openForm} />
      <main>
        <Hero onEnquireClick={openForm} />
        <Stats />
        <Clients />
        <AccredianEdge />
        <Programs />
        <CATFramework />
        <HowItWorks />
        <FAQs />
        <Testimonials onEnquireClick={openForm} />
      </main>
      <Footer onEnquireClick={openForm} />
      <LeadCaptureForm isOpen={isFormOpen} onClose={closeForm} />
    </>
  );
}
