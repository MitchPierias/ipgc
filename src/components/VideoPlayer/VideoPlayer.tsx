"use client";

import Player from "next-video/player";
import styles from "./VideoPlayer.module.css";
import clsx from "classnames";

interface VideoPlayerProps extends Common.ComponentProps {
  src?: string; // Video source URL
  thumbnailImage?: string; // Custom thumbnail image URL (poster)
  alt?: string; // Alt text for thumbnail
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
}

export const VideoPlayer = ({
  src,
  thumbnailImage,
  alt = "Video thumbnail",
  autoPlay = false,
  loop = false,
  muted = false,
  playsInline = true,
  className,
  ...props
}: VideoPlayerProps) => {
  if (!src) {
    return null;
  }

  return (
    <div className={clsx(className, styles.frame)} data-testid={props.testID}>
      <div className={styles.wrapper}>
        <Player
          src={src}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          playsInline={playsInline}
          poster={thumbnailImage}
          className={styles.player}
        />
      </div>
    </div>
  );
};
