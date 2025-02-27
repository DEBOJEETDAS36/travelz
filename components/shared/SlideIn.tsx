"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

const SlideIn = ({
  children,
  delay = 0,
  duration = 0.8,
  from = "bottom", // 'left', 'right', 'top', 'bottom'
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  from?: "left" | "right" | "top" | "bottom";
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ref.current,
      {
        opacity: 0,
        x: from === "left" ? -50 : from === "right" ? 50 : 0,
        y: from === "top" ? -50 : from === "bottom" ? 50 : 0,
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration,
        delay,
        ease: "power2.out",
      }
    );
  });

  return (
    <div ref={ref} className={cn("opacity-0", className)}>
      {children}
    </div>
  );
};

export default SlideIn;
