import React from "react";
import styles from "./FocusFlexList.module.css";
import clsx from "classnames";

interface FocusFlexListProps extends Common.ElementProps {}

export const FocusFlexList = ({
  testID,
  children = [],
  ...props
}: React.PropsWithChildren<FocusFlexListProps>) => {
  const handleButtonHover = ({
    currentTarget,
  }: React.MouseEvent<HTMLLIElement>) => {
    if (currentTarget.tagName !== "LI") return;
    currentTarget.style.flexBasis = "100%";
  };

  const handleButtonBlur = ({
    currentTarget,
  }: React.MouseEvent<HTMLLIElement>) => {
    if (currentTarget.tagName !== "LI") return;
    currentTarget.style.flexBasis = "0%";
  };

  return (
    <ul data-testid={testID} className={clsx(props.className, styles.frame)}>
      {React.Children.map(children, (child) => {
        return (
          <li
            data-testid={`${testID}.item`}
            onMouseEnter={handleButtonHover}
            onMouseLeave={handleButtonBlur}
          >
            {child}
          </li>
        );
      })}
    </ul>
  );
};
