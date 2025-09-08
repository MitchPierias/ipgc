import { Text } from "src/elements/Text/Text";
import styles from "./HeroBanner.module.css";

interface HeroBannerProps extends Common.ComponentProps {
  title: string;
  description: string;
}

export const HeroBanner = ({ testID, ...props }: HeroBannerProps) => {
  return (
    <div data-testid={testID} className={styles.frame}>
      <div className={styles.content}>
        <Text testID={`${testID}.title`} uppercase>
          {props.title}
        </Text>
        <Text testID={`${testID}.description`} className={styles.description}>
          {props.description}
        </Text>
      </div>
    </div>
  );
};
