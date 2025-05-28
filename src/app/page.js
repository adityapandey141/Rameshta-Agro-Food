import React from "react";
import HeroSection from "@/components/HeroSection";
import SpecialOffers from "@/components/SpecialOffers";
import AboutSection from "@/components/AboutSection";
import SolutionSection from "@/components/SolutionSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import FoundersSection from "@/components/Founders";
import CTA from "@/components/CTA";
import TaglineSection from "@/components/TaglineSection";

import "./page.css";

const page = () => {
  return (
    <div>
      <HeroSection />
      <SpecialOffers />
      {/* <TaglineSection /> */}
      <AboutSection />
      <SolutionSection />
      <WhyChooseUs />
      <FoundersSection />
      <CTA />
    </div>
  );
};

export default page;
