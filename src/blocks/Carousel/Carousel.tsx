"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import styles from "./Carousel.module.css";

interface CarouselProps extends Common.ComponentProps {
  stepInterval?: number; // Time between steps in milliseconds
  pauseOnHover?: boolean;
  transitionDuration?: number; // Duration of each step transition in milliseconds
}

export const Carousel = ({
  testID,
  stepInterval = 3000,
  pauseOnHover = true,
  transitionDuration = 500,
  children,
  ...props
}: React.PropsWithChildren<CarouselProps>) => {
  const [isPaused, setIsPaused] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const childrenArray = React.Children.toArray(children);
  const duplicatedChildren = [...childrenArray, ...childrenArray];

  const stepForward = useCallback(() => {
    if (!carouselRef.current) return;

    const carousel = carouselRef.current;
    const firstCard = carousel.querySelector(`.${styles.card}`) as HTMLElement;

    if (!firstCard) return;

    setCurrentStep((prev) => {
      const nextStep = prev + 1;
      // Reset to beginning when we've moved through all original cards
      if (nextStep >= childrenArray.length) {
        // Instantly reset to start position after transition completes
        setTimeout(() => {
          carousel.style.transition = "none";
          carousel.style.transform = `translateX(0px)`;
          requestAnimationFrame(() => {
            carousel.style.transition = `transform ${transitionDuration}ms ease-in-out`;
          });
        }, transitionDuration);
        return 0;
      }

      return nextStep;
    });
  }, [childrenArray.length, transitionDuration]);

  // Update carousel position based on current step
  useEffect(() => {
    if (!carouselRef.current) return;

    const carousel = carouselRef.current;
    const firstCard = carousel.querySelector(`.${styles.card}`) as HTMLElement;

    if (!firstCard) return;

    const computedStyle = getComputedStyle(carousel);
    const gap = parseInt(computedStyle.gap) || 24;
    const cardWidth = firstCard.offsetWidth;
    const stepDistance = cardWidth + gap;

    // Apply transition and transform
    carousel.style.transition = `transform ${transitionDuration}ms ease-in-out`;
    carousel.style.transform = `translateX(-${currentStep * stepDistance}px)`;
  }, [currentStep, transitionDuration]);

  // Set up stepping interval
  useEffect(() => {
    if (isPaused) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    intervalRef.current = setInterval(stepForward, stepInterval);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [stepForward, stepInterval, isPaused]);

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      setIsPaused(true);
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      setIsPaused(false);
    }
  };

  return (
    <div
      data-testid={testID}
      className={styles.frame}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <div className={styles.container}>
        <div ref={carouselRef} className={styles.track}>
          {duplicatedChildren.map((child, index) => (
            <div key={index} className={styles.card}>
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
