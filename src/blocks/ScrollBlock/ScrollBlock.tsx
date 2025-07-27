"use client";

import { useRef, useEffect, useState } from "react";
import styles from "./ScrollBlock.module.css";
import { useParallax } from "react-scroll-parallax";
import { Title } from "src/elements/Text/Text";
import { scrollListData } from "./constants";

interface ScrollBlockProps extends Common.ComponentProps {
  startAngle?: number; // Starting angle in degrees (default: 0)
  endAngle?: number; // Ending angle in degrees (default: 180)
}

export const ScrollBlock = ({
  testID,
  startAngle = 0,
  endAngle = 180,
  ...props
}: React.PropsWithChildren<ScrollBlockProps>) => {
  const target = useRef<HTMLDivElement>(null);
  const [scrollRotation, setScrollRotation] = useState(0);

  const allItems = scrollListData.flatMap((section, sectionIndex) => [
    { text: section.title, isTitle: true, sectionIndex },
    ...section.items.map((item) => ({
      text: item,
      isTitle: false,
      sectionIndex,
    })),
  ]);

  useEffect(() => {
    const handleScroll = () => {
      if (target.current) {
        const rect = target.current.getBoundingClientRect();
        const scrollProgress = Math.max(
          0,
          Math.min(
            1,
            (window.innerHeight - rect.top) / (window.innerHeight + rect.height)
          )
        );
        setScrollRotation(scrollProgress * 360);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // SVG dimensions and positioning
  const svgSize = 1200;
  const centerX = svgSize / 2;
  const centerY = svgSize / 2;
  const radius = svgSize / 2;

  // Calculate positions for each item around the configurable arc
  const getItemPosition = (index: number, total: number) => {
    // Start from top of circle (90°) and go clockwise
    // Map index from 0 to total-1 across the startAngle to endAngle range
    const progress = index / (total - 1);
    const angle = startAngle + progress * (endAngle - startAngle);

    // Convert to radians for trigonometry
    const angleRad = (angle * Math.PI) / 180;

    // Calculate position (note: in SVG, Y increases downward)
    const x = centerX + radius * Math.cos(angleRad);
    const y = centerY - radius * Math.sin(angleRad); // Subtract because SVG Y is flipped

    return { x, y, angle }; // Return angle in degrees
  };

  return (
    <div data-testid={testID} className={styles.frame} ref={target}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <svg
            width={svgSize}
            height={svgSize}
            viewBox={`0 0 ${svgSize} ${svgSize}`}
            style={{
              transform: `rotate(${scrollRotation}deg)`,
            }}
          >
            {allItems.map((item, index) => {
              const position = getItemPosition(index, allItems.length);

              // Calculate the actual line angle from center to position
              const lineAngle =
                Math.atan2(centerY - position.y, position.x - centerX) *
                (180 / Math.PI) *
                -1;

              // Position text slightly beyond the line endpoint
              const textOffset = 15; // Distance from line endpoint
              const textX =
                position.x + textOffset * Math.cos((lineAngle * Math.PI) / 180);
              const textY =
                position.y - textOffset * Math.sin((lineAngle * Math.PI) / 180);

              return (
                <g key={`${item.sectionIndex}-${index}`}>
                  {/* Line from center to item */}
                  {/* <line
                x1={centerX}
                y1={centerY}
                x2={position.x}
                y2={position.y}
                stroke="rgba(255, 255, 255, 0.3)"
                strokeWidth={item.isTitle ? "2" : "1"}
              /> */}

                  <text
                    x={textX}
                    y={textY}
                    fill="white"
                    fontSize={item.isTitle ? "32" : "21"}
                    fontWeight={"normal"}
                    textAnchor={"start"}
                    dominantBaseline={"middle"}
                    transform={`rotate(${lineAngle}, ${textX}, ${textY})`}
                  >
                    {item.text}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
        {props.children}
      </div>
    </div>
  );
};
