"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

const RevealWord = ({
  word,
  delay = 0,
  className,
}: {
  word: string;
  delay?: number;
  className?: string;
}) => {
  const lettersRef = useRef<HTMLSpanElement[]>([]);

  useGSAP(() => {
    gsap.fromTo(
      lettersRef.current, // No need to filter, `push()` ensures valid elements
      { opacity: 0, y: 10, scale: 1.5, filter: "blur(10px)" },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        stagger: 0.05,
        delay,
        duration: 0.6,
        ease: "power2.out",
      }
    );
  });

  return (
    <span className={cn("inline-block", className)}>
      {word.split("").map((letter, i) => (
        <span
          key={i}
          ref={(el) => {
            if (el) lettersRef.current.push(el);
          }}
          className="inline-block opacity-0"
        >
          {letter}
        </span>
      ))}
    </span>
  );
};

export default RevealWord;
