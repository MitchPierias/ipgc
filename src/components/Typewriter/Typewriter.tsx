import { BlockLayout } from "src/elements/BlockLayout/BlockLayout";
import { Button } from "src/elements/Buttons/Button";
import { Subtitle } from "src/elements/Text/Text";
import { Leading } from "src/elements/Text/Text";
import styles from "./Typewriter.module.css";
import clsx from "classnames";

interface TypewriterProps extends Common.ElementProps {
  title: string;
  subtitle: string;
  action?: {
    label: string;
    href: string;
  };
}

export const Typewriter = ({ testID, ...props }: TypewriterProps) => {
  return (
    <div data-testid={testID} className={styles.frame}>
      <BlockLayout
        testID={`${testID}-layout`}
        className={clsx(props.className)}
      >
        <Leading testID="title" typeDelay={300} typeOn>
          {props.title}
        </Leading>
        <Subtitle testID="subtitle">{props.subtitle}</Subtitle>
        {props.action && (
          <Button testID="button" variant="primary" href={props.action.href}>
            {props.action.label}
          </Button>
        )}
      </BlockLayout>
    </div>
  );
};
