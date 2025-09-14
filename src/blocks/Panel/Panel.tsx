import clsx from "classnames";
import styles from "./Panel.module.css";
import { Button } from "src/elements/Buttons/Button";
import { Subtitle, Text } from "src/elements/Text/Text";

interface PanelProps extends Common.ComponentProps {
  title?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  variant?: "glass" | "invert";
}

export const Panel = ({
  testID,
  ...props
}: React.PropsWithChildren<PanelProps>) => {
  if (props.children) {
    return (
      <div
        data-testid={testID}
        className={clsx(styles.frame, props.variant && styles[props.variant])}
      >
        {props.children}
      </div>
    );
  }

  return (
    <div
      data-testid={testID}
      className={clsx(styles.frame, props.variant && styles[props.variant])}
    >
      <Text testID={`${testID}.title`} uppercase>
        {props.title}
      </Text>
      <Subtitle testID={`${testID}.subtitle`}>{props.subtitle}</Subtitle>
      <Text testID={`${testID}.description`}>{props.description}</Text>
      {props.buttonText && (
        <Button testID={`${testID}.button`} variant={"primary"}>
          {props.buttonText}
        </Button>
      )}
    </div>
  );
};
