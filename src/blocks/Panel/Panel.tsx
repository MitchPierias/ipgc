import clsx from "classnames";
import styles from "./Panel.module.css";
import { BlockLayout } from "src/elements/BlockLayout/BlockLayout";

interface PanelProps extends Common.ComponentProps {
  title?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  variant?: "glass" | "invert";
  padding?: Common.Space;
  spacing?: Common.Space;
  size?: Common.Layout;
  align?: Common.Alignment;
  invert?: boolean;
  className?: string;
}

export const Panel = ({
  testID,
  spacing = "loose",
  padding = "loose",
  align = "left",
  size = "content",
  invert,
  ...props
}: React.PropsWithChildren<PanelProps>) => {
  return (
    <BlockLayout
      testID={testID}
      className={clsx(
        props.className,
        props.variant && styles[props.variant],
        styles[size],
        invert && styles.invert,
        styles[align]
      )}
      padding={padding}
      spacing={spacing}
    >
      {props.children}
    </BlockLayout>
  );
};
