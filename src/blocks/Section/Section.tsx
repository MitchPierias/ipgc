import styles from "./Section.module.css";
import clsx from "classnames";
import { forwardRef } from "react";

interface SectionProps extends Common.ComponentProps {
  media?: {
    type: "image" | "video";
    format: string;
    src: string;
  };
  width?: Common.Layout;
  height?: Common.Layout;
  padded?: boolean;
}

export const Section = forwardRef<
  HTMLElement,
  React.PropsWithChildren<SectionProps>
>(({ testID, padded = false, ...props }, ref) => {
  return (
    <section
      ref={ref}
      data-testid={testID}
      className={clsx(
        styles.frame,
        styles[props.width || "content"],
        styles[props.height || "content"],
        padded && styles.padded
      )}
      style={{
        backgroundImage:
          props.media?.type === "image" ? `url(${props.media.src})` : undefined,
      }}
    >
      {props.media?.type === "video" && (
        <video className={styles.video} playsInline autoPlay muted loop>
          <source src="/mp4/landing-video.mp4" type={`video/mp4`} />
        </video>
      )}
      {props.children}
    </section>
  );
});

Section.displayName = "Section";
