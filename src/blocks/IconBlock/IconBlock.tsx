import { Heading, Text } from "src/elements/Text/Text";
import styles from "./IconBlock.module.css";

interface IconBlockProps extends Common.ComponentProps {
  title: string;
  description: string;
}

export const IconBlock = ({ testID, ...props }: IconBlockProps) => {
  return (
    <div data-testid={testID} className={styles.frame}>
      <div data-testid={`${testID}.icon`} className={styles.icon} />
      <div data-testid={`${testID}.content`} className={styles.content}>
        <Heading testID={`${testID}.title`} animate>
          {props.title}
        </Heading>
        <Text testID={`${testID}.description`} animate>
          {props.description}
        </Text>
      </div>
    </div>
  );
};
