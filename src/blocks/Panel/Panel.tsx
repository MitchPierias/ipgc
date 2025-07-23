import clsx from "classnames";
import styles from "./Panel.module.css";
import { Button } from "src/elements/Buttons/Button";
import { Subtitle, Text, Title } from "src/elements/Text/Text";

interface PanelProps extends Common.ComponentProps {
  title?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  variant?: "overlay" | "invert";
}

export const Panel = ({ testID, ...props }: PanelProps) => {
  return (
    <div
      data-testid={testID}
      className={clsx(styles.frame, props.variant && styles[props.variant])}
    >
      <Title testID={`${testID}.title`}>{props.title}</Title>
      <Subtitle testID={`${testID}.subtitle`}>{props.subtitle}</Subtitle>
      <Text testID={`${testID}.description`}>{props.description}</Text>
      {props.buttonText && (
        <Button testID={`${testID}.button`} variant={"secondary"}>
          {props.buttonText}
        </Button>
      )}
    </div>
  );
};
