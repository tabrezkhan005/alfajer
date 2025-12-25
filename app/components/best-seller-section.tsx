"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface BestSellerProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  alt: string;
}

interface BestSellerSectionProps {
  products?: BestSellerProduct[];
}

const defaultProducts: BestSellerProduct[] = [
  {
    id: "1",
    name: "Pure Himalayan Old Rock Shilajit",
    description:
      "Shilajit is a natural substance that is formed over centuries from the decomposition of plant matter in the Himalayas, including the Kashmir region. Kashmiri Shilajit, specifically sourced from the Kashmir...",
    price: 1299,
    image: "/assets/images/products/8.png",
    alt: "Pure Himalayan Old Rock Shilajit",
  },
  {
    id: "2",
    name: "Premium Mamra Almond",
    description:
      "Premium quality Mamra almonds sourced directly from Kashmir. Rich in nutrients and perfect for your daily health routine.",
    price: 699,
    image: "/assets/images/products/9.png",
    alt: "Premium Mamra Almond",
  },
  {
    id: "3",
    name: "Premium Kashmiri Saffron",
    description:
      "The finest quality saffron threads from Kashmir. Known for its vibrant color, exquisite flavor, and aromatic properties.",
    price: 1299,
    image: "/assets/images/products/1.jpeg",
    alt: "Premium Kashmiri Saffron",
  },
];

function ChevronLeftIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function ProductCard({ product }: { product: BestSellerProduct }) {
  const [imageError, setImageError] = useState(false);
  const [showMore, setShowMore] = useState(false);

  function formatPrice(price: number) {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  }

  const truncatedDescription = product.description.length > 150
    ? product.description.substring(0, 150) + "..."
    : product.description;

  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col w-full">
      <div className="flex flex-col md:flex-row h-full">
        {/* Product Image - Full height on desktop */}
        <div className="relative w-full md:w-1/2 h-80 md:h-auto min-h-[400px] md:min-h-[500px] bg-gray-50 overflow-hidden flex-shrink-0">
          {imageError ? (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-500 text-sm p-4 text-center">
              <div>
                <p className="font-medium mb-1">{product.name}</p>
                <p className="text-xs">Add image at {product.image}</p>
              </div>
            </div>
          ) : (
            <>
              <Image
                src={product.image}
                alt={product.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
                onError={() => setImageError(true)}
                priority={false}
              />
            </>
          )}

          {/* Best Seller Badge on Image */}
          <div className="absolute top-4 left-4 bg-[#8B4513] text-white text-[10px] font-bold px-3 py-1.5 rounded-md shadow-md flex items-center gap-1.5 z-10">
            <StarIcon className="w-3 h-3 text-yellow-400 fill-yellow-400" />
            <span>BEST SELLER</span>
          </div>
        </div>

        {/* Product Info */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between flex-grow">
          <div className="flex-grow">
            {/* Product Name */}
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 leading-tight" style={{ fontFamily: "Poppins, sans-serif" }}>
              {product.name}
            </h3>

            {/* Description */}
            <div className="mb-6">
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {showMore ? product.description : truncatedDescription}
              </p>
              {product.description.length > 150 && (
                <button
                  onClick={() => setShowMore(!showMore)}
                  className="text-[#8B1538] font-medium text-sm mt-2 hover:text-[#7a1230] transition-colors"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {showMore ? "Show Less" : "Read More"}
                </button>
              )}
            </div>
          </div>

          {/* Price and Button */}
          <div className="mt-auto pt-4 border-t border-gray-100">
            <div className="mb-5">
              <span className="text-xs text-gray-500 font-medium block mb-1">Price</span>
              <div className="text-2xl md:text-3xl font-bold text-[#8B1538]" style={{ fontFamily: "Poppins, sans-serif" }}>
                {formatPrice(product.price)}
              </div>
            </div>
            <button className="w-full bg-[#8B1538] hover:bg-[#7a1230] text-white font-semibold py-3.5 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg" style={{ fontFamily: "Poppins, sans-serif" }}>
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function BestSellerSection({ products = defaultProducts }: BestSellerSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Calculate items per view based on screen size
  useEffect(() => {
    function updateItemsPerView() {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    }

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

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

    if (sliderRef.current) {
      const cards = sliderRef.current.querySelectorAll(".product-card");
      gsap.fromTo(
        cards,
        { opacity: 0, x: 50, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: sliderRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  const maxIndex = Math.max(0, products.length - itemsPerView);

  function nextSlide() {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }

  function prevSlide() {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  }

  return (
    <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            ref={titleRef}
            className="text-3xl md:text-5xl font-bold text-[#8B1538] mb-4"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Best Sellers
          </h2>
        </div>

        {/* Slider Container */}
        <div ref={containerRef} className="relative">
          {/* Navigation Arrows */}
          {products.length > itemsPerView && (
            <>
              <button
                onClick={prevSlide}
                aria-label="Previous slide"
                className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-50 shadow-lg rounded-full p-3 transition-all -translate-x-4 border border-gray-200 hover:border-[#8B1538] group"
              >
                <ChevronLeftIcon className="w-5 h-5 text-gray-600 group-hover:text-[#8B1538] transition-colors" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next slide"
                className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-50 shadow-lg rounded-full p-3 transition-all translate-x-4 border border-gray-200 hover:border-[#8B1538] group"
              >
                <ChevronRightIcon className="w-5 h-5 text-gray-600 group-hover:text-[#8B1538] transition-colors" />
              </button>
            </>
          )}

          {/* Products Grid/Slider */}
          <div ref={sliderRef} className="overflow-hidden">
            <div
              className="flex gap-4 md:gap-6 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className="product-card flex-shrink-0"
                  style={{
                    width: `calc(${100 / itemsPerView}% - ${itemsPerView > 1 ? ((itemsPerView - 1) * 1.5 * 16) / itemsPerView : 0}px)`,
                    minWidth: 0
                  }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          {products.length > itemsPerView && maxIndex > 0 && (
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-8 bg-[#8B1538]"
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
