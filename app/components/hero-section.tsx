"use client";

import Image from "next/image";

export function HeroSection() {
  return (
    <div className="w-full">
      {/* First Hero Image */}
      <section className="relative w-full h-screen min-h-screen">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/assets/images/hero/hero5.webp"
            alt="Al Fajer Mart - Premium Organic Products"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={90}
          />
        </div>
      </section>
      {/* Second Hero Image */}
      <section className="relative w-full h-screen min-h-screen">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/assets/images/hero/hero4.webp"
            alt="Al Fajer Mart - Premium Products"
            fill
            className="object-cover"
            sizes="100vw"
            quality={90}
          />
        </div>
      </section>
    </div>
  );
}
