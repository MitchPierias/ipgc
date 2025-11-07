import styles from "./SectionContainer.module.css";
import React from "react";
import clsx from "classnames";

interface SectionContainerProps extends Common.ComponentProps {
  children: React.ReactNode;
  size?: Common.Layout;
  className?: string;
  style?: React.CSSProperties;
}

export const SectionContainer = React.forwardRef<
  HTMLElement,
  SectionContainerProps
>(({ testID, size = "full", className, ...props }, ref) => {
  return (
    <section
      ref={ref}
      data-testid={testID}
      className={clsx(className, styles.frame, styles[size])}
      style={props.style}
    >
      {props.children}
    </section>
  );
});

SectionContainer.displayName = "SectionContainer";
