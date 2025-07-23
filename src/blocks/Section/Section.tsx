import styles from "./Section.module.css";
import clsx from "classnames";

interface SectionProps extends Common.ComponentProps {
  media?: {
    type: "image" | "video";
    format: string;
    src: string;
  };
  full?: boolean;
  padded?: boolean;
}

export const Section = ({
  testID,
  padded = false,
  full = false,
  ...props
}: React.PropsWithChildren<SectionProps>) => {
  return (
    <section
      data-testid={testID}
      className={clsx(
        styles.frame,
        padded && styles.padded,
        full && styles.full
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
