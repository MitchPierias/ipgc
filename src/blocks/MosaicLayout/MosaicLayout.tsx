import clsx from "classnames";
import styles from "./MosaicLayout.module.css";
import Image from "next/image";

interface MosaicLayoutProps extends Common.ComponentProps {
  images: Common.ImageBlock[];
}

export const MosaicLayout = ({
  testID,
  ...props
}: React.PropsWithChildren<MosaicLayoutProps>) => (
  <div data-testid={testID} className={clsx(styles.frame)}>
    {props.images.map((image, index) => (
      <div
        key={index}
        className={clsx(
          styles.item,
          (index === 1 || index === 3 || index === 4) && styles.portrait
        )}
      >
        <Image
          src={image.filename}
          alt={`Mosaic still ${index + 1}`}
          width={900}
          height={900}
        />
      </div>
    ))}
  </div>
);
