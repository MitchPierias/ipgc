import styles from "./CardPanel.module.css";
import { Panel } from "../Panel/Panel";
import React from "react";

interface CardPanelProps extends React.ComponentProps<typeof Panel> {}

export const CardPanel = React.forwardRef<HTMLDivElement, CardPanelProps>(
  ({ testID, ...props }, ref) => {
    return (
      <div data-testid={testID} className={styles.frame}>
        <Panel testID={`${testID}.panel`} {...props} />
      </div>
    );
  }
);
