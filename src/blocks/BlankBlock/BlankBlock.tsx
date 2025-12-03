import styles from "./BlankBlock.module.css";
import clsx from "classnames";

interface BlankBlockProps extends Common.ComponentProps {
  height?: Common.Space;
}

export const BlankBlock = ({ testID, height = "base" }: BlankBlockProps) => {
  return (
    <div
      data-testid={testID}
      className={clsx(styles.frame, styles[height])}
      aria-hidden="true"
    />
  );
};
