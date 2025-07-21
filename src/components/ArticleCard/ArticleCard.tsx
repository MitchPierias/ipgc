import { Subheading } from "src/elements/Text/Text";
import styles from "./ArticleCard.module.css";
import { Button } from "src/elements/Buttons/Button";

interface ArticleCardProps extends Common.ComponentProps {
  title: string;
  description?: string;
  tags?: string[];
}

export const ArticleCard = ({
  testID,
  tags = [],
  ...props
}: ArticleCardProps) => {
  return (
    <div data-testid={testID} className={styles.frame}>
      <div className={styles.image} />
      <div className={styles.content}>
        <div data-testid={`${testID}.tags`} className={styles.tags}>
          {tags.map((label) => (
            <span key={label} className={styles.tag}>
              {label}
            </span>
          ))}
        </div>
        <Subheading testID={`${testID}.title`}>{props.title}</Subheading>
        <Button testID={`${testID}.button`} variant={"primary"} size={"small"}>
          Read more
        </Button>
      </div>
    </div>
  );
};
