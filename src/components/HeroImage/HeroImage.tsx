import React from "react";
import styles from "./HeroImage.module.css";
import { CardPanel } from "../CardPanel/CardPanel";

interface HeroImageProps extends Common.ComponentProps {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText?: string;
}

const HeroImage = ({ testID, ...props }: HeroImageProps) => {
  return (
    <section
      className={styles.frame}
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <div className={styles.content}>
        <CardPanel
          testID={`${testID}.panel`}
          title={props.title}
          subtitle={props.subtitle}
          description={props.description}
          buttonText={props.buttonText}
        />
      </div>
    </section>
  );
};

export default HeroImage;
