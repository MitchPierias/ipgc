import styles from "./GridLayout.module.css";
import clsx from "classnames";

interface GridLayoutProps extends Common.ComponentProps {
  className?: string;
  spacing?: "sm" | "md" | "lg";
}

export const GridLayout = ({
  testID,
  ...props
}: React.PropsWithChildren<GridLayoutProps>) => {
  return (
    <div
      data-testid={testID}
      className={clsx(
        styles.frame,
        props.className,
        styles[`spacing-${props.spacing}`]
      )}
    >
      {props.children}
    </div>
  );
};
