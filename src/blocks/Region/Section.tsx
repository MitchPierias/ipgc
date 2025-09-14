import styles from "./Section.module.css";
import clsx from "classnames";

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

export const Section = ({
  testID,
  padded = false,
  ...props
}: React.PropsWithChildren<SectionProps>) => {
  return (
    <section
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
          <source
            src="/mp4/whole-body-mri-journey-into-the-known.mp4"
            type={`video/mp4`}
          />
        </video>
      )}
      {props.children}
    </section>
  );
};
