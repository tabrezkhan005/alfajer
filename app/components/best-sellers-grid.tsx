"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useFadeInUp } from "@/app/hooks/use-gsap-animation";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  href: string;
}

const products: Product[] = [
  {
    id: "1",
    name: "Premium Mamra Almond",
    price: 899,
    originalPrice: 1199,
    image: "/assets/images/products/1.jpeg",
    rating: 4.8,
    href: "/product/premium-mamra-almond",
  },
  {
    id: "2",
    name: "Premium Kashmiri Walnuts",
    price: 749,
    originalPrice: 999,
    image: "/assets/images/products/2.jpeg",
    rating: 4.9,
    href: "/product/premium-kashmiri-walnuts",
  },
  {
    id: "3",
    name: "Dry Fruit Saffron Honey",
    price: 1299,
    image: "/assets/images/products/3.jpeg",
    rating: 4.7,
    href: "/product/dry-fruit-saffron-honey",
  },
  {
    id: "4",
    name: "Premium Ajwa Dates",
    price: 599,
    originalPrice: 799,
    image: "/assets/images/products/4.jpeg",
    rating: 4.9,
    href: "/product/premium-ajwa-dates",
  },
];

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.125rem' }}>
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            style={{
              width: '1.25rem',
              height: '1.25rem',
              fill: i < fullStars ? '#FFB800' : (i === fullStars && hasHalfStar ? 'rgba(255, 184, 0, 0.5)' : '#D1D5DB'),
              color: i < fullStars ? '#FFB800' : (i === fullStars && hasHalfStar ? '#FFB800' : '#D1D5DB'),
              filter: i < fullStars ? 'drop-shadow(0 2px 4px rgba(255, 184, 0, 0.3))' : 'none',
              transition: 'all 0.3s'
            }}
          />
        ))}
      </div>
      <span style={{
        fontSize: '0.875rem',
        fontWeight: '700',
        color: '#111827',
        backgroundColor: 'rgba(255, 184, 0, 0.2)',
        padding: '0.25rem 0.625rem',
        borderRadius: '0.375rem'
      }}>
        {rating.toFixed(1)}
      </span>
    </div>
  );
}

