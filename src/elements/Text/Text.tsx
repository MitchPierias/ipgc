"use client";

import React from "react";
import styles from "./Text.module.css";
import clsx from "classnames";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { useTypewriter } from "../../hooks/useTypewriter";

interface TextProps extends Common.ElementProps {
  component?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "p"
    | "span"
    | "div"
    | "small"
    | "strong";
  bold?: boolean;
  uppercase?: boolean;
  /**
   * Animates the text in with a blur effect when
   * reduced motion is not preferred
   */
  animate?: boolean;
  /**
   * Enables typewriter effect that types text character by character
   * when the element becomes visible
   */
  typeOn?: boolean;
  /**
   * Speed of typing in milliseconds per character (default: 50)
   */
  typeSpeed?: number;
  /**
   * Delay before starting to type in milliseconds (default: 0)
   */
  typeDelay?: number;
  /**
   * Character to use for cursor (default: "|")
   */
  cursorChar?: string;
}

export const Text = ({
  testID,
  component = "span",
  children,
  uppercase,
  bold,
  animate,
  typeOn,
  typeSpeed = 50,
  typeDelay = 0,
  cursorChar = "|",
  ...props
}: React.PropsWithChildren<TextProps>) => {
  const { elementRef, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "0px 0px -5% 0px",
    triggerOnce: true,
  });

  // Convert children to string for typewriter effect
  const textContent =
    typeof children === "string" ? children : String(children || "");

  const { displayText } = useTypewriter({
    text: textContent,
    speed: typeSpeed,
    startDelay: typeDelay,
    showCursor: true,
    cursorChar,
    enabled: typeOn && isVisible,
  });

  // Use typewriter text if typeOn is enabled, otherwise use original children
  const content = typeOn ? displayText : children;

  return React.createElement(
    component,
    {
      "data-testid": testID,
      ref: animate || typeOn ? elementRef : undefined,
      ...props,
      className: clsx(
        styles.frame,
        props.className,
        animate && isVisible && styles.blurIn,
        typeOn && styles.typewriter,
        uppercase && styles.uppercase,
        bold && styles.bold
      ),
    },
    content
  );
};

export const Leading = (props: React.ComponentProps<typeof Text>) => (
  <Text
    {...props}
    component="h1"
    className={clsx(styles.leading, props.className)}
  />
);

export const Heading = (props: React.ComponentProps<typeof Text>) => (
  <Text
    {...props}
    component="h2"
    className={clsx(styles.heading, props.className)}
  />
);

export const Subheading = (props: React.ComponentProps<typeof Text>) => (
  <Text
    {...props}
    component="h3"
    className={clsx(styles.heading, props.className)}
  />
);

export const Title = (props: React.ComponentProps<typeof Text>) => (
  <Text
    {...props}
    component="h4"
    className={clsx(styles.subtitle, props.className)}
  />
);

export const Subtitle = (props: React.ComponentProps<typeof Text>) => (
  <Text
    {...props}
    component="h5"
    className={clsx(styles.subtitle, props.className)}
  />
);

export const Paragraph = (props: React.ComponentProps<typeof Text>) => (
  <Text {...props} component="p" />
);

export const Microcopy = (props: React.ComponentProps<typeof Text>) => (
  <Text
    {...props}
    component="small"
    className={clsx(props.className, styles.microcopy)}
  />
);
