"use client";

import React from "react";
import styles from "./HeroVideo.module.css";
import { Title } from "src/elements/Text/Text";

interface HeroVideoProps extends Common.ComponentProps {}

export const HeroVideo = ({ testID, ...props }: HeroVideoProps) => {
  return (
    <section data-testid={testID} className={styles.frame}>
      <div>
        <div className={styles.overlay}>
          <div className={styles.content}>
            <Title testID={`${testID}.title`}>Whole Body 3T MRI Scan</Title>
            <h4 className={styles.subtitle}>
              Unmatched precision in screening — for those who prioritise health
              and longevity.
            </h4>
          </div>
        </div>

        <video className={styles.video} playsInline autoPlay muted loop>
          <source
            src="https://wholebodymri.com.au/wp-content/uploads/2024/11/whole-body-mri-journey-into-the-known.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </section>
  );
};
