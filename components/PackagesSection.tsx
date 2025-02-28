"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PackagesContainer from "./shared/PackagesContainer";
gsap.registerPlugin(ScrollTrigger);

const PackagesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    gsap.to(headingRef.current, {
      opacity: 1,
      duration: 0.5,
      y: 0,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        end: "top 50%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="packages"
      className="min-h-[80vh] wrapper flex flex-col items-center py-5"
    >
      <h2
        ref={headingRef}
        className="text-center text-muted-foreground opacity-0 translate-y-[20px] text-xl font-semibold"
      >
        Choose from a wide range of packages{" "}
        <span className="text-2xl">😊</span>
      </h2>
      <PackagesContainer />
    </section>
  );
};

export default PackagesSection;
