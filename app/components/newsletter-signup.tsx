"use client";

import { useState } from "react";
import { CheckCircle2, Mail, Send } from "lucide-react";
import { useFadeIn } from "@/app/hooks/use-gsap-animation";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const ref = useFadeIn<HTMLDivElement>({ duration: 1 });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail("");
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1000);
  };

  return (
    <section style={{
      width: '100%',
      padding: '5rem 0',
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #AB1F22 0%, #8B1538 100%)'
    }} className="md:py-24 lg:py-32">
      {/* Elegant Background Pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.08,
        backgroundImage: `radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)`,
        backgroundSize: '48px 48px',
        pointerEvents: 'none'
      }} />

      {/* Subtle Gradient Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
        pointerEvents: 'none'
      }} />

      <div style={{
        maxWidth: '48rem',
        margin: '0 auto',
        padding: '0 1.5rem',
        position: 'relative'
      }} className="sm:px-8">
        <div ref={ref} style={{ textAlign: 'center' }}>
          {/* Main Title */}
          <h2 style={{
            fontFamily: "'Space Grotesk', 'Poppins', sans-serif",
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#ffffff',
            lineHeight: '1.1',
            marginBottom: '1rem'
          }} className="sm:text-5xl md:text-6xl lg:text-7xl">
            Stay Updated
          </h2>

          {/* Subtitle */}
          <p style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: '1.125rem',
            fontWeight: '500',
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '3rem',
            lineHeight: '1.6'
          }} className="md:text-xl md:mb-16">
            Subscribe to get exclusive offers and wellness tips
          </p>

          {/* Newsletter Form */}
          <form
            onSubmit={handleSubmit}
            style={{
              maxWidth: '36rem',
              margin: '0 auto',
              position: 'relative'
            }}
          >
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }} className="sm:flex-row">
              {/* Email Input */}
              <div style={{
                position: 'relative',
                flex: 1
              }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  style={{
                    width: '100%',
                    height: '3.5rem',
                    padding: '0 1.5rem',
                    fontSize: '1rem',
                    fontFamily: "'Nunito', sans-serif",
                    fontWeight: '500',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(10px)',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '0.75rem',
                    color: '#111827',
                    transition: 'all 0.3s',
                    outline: 'none'
                  }}
                  className="focus:bg-white focus:border-white focus:shadow-xl placeholder:text-gray-500"
                  aria-label="Email address"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  height: '3.5rem',
                  padding: '0 2.5rem',
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '1rem',
                  fontWeight: '700',
                  letterSpacing: '0.025em',
                  backgroundColor: '#ffffff',
                  color: '#AB1F22',
                  border: 'none',
                  borderRadius: '0.75rem',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.625rem',
                  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
                  transition: 'all 0.3s',
                  opacity: isSubmitting ? 0.7 : 1,
                  whiteSpace: 'nowrap'
                }}
                className="hover:shadow-2xl hover:scale-105 active:scale-95"
              >
                {isSubmitting ? (
                  <>
                    <div style={{
                      width: '1.25rem',
                      height: '1.25rem',
                      border: '2px solid #AB1F22',
                      borderTopColor: 'transparent',
                      borderRadius: '50%',
                      animation: 'spin 1s linear infinite'
                    }} />
                    <span>Subscribing...</span>
                  </>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <Send style={{ width: '1.125rem', height: '1.125rem' }} />
                  </>
                )}
              </button>
            </div>

            {/* Success Message */}
            {isSuccess && (
              <div style={{
                marginTop: '1.5rem',
                padding: '1rem 1.5rem',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                borderRadius: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.625rem',
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
                animation: 'slideDown 0.3s ease-out'
              }}>
                <CheckCircle2 style={{
                  width: '1.25rem',
                  height: '1.25rem',
                  color: '#009746',
                  flexShrink: 0
                }} />
                <span style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: '0.9375rem',
                  fontWeight: '600',
                  color: '#111827'
                }}>
                  Successfully subscribed! Check your inbox.
                </span>
              </div>
            )}
          </form>

          {/* Trust Line */}
          <p style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: '0.875rem',
            fontWeight: '500',
            color: 'rgba(255, 255, 255, 0.8)',
            marginTop: '2rem'
          }}>
            No spam, unsubscribe anytime
          </p>
        </div>
      </div>

      {/* Add keyframe animations */}
      <style jsx>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
