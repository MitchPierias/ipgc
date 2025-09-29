import styles from "./BlockLayout.module.css";
import clsx from "classnames";

interface BlockLayoutProps extends Common.ElementProps {
  padding?: Common.Space;
  spacing?: Common.Space;
  align?: Common.Alignment;
}

export const BlockLayout = ({
  testID,
  align = "left",
  padding = "base",
  spacing = "base",
  ...props
}: React.PropsWithChildren<BlockLayoutProps>) => {
  return (
    <div
      data-testid={testID}
      className={clsx(
        props.className,
        styles.frame,
        styles[`spacing-${spacing}`],
        styles[`padding-${padding}`],
        styles[`align-${align}`]
      )}
    >
      {props.children}
    </div>
  );
};
