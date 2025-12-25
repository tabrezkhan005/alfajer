"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

function FacebookIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-white"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon() {
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
      className="text-white"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function PartnerLogos() {
  const [amazonError, setAmazonError] = useState(false);
  const [blinkitError, setBlinkitError] = useState(false);

  return (
    <div className="flex gap-4 items-center">
      {!amazonError && (
        <div className="relative h-8 w-24">
          <Image
            src="/partner-amazon.png"
            alt="Amazon"
            fill
            className="object-contain opacity-70 hover:opacity-100 transition-opacity"
            sizes="96px"
            onError={() => setAmazonError(true)}
          />
        </div>
      )}
      {!blinkitError && (
        <div className="relative h-8 w-20">
          <Image
            src="/partner-blinkit.png"
            alt="Blinkit"
            fill
            className="object-contain opacity-70 hover:opacity-100 transition-opacity"
            sizes="80px"
            onError={() => setBlinkitError(true)}
          />
        </div>
      )}
    </div>
  );
}

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/collections", label: "Collections" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About us" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-conditions", label: "Terms & Conditions" },
  { href: "/return-refund", label: "Return & Refund" },
  { href: "/shipping-policy", label: "Shipping Policy" },
];

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      {/* Elegant background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Gradient overlay */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 md:gap-16">
          {/* Logo and Social Media */}
          <div className="flex flex-col items-center sm:items-start">
            <Link href="/" className="mb-6 sm:mb-8 group">
              <div className="flex flex-col items-center sm:items-start gap-3">
                <div className="relative h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src="/assets/images/logos/logoround.png"
                    alt="Al Fajer Mart Logo"
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 56px, (max-width: 768px) 64px, 80px"
                    priority
                  />
                </div>
                <span className="text-white text-sm sm:text-base font-bold tracking-wide" style={{ fontFamily: "Poppins, sans-serif" }}>
                  Al Fajer Mart
                </span>
              </div>
            </Link>
            <p className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6 text-center sm:text-left max-w-xs" style={{ fontFamily: "Poppins, sans-serif" }}>
              Authentic Kashmiri goodness, delivered with passion and care.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-11 h-11 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 flex items-center justify-center hover:bg-[#8B1538] hover:border-[#8B1538] transition-all duration-300 hover:scale-110"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://instagram.com/alfajermart"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 flex items-center justify-center hover:bg-[#8B1538] hover:border-[#8B1538] transition-all duration-300 hover:scale-110"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-white uppercase tracking-wider" style={{ fontFamily: "Poppins, sans-serif" }}>
              Quick links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-sm text-gray-400 hover:text-white transition-all duration-300 inline-block hover:translate-x-1 ${
                      link.href === "/" ? "text-white font-semibold" : ""
                    }`}
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-white uppercase tracking-wider" style={{ fontFamily: "Poppins, sans-serif" }}>
              Legal links
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-all duration-300 inline-block hover:translate-x-1"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us and Partner Logos */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-white uppercase tracking-wider" style={{ fontFamily: "Poppins, sans-serif" }}>
              Contact us
            </h3>
            <address className="text-xs sm:text-sm text-gray-400 not-italic space-y-2 sm:space-y-2.5 mb-6 sm:mb-8" style={{ fontFamily: "Poppins, sans-serif" }}>
              <p className="leading-relaxed">
                Garden View Building, 26 703,<br />
                Andheri West Mumbai,<br />
                Maharashtra
              </p>
              <p className="mt-4">
                <a
                  href="tel:+919967483324"
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  +91 99674 83324
                </a>
              </p>
              <p>
                <a
                  href="mailto:alfajermart@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  alfajermart@gmail.com
                </a>
              </p>
            </address>

            {/* Partner Logos */}
            <div>
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
                Available on
              </h4>
              <PartnerLogos />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t border-gray-800/50 text-center">
          <p className="text-xs text-gray-500" style={{ fontFamily: "Poppins, sans-serif" }}>
            © {new Date().getFullYear()} Al Fajer Mart. All rights reserved. | Effect by Dakaas
          </p>
        </div>
      </div>
    </footer>
  );
}
