// "use client";

// import { useRef } from "react";

// const AboutSection = () => {
//   const sectionRef = useRef<HTMLElement>(null);
//   return (
//     <section
//       ref={sectionRef}
//       id="about"
//       className="min-h-[80vh] wrapper flex flex-col gap-10 py-10 md:flex-row"
//     >
//       <div className="w-full aspect-square md:w-1/2 rounded-2xl bg-primary/30"></div>
//       <div>
//         <h2 className="h_md text-primary fade_in">Why us?</h2>
//         <ul className="mt-5 space-y-4 text-2xl list-disc marker:text-primary ml-6 text-muted-foreground">
//           <li className="fade_in">Best prices.</li>
//           <li className="fade_in">Wide range of packages.</li>
//           <li className="fade_in">Wide range of destinations.</li>
//           <li className="fade_in">Hassel free booking.</li>
//           <li className="fade_in">24/7 customer support.</li>
//         </ul>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;

"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Accordion } from "@/components/ui/accordion";
import Faq from "./shared/Faq";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const fadeElementsRef = useRef<NodeListOf<HTMLElement> | null>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;
    fadeElementsRef.current = sectionRef.current.querySelectorAll(".fade_in");

    gsap.fromTo(
      fadeElementsRef.current,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.1, // Stagger animation for smooth entrance
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse", // Reverses animation when scrolling up
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="min-h-[80vh] wrapper flex flex-col gap-10 py-10 md:flex-row"
    >
      <div className="w-full aspect-square max-h-136 md:w-1/2 rounded-2xl bg-primary/30"></div>
      <div className="w-full md:w-1/2">
        <div>
          <h2 className="h_md text-primary fade_in">Why us?</h2>
          <ul className="mt-5 space-y-4 text-2xl list-disc marker:text-primary ml-6 text-muted-foreground">
            <li className="fade_in">Best prices.</li>
            <li className="fade_in">Wide range of packages.</li>
            <li className="fade_in">Wide range of destinations.</li>
            <li className="fade_in">Hassle-free booking.</li>
            <li className="fade_in">24/7 customer support.</li>
          </ul>
        </div>
        <div className="mt-10">
          <p className="h_sm text-primary">FAQs</p>
          <Accordion type="single" collapsible className="w-full">
            <Faq
              title="Lorem ipsum dolor?"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis cupiditate quae veritatis nam illo magnam delectus architecto pariatur temporibus expedita aperiam cum, modi possimus dicta consequatur optio. Dolorum, sapiente at!"
              value="item-1"
            />
            <Faq
              title="Lorem ipsum dolor?"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis cupiditate quae veritatis nam illo magnam delectus architecto pariatur temporibus expedita aperiam cum, modi possimus dicta consequatur optio. Dolorum, sapiente at!"
              value="item-2"
            />
            <Faq
              title="Lorem ipsum dolor?"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis cupiditate quae veritatis nam illo magnam delectus architecto pariatur temporibus expedita aperiam cum, modi possimus dicta consequatur optio. Dolorum, sapiente at!"
              value="item-3"
            />
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
