import styles from "./Button.module.css";
import clsx from "classnames";

interface ButtonProps
  extends Common.ComponentProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Common.Variant;
  size?: Common.Size;
  href?: string;
  target?: string;
  rel?: string;
}

export const Button = ({
  testID,
  variant = "primary",
  size = "medium",
  ...props
}: React.PropsWithChildren<ButtonProps>) => {
  if (props.href) {
    return (
      <a
        href={props.href}
        data-testid={testID}
        target={props.target}
        rel={props.rel}
        className={clsx(
          props.className,
          styles.frame,
          styles[variant],
          styles[size]
        )}
      >
        {props.children}
      </a>
    );
  }

  return (
    <button
      data-testid={testID}
      className={clsx(
        props.className,
        styles.frame,
        styles[variant],
        styles[size]
      )}
    >
      {props.children}
    </button>
  );
};
