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
  bold?: boolean;
  uppercase?: boolean;
  /**
   * Animates the text in with a blur effect when
   * reduced motion is not preferred
   */
  animate?: boolean;
}

export const Text = ({
  testID,
  component = "span",
  children,
  uppercase,
  bold,
  animate,
  ...props
}: React.PropsWithChildren<TextProps>) =>
  React.createElement(
    component,
    {
      "data-testid": testID,
      ...props,
      className: clsx(
        styles.frame,
        props.className,
        animate && styles.blurIn,
        uppercase && styles.uppercase,
        bold && styles.bold
      ),
    },
    children
  );

export const Heading = (props: React.ComponentProps<typeof Text>) => (
  <Text
    {...props}
    component="h2"
    className={clsx(styles.heading, props.className)}
  />
);

export const Subtitle = (props: React.ComponentProps<typeof Text>) => (
  <Text
    {...props}
    component="h5"
    className={clsx(styles.subtitle, props.className)}
  />
);

export const Paragraph = (props: React.ComponentProps<typeof Text>) => (
  <Text {...props} component="p" />
);

export const Microcopy = (props: React.ComponentProps<typeof Text>) => (
  <Text
    {...props}
    component="small"
    className={clsx(props.className, styles.microcopy)}
  />
);
