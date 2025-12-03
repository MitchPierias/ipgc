"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./ParallaxStack.module.css";
import clsx from "classnames";
import { Panel } from "../Panel/Panel";
import { Panel2, Panel as PanelTransform } from "../Panel/Panel.transform";

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

  // Generate a deterministic horizontal offset from left to right as index increases
  // Constrained to keep items within the container bounds
  const getHorizontalOffset = (index: number): number => {
    // Map index from 0 to childrenArray.length-1 to range -35% to +35%
    // So index 0 starts on the left, and higher indices move to the right
    // This keeps items within the container while maintaining visual progression
    const totalItems = childrenArray.length;
    if (totalItems === 1) return 0; // Center single item

    const normalizedIndex = index / (totalItems - 1); // 0 to 1
    // Map 0 to -35%, 1 to +35% (70% total range)
    return normalizedIndex * 70 - 35;
  };

  // Check if a child is a Panel component instance
  const isPanelInstance = (child: React.ReactNode): boolean => {
    if (!React.isValidElement(child)) return false;
    const childType = child.type;
    return (
      childType === Panel ||
      childType === Panel2 ||
      childType === PanelTransform
    );
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
          {isPanelInstance(child)
            ? React.cloneElement(child as React.ReactElement, {
                index,
              })
            : child}
        </div>
      ))}
    </div>
  );
};
