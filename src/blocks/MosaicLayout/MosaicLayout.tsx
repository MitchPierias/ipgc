import clsx from "classnames";
import styles from "./MosaicLayout.module.css";
import Image from "next/image";

interface MosaicLayoutProps extends Common.ComponentProps {}

export const MosaicLayout = ({
  testID,
  ...props
}: React.PropsWithChildren<MosaicLayoutProps>) => (
  <div data-testid={testID} className={clsx(styles.frame)}>
    {[
      "mosaic-still-01",
      "mosaic-still-03",
      "mosaic-still-02",
      "mosaic-still-04",
      "mosaic-still-05",
      "mosaic-still-06",
    ].map((image, index) => (
      <div
        key={index}
        className={clsx(
          styles.item,
          (index === 1 || index === 3 || index === 4) && styles.portrait
        )}
      >
        <Image
          src={`/images/${image}.png`}
          alt={`Mosaic still ${index + 1}`}
          width={900}
          height={900}
        />
      </div>
    ))}
  </div>
);
