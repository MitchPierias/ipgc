import Image from "next/image";
import styles from "./ImagePanel.module.css";

interface ImagePanelProps extends Common.ComponentProps {
  image: Common.ImageBlock;
  width?: number;
  height?: number;
}

export const ImagePanel = ({
  testID,
  ...props
}: React.PropsWithChildren<ImagePanelProps>) => {
  return (
    <div data-testid={testID} className={styles.frame}>
      <Image
        data-testid={testID}
        src={props.image.filename}
        alt={props.image.alt}
        className={styles.image}
        width={props.width || 1760}
        height={props.height || 1760}
      />
    </div>
  );
};
