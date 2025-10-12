"use client";

import type React from "react";
import Image from "next/image";
import styles from "./StaffCard.module.css";

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
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <div className={styles.imageSection}>
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={name}
            className={styles.image}
            width={400}
            height={400}
          />
        </div>

        <div className={styles.contentSection}>
          <div className={styles.header}>
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={name}
              className={styles.avatar}
              width={60}
              height={60}
            />
            <div className={styles.headerText}>
              <h2 className={styles.name}>{name}</h2>
              <p className={styles.subtitle}>
                {title} <span className={styles.dot}>•</span> {location}
              </p>
            </div>
          </div>

          <p className={styles.bio}>{bio}</p>
        </div>
      </div>
    </div>
  );
};
