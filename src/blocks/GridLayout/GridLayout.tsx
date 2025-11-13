import { SectionContainer } from "../SectionContainer/SectionContainer";
import styles from "./GridLayout.module.css";
import clsx from "classnames";

interface GridLayoutProps extends Common.ComponentProps {
  layout?: Common.Layout;
  spacing?: "sm" | "md" | "lg";
}

export const GridLayout = ({
  testID,
  layout = "content",
  ...props
}: React.PropsWithChildren<GridLayoutProps>) => {
  return (
    <SectionContainer testID={testID} width={layout} height={"full"}>
      <div data-testid={testID} className={clsx(styles.frame)}>
        {props.children}
      </div>
    </SectionContainer>
  );
};
