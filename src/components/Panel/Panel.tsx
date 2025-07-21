import clsx from "classnames";
import styles from "./Panel.module.css";

interface PanelProps extends Common.ComponentProps {
  variant: "left" | "right";
  title?: string;
  description: string;
}

export const Panel = ({ testID, variant, title, description }: PanelProps) => {
  return (
    <div data-testid={testID} className={clsx(styles.frame, styles[variant])}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
      {variant === "right" && (
        <button className={styles.button}>Request appointment</button>
      )}
    </div>
  );
};
