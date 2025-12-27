"use client";

import { useState, useEffect, useRef } from "react";
import { Quote, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useFadeInUp } from "@/app/hooks/use-gsap-animation";

interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Priya Sharma",
    location: "Mumbai, Maharashtra",
    rating: 5,
    text: "The quality is exceptional. Every product feels authentic and fresh. My family loves the premium almonds! The packaging is beautiful and the delivery was super fast.",
  },
  {
    id: "2",
    name: "Rahul Mehta",
    location: "Delhi NCR",
    rating: 5,
    text: "Fast delivery and amazing packaging. The products are exactly as described. Highly recommended! Best Kashmiri products I've found online.",
  },
  {
    id: "3",
    name: "Anjali Patel",
    location: "Bangalore, Karnataka",
    rating: 5,
    text: "Best place to buy authentic Kashmiri products. The combo packs are great value for money. Customer service is outstanding and responsive.",
  },
  {
    id: "4",
    name: "Vikram Singh",
    location: "Pune, Maharashtra",
    rating: 5,
    text: "Premium quality at reasonable prices. The customer service is excellent too. Will order again! My go-to store for all dry fruits now.",
  },
  {
    id: "5",
    name: "Sneha Reddy",
    location: "Hyderabad, Telangana",
    rating: 5,
    text: "Absolutely love the freshness and quality! The saffron is pure and authentic. Delivery was prompt and packaging was excellent. Highly satisfied!",
  },
  {
    id: "6",
    name: "Arjun Kapoor",
    location: "Chennai, Tamil Nadu",
    rating: 5,
    text: "Best online store for Kashmiri products. The walnuts are fresh and crunchy. Great prices and fantastic customer support. Will definitely recommend!",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          style={{
            width: '1.125rem',
            height: '1.125rem',
            fill: i < rating ? '#FFB800' : '#E5E7EB',
            color: i < rating ? '#FFB800' : '#E5E7EB',
            filter: i < rating ? 'drop-shadow(0 1px 2px rgba(255, 184, 0, 0.3))' : 'none'
          }}
        />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const headerRef = useFadeInUp<HTMLDivElement>({ duration: 0.8 });

  const itemsPerView = {
    mobile: 1,
    tablet: 2,
    desktop: 3
  };

  const [itemsToShow, setItemsToShow] = useState(itemsPerView.desktop);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(itemsPerView.mobile);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(itemsPerView.tablet);
      } else {
        setItemsToShow(itemsPerView.desktop);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isPaused) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 4000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isPaused]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section style={{
      backgroundColor: '#F9FAFB',
      width: '100%',
      padding: '5rem 0',
      position: 'relative',
      overflow: 'hidden'
    }} className="md:py-24 lg:py-32">
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.02,
        pointerEvents: 'none'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(circle at 2px 2px, #AB1F22 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} />
      </div>

      <div style={{
        maxWidth: '80rem',
        margin: '0 auto',
        padding: '0 1.5rem',
        position: 'relative'
      }} className="sm:px-8 lg:px-12">
        {/* Header */}
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
              ⭐ Customer Reviews
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
            <span>What Our </span>
            <span style={{ color: '#AB1F22' }}>Customers Say</span>
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
            Trusted by <span style={{ color: '#009746', fontWeight: '600' }}>thousands of happy customers</span> across India
          </p>
        </div>

        {/* Carousel Container */}
        <div
          style={{ position: 'relative', marginBottom: '2.5rem' }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Testimonials Slider */}
          <div style={{ overflow: 'hidden', borderRadius: '1rem' }}>
            <div
              style={{
                display: 'flex',
                transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: `translateX(-${(currentIndex * 100) / itemsToShow}%)`
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  style={{
                    minWidth: `${100 / itemsToShow}%`,
                    padding: '0 0.75rem'
                  }}
                >
                  {/* Testimonial Card - Rectangular */}
                  <div style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '1rem',
                    padding: '2rem',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    border: '2px solid #E5E7EB',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  className="hover:shadow-xl hover:border-[#AB1F22]/20">
                    {/* Quote Icon Top */}
                    <div style={{
                      position: 'absolute',
                      top: '1.5rem',
                      right: '1.5rem',
                      opacity: 0.08
                    }}>
                      <Quote style={{
                        width: '4rem',
                        height: '4rem',
                        color: '#AB1F22'
                      }} />
                    </div>

                    {/* Rating */}
                    <div style={{
                      marginBottom: '1.5rem',
                      position: 'relative'
                    }}>
                      <StarRating rating={testimonial.rating} />
                    </div>

                    {/* Testimonial Text */}
                    <p style={{
                      fontFamily: "'Nunito', sans-serif",
                      fontSize: '1.0625rem',
                      lineHeight: '1.8',
                      color: '#4B5563',
                      marginBottom: 'auto',
                      fontWeight: '500',
                      fontStyle: 'italic'
                    }}>
                      "{testimonial.text}"
                    </p>

                    {/* Simple Divider */}
                    <div style={{
                      height: '1px',
                      backgroundColor: '#E5E7EB',
                      margin: '1.5rem 0'
                    }} />

                    {/* Customer Info - Minimal */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div style={{
                        width: '2.5rem',
                        height: '2.5rem',
                        borderRadius: '0.5rem',
                        backgroundColor: '#F3F4F6',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#AB1F22',
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: '1rem',
                        fontWeight: '600',
                        flexShrink: 0
                      }}>
                        {testimonial.name.charAt(0)}
                      </div>

                      <div style={{ flex: 1, minWidth: 0 }}>
                        <p style={{
                          fontFamily: "'Poppins', sans-serif",
                          fontSize: '0.9375rem',
                          fontWeight: '600',
                          color: '#374151',
                          marginBottom: '0.125rem',
                          lineHeight: '1.2'
                        }}>
                          {testimonial.name}
                        </p>
                        <p style={{
                          fontFamily: "'Nunito', sans-serif",
                          fontSize: '0.8125rem',
                          color: '#9CA3AF',
                          fontWeight: '500'
                        }}>
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '0.75rem'
        }}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              style={{
                width: currentIndex === index ? '2.5rem' : '0.75rem',
                height: '0.75rem',
                borderRadius: '9999px',
                backgroundColor: currentIndex === index ? '#AB1F22' : '#D1D5DB',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s',
                boxShadow: currentIndex === index ? '0 2px 8px rgba(171, 31, 34, 0.3)' : 'none'
              }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Stats Bar */}
        <div style={{
          marginTop: '4rem',
          padding: '2.5rem',
          background: 'linear-gradient(135deg, rgba(171, 31, 34, 0.05), rgba(0, 151, 70, 0.05))',
          borderRadius: '1.5rem',
          border: '2px solid rgba(171, 31, 34, 0.1)'
        }} className="md:mt-20">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '2rem',
            textAlign: 'center'
          }}>
            <div>
              <p style={{
                fontFamily: "'Space Grotesk', 'Poppins', sans-serif",
                fontSize: '3rem',
                fontWeight: '700',
                color: '#AB1F22',
                lineHeight: '1',
                marginBottom: '0.5rem'
              }}>
                5,000+
              </p>
              <p style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: '1rem',
                color: '#6B7280',
                fontWeight: '600'
              }}>
                Happy Customers
              </p>
            </div>
            <div>
              <p style={{
                fontFamily: "'Space Grotesk', 'Poppins', sans-serif",
                fontSize: '3rem',
                fontWeight: '700',
                color: '#009746',
                lineHeight: '1',
                marginBottom: '0.5rem'
              }}>
                4.9★
              </p>
              <p style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: '1rem',
                color: '#6B7280',
                fontWeight: '600'
              }}>
                Average Rating
              </p>
            </div>
            <div>
              <p style={{
                fontFamily: "'Space Grotesk', 'Poppins', sans-serif",
                fontSize: '3rem',
                fontWeight: '700',
                color: '#AB1F22',
                lineHeight: '1',
                marginBottom: '0.5rem'
              }}>
                98%
              </p>
              <p style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: '1rem',
                color: '#6B7280',
                fontWeight: '600'
              }}>
                Satisfaction Rate
              </p>
            </div>
            <div>
              <p style={{
                fontFamily: "'Space Grotesk', 'Poppins', sans-serif",
                fontSize: '3rem',
                fontWeight: '700',
                color: '#009746',
                lineHeight: '1',
                marginBottom: '0.5rem'
              }}>
                10k+
              </p>
              <p style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: '1rem',
                color: '#6B7280',
                fontWeight: '600'
              }}>
                Reviews
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
