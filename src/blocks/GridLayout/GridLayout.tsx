import styles from "./GridLayout.module.css";
import clsx from "classnames";

interface GridLayoutProps extends Common.ComponentProps {
  layout?: Common.Layout;
}

export const GridLayout = ({
  testID,
  ...props
}: React.PropsWithChildren<GridLayoutProps>) => {
  return (
    <div
      data-testid={testID}
      className={clsx(styles.frame, styles[props.layout || "content"])}
    >
      {props.children}
    </div>
  );
};
