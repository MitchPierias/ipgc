import styles from "./DualPanel.module.css";
import React from "react";
import clsx from "classnames";

interface DualPanelProps extends Common.ComponentProps {
  variant?: "card" | "transparent";
  full?: boolean;
  gutter?: boolean;
}

export const DualPanel = ({
  testID,
  variant = "transparent",
  gutter = false,
  full = false,
  ...props
}: React.PropsWithChildren<DualPanelProps>) => {
  return (
    <div
      className={clsx(
        styles.frame,
        styles[variant],
        gutter && styles.gutter,
        full && styles.full
      )}
    >
      {props.children}
    </div>
  );
};
