import { BlockLayout } from "src/elements/BlockLayout/BlockLayout";
import { Heading, Text } from "src/elements/Text/Text";
import styles from "./BlockHeader.module.css";

interface BlockHeaderProps extends Common.ComponentProps {
  title: string;
  description: string;
}

export const BlockHeader = ({ testID, ...props }: BlockHeaderProps) => {
  return (
    <BlockLayout testID={testID} className={styles.frame}>
      <Heading testID={`${testID}.title`}>{props.title}</Heading>
      <Text testID={`${testID}.description`}>{props.description}</Text>
    </BlockLayout>
  );
};
