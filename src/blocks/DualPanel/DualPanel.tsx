import styles from "./DualPanel.module.css";
import React from "react";
import clsx from "classnames";

interface DualPanelProps extends Common.ComponentProps {
  variant?: "card" | "transparent";
  layout?: Common.Layout;
}

export const DualPanel = ({
  testID,
  variant = "transparent",
  layout = "content",
  ...props
}: React.PropsWithChildren<DualPanelProps>) => {
  return (
    <div
      data-testid={testID}
      className={clsx(styles.frame, styles[variant], styles[layout])}
    >
      {props.children}
    </div>
  );
};
