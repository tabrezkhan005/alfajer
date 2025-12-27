"use client";

import Image from "next/image";
import { useFadeInUp } from "@/app/hooks/use-gsap-animation";

interface FeatureItem {
  icon: string;
  title: string;
}

const features: FeatureItem[] = [
  {
    icon: "/assets/images/weare/1.png",
    title: "Gluten Free",
  },
  {
    icon: "/assets/images/weare/2.png",
    title: "No Added Sugar",
  },
  {
    icon: "/assets/images/weare/3.png",
    title: "Anti Oxidant",
  },
  {
    icon: "/assets/images/weare/4.png",
    title: "No Cholesterol",
  },
  {
    icon: "/assets/images/weare/5.png",
    title: "No Transfat",
  },
];

export function WeAreMadeOf() {
  const titleRef = useFadeInUp<HTMLDivElement>({ duration: 0.8 });
  const descRef = useFadeInUp<HTMLParagraphElement>({ duration: 0.8, delay: 0.2 });
  const gridRef = useFadeInUp<HTMLDivElement>({ duration: 0.8, delay: 0.4 });

  return (
    <section style={{ backgroundColor: '#ffffff', padding: '3rem 0' }} className="md:py-16 lg:py-20">
      <div style={{ width: '100%', maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }} className="sm:px-8 lg:px-12">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-4 md:mb-5">
          <h2 className="heading-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900">
            <span>WE ARE </span>
            <span className="text-[#AB1F22]">MADE OF</span>
          </h2>
        </div>

        {/* Description */}
        <p
          ref={descRef}
          className="body-text-medium text-center text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8 md:mb-10"
        >
          The <span className="text-[#AB1F22] font-semibold">no sugar store</span> is committed to bring you wholesome, <span className="text-[#009746] font-semibold">healthy snacks</span> so you can keep your promise of saying no to sugar form now on.
        </p>

        {/* Features Grid */}
        <div
          ref={gridRef}
          className="bg-white rounded-2xl md:rounded-3xl shadow-2xl border-2 border-gray-100 p-8 md:p-10 lg:p-12 mx-auto max-w-6xl hover:shadow-3xl transition-all duration-500"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8 lg:gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-center group cursor-pointer"
              >
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mb-3 md:mb-4 transition-all duration-500 ease-out group-hover:scale-115 group-hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#AB1F22]/10 to-[#AB1F22]/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150"></div>
                  <div className="relative w-full h-full">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      fill
                      className="object-contain relative z-10 drop-shadow-lg"
                      sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 112px"
                      priority={index < 3}
                    />
                  </div>
                </div>
                <h3 className="heading-subtitle text-sm md:text-base lg:text-lg text-gray-900 transition-all duration-300 group-hover:text-[#AB1F22]">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
