import type React from "react";
import Image from "next/image";
import styles from "./StaffCard.module.css";
import { Heading, Text } from "src/elements/Text/Text";

export interface StaffCardProps extends Common.ComponentProps {
  name: string;
  title: string;
  education: string;
  bio: string;
  imageUrl: string;
}

export const StaffCard = ({ testID, ...props }: StaffCardProps) => {
  return (
    <div data-testid={testID} className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={props.imageUrl || "/placeholder.svg"}
          alt={props.name}
          className={styles.image}
          width={400}
          height={400}
        />
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <Heading testID={`${testID}.title`} className={styles.name}>
            {props.name}
          </Heading>
          <Text testID={`${testID}.subtitle`} className={styles.title}>
            {props.title}
          </Text>
          {props.education && (
            <Text testID={`${testID}.education`} className={styles.education}>
              {props.education}
            </Text>
          )}
        </div>

        {props.bio && <p className={styles.bio}>{props.bio}</p>}
      </div>
    </div>
  );
};
