"use client";

import { BlockLayout } from "src/elements/BlockLayout/BlockLayout";
import { Button } from "src/elements/Buttons/Button";
import { Subtitle } from "src/elements/Text/Text";
import { Leading } from "src/elements/Text/Text";
import styles from "./Typewriter.module.css";
import clsx from "classnames";
import Image from "next/image";
import { Section } from "src/blocks/Section/Section";
import { useState } from "react";

interface TypewriterProps extends Common.ElementProps {
  title: string;
  subtitle: string;
  action?: {
    label: string;
    href: string;
  };
}

export const Typewriter = ({ testID, ...props }: TypewriterProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <Section
      testID="section"
      media={{
        type: "image",
        format: "jpg",
        src: "/images/team-background.jpg",
      }}
      width="full"
    >
      <div data-testid={testID} className={styles.frame}>
        <BlockLayout
          testID={`${testID}-layout`}
          className={clsx(props.className)}
        >
          <Leading testID="title" typeDelay={300} typeOn>
            {props.title}
          </Leading>
          <Subtitle testID="subtitle">{props.subtitle}</Subtitle>
          {props.action && (
            <Button testID="button" variant="primary" href={props.action.href}>
              {props.action.label}
            </Button>
          )}
        </BlockLayout>
      </div>
      <div className={styles.foreground}>
        <Image
          src="/images/team-foreground.png"
          alt="Team"
          width={1755}
          height={1000}
          className={clsx(styles.image, {
            [styles.loaded]: imageLoaded,
          })}
          onLoad={() => setImageLoaded(true)}
        />
      </div>
    </Section>
  );
};
