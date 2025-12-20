import { IProps } from "./Button.interface";
import styles from "./Button.module.css";
import clsx from "classnames";
import React from "react";

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, IProps>(
  (
    {
      testID,
      variant = "primary",
      size = "md",
      align = "center",
      children,
      disabled,
      ...props
    },
    ref
  ) =>
    React.createElement(
      props.href ? "a" : "button",
      {
        ...props,
        "data-testid": testID,
        className: clsx(
          props.className,
          styles.frame,
          styles[variant],
          styles[size],
          styles[align],
          disabled && styles.disabled
        ),
        ref,
      },
      children
    )
);

Button.displayName = "Button";

export { Button };
