import styles from "./InlineLayout.module.css";
import clsx from "classnames";

interface InlineLayoutProps extends Common.ElementProps {
  padding?: Common.Space;
  spacing?: Common.Space;
  align?: Common.Alignment;
}

export const InlineLayout = ({
  testID,
  padding = "base",
  spacing = "base",
  align = "left",
  ...props
}: React.PropsWithChildren<InlineLayoutProps>) => {
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
