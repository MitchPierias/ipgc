import { Heading } from "src/elements/Text/Text";
import styles from "./ArticleCard.module.css";
import { Button } from "src/elements/Buttons/Button";

interface ArticleCardProps extends Common.ComponentProps {
  title: string;
  description?: string;
  tags?: string[];
  media?: Common.Media;
}

export const ArticleCard = ({
  testID,
  tags = [],
  ...props
}: ArticleCardProps) => {
  return (
    <div data-testid={testID} className={styles.frame}>
      <div
        data-testid={`${testID}.image`}
        className={styles.image}
        style={{ backgroundImage: `url(${props.media?.src})` }}
      />
      <div data-testid={`${testID}.content`} className={styles.content}>
        <div data-testid={`${testID}.tags`} className={styles.tags}>
          {tags.map((label) => (
            <span
              data-testid={`${testID}.tag`}
              key={label}
              className={styles.tag}
            >
              {label}
            </span>
          ))}
        </div>
        <Heading testID={`${testID}.title`} animate>
          {props.title}
        </Heading>
        <Button testID={`${testID}.button`} variant={"secondary"} size={"sm"}>
          Read more
        </Button>
      </div>
    </div>
  );
};
