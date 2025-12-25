"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

function HeroSlideContent({
  slide,
  isActive,
}: {
  slide: HeroSlide;
  isActive: boolean;
}) {
  const [imageError, setImageError] = useState(false);

  if (imageError || !slide.image) {
    return (
      <div className="relative h-full w-full bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-100 flex items-center justify-center">
        <p className="text-gray-600 text-lg text-center px-4">
          Slide {slide.id} - Add your image at {slide.image || "public/hero-slide-" + slide.id + ".jpg"}
        </p>
      </div>
    );
  }

  return (
    <div className="relative h-full w-full">
      <Image
        src={slide.image}
        alt={slide.alt}
        fill
        className="object-cover"
        priority={isActive}
        sizes="100vw"
        onError={() => setImageError(true)}
      />
    </div>
  );
}

interface HeroSlide {
  id: number;
  image: string;
  alt: string;
}

interface HeroSectionProps {
  slides?: HeroSlide[];
}


export function HeroSection({ slides = [] }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const defaultSlides: HeroSlide[] = [
    {
      id: 1,
      image: "/assets/images/hero/hero1.jpeg",
      alt: "Al Fajer Mart - Premium Organic Products",
    },
    {
      id: 2,
      image: "/assets/images/hero/hero2.jpeg",
      alt: "Al Fajer Mart - Quality Assured Products",
    },
    {
      id: 3,
      image: "/assets/images/hero/hero3.jpeg",
      alt: "Al Fajer Mart - Natural & Organic",
    },
  ];

  const heroSlides = slides.length > 0 ? slides : defaultSlides;

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, heroSlides.length]);

  function goToSlide(index: number) {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  }

  return (
    <section className="relative h-[70vh] md:h-[85vh] w-full overflow-hidden">
      {/* Slides Container */}
      <div className="relative h-full w-full">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <HeroSlideContent slide={slide} isActive={index === currentSlide} />
          </div>
        ))}
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide
                ? "w-8 bg-white"
                : "w-2 bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
