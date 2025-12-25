"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";

function SearchIcon() {
  return (
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
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function UserIcon() {
  return (
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
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function ShoppingBagIcon() {
  return (
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
    >
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const headerRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const tickingRef = useRef(false);

  useEffect(() => {
    // Ensure window is available (SSR safety)
    if (typeof window === "undefined") return;

    // Set initial scroll state
    setIsScrolled(window.scrollY > 20);

    // Scroll handler for show/hide and glass effect
    let lastScrollTop = window.scrollY;

    function handleScroll() {
      if (!tickingRef.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const scrollDifference = Math.abs(currentScrollY - lastScrollTop);

          // Check if scrolled (for glass theme) - update immediately
          setIsScrolled(currentScrollY > 20);

          // Show/hide based on scroll direction with threshold to prevent jitter
          if (currentScrollY < lastScrollTop && scrollDifference > 10) {
            // Scrolling up - show header (only if significant scroll)
            setIsVisible(true);
          } else if (currentScrollY > lastScrollTop && currentScrollY > 100 && scrollDifference > 10) {
            // Scrolling down and past 100px - hide header (only if significant scroll)
            setIsVisible(false);
          }

          // At the top, always show
          if (currentScrollY < 10) {
            setIsVisible(true);
          }

          lastScrollTop = currentScrollY;
          tickingRef.current = false;
        });

        tickingRef.current = true;
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { href: "/", label: "Home", isActive: true },
    { href: "/collections", label: "Collections" },
    { href: "/shop", label: "Shop" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled
          ? "bg-white/60 dark:bg-gray-900/60 backdrop-blur-2xl shadow-xl border-b border-white/30"
          : "bg-transparent"
      } ${className || ""}`}
      style={{
        fontFamily: "Poppins, sans-serif",
        ...(isScrolled && {
          background: "rgba(255, 255, 255, 0.6)",
          backdropFilter: "blur(3px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
        }),
      }}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={navRef}
          className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? "h-14 md:h-16" : "h-16 md:h-20"
          }`}
          style={{ opacity: 1 }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center ml-4 md:ml-6">
            <div
              className={`relative transition-all duration-300 ${
                isScrolled
                  ? "h-10 w-10 md:h-12 md:w-12"
                  : "h-12 w-12 md:h-14 md:w-14"
              }`}
            >
              <Image
                src="/assets/images/logos/logoround.png"
                alt="Al Fajer Mart Logo"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 48px, 56px"
                priority
              />
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors relative ${
                  isScrolled
                    ? "text-gray-700 hover:text-gray-900"
                    : "text-white hover:text-gray-200"
                } ${
                  link.isActive
                    ? isScrolled
                      ? "underline decoration-gray-700 underline-offset-4"
                      : "underline decoration-white underline-offset-4"
                    : ""
                }`}
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4 md:gap-6">
            <button
              aria-label="Search"
              className={`transition-colors ${
                isScrolled ? "text-gray-700 hover:text-gray-900" : "text-white hover:text-gray-200"
              }`}
            >
              <SearchIcon />
            </button>
            <button
              aria-label="Profile"
              className={`transition-colors ${
                isScrolled ? "text-gray-700 hover:text-gray-900" : "text-white hover:text-gray-200"
              }`}
            >
              <UserIcon />
            </button>
            <button
              aria-label="Shopping cart"
              className={`transition-colors relative ${
                isScrolled ? "text-gray-700 hover:text-gray-900" : "text-white hover:text-gray-200"
              }`}
            >
              <ShoppingBagIcon />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
