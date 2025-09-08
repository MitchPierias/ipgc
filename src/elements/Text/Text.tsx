import React from "react";
import styles from "./Text.module.css";
import clsx from "classnames";

interface TextProps extends Common.ElementProps {
  component?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "p"
    | "span"
    | "div"
    | "small"
    | "strong";
  uppercase?: boolean;
  animate?: boolean;
}

export const Text = ({
  testID,
  component = "span",
  children,
  uppercase,
  animate,
  ...props
}: React.PropsWithChildren<TextProps>) =>
  React.createElement(
    component,
    {
      "data-testid": testID,
      ...props,
      className: clsx(
        props.className,
        styles.frame,
        animate && styles.blurIn,
        uppercase && styles.uppercase
      ),
    },
    children
  );

export const Heading = (props: React.ComponentProps<typeof Text>) => (
  <Text {...props} component="h2" className={styles.heading} />
);

export const Subtitle = (props: React.ComponentProps<typeof Text>) => (
  <Text {...props} component="h5" className={styles.subtitle} />
);

export const Paragraph = (props: React.ComponentProps<typeof Text>) => (
  <Text {...props} component="p" className={styles.subtitle} />
);

export const Microcopy = (props: React.ComponentProps<typeof Text>) => (
  <Text {...props} component="small" className={styles.microcopy} />
);
