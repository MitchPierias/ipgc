import styles from "./Carousel.module.css";

interface CarouselProps extends Common.ComponentProps {}

export const Carousel = ({
  testID,
  ...props
}: React.PropsWithChildren<CarouselProps>) => {
  return (
    <div data-testid={testID} className={styles.frame} {...props}>
      <div className={styles.stacker}>{props.children}</div>
    </div>
  );
};
