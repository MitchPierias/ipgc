"use client";

import type React from "react";
import styles from "./ParallaxVideoSection.module.css";
import clsx from "classnames";

interface ParallaxVideoSectionProps extends Common.ComponentProps {
  media?: {
    type: "video";
    src: string;
    format?: string;
  };
  backgroundSpeed?: number; // Parallax speed for background (0-1, lower = slower)
  contentSpeed?: number; // Parallax speed for content (0-1, lower = slower)
  width?: Common.Layout;
  height?: Common.Layout;
  padded?: boolean;
  className?: string;
}

export const ParallaxVideoSection = ({
  media,
  width = "full",
  height = "full",
  padded,
  children,
  ...props
}: React.PropsWithChildren<ParallaxVideoSectionProps>) => {
  return (
    <div
      className={clsx(
        props.className,
        styles.frame,
        styles[width],
        styles[height],
        padded && styles.padded
      )}
    >
      {/* Background Video Layer */}
      <div className={styles.container}>
        <video className={styles.video} playsInline autoPlay muted loop>
          <source
            src="/mp4/whole-body-mri-journey-into-the-known.mp4"
            type={`video/mp4`}
          />
          Your browser does not support the video tag.
        </video>
        <div className={styles.overlay} />
      </div>

      {/* Foreground Content Layer */}
      <div className={styles.content}>{children}</div>
    </div>
  );
};
