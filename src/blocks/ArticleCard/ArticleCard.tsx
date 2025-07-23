import { Subheading } from "src/elements/Text/Text";
import styles from "./ArticleCard.module.css";
import { Button } from "src/elements/Buttons/Button";

interface ArticleCardProps extends Common.ComponentProps {
  title: string;
  description?: string;
  tags?: string[];
  media?: {
    type: "image" | "video";
    format: "jpg" | "jpeg" | "png" | "gif" | "mp4" | "webm" | string;
    src: string;
  };
}

export const ArticleCard = ({
  testID,
  tags = [],
  ...props
}: ArticleCardProps) => {
  return (
    <div data-testid={testID} className={styles.frame}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${props.media?.src})` }}
      />
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
