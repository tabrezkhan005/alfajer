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

function MenuIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" x2="6" y1="6" y2="18" />
      <line x1="6" x2="18" y1="6" y2="18" />
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        !isVisible ? "transform -translate-y-full" : ""
      } ${
        isScrolled
          ? "bg-white/60 dark:bg-gray-900/60 backdrop-blur-2xl shadow-xl border-b border-white/30"
          : "bg-[#AB1F22]"
      } ${className || ""}`}
      style={{
        fontFamily: "Poppins, sans-serif",
        ...(isScrolled && {
          background: "rgba(255, 255, 255, 0.6)",
          backdropFilter: "blur(3px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
        }),
        ...(!isScrolled && {
          background: "#AB1F22",
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
          <Link href="/" className="flex items-center ml-2 sm:ml-4 md:ml-6">
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

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors relative ${
                  isScrolled
                    ? "text-white hover:text-gray-100"
                    : "text-white hover:text-gray-100"
                } ${
                  link.isActive
                    ? "underline decoration-white underline-offset-4"
                    : ""
                }`}
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
            <button
              aria-label="Search"
              className="hidden sm:block transition-colors text-white hover:text-gray-100"
            >
              <SearchIcon />
            </button>
            <button
              aria-label="Profile"
              className="hidden sm:block transition-colors text-white hover:text-gray-100"
            >
              <UserIcon />
            </button>
            <button
              aria-label="Shopping cart"
              className="transition-colors relative text-white hover:text-gray-100"
            >
              <ShoppingBagIcon />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center">
                0
              </span>
            </button>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              className="md:hidden transition-colors text-white hover:text-gray-100"
            >
              {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 px-4 space-y-3 border-t border-white/20">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block text-base font-medium transition-colors py-2 text-white hover:text-gray-100 ${
                  link.isActive ? "font-semibold" : ""
                }`}
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {link.label}
              </Link>
            ))}
            {/* Mobile Search and Profile */}
            <div className="flex items-center gap-4 pt-4 border-t border-white/20">
              <button
                aria-label="Search"
                className="transition-colors text-white hover:text-gray-100"
              >
                <SearchIcon />
              </button>
              <button
                aria-label="Profile"
                className="transition-colors text-white hover:text-gray-100"
              >
                <UserIcon />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
