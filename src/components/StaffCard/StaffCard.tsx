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
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={name}
          className={styles.image}
          width={400}
          height={400}
        />
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <Heading testID={`${name}.title`} className={styles.name}>
            {name}
          </Heading>
          <Text testID={`${name}.subtitle`} className={styles.title}>
            {title}
          </Text>
          {location && (
            <Text testID={`${name}.location`} className={styles.location}>
              {location}
            </Text>
          )}
        </div>

        {bio && <p className={styles.bio}>{bio}</p>}
      </div>
    </div>
  );
};
