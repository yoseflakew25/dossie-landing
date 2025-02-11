"use client";
import { useEffect, useRef } from 'react';
import HeroSection from "../components/ui/hero";
import Features from "../components/ui/Features";
import Features2 from "../components/ui/Features2";
import Features3 from "../components/ui/Features3";
import Faq from "../components/ui/Faq";
import Cta from "../components/ui/Cta";
import Testimonial from "../components/ui/Testimonial";
import Brand from "../components/ui/Brand";

const animateOnScroll = (element) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  });
  observer.observe(element);
};

export default function Home() {
  const sections = useRef([]);

  useEffect(() => {
    sections.current.forEach((section) => animateOnScroll(section));
  }, []);

  return (
    <div>
      <div>
        <HeroSection />
      </div>  
      <div>
        <Brand />
      </div>
      <div ref={(el) => (sections.current[2] = el)}>
        <Features />
      </div>
     
      <div ref={(el) => (sections.current[3] = el)}>
        <Features2 />
      </div>
      <div ref={(el) => (sections.current[4] = el)}>
        <Features3 />
      </div>
      <div ref={(el) => (sections.current[5] = el)}>
        <Faq />
      </div>
      {/* <div ref={(el) => (sections.current[6] = el)}>
        <Testimonial />
      </div> */}
      <div ref={(el) => (sections.current[7] = el)}>
        <Cta />
      </div>
    </div>
  );
}
