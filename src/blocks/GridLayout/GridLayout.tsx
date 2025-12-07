import { SectionContainer } from "../SectionContainer/SectionContainer";
import styles from "./GridLayout.module.css";
import clsx from "classnames";

interface GridLayoutProps extends Common.ComponentProps {
  layout?: Common.Layout;
  height?: Common.Height | "auto";
  spacing?: "sm" | "md" | "lg";
  columns?: 2 | 3 | 4;
  align?: "top" | "center" | "bottom";
}

export const GridLayout = ({
  testID,
  layout = "content",
  height,
  columns,
  align,
  ...props
}: React.PropsWithChildren<GridLayoutProps>) => {
  return (
    <div
      data-testid={testID}
      className={clsx(
        styles.frame,
        styles[`width-${layout}`],
        height && styles[`height-${height}`],
        columns && styles[`columns-${columns}`],
        align && styles[`align-${align}`]
      )}
    >
      {props.children}
    </div>
  );
};
