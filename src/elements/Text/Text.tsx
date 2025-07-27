import React from "react";
import styles from "./Text.module.css";
import clsx from "classnames";

interface TitleProps extends Common.ElementProps {
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
}

export const Text = ({
  testID,
  component = "span",
  children,
  ...props
}: React.PropsWithChildren<TitleProps>) =>
  React.createElement(
    component,
    {
      "data-testid": testID,
      ...props,
      className: clsx(props.className, styles.frame, styles.blurIn),
    },
    children
  );

export const Headline = (props: React.ComponentProps<typeof Text>) => (
  <Text {...props} component="h1" className={styles.headline} />
);

export const Heading = (props: React.ComponentProps<typeof Text>) => (
  <Text {...props} component="h2" className={styles.heading} />
);

export const Subheading = (props: React.ComponentProps<typeof Text>) => (
  <Text {...props} component="h3" className={styles.subheading} />
);

export const Title = (props: React.ComponentProps<typeof Text>) => (
  <Text {...props} component="h4" className={styles.title} />
);

export const Subtitle = (props: React.ComponentProps<typeof Text>) => (
  <Text {...props} component="h5" className={styles.subtitle} />
);
