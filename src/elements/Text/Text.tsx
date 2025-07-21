import React from "react";
import styles from "./Text.module.css";
import clsx from "classnames";

interface TitleProps extends Common.ElementProps {
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
}

export const Text = ({
  component = "p",
  children,
  ...props
}: React.PropsWithChildren<TitleProps>) =>
  React.createElement(
    component,
    {
      className: clsx(styles.frame, props.className),
      ...props,
    },
    children
  );

export const Heading = (props: React.ComponentProps<typeof Text>) => (
  <Text {...props} component="h2" className={styles.heading} />
);

export const Subheading = (props: React.ComponentProps<typeof Text>) => (
  <Text {...props} component="h5" className={styles.subheading} />
);

export const Title = (props: React.ComponentProps<typeof Text>) => (
  <Text {...props} component="h3" className={styles.title} />
);

export const Subtitle = (props: React.ComponentProps<typeof Text>) => (
  <Text {...props} component="h4" className={styles.subtitle} />
);
