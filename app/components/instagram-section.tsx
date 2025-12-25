"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface InstagramPost {
  id: string;
  image: string;
  alt: string;
  isVideo?: boolean;
  url?: string;
}

interface InstagramSectionProps {
  posts?: InstagramPost[];
  username?: string;
}

const defaultPosts: InstagramPost[] = [
  {
    id: "1",
    image: "/instagram-post-1.jpg",
    alt: "Christmas themed post",
    url: "https://instagram.com/p/example1",
  },
  {
    id: "2",
    image: "/instagram-post-2.jpg",
    alt: "Kashmiri Garlic product post",
    url: "https://instagram.com/p/example2",
  },
  {
    id: "3",
    image: "/instagram-post-3.jpg",
    alt: "Video thumbnail",
    isVideo: true,
    url: "https://instagram.com/p/example3",
  },
  {
    id: "4",
    image: "/instagram-post-4.jpg",
    alt: "MERRY text post",
    url: "https://instagram.com/p/example4",
  },
  {
    id: "5",
    image: "/instagram-post-5.jpg",
    alt: "Woman smiling video",
    isVideo: true,
    url: "https://instagram.com/p/example5",
  },
];

function ChevronLeftIcon() {
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
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon() {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-white"
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

export function InstagramSection({
  posts = defaultPosts,
  username = "ALFAJERMART",
}: InstagramSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 5;
  const headerRef = useRef<HTMLDivElement>(null);
  const postsRef = useRef<HTMLDivElement>(null);

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

    if (postsRef.current) {
      const postItems = postsRef.current.querySelectorAll("a");
      gsap.fromTo(
        postItems,
        { opacity: 0, scale: 0.8, y: 40 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: postsRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  function nextSlide() {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, posts.length - itemsPerView + 1));
  }

  function prevSlide() {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(0, posts.length - itemsPerView) : prev - 1
    );
  }

  return (
    <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        {/* Header */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4 md:mb-0">
            Checkout Our{" "}
            <span className="text-[#8B1538]">Instagram.</span>
          </h2>
          <a
            href={`https://instagram.com/${username.toLowerCase()}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline text-lg"
          >
            @{username}
          </a>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-2 mb-6">
          {posts.slice(0, Math.min(5, posts.length)).map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex % 5
                  ? "bg-gray-400"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Posts Slider */}
        <div className="relative">
          {/* Navigation Arrows */}
          {posts.length > itemsPerView && (
            <>
              <button
                onClick={prevSlide}
                aria-label="Previous posts"
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-md rounded-full p-2 transition-all -translate-x-4"
              >
                <ChevronLeftIcon />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next posts"
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-md rounded-full p-2 transition-all translate-x-4"
              >
                <ChevronRightIcon />
              </button>
            </>
          )}

          {/* Posts Grid */}
          <div ref={postsRef} className="overflow-hidden">
            <div
              className="flex gap-4 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {posts.map((post) => (
                <a
                  key={post.id}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex-shrink-0 w-[calc(20%-16px)] aspect-square group"
                >
                  <div className="relative w-full h-full bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 50vw, 20vw"
                    />
                    {post.isVideo && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                        <div className="bg-black/50 rounded-full p-3">
                          <PlayIcon />
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-500 text-xs p-2 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <p>Add image at {post.image}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
