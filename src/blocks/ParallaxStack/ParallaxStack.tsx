"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./ParallaxStack.module.css";
import clsx from "classnames";

interface ParallaxStackProps extends Common.ComponentProps {
  staggerDelay?: number; // Delay between items animation in milliseconds
  children: React.ReactNode;
}

export const ParallaxStack = ({
  testID,
  staggerDelay = 150,
  children,
  ...props
}: ParallaxStackProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());

  // Convert children to array for easier handling
  const childrenArray = React.Children.toArray(children);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(
            entry.target.getAttribute("data-index") || "0"
          );

          if (entry.isIntersecting) {
            // Add to visible items with delay based on index
            setTimeout(() => {
              setVisibleItems((prev) => new Set(prev).add(index));
            }, index * staggerDelay);
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of item is visible
        rootMargin: "0px 0px -10% 0px", // Start animation slightly before item is fully visible
      }
    );

    // Observe all item elements
    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      observer.disconnect();
    };
  }, [staggerDelay, childrenArray.length]);

  // Generate a pseudo-random but deterministic horizontal offset between -100% and 100% for each item
  const getHorizontalOffset = (index: number): number => {
    // Simple seeded random function for consistent staggering
    const seed = (index + 1) * 12345;
    const random = Math.sin(seed) * 10000;
    const normalized = random - Math.floor(random);
    console.log(normalized, "Normalized", normalized * 100);
    // Return a deterministic random number between -100% and 100%
    return normalized * 100;
  };

  return (
    <div
      ref={containerRef}
      data-testid={testID}
      className={styles.frame}
      {...props}
    >
      {childrenArray.map((child, index) => (
        <div
          key={index}
          ref={(el) => {
            itemRefs.current[index] = el;
          }}
          data-index={index}
          data-testid={`${testID}.item-${index}`}
          className={clsx(
            styles.item,
            visibleItems.has(index) ? styles.visible : ""
          )}
          style={
            {
              "--horizontal-offset": `${getHorizontalOffset(index)}%`,
              "--animation-delay": `${index * staggerDelay}ms`,
            } as React.CSSProperties
          }
        >
          {child}
        </div>
      ))}
    </div>
  );
};
