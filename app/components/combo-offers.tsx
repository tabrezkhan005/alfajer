"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function ProductImage({ src, alt, title }: { src: string; alt: string; title: string }) {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-500 text-sm p-4 text-center">
        <div>
          <p className="font-medium mb-1">{title}</p>
          <p className="text-xs">Add image at {src}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        onError={() => setImageError(true)}
      />
    </>
  );
}

interface ComboProduct {
  id: string;
  title: string;
  image: string;
  currentPrice: number;
  originalPrice: number;
  alt: string;
}

interface ComboOffersProps {
  products?: ComboProduct[];
}

const defaultProducts: ComboProduct[] = [
  {
    id: "1",
    title: "Royal dry fruit combo",
    image: "/assets/images/products/1.jpeg",
    currentPrice: 1799,
    originalPrice: 2274,
    alt: "Royal dry fruit combo with pistachios, cashews, and walnuts",
  },
  {
    id: "2",
    title: "Winter wellness combo",
    image: "/assets/images/products/2.jpeg",
    currentPrice: 1699,
    originalPrice: 2153,
    alt: "Winter wellness combo with green tea, honey, and spices",
  },
  {
    id: "3",
    title: "Sweet indulgence combo",
    image: "/assets/images/products/3.jpeg",
    currentPrice: 1699,
    originalPrice: 1948,
    alt: "Sweet indulgence combo with honey dates, muesli, and blueberries",
  },
  {
    id: "4",
    title: "Luxury wellness combo",
    image: "/assets/images/products/4.jpeg",
    currentPrice: 2999,
    originalPrice: 3549,
    alt: "Luxury wellness combo with white honey and saffron",
  },
];

export function ComboOffers({ products = defaultProducts }: ComboOffersProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
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
          stagger: 0.15,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 75%",
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
    <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#faf9f7] to-white">
      {/* Background decorative dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 rounded-full bg-pink-200/30" />
        <div className="absolute top-40 right-20 w-1.5 h-1.5 rounded-full bg-pink-200/40" />
        <div className="absolute bottom-32 left-1/4 w-2.5 h-2.5 rounded-full bg-pink-200/25" />
        <div className="absolute top-60 right-1/3 w-1 h-1 rounded-full bg-pink-200/35" />
        <div className="absolute bottom-20 right-10 w-2 h-2 rounded-full bg-pink-200/30" />
        <div className="absolute top-1/3 left-1/2 w-1.5 h-1.5 rounded-full bg-pink-200/40" />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Title */}
        <h2
          ref={titleRef}
          className="text-2xl sm:text-3xl md:text-5xl font-serif text-center mb-3 sm:mb-4 md:mb-6 text-[#8B1538]"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Combo Offers
        </h2>
        <p className="text-center text-gray-600 mb-8 sm:mb-12 md:mb-16 text-xs sm:text-sm md:text-base px-4">
          Exclusive bundles for maximum savings
        </p>

        {/* Products Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => {
            const discount = Math.round(
              ((product.originalPrice - product.currentPrice) / product.originalPrice) * 100
            );

            return (
              <div
                key={product.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full"
              >
                {/* Product Image */}
                <div className="relative aspect-square w-full bg-gray-100 overflow-hidden flex-shrink-0">
                  <ProductImage
                    src={product.image}
                    alt={product.alt}
                    title={product.title}
                  />
                  {/* Discount Badge */}
                  <div className="absolute top-4 right-4 bg-[#8B1538] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg z-10">
                    {discount}% OFF
                  </div>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                </div>

                {/* Product Info */}
                <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 line-clamp-2 flex-shrink-0">
                    {product.title}
                  </h3>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-2 sm:mb-3 flex-shrink-0">
                    <span className="text-xl sm:text-2xl md:text-3xl font-bold text-[#8B1538]">
                      {formatPrice(product.currentPrice)}
                    </span>
                    <span className="text-xs sm:text-sm md:text-base text-gray-400 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  </div>

                  {/* Savings Info */}
                  <p className="text-xs text-green-600 font-medium mb-4 sm:mb-5 flex-shrink-0">
                    Save {formatPrice(product.originalPrice - product.currentPrice)}
                  </p>

                  {/* Add to Cart Button */}
                  <button className="mt-auto w-full bg-[#8B1538] hover:bg-[#7a1230] text-white font-semibold py-3 sm:py-3.5 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg text-sm sm:text-base">
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
