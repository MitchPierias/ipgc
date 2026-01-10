import type React from "react";
import Image from "next/image";
import styles from "./StaffCard.module.css";
import {
  Heading,
  Paragraph,
  Subtitle,
  Text,
  Title,
} from "src/elements/Text/Text";
import { Button } from "src/elements/Buttons/Button";

export interface StaffCardProps extends Common.ComponentProps {
  name: string;
  title: string;
  education: string;
  bio: string;
  imageUrl: string;
  onClick: () => void;
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
          <Title testID={`${testID}.title`}>{props.name}</Title>
          <Paragraph testID={`${testID}.subtitle`}>{props.title}</Paragraph>
          {/* {props.education && (
            <Text testID={`${testID}.education`}>{props.education}</Text>
          )} */}
        </div>

        <Button
          testID={`${testID}.more`}
          variant={"tertiary"}
          align={"left"}
          size={"md"}
          onClick={props.onClick}
        >
          Learn more
        </Button>
        {/* {props.bio && (
          <Paragraph testID={`${testID}.bio`}>{props.bio}</Paragraph>
        )} */}
      </div>
    </div>
  );
};
