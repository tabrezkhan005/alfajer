"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface AboutSectionProps {
  backgroundImage?: string;
}

export function AboutSection({
  backgroundImage = "/assets/images/about/about.jpeg",
}: AboutSectionProps) {
  const [bgImageError, setBgImageError] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current.children,
        { opacity: 0, y: 30 },
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
  }, []);

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center">
      {/* Single Background Image */}
      <div className="absolute inset-0 z-0">
        {!bgImageError ? (
          <Image
            src={backgroundImage}
            alt="Kashmir background"
            fill
            className="object-cover"
            sizes="100vw"
            onError={() => setBgImageError(true)}
            priority
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900" />
        )}
      </div>

      {/* Content Block - Shifted left, taller, narrower */}
      <div
        ref={contentRef}
        className="
          relative z-10
          w-11/12 max-w-xl min-h-[460px]
          ml-0 md:ml-8 lg:ml-16
          bg-white
          p-8 md:p-12 lg:p-14
          my-8 md:my-14
          flex flex-col justify-center
        "
      >
        {/* Decorative dots */}
        <div className="absolute top-12 left-8 w-2 h-2 rounded-full bg-gray-300/50" />
        <div className="absolute bottom-16 right-12 w-1.5 h-1.5 rounded-full bg-gray-300/40" />
        <div className="absolute top-32 right-8 w-2.5 h-2.5 rounded-full bg-gray-300/30" />
        <div className="absolute bottom-24 left-12 w-1 h-1 rounded-full bg-gray-300/50" />

        <h2 className="text-3xl md:text-5xl font-serif text-[#8B1538] mb-6 md:mb-8" style={{ fontFamily: "Poppins, sans-serif" }}>
          Why Al Fajer Mart
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8 md:mb-10">
          Authentic Kashmiri goodness, delivered with passion and care. Al Fajer Mart is
          founded and owned by Aly Goni, a renowned Indian actor and model dedicated to bringing
          the purest, handpicked dry fruits and natural products from Kashmir to your home. Our
          mission is to promote health and wellness through authentic, organic Kashmiri treasures.
        </p>
        <a
          href="/about"
          className="inline-block bg-[#8B1538] hover:bg-[#7a1230] text-white font-semibold py-3.5 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          KNOW MORE
        </a>
      </div>
    </section>
  );
}
