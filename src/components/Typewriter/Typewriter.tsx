"use client";

import { BlockLayout } from "src/elements/BlockLayout/BlockLayout";
import { Button } from "src/elements/Buttons/Button";
import { Subtitle } from "src/elements/Text/Text";
import { Leading } from "src/elements/Text/Text";
import styles from "./Typewriter.module.css";
import clsx from "classnames";
import Image from "next/image";
import { Section } from "src/blocks/Section/Section";
import { useState, useEffect } from "react";

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
  const [midgroundLoaded, setMidgroundLoaded] = useState(false);
  const [showActions, setShowActions] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowActions(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

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
      <div className={styles.midground}>
        <Image
          src="/images/team-midground.png"
          alt="Team"
          width={1755}
          height={1000}
          className={clsx(styles.image, {
            [styles.loaded]: midgroundLoaded,
          })}
          onLoad={() => setMidgroundLoaded(true)}
        />
      </div>
      <div data-testid={testID} className={styles.frame}>
        <BlockLayout
          testID={`${testID}-layout`}
          className={clsx(props.className, styles.content)}
        >
          <Leading testID="title" typeDelay={300} typeOn>
            {props.title}
          </Leading>
          <Subtitle testID="subtitle">{props.subtitle}</Subtitle>
        </BlockLayout>
        {props.action && (
          <div
            className={clsx(styles.actions, {
              [styles.animate]: showActions,
            })}
          >
            <Button
              testID="button"
              variant="primary"
              size="lg"
              href={props.action.href}
              className={styles.action}
            >
              {props.action.label}
            </Button>
          </div>
        )}
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
