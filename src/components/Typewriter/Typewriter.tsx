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
import { ImageContainer } from "src/blocks/ImageContainer/ImageContainer";

interface TypewriterProps extends Common.ElementProps {
  title?: string;
  subtitle?: string;
  action?: {
    label: string;
    href: string;
  };
}

export const Typewriter = ({ testID, ...props }: TypewriterProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [midgroundLoaded, setMidgroundLoaded] = useState(false);
  const [showActions, setShowActions] = useState(false);
  const [scrollY, setScrollY] = useState(0);

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

  // Calculate parallax transforms
  const getParallaxTransform = (speed: number, initialOffset: number = 0) => {
    if (!isVisible) return `translateY(${initialOffset}px)`;

    const element = elementRef.current;
    if (!element) return `translateY(${initialOffset}px)`;

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

    // Apply parallax effect with initial offset
    const parallaxOffset = initialOffset - scrollProgress * speed;
    return `translateY(${parallaxOffset}px)`;
  };

  return (
    <ImageContainer
      ref={elementRef}
      testID="section"
      media={{
        type: "image",
        format: "jpg",
        src: "/images/team-background.jpg",
      }}
      width="full"
      height="full"
    >
      <div
        className={styles.midground}
        style={{
          transform: getParallaxTransform(60, 80), // Slower parallax, starts 80px down
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
          transform: getParallaxTransform(40, 60), // Medium parallax, starts 60px down
        }}
      >
        <BlockLayout
          testID={`${testID}-layout`}
          className={clsx(props.className, styles.content)}
        >
          {props.title && (
            <Leading testID="title" typeDelay={300} typeOn>
              {props.title}
            </Leading>
          )}
          {props.subtitle && (
            <Subtitle testID="subtitle">{props.subtitle}</Subtitle>
          )}
        </BlockLayout>
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
          transform: getParallaxTransform(120, 100), // Fastest parallax, starts 100px down
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
    </ImageContainer>
  );
};
