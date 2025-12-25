"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Certification {
  id: string;
  name: string;
  image: string;
  alt: string;
}

const certifications: Certification[] = [
  {
    id: "1",
    name: "FSSAI",
    image: "/assets/images/certifiedlogos/fssai.webp",
    alt: "FSSAI Certified",
  },
  {
    id: "2",
    name: "Vegetarian",
    image: "/assets/images/certifiedlogos/vegeterian.webp",
    alt: "Vegetarian Certified",
  },
  {
    id: "3",
    name: "Organic & 100% Natural",
    image: "/assets/images/certifiedlogos/organic.webp",
    alt: "Organic & 100% Natural Certified",
  },
  {
    id: "4",
    name: "No Added Sugar & Salt",
    image: "/assets/images/certifiedlogos/sugar.webp",
    alt: "No Added Sugar & Salt",
  },
];

export function CertificationsSection() {
  const logosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (logosRef.current) {
      const logos = logosRef.current.children;
      gsap.fromTo(
        logos,
        { opacity: 0, scale: 0.5, rotation: -180 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: 0.15,
          scrollTrigger: {
            trigger: logosRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <section className="relative py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <div
          ref={logosRef}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16"
        >
          {certifications.map((certification) => (
            <div
              key={certification.id}
              className="flex items-center justify-center w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
            >
              <div className="relative w-full h-full">
                <Image
                  src={certification.image}
                  alt={certification.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 128px, (max-width: 1024px) 160px, 192px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
