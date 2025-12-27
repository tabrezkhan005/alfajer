"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Link from "next/link";

interface TopBarMessage {
  text: string;
  href?: string;
}

const messages: TopBarMessage[] = [
  { text: "🎄 Free Shipping on Orders Above ₹999", href: "/shop" },
  { text: "✨ New Arrivals: Premium Kashmiri Products", href: "/collections" },
  { text: "🎁 Limited Time: 20% Off on Premium Products", href: "/shop" },
  { text: "🌿 100% Organic & Authentic Kashmiri Products", href: "/about" },
];

function SnowflakeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-white/80"
    >
      <path d="M12 2v20M12 2l3 3M12 2l-3 3M12 22l3-3M12 22l-3-3M2 12h20M2 12l3 3M2 12l3-3M22 12l-3 3M22 12l-3-3M6.34 6.34l11.32 11.32M6.34 17.66l11.32-11.32M17.66 6.34L6.34 17.66M17.66 17.66L6.34 6.34" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-yellow-300"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function GiftIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-red-300"
    >
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M12 8v13M7 8V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2M7 8H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h-2" />
    </svg>
  );
}

export function TopBar() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const textRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current || !containerRef.current) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
    }, 4000); // Change message every 4 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!textRef.current) return;

    // Animate text change
    gsap.fromTo(
      textRef.current,
      {
        opacity: 0,
        y: -10,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      }
    );
  }, [currentIndex]);

  const currentMessage = messages[currentIndex];

  // Get icon based on message
  const getIcon = () => {
    if (currentMessage.text.includes("🎄") || currentMessage.text.includes("Free Shipping")) {
      return <GiftIcon />;
    } else if (currentMessage.text.includes("✨") || currentMessage.text.includes("New Arrivals")) {
      return <StarIcon />;
    } else if (currentMessage.text.includes("🎁") || currentMessage.text.includes("Limited Time")) {
      return <GiftIcon />;
    }
    return <StarIcon />;
  };

  const content = (
    <div
      ref={textRef}
      className="flex items-center justify-center gap-2 text-xs md:text-sm font-medium"
      style={{ fontFamily: "Nunito, sans-serif" }}
    >
      <span className="flex items-center gap-1">
        {getIcon()}
        <span className="text-white drop-shadow-lg">{currentMessage.text.replace(/[🎄✨🎁🌿]/g, "").trim()}</span>
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-yellow-300 inline-block animate-pulse"
      >
        <path d="M5 12h14" />
        <path d="M12 5l7 7-7 7" />
      </svg>
    </div>
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full z-40 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1a5f1a 0%, #0d4a0d 25%, #dc2626 50%, #b91c1c 75%, #1a5f1a 100%)",
        backgroundSize: "200% 200%",
        animationName: "gradientShift",
        animationDuration: "8s",
        animationTimingFunction: "ease",
        animationIterationCount: "infinite",
      }}
    >

      {/* Floating snowflakes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(4)].map((_, i) => {
          const duration = 3 + i * 0.5;
          const delay = i * 0.3;
          return (
            <div
              key={i}
              className="absolute text-white/25"
              style={{
                left: `${20 + i * 20}%`,
                top: `${15 + (i % 2) * 30}%`,
                animationName: "float",
                animationDuration: `${duration}s`,
                animationTimingFunction: "ease-in-out",
                animationIterationCount: "infinite",
                animationDelay: `${delay}s`,
              }}
            >
              <SnowflakeIcon />
            </div>
          );
        })}
      </div>

      {/* Sparkle effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => {
          const duration = 2 + i * 0.3;
          const delay = i * 0.5;
          return (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${25 + i * 25}%`,
                top: "50%",
                transform: "translateY(-50%)",
                animationName: "sparkle",
                animationDuration: `${duration}s`,
                animationTimingFunction: "ease-in-out",
                animationIterationCount: "infinite",
                animationDelay: `${delay}s`,
              }}
            >
              <StarIcon />
            </div>
          );
        })}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto py-1.5 md:py-2 px-4">
        {currentMessage.href ? (
          <Link
            href={currentMessage.href}
            className="block w-full text-center hover:opacity-90 transition-opacity duration-300"
          >
            {content}
          </Link>
        ) : (
          <div className="w-full text-center">{content}</div>
        )}
      </div>

      {/* Dots indicator with Christmas theme */}
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex gap-1 z-10">
        {messages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-4 bg-yellow-300 shadow-md shadow-yellow-300/50"
                : "w-1 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to message ${index + 1}`}
          />
        ))}
      </div>

      {/* Bottom border with Christmas colors */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-300 to-transparent opacity-60" />
    </div>
  );
}
