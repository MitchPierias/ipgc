"use client";

import { useRef } from "react";
import styles from "./ScrollBlock.module.css";
import { useParallax } from "react-scroll-parallax";
import { Title } from "src/elements/Text/Text";

interface ScrollBlockProps extends Common.ComponentProps {}

export const ScrollBlock = ({
  testID,
  ...props
}: React.PropsWithChildren<ScrollBlockProps>) => {
  const target = useRef<HTMLDivElement>(null);

  const mid = useParallax<HTMLDivElement>({
    speed: 1,
    targetElement: target.current || undefined,
  });

  return (
    <div data-testid={testID} className={styles.frame} ref={target}>
      <div ref={mid.ref} className={styles.content}>
        {[
          {
            title: "Back and Spine",
            items: [
              "Chronic back pain (cervical, thoracic or lumbosacral)",
              "Facet joint anthropathy",
              "Lower limb radiculopathy",
              "Sciatica",
              "Sacroiliac joint pain",
            ],
          },
          {
            title: "Joint",
            items: [
              "Knee osteoarthritis",
              "Shoulder osteoarthritis",
              "Hip osteoarthritis",
              "Foot and ankle osteoarthritis",
              "Wrist and Hand osteoarthritis",
              "TMJ osteoarthritis",
            ],
          },
          {
            title: "Musculoskeletal and Sports",
            items: [
              "Subacromial bursitis",
              "Trochanteric bursitis",
              "Plantar faciitis",
              "Achilles tendonitis",
              "Carpel tunnel syndrome",
              "Trigger finger",
              "DeQuervain tenosynovitis",
            ],
          },
        ].map((section) => (
          <div key={section.title}>
            <Title testID={"title"}>{section.title}</Title>
            <ul>
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {props.children}
    </div>
  );
};
