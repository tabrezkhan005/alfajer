"use client";

import Link from "next/link";
import Image from "next/image";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { useFadeInUp } from "@/app/hooks/use-gsap-animation";

export function Footer() {
  const ref = useFadeInUp<HTMLDivElement>({ stagger: 0.08, duration: 0.8 });

  return (
    <footer className="w-full py-16 md:py-20 lg:py-24 bg-white border-t border-gray-200 mt-0">
      <div className="section-container">
        <div ref={ref} className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12">
          {/* Logo and Brand Section */}
          <div className="flex-shrink-0 lg:max-w-sm">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative h-12 w-12 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/assets/images/logos/logoround.png"
                  alt="Al Fajer Mart Logo"
                  fill
                  className="object-contain"
                  sizes="48px"
                />
              </div>
              <h2 className="text-2xl font-bold text-[#AB1F22] group-hover:scale-105 transition-transform duration-300">
                Al Fajer Mart
              </h2>
            </Link>

            <p className="text-gray-900 mb-6 leading-relaxed text-sm md:text-base">
              Authentic Kashmiri goodness, delivered with passion and care. Premium dry fruits and natural products from the valleys of Kashmir.
            </p>



            <p className="text-sm text-gray-900 mt-6">
              © {new Date().getFullYear()} Al Fajer Mart. All rights reserved.
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12 flex-1 min-w-0">
            {/* Pages */}
            <div className="min-w-0">
              <h3 className="font-bold text-gray-900 mb-5 text-base md:text-lg">Pages</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-black hover:text-[#AB1F22] transition-colors duration-300 font-medium"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/collections"
                    className="text-black hover:text-[#AB1F22] transition-colors duration-300 font-medium"
                  >
                    Collections
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop"
                    className="text-black hover:text-[#AB1F22] transition-colors duration-300 font-medium"
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-black hover:text-[#AB1F22] transition-colors duration-300 font-medium"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-black hover:text-[#AB1F22] transition-colors duration-300 font-medium"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Socials */}
            <div className="min-w-0">
              <h3 className="font-bold text-gray-900 mb-5 text-base md:text-lg">Connect</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="https://facebook.com/alfajermart"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-[#AB1F22] transition-colors duration-300 font-medium"
                  >
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://instagram.com/alfajermart"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-[#AB1F22] transition-colors duration-300 font-medium"
                  >
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://x.com/alfajermart"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-[#AB1F22] transition-colors duration-300 font-medium"
                  >
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:alfajermart@gmail.com"
                    className="text-black hover:text-[#AB1F22] transition-colors duration-300 font-medium"
                  >
                    Email Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="min-w-0">
              <h3 className="font-bold text-gray-900 mb-5 text-base md:text-lg">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-black hover:text-[#AB1F22] transition-colors duration-300 font-medium"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-conditions"
                    className="text-black hover:text-[#AB1F22] transition-colors duration-300 font-medium"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/return-refund"
                    className="text-black hover:text-[#AB1F22] transition-colors duration-300 font-medium"
                  >
                    Return Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shipping-policy"
                    className="text-black hover:text-[#AB1F22] transition-colors duration-300 font-medium"
                  >
                    Shipping Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="min-w-0">
              <h3 className="font-bold text-gray-900 mb-5 text-base md:text-lg">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Icons.mapPin className="h-4 w-4 text-[#AB1F22] mt-0.5 shrink-0" />
                  <span className="text-black text-xs sm:text-sm leading-relaxed">
                    Garden View Building,<br />
                    26 703, Andheri West<br />
                    Mumbai, Maharashtra
                  </span>
                </li>
                <li>
                  <Link
                    href="tel:+919967483324"
                    className="text-black hover:text-[#AB1F22] transition-colors duration-300 font-medium inline-flex items-center gap-2"
                  >
                    <Icons.phone className="h-4 w-4" />
                    <span className="text-xs sm:text-sm">+91 99674 83324</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:alfajermart@gmail.com"
                    className="text-black hover:text-[#AB1F22] transition-colors duration-300 font-medium inline-flex items-center gap-2 break-all"
                  >
                    <Icons.mail className="h-3 w-3 shrink-0" />
                    <span className="text-xs sm:text-sm whitespace-nowrap">alfajermart@gmail.com</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Large Brand Name with Gradient */}
        <div className="w-full mt-10 md:mt-16 lg:mt-24 overflow-hidden">
          <h1
            className="footer-brand-gradient text-left sm:text-center text-3xl sm:text-xl md:text-5xl lg:text-6xl xl:text-[6rem] 2xl:text-[12rem] font-bold select-none tracking-tight leading-tight"
          >
            Al Fajer Mart.
          </h1>
        </div>
      </div>
    </footer>
  );
}
