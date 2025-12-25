"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface AnimationOptions {
  delay?: number;
  duration?: number;
  ease?: string;
  stagger?: number;
}

export function useFadeInUp(options: AnimationOptions = {}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    const { delay = 0, duration = 1, ease = "power3.out", stagger = 0.1 } = options;

    gsap.fromTo(
      element.children,
      {
        opacity: 0,
        y: 60,
      },
      {
        opacity: 1,
        y: 0,
        duration,
        ease,
        delay,
        stagger,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, [options]);

  return ref;
}

export function useFadeIn(options: AnimationOptions = {}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    const { delay = 0, duration = 1, ease = "power2.out" } = options;

    gsap.fromTo(
      element,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration,
        ease,
        delay,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, [options]);

  return ref;
}

export function useScaleIn(options: AnimationOptions = {}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    const { delay = 0, duration = 0.8, ease = "back.out(1.7)" } = options;

    gsap.fromTo(
      element,
      {
        opacity: 0,
        scale: 0.8,
      },
      {
        opacity: 1,
        scale: 1,
        duration,
        ease,
        delay,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, [options]);

  return ref;
}

export function useSlideInLeft(options: AnimationOptions = {}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    const { delay = 0, duration = 1, ease = "power3.out" } = options;

    gsap.fromTo(
      element,
      {
        opacity: 0,
        x: -100,
      },
      {
        opacity: 1,
        x: 0,
        duration,
        ease,
        delay,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, [options]);

  return ref;
}

export function useSlideInRight(options: AnimationOptions = {}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    const { delay = 0, duration = 1, ease = "power3.out" } = options;

    gsap.fromTo(
      element,
      {
        opacity: 0,
        x: 100,
      },
      {
        opacity: 1,
        x: 0,
        duration,
        ease,
        delay,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, [options]);

  return ref;
}
