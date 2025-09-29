import { Microcopy } from "../Text/Text";
import styles from "./Notice.module.css";
import clsx from "classnames";

interface NoticeProps extends Common.ElementProps {
  type: "success" | "error";
}

export const Notice = ({
  testID,
  children,
  type,
}: React.PropsWithChildren<NoticeProps>) => {
  return (
    <div data-testid={testID} className={clsx(styles.frame, styles[type])}>
      <Microcopy testID={`${testID}.message`}>{children}</Microcopy>
    </div>
  );
};
