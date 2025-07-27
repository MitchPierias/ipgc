import clsx from "classnames";
import styles from "./MosaicLayout.module.css";

interface MosaicLayoutProps extends Common.ComponentProps {
  width?: Common.Width;
  height?: Common.Height;
}

export const MosaicLayout = ({
  testID,
  ...props
}: React.PropsWithChildren<MosaicLayoutProps>) => (
  <div
    data-testid={testID}
    className={clsx(
      styles.frame,
      props.width === "full" && styles.full,
      props.width === "gutter" && styles.gutter,
      props.height === "full" && styles.full,
      props.height === "gutter" && styles.gutter
    )}
  >
    {props.children}
  </div>
);