export function BestSellersGrid() {
  const ref = useFadeInUp<HTMLDivElement>({ stagger: 0.08, duration: 0.9 });

  return (
    <section style={{ backgroundColor: '#ffffff', width: '100%', padding: '5rem 0' }} className="md:py-24 lg:py-32">
      <div style={{ width: '100%', maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }} className="sm:px-8 lg:px-12">
        {/* Header Section with Better Spacing */}
        <div className="text-center mb-16 md:mb-20 lg:mb-24">
          <div style={{ marginBottom: '1.5rem' }}>
            <span style={{
              backgroundColor: '#009746',
              color: '#ffffff',
              padding: '0.5rem 1.25rem',
              borderRadius: '0.5rem',
              fontSize: '0.875rem',
              fontWeight: '600',
              display: 'inline-block',
              letterSpacing: '0.025em'
            }}>
              ⭐ Best Sellers
            </span>
          </div>
          <h2 style={{
            fontFamily: "'Space Grotesk', 'Poppins', sans-serif",
            fontWeight: '700',
            color: '#111827',
            marginBottom: '1.5rem',
            lineHeight: '1.1'
          }} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            <span>Our Most </span>
            <span style={{ color: '#AB1F22' }}>Loved Products</span>
          </h2>
          <p style={{
            fontFamily: "'Nunito', sans-serif",
            fontWeight: '500',
            color: '#6B7280',
            maxWidth: '42rem',
            margin: '0 auto',
            fontSize: '1.125rem',
            lineHeight: '1.75'
          }} className="sm:text-lg md:text-xl">
            Trusted by <span style={{ color: '#009746', fontWeight: '600' }}>thousands of customers</span> across India
          </p>
        </div>

        {/* Products Grid with Improved Spacing */}
        <div ref={ref} style={{ display: 'grid', gap: '2rem' }} className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-10 lg:gap-12">
          {products.map((product) => (
            <Link
              key={product.id}
              href={product.href}
              className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#AB1F22]/30 rounded-2xl"
            >
              {/* Product Card with Better Internal Spacing */}
              <div style={{
                position: 'relative',
                overflow: 'hidden',
                border: '2px solid #E5E7EB',
                backgroundColor: '#ffffff',
                borderRadius: '1rem',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.5s',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}
              className="hover:shadow-2xl hover:-translate-y-3 hover:border-[#AB1F22]/30">

                {/* Discount Badge with Better Positioning */}
                {product.originalPrice && (
                  <div style={{
                    position: 'absolute',
                    top: '1.25rem',
                    left: '1.25rem',
                    zIndex: 20
                  }}>
                    <span style={{
                      background: 'linear-gradient(to right, #AB1F22, #8B1538)',
                      color: '#ffffff',
                      padding: '0.5rem 0.875rem',
                      borderRadius: '0.5rem',
                      fontSize: '0.875rem',
                      fontWeight: '700',
                      border: '2px solid #ffffff',
                      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                      display: 'inline-block',
                      letterSpacing: '0.025em'
                    }}>
                      🔥 {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </span>
                  </div>
                )}

                {/* Image Section */}
                <div style={{
                  position: 'relative',
                  width: '100%',
                  paddingBottom: '100%',
                  overflow: 'hidden',
                  background: 'linear-gradient(to bottom right, #F3F4F6, #F9FAFB, #ffffff)'
                }}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-all duration-700 ease-out"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>

                {/* Content Section with Improved Spacing */}
                <div style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                  backgroundColor: '#ffffff'
                }}>
                  {/* Rating with More Space */}
                  <div style={{ marginBottom: '1.25rem' }}>
                    <StarRating rating={product.rating} />
                  </div>

                  {/* Product Name with Better Spacing */}
                  <h3 style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    color: '#111827',
                    marginBottom: '1.5rem',
                    lineHeight: '1.4',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    minHeight: '3.5rem'
                  }} className="group-hover:text-[#AB1F22] transition-colors duration-300">
                    {product.name}
                  </h3>

                  {/* Price Section with Improved Layout */}
                  <div style={{ marginTop: 'auto' }}>
                    <div style={{ marginBottom: '1rem' }}>
                      <span style={{
                        fontSize: '0.75rem',
                        fontWeight: '700',
                        color: '#9CA3AF',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        display: 'block',
                        marginBottom: '0.5rem'
                      }}>
                        PRICE
                      </span>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', flexWrap: 'wrap' }}>
                        <span style={{
                          fontFamily: "'Poppins', sans-serif",
                          fontSize: '2.25rem',
                          fontWeight: '700',
                          color: '#AB1F22',
                          lineHeight: '1'
                        }}>
                          ₹{product.price}
                        </span>
                        {product.originalPrice && (
                          <span style={{
                            fontSize: '1.125rem',
                            color: '#9CA3AF',
                            textDecoration: 'line-through',
                            fontWeight: '500'
                          }}>
                            ₹{product.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Savings Indicator with More Space */}
                    {product.originalPrice && (
                      <div style={{
                        fontSize: '0.875rem',
                        fontWeight: '700',
                        color: '#009746',
                        backgroundColor: 'rgba(0, 151, 70, 0.15)',
                        padding: '0.625rem 1rem',
                        borderRadius: '0.5rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.375rem',
                        marginBottom: '0.5rem'
                      }}>
                        🔥 You save ₹{product.originalPrice - product.price}
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer with Button - Better Spacing */}
                <div style={{
                  padding: '0 1.75rem 1.75rem 1.75rem',
                  backgroundColor: '#ffffff'
                }}>
                  <button
                    style={{
                      width: '100%',
                      height: '3.25rem',
                      background: 'linear-gradient(to right, #AB1F22, #8B1538)',
                      color: '#ffffff',
                      fontWeight: '700',
                      fontSize: '1rem',
                      borderRadius: '0.75rem',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.625rem',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                      transition: 'all 0.3s',
                      fontFamily: "'Nunito', sans-serif",
                      letterSpacing: '0.025em'
                    }}
                    className="hover:shadow-xl hover:brightness-110"
                  >
                    <ShoppingCart style={{ width: '1.25rem', height: '1.25rem' }} />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
