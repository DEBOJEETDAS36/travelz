"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TestimonialCard from "./shared/TestimonialCard";

gsap.registerPlugin(ScrollTrigger);

const ReviewSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        once: true,
      },
    });

    timeline
      .fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
        }
      )
      .fromTo(
        lineRefs.current.filter(Boolean) as HTMLDivElement[],
        { height: 0 },
        {
          height: "100%",
          duration: 1.2,
          ease: "power2.out",
        },
        "<"
      )
      .fromTo(
        cardsRef.current.filter(Boolean) as HTMLDivElement[],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
        },
        "-=0.6"
      );
  }, []);

  return (
    <section ref={sectionRef} id="review" className="wrapper py-8">
      <p ref={headingRef} className="h_md text-primary text-center opacity-0">
        Here's what our clients have to say
      </p>
      <div className="min-h-[80vh] flex flex-col md:flex gap-5 relative mt-5 md:py-10">
        <div
          ref={(el) => {
            if (el) lineRefs.current[0] = el;
          }}
          className="absolute w-1 left-1/2 -translate-x-1/2 top-0 rounded-full bg-primary hidden md:block"
        />
        <div
          ref={(el) => {
            if (el) lineRefs.current[1] = el;
          }}
          className="absolute w-1 left-1/2 -translate-x-1/2 top-0 rounded-full bg-primary hidden md:block blur-md"
        />

        <div className="absolute size-4 rounded-full bg-primary left-1/2 -translate-x-1/2 top-0 hidden md:block" />
        <div className="absolute size-6 rounded-full bg-primary left-1/2 -translate-x-1/2 -translate-y-1/2 top-0 blur-lg hidden md:block" />

        {[true, false, true, false, true, false].map((isLeft, index) => (
          <TestimonialCard
            key={index}
            isLeft={isLeft}
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default ReviewSection;
