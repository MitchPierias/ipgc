import styles from "./ImageContainer.module.css";
import React from "react";
import { SectionContainer } from "../SectionContainer/SectionContainer";
import clsx from "classnames";

interface ImageContainerProps
  extends React.ComponentProps<typeof SectionContainer> {
  variant?: "tinted";
  media?: {
    type: "image" | "video";
    format: string;
    src: string;
  };
}

export const Section = React.forwardRef<HTMLElement, ImageContainerProps>(
  ({ testID, ...props }, ref) => {
    return (
      <SectionContainer
        ref={ref}
        testID={testID}
        {...props}
        className={clsx(
          props.className,
          styles.frame,
          props.variant && styles[props.variant]
        )}
        style={{
          ...props.style,
          backgroundImage:
            props.media?.type === "image"
              ? `url(${props.media.src})`
              : undefined,
        }}
      >
        {props.media?.type === "video" && (
          <video className={styles.video} playsInline autoPlay muted loop>
            <source src="/mp4/landing-video.mp4" type={`video/mp4`} />
          </video>
        )}
        {props.children}
      </SectionContainer>
    );
  }
);

Section.displayName = "Section";
