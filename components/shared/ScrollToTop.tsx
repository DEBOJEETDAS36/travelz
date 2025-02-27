"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { Button } from "../ui/button";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // ✅ Native smooth scrolling
  };

  return (
    <Button
      size={"icon"}
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg transition-all ${
        isVisible
          ? "opacity-100 scale-100 blur-none"
          : "opacity-0 scale-0 blur-md"
      }`}
    >
      <ChevronUp className="w-5 h-5" />
      <span className="sr-only">Scroll to top</span>
    </Button>
  );
};

export default ScrollToTop;
