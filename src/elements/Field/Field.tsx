import { Microcopy } from "../Text/Text";
import styles from "./Field.module.css";
import clsx from "classnames";

interface FieldProps extends Common.ElementProps {
  name: string;
  label?: string;
  error?: {
    message?: string;
  };
}

export const Field = ({
  testID,
  children,
  error,
  ...props
}: React.PropsWithChildren<FieldProps>) => {
  return (
    <div
      data-testid={testID}
      className={clsx(styles.frame, error?.message && styles.inputError)}
    >
      <label
        data-testid={`${testID}.label`}
        htmlFor={props.name}
        className={styles.label}
      >
        {props.label}
      </label>
      {children}
      {error?.message && (
        <Microcopy testID={`${testID}.error`} className={styles.fieldError}>
          {error.message}
        </Microcopy>
      )}
    </div>
  );
};
