"use client";

import clsx from "classnames";
import styles from "./MosaicLayout.module.css";
import Image from "next/image";
import { useState, useRef } from "react";

interface MosaicLayoutProps extends Common.ComponentProps {
  images: Common.ImageBlock[];
}

// Helper function to determine which column an item belongs to
const getColumnForIndex = (index: number): number => {
  // Based on the grid layout: 3 columns
  // Items 0, 1, 2 are in columns 0, 1, 2
  // Items 3, 4, 5 are in columns 0, 1, 2
  // Items 6, 7, 8 are in columns 0, 1, 2
  return index % 3;
};

// Group images by column, preserving original index
const groupImagesByColumn = (images: Common.ImageBlock[]) => {
  const columns: Array<
    Array<{ image: Common.ImageBlock; originalIndex: number }>
  > = [[], [], []];
  images.forEach((image, index) => {
    const column = getColumnForIndex(index);
    columns[column].push({ image, originalIndex: index });
  });
  return columns;
};

export const MosaicLayout = ({
  testID,
  ...props
}: React.PropsWithChildren<MosaicLayoutProps>) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const columns = groupImagesByColumn(props.images);

  // Minimum swipe distance (in pixels)
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentSlide < columns.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
    if (isRightSwipe && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div data-testid={testID} className={clsx(styles.frame)}>
      {/* Desktop Grid View */}
      <div className={styles.gridView}>
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

      {/* Mobile Carousel View */}
      <div
        ref={carouselRef}
        className={styles.carouselView}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className={styles.carouselTrack}
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {columns.map((columnImages, columnIndex) => (
            <div key={columnIndex} className={styles.carouselSlide}>
              {columnImages.map(({ image, originalIndex }, imageIndex) => (
                <div
                  key={imageIndex}
                  className={clsx(
                    styles.carouselItem,
                    (originalIndex === 1 ||
                      originalIndex === 3 ||
                      originalIndex === 4) &&
                      styles.portrait
                  )}
                >
                  <Image
                    src={image.filename}
                    alt={`Mosaic still ${originalIndex + 1}`}
                    width={900}
                    height={900}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Carousel Indicators */}
        <div className={styles.carouselIndicators}>
          {columns.map((_, index) => (
            <button
              key={index}
              className={clsx(
                styles.indicator,
                currentSlide === index && styles.active
              )}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
