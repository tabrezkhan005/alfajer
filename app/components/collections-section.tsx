"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Collection {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  href: string;
}

interface CollectionsSectionProps {
  collections?: Collection[];
}

const defaultCollections: Collection[] = [
  {
    id: "1",
    title: "Healthcare",
    description:
      "Experience the power of ancient wellness with our pure Shilajit and other health essentials.",
    image: "/assets/images/products/5.jpeg",
    alt: "Healthcare products including Shilajit",
    href: "/collections/healthcare",
  },
  {
    id: "2",
    title: "Saffron",
    description:
      "The thread for vibrant health & culinary delight. Elevating every dish with exquisite flavor & aroma",
    image: "/assets/images/products/6.jpeg",
    alt: "Premium Kashmiri saffron",
    href: "/collections/saffron",
  },
  {
    id: "3",
    title: "Honey Varietals",
    description:
      "Indulge in the natural sweetness of wild forest honey and unique saffron-infused blends.",
    image: "/assets/images/products/7.jpeg",
    alt: "Honey varietals and saffron-infused honey",
    href: "/collections/honey",
  },
];

function CollectionCard({ collection }: { collection: Collection }) {
  const [imageError, setImageError] = useState(false);

  return (
    <a
      href={collection.href}
      className="group block relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 hover:border-[#8B1538]/30 transition-all duration-500 h-full"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity">
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#8B1538] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#8B1538] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 p-8 md:p-10 flex flex-col h-full">
        {/* Content Section */}
        <div className="flex-grow mb-8">
          <div className="inline-block mb-6">
            <span className="text-xs font-semibold text-[#8B1538] uppercase tracking-wider bg-[#8B1538]/10 px-3 py-1.5 rounded-full">
              Collection
            </span>
          </div>

          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 group-hover:text-[#8B1538] transition-colors" style={{ fontFamily: "Poppins, sans-serif" }}>
            {collection.title}
          </h3>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
            {collection.description}
          </p>
        </div>

        {/* Image Section - Positioned at bottom */}
        <div className="relative h-56 md:h-64 rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 mt-auto">
          {imageError ? (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-500 text-sm p-4 text-center">
              <div>
                <p className="font-medium mb-1">{collection.title}</p>
                <p className="text-xs">Add image at {collection.image}</p>
              </div>
            </div>
          ) : (
            <>
              <Image
                src={collection.image}
                alt={collection.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
                onError={() => setImageError(true)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </>
          )}
        </div>

        {/* Button */}
        <div className="mt-6 flex items-center gap-2 text-[#8B1538] font-semibold group-hover:gap-4 transition-all">
          <span style={{ fontFamily: "Poppins, sans-serif" }}>Explore Collection</span>
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
        </div>
      </div>
    </a>
  );
}

export function CollectionsSection({
  collections = defaultCollections,
}: CollectionsSectionProps) {
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
        { opacity: 0, y: 80, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #8B1538 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 md:mb-20">
          <h2
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Explore Our{" "}
            <span className="text-[#8B1538]">Exquisite Collections</span>
          </h2>
          <div className="w-24 h-1 bg-[#8B1538] mx-auto rounded-full" />
        </div>

        {/* Collections Grid - Different Layout */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {collections.map((collection) => (
            <CollectionCard key={collection.id} collection={collection} />
          ))}
        </div>
      </div>
    </section>
  );
}
