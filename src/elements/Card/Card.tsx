import styles from "./Card.module.css";
import clsx from "classnames";

interface CardProps extends Common.ComponentProps {
  className?: string;
  elevation?: "sm" | "md" | "lg";
}

export const Card = ({
  testID,
  ...props
}: React.PropsWithChildren<CardProps>) => {
  return (
    <div
      data-testid={testID}
      className={clsx(
        styles.frame,
        props.className,
        styles[`elevation-${props.elevation}`]
      )}
    >
      {props.children}
    </div>
  );
};
