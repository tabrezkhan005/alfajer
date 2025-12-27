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

export function useFadeInUp<T extends HTMLElement = HTMLElement>(
  options: AnimationOptions = {}
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;

    const isReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    if (isReducedMotion) {
      gsap.set(ref.current.children, { opacity: 1, y: 0, clearProps: "all" });
      return;
    }

    const element = ref.current;
    const { delay = 0, duration = 1, ease = "power3.out", stagger = 0.1 } = options;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element.children,
        {
          opacity: 0,
          y: 28,
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
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, element);

    return () => {
      ctx.revert();
    };
  }, [options]);

  return ref;
}

export function useFadeIn<T extends HTMLElement = HTMLElement>(
  options: AnimationOptions = {}
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;

    const isReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    if (isReducedMotion) {
      gsap.set(ref.current, { opacity: 1, clearProps: "all" });
      return;
    }

    const element = ref.current;
    const { delay = 0, duration = 1, ease = "power2.out" } = options;

    const ctx = gsap.context(() => {
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
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, element);

    return () => {
      ctx.revert();
    };
  }, [options]);

  return ref;
}

export function useScaleIn<T extends HTMLElement = HTMLElement>(
  options: AnimationOptions = {}
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;

    const isReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    if (isReducedMotion) {
      gsap.set(ref.current, { opacity: 1, scale: 1, clearProps: "all" });
      return;
    }

    const element = ref.current;
    const { delay = 0, duration = 0.8, ease = "back.out(1.7)" } = options;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          scale: 0.96,
        },
        {
          opacity: 1,
          scale: 1,
          duration,
          ease,
          delay,
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, element);

    return () => {
      ctx.revert();
    };
  }, [options]);

  return ref;
}

export function useSlideInLeft<T extends HTMLElement = HTMLElement>(
  options: AnimationOptions = {}
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;

    const isReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    if (isReducedMotion) {
      gsap.set(ref.current, { opacity: 1, x: 0, clearProps: "all" });
      return;
    }

    const element = ref.current;
    const { delay = 0, duration = 1, ease = "power3.out" } = options;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          x: -48,
        },
        {
          opacity: 1,
          x: 0,
          duration,
          ease,
          delay,
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, element);

    return () => {
      ctx.revert();
    };
  }, [options]);

  return ref;
}

export function useSlideInRight<T extends HTMLElement = HTMLElement>(
  options: AnimationOptions = {}
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;

    const isReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    if (isReducedMotion) {
      gsap.set(ref.current, { opacity: 1, x: 0, clearProps: "all" });
      return;
    }

    const element = ref.current;
    const { delay = 0, duration = 1, ease = "power3.out" } = options;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          x: 48,
        },
        {
          opacity: 1,
          x: 0,
          duration,
          ease,
          delay,
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, element);

    return () => {
      ctx.revert();
    };
  }, [options]);

  return ref;
}
