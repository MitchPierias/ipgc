import { Title } from "src/elements/Text/Text";
import styles from "./HeroBanner.module.css";

interface HeroBannerProps extends Common.ComponentProps {
  title: string;
  description: string;
}

export const HeroBanner = ({ testID, ...props }: HeroBannerProps) => {
  return (
    <div data-testid={testID} className={styles.frame}>
      <div className={styles.content}>
        <Title testID={`${testID}.title`}>{props.title}</Title>
        <p className={styles.description}>{props.description}</p>
      </div>
    </div>
  );
};
