"use client";

import Image from "next/image";

export function HeroSection() {
  return (
    <div className="w-full">
      {/* First Hero Image */}
      <section className="relative w-full h-[60vh] min-h-[400px] sm:h-[70vh] sm:min-h-[500px] md:h-[80vh] md:min-h-[600px] lg:h-screen lg:min-h-[700px]">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <Image
            src="/assets/images/hero/hero5.webp"
            alt="Al Fajer Mart - Premium Organic Products"
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
            quality={90}
          />
        </div>
        {/* Mobile gradient overlay for better text readability if needed */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20 md:hidden" />
      </section>
      
      {/* Second Hero Image */}
      <section className="relative w-full h-[60vh] min-h-[400px] sm:h-[70vh] sm:min-h-[500px] md:h-[80vh] md:min-h-[600px] lg:h-screen lg:min-h-[700px]">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <Image
            src="/assets/images/hero/hero4.webp"
            alt="Al Fajer Mart - Premium Products"
            fill
            className="object-cover object-center"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
            quality={90}
          />
        </div>
        {/* Mobile gradient overlay for better visual appeal */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20 md:hidden" />
      </section>
    </div>
  );
}
