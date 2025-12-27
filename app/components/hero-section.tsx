"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="w-full">
      {/* First Hero Image */}
      <section className="relative w-full">
        <div className="relative w-full" style={{ aspectRatio: isMobile ? 'auto' : '16/9' }}>
          <Image
            src="/assets/images/hero/hero5.webp"
            alt="Al Fajer Mart - Premium Organic Products"
            width={isMobile ? 1080 : 1920}
            height={isMobile ? 1920 : 1080}
            className={isMobile ? "w-full h-auto" : "w-full h-auto object-cover"}
            priority
            quality={100}
            style={{ display: 'block', margin: 0, padding: 0, lineHeight: 0 }}
          />
        </div>
      </section>

      {/* Second Hero Image */}
      <section className="relative w-full">
        <div className="relative w-full" style={{ aspectRatio: isMobile ? 'auto' : '16/9' }}>
          <Image
            src="/assets/images/hero/hero4.webp"
            alt="Al Fajer Mart - Premium Products"
            width={isMobile ? 1080 : 1920}
            height={isMobile ? 1920 : 1080}
            className={isMobile ? "w-full h-auto" : "w-full h-auto object-cover"}
            quality={100}
            style={{ display: 'block', margin: 0, padding: 0, lineHeight: 0 }}
          />
        </div>
      </section>
    </div>
  );
}
