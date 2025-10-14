"use client";

import type React from "react";
import Image from "next/image";
import styles from "./StaffCard.module.css";
import { Heading, Text } from "src/elements/Text/Text";

export interface StaffCardProps {
  name: string;
  title: string;
  location: string;
  bio: string;
  imageUrl: string;
}

export const StaffCard: React.FC<StaffCardProps> = ({
  name,
  title,
  location,
  bio,
  imageUrl,
}) => {
  return (
    <div className={styles.frame}>
      <div className={styles.imageSection}>
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={name}
          className={styles.image}
          width={400}
          height={400}
        />

        <div className={styles.header}>
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={name}
            className={styles.avatar}
            width={60}
            height={60}
          />
          <div className={styles.headerText}>
            <Heading testID={`${name}.title`}>{name}</Heading>
            <Text testID={`${name}.subtitle`}>
              {title} <span className={styles.dot}>•</span> {location}
            </Text>
          </div>
        </div>
      </div>

      <div className={styles.contentSection}>
        <p className={styles.bio}>{bio}</p>
      </div>
    </div>
  );
};
