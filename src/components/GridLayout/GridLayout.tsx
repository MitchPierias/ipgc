import styles from "./GridLayout.module.css";

interface GridLayoutProps extends Common.ComponentProps {
  children: React.ReactNode;
}

export const GridLayout = ({
  testID,
  ...props
}: React.PropsWithChildren<GridLayoutProps>) => {
  return (
    <div data-testid={testID} className={styles.frame}>
      {props.children}
    </div>
  );
};
