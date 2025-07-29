import React from "react";
import Hero from "../components/Home/Hero";
import Services from "@/components/Home/Services";
import Contact from "@/components/Home/Contact";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import ProcessSection from "@/components/Home/ProcessSection";
import TeamSection from "@/components/Home/TeamSection";
import About from "@/components/Home/About";
import RecentProjects from "@/components/Home/RecentProjects";
import Testimonials from "@/components/Home/Testimonials";

const page = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <RecentProjects />
      <TeamSection />
      <WhyChooseUs />
      <ProcessSection />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default page;
