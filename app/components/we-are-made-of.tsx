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
    <section className="section-spacing bg-white">
      <div className="section-container">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-5 md:mb-6">
          <h2 className="heading-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900">
            <span>WE ARE </span>
            <span className="text-[#AB1F22]">MADE OF</span>
          </h2>
        </div>

        {/* Description */}
        <p
          ref={descRef}
          className="body-text-medium text-center text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12 md:mb-16"
        >
          The <span className="text-[#AB1F22] font-semibold">no sugar store</span> is committed to bring you wholesome, <span className="text-[#009746] font-semibold">healthy snacks</span> so you can keep your promise of saying no to sugar form now on.
        </p>

        {/* Features Grid */}
        <div
          ref={gridRef}
          className="bg-white rounded-2xl md:rounded-3xl shadow-2xl border-2 border-gray-100 p-10 md:p-14 lg:p-16 mx-auto max-w-6xl hover:shadow-3xl transition-all duration-500"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 md:gap-10 lg:gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-center group cursor-pointer"
              >
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mb-5 md:mb-6 transition-all duration-500 ease-out group-hover:scale-115 group-hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#AB1F22]/10 to-[#AB1F22]/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150"></div>
                  <div className="relative w-full h-full">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      fill
                      className="object-contain relative z-10 drop-shadow-lg"
                      sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 128px"
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
