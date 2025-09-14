"use client";

import Image from "next/image";
import styles from "./AutoSlider.module.css";
import clsx from "classnames";

interface ImageItem {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

interface AutoSliderProps extends Common.ComponentProps {
  resources: ImageItem[];
  speed?: number; // Animation duration in seconds
  gap?: number; // Gap between resources in pixels
  className?: string;
}

export default function AutoSlider({
  testID,
  speed = 30,
  gap = 32,
  ...props
}: AutoSliderProps) {
  return (
    <div data-testid={testID} className={clsx(props.className, styles.frame)}>
      <div
        className={styles.slider}
        style={{
          animationDuration: `${speed}s`,
          gap: `${gap}px`,
        }}
      >
        {props.resources.map((image, index) => (
          <Image
            key={`first-${index}`}
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className={styles.image}
          />
        ))}
        {/* Duplicate for seamless loop */}
        {props.resources.map((image, index) => (
          <Image
            key={`second-${index}`}
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className={styles.image}
          />
        ))}
      </div>
    </div>
  );
}
