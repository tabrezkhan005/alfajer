"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useFadeInUp } from "@/app/hooks/use-gsap-animation";

interface Category {
  id: string;
  name: string;
  image: string;
  href: string;
}

const categories: Category[] = [
  { id: "1", name: "Best Sellers", image: "/assets/images/products/1.jpeg", href: "/shop?category=bestsellers" },
  { id: "2", name: "Combos", image: "/assets/images/products/2.jpeg", href: "/shop?category=combos" },
  { id: "3", name: "New Arrivals", image: "/assets/images/products/3.jpeg", href: "/shop?category=new" },
  { id: "4", name: "Snacks", image: "/assets/images/products/4.jpeg", href: "/shop?category=snacks" },
  { id: "5", name: "Gift Packs", image: "/assets/images/products/5.jpeg", href: "/shop?category=gifts" },
];

export function ShopByCategory() {
  const titleRef = useFadeInUp<HTMLDivElement>({ duration: 0.8 });
  const ref = useFadeInUp<HTMLDivElement>({ stagger: 0.1, duration: 0.9, delay: 0.2 });

  return (
    <section className="section-spacing bg-gray-50">
      <div className="section-container">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-12 md:mb-16">
          <h2 className="heading-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4 md:mb-5">
            <span>Shop by </span>
            <span className="text-[#AB1F22]">Category</span>
          </h2>
          <p className="body-text-medium text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our <span className="text-[#AB1F22] font-semibold">curated collection</span> of premium products
          </p>
        </div>

        {/* Categories Grid */}
        <div
          ref={ref}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6"
        >
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#AB1F22]/50 rounded-2xl"
            >
              <Card className="relative overflow-hidden border-2 border-gray-200 bg-white shadow-lg hover:shadow-2xl hover:border-[#AB1F22]/50 transition-all duration-500 hover:-translate-y-3 h-full flex flex-col">
                {/* Image Container */}
                <div className="relative aspect-square w-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-110 group-hover:rotate-2 transition-all duration-700 ease-out"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Floating badge */}
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-500">
                    <span className="text-xs font-bold text-[#AB1F22]">View</span>
                  </div>
                </div>

                {/* Content */}
                <CardContent className="p-4 md:p-5 flex-1 flex flex-col justify-between bg-white group-hover:bg-gray-50/50 transition-colors duration-500">
                  <div>
                    <h3 className="heading-subtitle text-base sm:text-lg md:text-xl text-gray-900 mb-2 group-hover:text-[#AB1F22] transition-colors duration-300">
                      {category.name}
                    </h3>
                  </div>

                  {/* Explore Link */}
                  <div className="flex items-center gap-2 mt-3 text-[#AB1F22] body-text-semibold text-sm group-hover:gap-3 transition-all duration-300">
                    <span className="group-hover:underline underline-offset-2">Explore</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </CardContent>

                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#AB1F22]/0 to-[#AB1F22]/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
