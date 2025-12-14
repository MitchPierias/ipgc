"use client";

import { BlockLayout } from "src/elements/BlockLayout/BlockLayout";
import { Button } from "src/elements/Buttons/Button";
import { Subtitle } from "src/elements/Text/Text";
import { Leading } from "src/elements/Text/Text";
import styles from "./Typewriter.module.css";
import clsx from "classnames";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useIntersectionObserver } from "src/hooks/useIntersectionObserver";
import { LayoutPanel } from "src/blocks/LayoutPanel/LayoutPanel";
import { Section } from "src/blocks/Section/Section";
import { Panel } from "src/blocks/Panel/Panel";

interface TypewriterProps extends Common.ElementProps {
  title?: string;
  subtitle?: string;
  action?: {
    label: string;
    href: string;
  };
}

const DELAY = 5000;

export const Typewriter = ({ testID, ...props }: TypewriterProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [midgroundLoaded, setMidgroundLoaded] = useState(false);
  const [showActions, setShowActions] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  const { elementRef, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "0px 0px -10% 0px",
    triggerOnce: false,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowActions(true);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  // Update container height on resize
  useEffect(() => {
    const updateContainerHeight = () => {
      const element = elementRef.current;
      if (element) {
        setContainerHeight(element.getBoundingClientRect().height);
      }
    };

    // Initial measurement
    updateContainerHeight();

    // Use ResizeObserver for better performance
    const resizeObserver = new ResizeObserver(() => {
      updateContainerHeight();
    });

    const element = elementRef.current;
    if (element) {
      resizeObserver.observe(element);
    }

    // Fallback to window resize for older browsers
    window.addEventListener("resize", updateContainerHeight, { passive: true });

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateContainerHeight);
    };
  }, [elementRef]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    if (isVisible) {
      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll(); // Initial call
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);

  // Calculate parallax transforms using percentages
  // speedPercent: percentage of container height to move (e.g., 0.06 = 6% of container height)
  // initialOffsetPercent: percentage of container height for initial offset (e.g., 0.08 = 8% of container height)
  const getParallaxTransform = (
    speedPercent: number,
    initialOffsetPercent: number = 0
  ) => {
    if (!isVisible || containerHeight === 0) {
      const initialOffsetPx =
        initialOffsetPercent * (containerHeight || window.innerHeight);
      return `translateY(${initialOffsetPx}px)`;
    }

    const element = elementRef.current;
    if (!element) {
      const initialOffsetPx = initialOffsetPercent * containerHeight;
      return `translateY(${initialOffsetPx}px)`;
    }

    const rect = element.getBoundingClientRect();
    const elementTop = rect.top + scrollY;
    const elementHeight = rect.height;
    const viewportHeight = window.innerHeight;

    // Calculate how much the element has scrolled into view
    const scrollProgress = Math.max(
      0,
      Math.min(
        1,
        (scrollY - elementTop + viewportHeight) /
          (elementHeight + viewportHeight)
      )
    );

    // Convert percentages to pixel values based on container height
    const speedPx = speedPercent * containerHeight;
    const initialOffsetPx = initialOffsetPercent * containerHeight;

    // Apply parallax effect with initial offset
    const parallaxOffset = initialOffsetPx - scrollProgress * speedPx;
    return `translateY(${parallaxOffset}px)`;
  };

  return (
    <Section
      ref={elementRef}
      testID="section"
      media={{
        type: "image",
        format: "jpg",
        src: "/images/team-background.jpg",
      }}
      width="full"
      className={styles.section}
    >
      <div
        className={styles.midground}
        style={{
          transform: getParallaxTransform(0.06, 0.08), // Slower parallax, starts 8% down (6% speed, 8% initial offset)
        }}
      >
        <Image
          src="/images/team-midground.png"
          alt="Team"
          width={1755}
          height={1000}
          className={clsx(styles.image, {
            [styles.loaded]: midgroundLoaded,
          })}
          onLoad={() => setMidgroundLoaded(true)}
        />
      </div>

      <LayoutPanel
        testID={testID}
        className={styles.frame}
        size={"content"}
        style={{
          transform: getParallaxTransform(0.04, 0.06), // Medium parallax, starts 6% down (4% speed, 6% initial offset)
        }}
        padding="loose"
      >
        {props.title && (
          <Leading testID="title" typeDelay={3000} typeOn>
            {props.title}
          </Leading>
        )}
        {props.subtitle && (
          <Subtitle testID="subtitle">{props.subtitle}</Subtitle>
        )}
        {props.action && (
          <div
            className={clsx(styles.actions, {
              [styles.animate]: showActions,
            })}
          >
            <Button
              testID="button"
              variant="primary"
              size="lg"
              href={props.action.href}
              className={styles.action}
            >
              {props.action.label}
            </Button>
          </div>
        )}
      </LayoutPanel>

      <div
        className={styles.foreground}
        style={{
          transform: getParallaxTransform(0.12, 0.1), // Fastest parallax, starts 10% down (12% speed, 10% initial offset)
        }}
      >
        <Image
          src="/images/team-foreground.png"
          alt="Team"
          width={1755}
          height={1000}
          className={clsx(styles.image, {
            [styles.loaded]: imageLoaded,
          })}
          onLoad={() => setImageLoaded(true)}
        />
      </div>
    </Section>
  );
};
