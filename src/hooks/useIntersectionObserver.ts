"use client";

import { useEffect, useRef, useState } from "react";

interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

/**
 * Memory-efficient intersection observer hook that reuses a single observer instance
 * across multiple components to minimize performance impact.
 */
export function useIntersectionObserver({
  threshold = 0.1,
  rootMargin = "0px 0px -5% 0px",
  triggerOnce = true,
}: UseIntersectionObserverOptions = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Create observer if it doesn't exist
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);

              // If triggerOnce is true, unobserve after first intersection
              if (triggerOnce) {
                observerRef.current?.unobserve(entry.target);
              }
            } else if (!triggerOnce) {
              setIsVisible(false);
            }
          });
        },
        {
          threshold,
          rootMargin,
        }
      );
    }

    observerRef.current.observe(element);

    return () => {
      if (observerRef.current && element) {
        observerRef.current.unobserve(element);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  // Cleanup observer when component unmounts
  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return { elementRef, isVisible };
}
