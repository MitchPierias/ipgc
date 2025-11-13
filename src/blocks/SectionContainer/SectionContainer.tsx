import styles from "./SectionContainer.module.css";
import React from "react";
import clsx from "classnames";

interface SectionContainerProps extends Common.ComponentProps {
  children: React.ReactNode;
  width?: Common.Layout;
  height?: Common.Layout;
  className?: string;
  style?: React.CSSProperties;
}

export const SectionContainer = React.forwardRef<
  HTMLElement,
  SectionContainerProps
>(({ testID, width = "full", height = "full", className, ...props }, ref) => {
  return (
    <section
      ref={ref}
      data-testid={testID}
      className={clsx(className, styles.frame, styles[width], styles[height])}
      style={props.style}
    >
      {props.children}
    </section>
  );
});

SectionContainer.displayName = "SectionContainer";
