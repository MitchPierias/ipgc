import styles from "./Button.module.css";
import clsx from "classnames";

interface ButtonProps
  extends Common.ComponentProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Common.Variant;
  size?: Common.Size;
}

export const Button = ({
  testID,
  variant = "primary",
  size = "medium",
  ...props
}: React.PropsWithChildren<ButtonProps>) => {
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
