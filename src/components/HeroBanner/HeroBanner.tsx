import styles from "./HeroBanner.module.css";

interface HeroBannerProps extends Common.ComponentProps {
  title: string;
  description: string;
}

export const HeroBanner = ({ testID, ...props }: HeroBannerProps) => {
  return (
    <div data-testid={testID} className={styles.frame}>
      <div className={styles.content}>
        <h1 className={styles.title}>{props.title}</h1>
        <p className={styles.description}>{props.description}</p>
      </div>
    </div>
  );
};
