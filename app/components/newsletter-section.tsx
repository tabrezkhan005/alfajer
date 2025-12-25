"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current.children,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Implement newsletter subscription API call
    console.log("Subscribing email:", email);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setEmail("");
    alert("Thank you for subscribing!");
  }

  return (
    <section className="relative py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#8B1538] via-[#7a1230] to-[#6a0f28] overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="container mx-auto relative z-10">
        <div ref={contentRef} className="max-w-3xl mx-auto text-center">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-5 leading-tight" style={{ fontFamily: "Poppins, sans-serif" }}>
            Want to hear about{" "}
            <span className="text-white/90">New Discount Codes?</span>
          </h2>

          {/* Subheading */}
          <p className="text-base md:text-lg text-white/85 mb-6 md:mb-8 max-w-xl mx-auto" style={{ fontFamily: "Poppins, sans-serif" }}>
            Subscribe for exclusive offers, wellness tips, and new product launches
          </p>

          {/* Email Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-3.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-white/30 transition-all duration-300 text-sm md:text-base"
              style={{ fontFamily: "Poppins, sans-serif" }}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-3.5 bg-white text-[#8B1538] font-semibold rounded-lg hover:bg-[#faf9f7] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wide shadow-md hover:shadow-lg hover:scale-105 active:scale-95 text-sm md:text-base whitespace-nowrap"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing Up...
                </span>
              ) : (
                "SIGN UP"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
