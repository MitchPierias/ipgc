"use client";

import React from "react";
import styles from "./HeroVideo.module.css";

const HeroVideo = () => {
  return (
    <section id="top_video" className={styles.frame}>
      <div>
        <div className={styles.overlay}>
          <div className={styles.content}>
            <h3 className={styles.title}>Whole Body 3T MRI Scan</h3>
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
          {/* Fallback for browsers that don't support video */}
          <div className={styles.fallback}>
            <div className={styles.fallbackContent}>
              <h3 className={styles.fallbackTitle}>Whole Body 3T MRI Scan</h3>
              <h4 className={styles.subtitle}>
                Unmatched precision in screening — for those who prioritise
                health and longevity.
              </h4>
            </div>
          </div>
        </video>
      </div>
    </section>
  );
};

export default HeroVideo;
