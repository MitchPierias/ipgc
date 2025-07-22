import styles from "./ImagePanel.module.css";

interface ImagePanelProps extends Common.ComponentProps {
  image: string;
}

export const ImagePanel = ({
  testID,
  ...props
}: React.PropsWithChildren<ImagePanelProps>) => {
  return (
    <div
      data-testid={testID}
      className={styles.frame}
      style={{ backgroundImage: `url(${props.image})` }}
    >
      {props.children}
    </div>
  );
};
