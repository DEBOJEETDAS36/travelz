"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

const RevealSentence = ({
  sentence,
  delay = 0,
  className,
}: {
  sentence: string;
  delay?: number;
  className?: string;
}) => {
  const wordsRef = useRef<(HTMLSpanElement | null)[]>([]);

  useGSAP(() => {
    gsap.fromTo(
      wordsRef.current.filter(Boolean),
      { opacity: 0, scale: 1.5, filter: "blur(10px)" },
      {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        stagger: 0.05,
        delay, // Apply delay from props
        ease: "power2.out",
      }
    );
  });

  return (
    <div className={cn("text-muted-foreground", className)}>
      {sentence.split(" ").map((word, i) => (
        <span
          key={i}
          ref={(el) => {
            if (el) wordsRef.current[i] = el;
          }}
          className="inline-block opacity-0 mx-1"
        >
          {word}
        </span>
      ))}
    </div>
  );
};

export default RevealSentence;
