"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  alt: string;
}

interface PremiumProductsProps {
  products?: Product[];
}

const defaultProducts: Product[] = [
  {
    id: "1",
    name: "Premium Mamra Almond",
    price: 699,
    image: "/assets/images/products/1.jpeg",
    alt: "Premium Mamra Almond",
  },
  {
    id: "2",
    name: "Premium Kashmiri Walnuts",
    price: 470,
    image: "/assets/images/products/2.jpeg",
    alt: "Premium Kashmiri Walnuts",
  },
  {
    id: "3",
    name: "Dry Fruit Saffron Honey",
    price: 655,
    image: "/assets/images/products/3.jpeg",
    alt: "Dry Fruit Saffron Honey",
  },
  {
    id: "4",
    name: "Premium Ajwa Dates",
    price: 600,
    image: "/assets/images/products/4.jpeg",
    alt: "Premium Ajwa Dates",
  },
];

function ProductImage({ src, alt, name }: { src: string; alt: string; name: string }) {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-500 text-sm p-4 text-center">
        <div>
          <p className="font-medium mb-1">{name}</p>
          <p className="text-xs">Add image at {src}</p>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      onError={() => setImageError(true)}
    />
  );
}

export function PremiumProducts({ products = defaultProducts }: PremiumProductsProps) {
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    if (cardsRef.current) {
      const cards = cardsRef.current.children;
      gsap.fromTo(
        cards,
        { opacity: 0, y: 60, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    if (buttonRef.current) {
      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  function formatPrice(price: number) {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  }

  return (
    <section style={{
      position: 'relative',
      padding: '5rem 0',
      backgroundColor: '#F9FAFB',
      overflow: 'hidden',
      width: '100%'
    }} className="md:py-24 lg:py-32">
      {/* Elegant background pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.03,
        pointerEvents: 'none'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(circle at 1px 1px, #AB1F22 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Subtle gradient overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '33.333%',
        background: 'linear-gradient(to bottom, rgba(171, 31, 34, 0.03), transparent)',
        pointerEvents: 'none'
      }} />

      <div style={{
        maxWidth: '80rem',
        margin: '0 auto',
        padding: '0 1.5rem',
        position: 'relative',
        zIndex: 10
      }} className="sm:px-8 lg:px-12">
        {/* Section Header */}
        <div ref={headerRef} style={{ textAlign: 'center', marginBottom: '4rem' }} className="md:mb-20 lg:mb-24">
          <div style={{ marginBottom: '1.5rem' }}>
            <span style={{
              fontSize: '0.75rem',
              fontWeight: '700',
              color: '#AB1F22',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              backgroundColor: 'rgba(171, 31, 34, 0.1)',
              padding: '0.625rem 1.5rem',
              borderRadius: '9999px',
              display: 'inline-block'
            }}>
              ✨ Premium Selection
            </span>
          </div>

          <h2 style={{
            fontFamily: "'Space Grotesk', 'Poppins', sans-serif",
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#111827',
            marginBottom: '1.5rem',
            lineHeight: '1.1'
          }} className="sm:text-5xl md:text-6xl lg:text-7xl">
            <span>Our </span>
            <span style={{ color: '#AB1F22' }}>Premium Products</span>
          </h2>

          <p style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: '1.125rem',
            fontWeight: '500',
            color: '#6B7280',
            maxWidth: '48rem',
            margin: '0 auto',
            lineHeight: '1.75'
          }} className="md:text-xl">
            Handpicked, <span style={{ color: '#009746', fontWeight: '600' }}>organic</span>, and packed with goodness — find your favorite <span style={{ color: '#AB1F22', fontWeight: '600' }}>Kashmiri delights</span> here.
          </p>
        </div>

        {/* Products Grid */}
        <div ref={cardsRef} style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '2rem',
          marginBottom: '4rem'
        }} className="sm:grid-cols-2 lg:grid-cols-4 md:gap-10 lg:gap-12 md:mb-20">
          {products.map((product) => (
            <div
              key={product.id}
              className="group"
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '1.5rem',
                overflow: 'hidden',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                border: '2px solid #F3F4F6',
                cursor: 'pointer'
              }}
            >
              {/* Product Image Container */}
              <div style={{
                position: 'relative',
                width: '100%',
                paddingBottom: '100%',
                background: 'linear-gradient(135deg, #F9FAFB 0%, #F3F4F6 100%)',
                overflow: 'hidden'
              }}>
                {/* Hover Overlay */}
                <div
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.15), transparent)',
                    zIndex: 10
                  }}
                />

                <ProductImage src={product.image} alt={product.alt} name={product.name} />

                {/* Premium Badge */}
                <div style={{
                  position: 'absolute',
                  top: '1.25rem',
                  left: '1.25rem',
                  background: 'linear-gradient(135deg, #AB1F22 0%, #8B1538 100%)',
                  color: '#ffffff',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  padding: '0.5rem 1rem',
                  borderRadius: '9999px',
                  boxShadow: '0 10px 15px -3px rgba(171, 31, 34, 0.3)',
                  zIndex: 20,
                  letterSpacing: '0.05em'
                }}>
                  ⭐ PREMIUM
                </div>

                {/* Quick View Badge (appears on hover) */}
                <div
                  className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0"
                  style={{
                    position: 'absolute',
                    bottom: '1.25rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(10px)',
                    color: '#AB1F22',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    padding: '0.625rem 1.25rem',
                    borderRadius: '0.75rem',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    zIndex: 20,
                    whiteSpace: 'nowrap'
                  }}
                >
                  Quick View →
                </div>
              </div>

              {/* Product Info */}
              <div style={{
                padding: '1.75rem',
                position: 'relative'
              }}>
                {/* Decorative top accent */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: '1.75rem',
                  right: '1.75rem',
                  height: '2px',
                  background: 'linear-gradient(to right, transparent, rgba(171, 31, 34, 0.2), transparent)'
                }} />

                {/* Product Name */}
                <h3
                  className="group-hover:text-[#AB1F22] transition-colors duration-300"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    color: '#111827',
                    marginBottom: '1.25rem',
                    lineHeight: '1.4',
                    minHeight: '3.5rem',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}
                >
                  {product.name}
                </h3>

                {/* Features Badge */}
                <div style={{
                  display: 'flex',
                  gap: '0.5rem',
                  marginBottom: '1.25rem',
                  flexWrap: 'wrap'
                }}>
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    color: '#009746',
                    backgroundColor: 'rgba(0, 151, 70, 0.1)',
                    padding: '0.375rem 0.75rem',
                    borderRadius: '0.375rem'
                  }}>
                    ✓ Organic
                  </span>
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    color: '#AB1F22',
                    backgroundColor: 'rgba(171, 31, 34, 0.1)',
                    padding: '0.375rem 0.75rem',
                    borderRadius: '0.375rem'
                  }}>
                    ✓ Fresh
                  </span>
                </div>

                {/* Price */}
                <div style={{
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '0.75rem',
                  flexWrap: 'wrap'
                }}>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      color: '#9CA3AF',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      marginBottom: '0.375rem'
                    }}>
                      PRICE
                    </span>
                    <span style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: '2rem',
                      fontWeight: '700',
                      color: '#AB1F22',
                      lineHeight: '1'
                    }}>
                      {formatPrice(product.price)}
                    </span>
                  </div>
                  <span style={{
                    fontSize: '0.875rem',
                    color: '#9CA3AF',
                    fontWeight: '500'
                  }}>
                    per unit
                  </span>
                </div>

                {/* Add to Cart Button */}
                <button
                  className="hover:brightness-110 active:scale-[0.98] transition-all duration-300"
                  style={{
                    width: '100%',
                    background: 'linear-gradient(135deg, #AB1F22 0%, #8B1538 100%)',
                    color: '#ffffff',
                    fontFamily: "'Nunito', sans-serif",
                    fontWeight: '700',
                    fontSize: '1rem',
                    padding: '1rem 1.5rem',
                    borderRadius: '0.75rem',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 4px 6px -1px rgba(171, 31, 34, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    letterSpacing: '0.025em'
                  }}
                >
                  <svg
                    style={{ width: '1.25rem', height: '1.25rem' }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* VIEW ALL Button */}
        <div ref={buttonRef} style={{ textAlign: 'center' }}>
          <button
            className="group hover:shadow-2xl transition-all duration-300"
            style={{
              position: 'relative',
              backgroundColor: '#ffffff',
              border: '3px solid #AB1F22',
              color: '#AB1F22',
              fontFamily: "'Poppins', sans-serif",
              fontWeight: '700',
              fontSize: '1rem',
              padding: '1.25rem 3rem',
              borderRadius: '1rem',
              cursor: 'pointer',
              overflow: 'hidden',
              letterSpacing: '0.05em'
            }}
          >
            <span style={{
              position: 'relative',
              zIndex: 10,
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}>
              VIEW ALL PRODUCTS
              <svg
                style={{ width: '1.25rem', height: '1.25rem' }}
                className="transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m9 18 6-6-6-6" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
