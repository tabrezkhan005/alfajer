"use client";

import { HeartHandshake, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useFadeIn } from "@/app/hooks/use-gsap-animation";

export function BrandStorySection() {
  const ref = useFadeIn<HTMLDivElement>({ duration: 1 });

  return (
    <section className="section-spacing bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#009746]/5 via-transparent to-[#AB1F22]/5" />
      <div className="section-container max-w-4xl relative">
        <div ref={ref} className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center mb-8">
            <Badge className="bg-gradient-to-r from-[#009746] to-[#009746]/80 text-white px-6 py-2 body-text-semibold text-sm gap-2">
              <HeartHandshake className="h-4 w-4" />
              💚 Our Promise
            </Badge>
          </div>

          <h2 className="heading-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-8">
            <span>Why </span>
            <span className="text-[#AB1F22]">Al Fajer Mart</span>
          </h2>
          <Separator className="mx-auto mb-12 max-w-32 bg-gradient-to-r from-transparent via-[#AB1F22] to-transparent h-1" />

          <div className="space-y-8">
            <p className="body-text-medium text-lg sm:text-xl md:text-2xl text-gray-700">
              Born from a passion for <span className="text-[#AB1F22] font-semibold">authentic Kashmiri goodness</span>, Al Fajer Mart brings you the purest, handpicked <span className="text-[#009746] font-semibold">dry fruits</span> and natural products directly from the valleys of Kashmir.
            </p>
            <p className="body-text text-lg sm:text-xl md:text-2xl text-gray-700">
              Founded by <span className="heading-subtitle text-[#AB1F22]">Aly Goni</span>, we're committed to delivering not just products, but a <span className="text-[#009746] font-semibold">promise of quality, authenticity, and wellness</span>. Every item is carefully selected, tested, and packed with care to ensure you receive nothing but the best.
            </p>
            <div className="pt-6">
              <p className="heading-subtitle text-xl sm:text-2xl md:text-3xl text-gray-900 flex items-center justify-center gap-3">
                <Sparkles className="h-6 w-6 text-[#009746]" />
                <span>Your <span className="text-[#009746]">health</span> and <span className="text-[#AB1F22]">satisfaction</span> are at the heart of everything we do.</span>
                <Sparkles className="h-6 w-6 text-[#009746]" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
