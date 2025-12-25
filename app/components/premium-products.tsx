"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  alt: string;
}

interface PremiumProductsProps {
  products?: Product[];
}

const defaultProducts: Product[] = [
  {
    id: "1",
    name: "Premium Mamra Almond",
    price: 699,
    image: "/assets/images/products/1.jpeg",
    alt: "Premium Mamra Almond",
  },
  {
    id: "2",
    name: "Premium Kashmiri Walnuts",
    price: 470,
    image: "/assets/images/products/2.jpeg",
    alt: "Premium Kashmiri Walnuts",
  },
  {
    id: "3",
    name: "Dry Fruit Saffron Honey",
    price: 655,
    image: "/assets/images/products/3.jpeg",
    alt: "Dry Fruit Saffron Honey",
  },
  {
    id: "4",
    name: "Premium Ajwa Dates",
    price: 600,
    image: "/assets/images/products/4.jpeg",
    alt: "Premium Ajwa Dates",
  },
];

function ProductImage({ src, alt, name }: { src: string; alt: string; name: string }) {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-500 text-sm p-4 text-center">
        <div>
          <p className="font-medium mb-1">{name}</p>
          <p className="text-xs">Add image at {src}</p>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      onError={() => setImageError(true)}
    />
  );
}

export function PremiumProducts({ products = defaultProducts }: PremiumProductsProps) {
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    if (cardsRef.current) {
      const cards = cardsRef.current.children;
      gsap.fromTo(
        cards,
        { opacity: 0, y: 60, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    if (buttonRef.current) {
      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  function formatPrice(price: number) {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  }

  return (
    <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#faf9f7] to-white overflow-hidden">
      {/* Elegant background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #8B1538 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-[#8B1538]/5 to-transparent pointer-events-none" />

      <div className="container mx-auto relative z-10">
        {/* Section Title and Subtitle */}
        <div ref={headerRef} className="text-center mb-16 md:mb-20">
          <div className="inline-block mb-4">
            <span className="text-xs font-semibold text-[#8B1538] uppercase tracking-widest bg-[#8B1538]/10 px-4 py-2 rounded-full">
              Premium Selection
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 px-4" style={{ fontFamily: "Poppins, sans-serif" }}>
            Our{" "}
            <span className="text-[#8B1538]">Premium Products</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Handpicked, organic, and packed with goodness — find your favorite Kashmiri
            delights here.
          </p>
        </div>

        {/* Products Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-16">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 hover:border-[#8B1538]/20"
            >
              {/* Product Image Container */}
              <div className="relative aspect-square w-full bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <ProductImage src={product.image} alt={product.alt} name={product.name} />

                {/* Premium Badge */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-[#8B1538] to-[#7a1230] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg z-20">
                  PREMIUM
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5 sm:p-6 md:p-7 relative">
                {/* Decorative accent */}
                <div className="absolute top-0 left-5 sm:left-6 right-5 sm:right-6 h-1 bg-gradient-to-r from-transparent via-[#8B1538]/20 to-transparent" />

                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 line-clamp-2 min-h-[3rem] sm:min-h-[3.5rem] group-hover:text-[#8B1538] transition-colors" style={{ fontFamily: "Poppins, sans-serif" }}>
                  {product.name}
                </h3>

                {/* Price */}
                <div className="mb-4 sm:mb-6 flex items-baseline gap-2">
                  <span className="text-xl sm:text-2xl md:text-3xl font-bold text-[#8B1538]" style={{ fontFamily: "Poppins, sans-serif" }}>
                    {formatPrice(product.price)}
                  </span>
                  <span className="text-xs text-gray-400 font-medium">per unit</span>
                </div>

                {/* Add to Cart Button */}
                <button className="w-full bg-gradient-to-r from-[#8B1538] to-[#7a1230] hover:from-[#7a1230] hover:to-[#6a0f28] text-white font-semibold py-3 sm:py-4 px-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-xl group-hover:shadow-[#8B1538]/20 text-sm sm:text-base" style={{ fontFamily: "Poppins, sans-serif" }}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* VIEW ALL Button */}
        <div ref={buttonRef} className="text-center">
          <button className="group relative bg-white border-2 border-[#8B1538] text-[#8B1538] font-semibold py-4 px-10 rounded-xl transition-all duration-300 hover:bg-[#8B1538] hover:text-white hover:shadow-xl overflow-hidden" style={{ fontFamily: "Poppins, sans-serif" }}>
            <span className="relative z-10 flex items-center gap-2">
              VIEW ALL PRODUCTS
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transform group-hover:translate-x-1 transition-transform"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-[#8B1538] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </button>
        </div>
      </div>
    </section>
  );
}
