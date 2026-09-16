import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {

      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`p-3.5 rounded-full glass-strong border border-pink-500/30 text-pink-400 
          hover:text-white hover:bg-linear-to-r hover:from-pink-500 hover:to-rose-500 
          hover:shadow-[0_0_20px_rgba(236,72,153,0.6)] hover:border-transparent
          transition-all duration-300 ease-in-out cursor-pointer active:scale-95
          ${
            isVisible
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 translate-y-6 pointer-events-none"
          }`}
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
};

export default ScrollToTop;
