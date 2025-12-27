"use client";

import Image from "next/image";
import Link from "next/link";
import { Sparkles, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useSlideInLeft, useSlideInRight } from "@/app/hooks/use-gsap-animation";

export function ValueCombosHighlight() {
  const imageRef = useSlideInLeft<HTMLDivElement>({ duration: 1 });
  const contentRef = useSlideInRight<HTMLDivElement>({ duration: 1, delay: 0.1 });

  return (
    <section className="section-spacing bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#AB1F22]/5 via-transparent to-[#009746]/5" />
      <div className="section-container relative">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <div
            ref={imageRef}
            className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
          >
            <Image
              src="/assets/images/products/2.jpeg"
              alt="Premium Value Combo"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          {/* Right: Content */}
          <div ref={contentRef} className="space-y-8">
            <div>
              <Badge className="bg-[#009746] text-white mb-6 px-4 py-1.5 body-text-semibold text-sm">
                <Sparkles className="h-3 w-3 mr-2" />
                ✨ Value Combos
              </Badge>
              <h2 className="heading-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6">
                <span>Premium </span>
                <span className="text-[#AB1F22]">Value Combos</span>
              </h2>
              <p className="body-text-medium text-base sm:text-lg md:text-xl text-gray-600 mb-8">
                Curated combinations of our <span className="text-[#AB1F22] font-semibold">finest products</span>, designed to bring you the best of <span className="text-[#009746] font-semibold">Kashmir</span> in one perfect package. Save more while you savor more.
              </p>
            </div>

            <div className="space-y-6 p-6 rounded-2xl bg-gradient-to-br from-[#009746]/10 to-[#009746]/5 border-2 border-[#009746]/20">
              <div className="flex items-baseline gap-4 flex-wrap">
                <span className="heading-display text-4xl md:text-5xl text-gray-900">
                  ₹1,999
                </span>
                <span className="heading-title text-2xl md:text-3xl text-gray-400 line-through">
                  ₹2,999
                </span>
                <Badge className="bg-[#009746] text-white text-base px-4 py-2 body-text-semibold">
                  Save ₹1,000
                </Badge>
              </div>
              <div className="space-y-2">
                <p className="body-text-semibold text-sm text-gray-700 flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#009746]" />
                  Includes 5 premium products
                </p>
                <p className="body-text-semibold text-sm text-gray-700 flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#009746]" />
                  Free shipping across India
                </p>
              </div>
            </div>

            <Link href="/shop?category=combos" className="inline-block">
              <Button size="lg" className="body-text-semibold text-base px-8 py-6">
                Explore Combos
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
