import React from "react";
import styles from "./HeroImage.module.css";
import { CardPanel } from "../CardPanel/CardPanel";
import { DualPanel } from "../DualPanel/DualPanel";

interface HeroImageProps extends Common.ComponentProps {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText?: string;
}

export const HeroImage = ({ testID, ...props }: HeroImageProps) => {
  return (
    <section
      className={styles.frame}
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <DualPanel testID={`${testID}.dual-panel`}>
        <CardPanel
          testID={`${testID}.panel`}
          title={props.title}
          subtitle={props.subtitle}
          description={props.description}
          buttonText={props.buttonText}
        />
        <div />
      </DualPanel>
    </section>
  );
};
