import styles from "./LayoutPanel.module.css";
import React from "react";
import clsx from "classnames";

interface LayoutPanelProps extends Common.ComponentProps {
  variant?: "card" | "transparent";
  columns?: 1 | 2 | 3;
  size?: Common.Layout;
  className?: string;
  padding?: Common.Space;
  spacing?: Common.Space;
}

export const LayoutPanel = ({
  testID,
  variant = "transparent",
  columns = 1,
  size = "content",
  className,
  padding = "base",
  spacing = "base",
  ...props
}: React.PropsWithChildren<LayoutPanelProps>) => {
  return (
    <div
      data-testid={testID}
      className={clsx(
        className,
        styles.frame,
        styles[variant],
        styles[`columns-${columns}`],
        styles[size],
        styles[`padding-${padding}`],
        styles[`spacing-${spacing}`]
      )}
    >
      {props.children}
    </div>
  );
};
