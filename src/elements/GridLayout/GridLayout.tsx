import styles from "./GridLayout.module.css";
import clsx from "classnames";

interface GridLayoutProps extends Common.ComponentProps {
  className?: string;
  spacing?: "none" | "tight" | "base" | "loose";
  padding?: "none" | "tight" | "base" | "loose";
}

export const GridLayout = ({
  testID,
  spacing = "base",
  padding = "base",
  ...props
}: React.PropsWithChildren<GridLayoutProps>) => {
  return (
    <div
      data-testid={testID}
      className={clsx(
        styles.frame,
        props.className,
        styles[`spacing-${spacing}`],
        styles[`padding-${padding}`]
      )}
    >
      {props.children}
    </div>
  );
};
