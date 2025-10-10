import clsx from "classnames";
import styles from "./Panel.module.css";
import { Button } from "src/elements/Buttons/Button";
import { Subtitle, Text } from "src/elements/Text/Text";
import { BlockLayout } from "src/elements/BlockLayout/BlockLayout";

interface PanelProps extends Common.ComponentProps {
  title?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  variant?: "glass" | "invert";
  padding?: Common.Space;
}

export const Panel = ({
  testID,
  ...props
}: React.PropsWithChildren<PanelProps>) => {
  if (props.children) {
    return (
      <BlockLayout
        testID={testID}
        className={clsx(props.variant && styles[props.variant])}
        padding={props.padding}
      >
        {props.children}
      </BlockLayout>
    );
  }

  return (
    <BlockLayout
      testID={testID}
      className={clsx(props.variant && styles[props.variant])}
      padding={props.padding}
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
    </BlockLayout>
  );
};
