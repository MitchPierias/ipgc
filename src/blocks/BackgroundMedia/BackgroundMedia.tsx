// @ts-nocheck
import styles from "./BackgroundMedia.module.css";
import React from "react";
import Image from "next/image";
import clsx from "classnames";

interface BackgroundImageProps extends Common.ComponentProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  objectPosition?: string;
  className?: string;
}

interface BackgroundVideoProps extends Common.ComponentProps {
  src: string;
  poster?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  className?: string;
}

type BackgroundMediaProps = BackgroundImageProps | BackgroundVideoProps;

const isImageProps = (
  props: Partial<BackgroundImageProps>
): props is BackgroundImageProps => {
  return "alt" in props;
};

export const BackgroundMedia = React.forwardRef<
  HTMLDivElement,
  BackgroundMediaProps
>(({ testID, ...props }, ref) => {
  if (isImageProps(props)) {
    const {
      width = 1920,
      height = 1080,
      priority = false,
      objectFit = "cover",
      objectPosition = "center",
    } = props;

    return (
      <div
        ref={ref}
        data-testid={testID}
        className={clsx(styles.container, props.className)}
      >
        <Image
          src={props.src}
          alt={props.alt}
          width={width}
          height={height}
          priority={priority}
          className={styles.image}
          style={{
            objectFit,
            objectPosition,
          }}
        />
      </div>
    );
  } else {
    return (
      <div
        ref={ref}
        data-testid={testID}
        className={clsx(styles.container, props.className)}
      >
        <video
          className={styles.video}
          autoPlay={props.autoPlay}
          loop={props.loop}
          muted={props.muted}
          playsInline={props.playsInline}
          poster={props.poster}
        >
          <source src={src} type="video/mp4" />
        </video>
      </div>
    );
  }
});

BackgroundMedia.displayName = "BackgroundImage";
