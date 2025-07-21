import styles from "./DualPanel.module.css";
import { Panel } from "../Panel/Panel";
import React from "react";

interface DualPanelProps extends Common.ComponentProps {}

export const DualPanel = ({
  testID,
  ...props
}: React.PropsWithChildren<DualPanelProps>) => {
  return (
    <div className={styles.frame}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};
