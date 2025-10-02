import { Card } from "src/elements/Card/Card";
import styles from "./StaffCard.module.css";
import { InlineLayout } from "src/elements/InlineLayout/InlineLayout";
import Image from "next/image";
import { BlockLayout } from "src/elements/BlockLayout/BlockLayout";
import { Heading, Text } from "src/elements/Text/Text";

interface StaffCardProps extends Common.ComponentProps {
  name: string;
  role: string;
  qualifications: string[];
  biography: string[];
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

export const StaffCard = ({
  testID,
  name,
  role,
  qualifications,
  biography,
  image,
}: StaffCardProps) => {
  return (
    <Card testID={`${testID}.staff-card`} className={styles.teamMemberCard}>
      <InlineLayout testID={`${testID}.layout`} spacing={"loose"}>
        <div className={styles.teamMemberWithImage}>
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className={styles.memberImage}
          />
        </div>
        <BlockLayout testID={`${testID}.bio-layout`}>
          <div className={styles.memberInfo}>
            <div className={styles.teamMemberHeader}>
              <Heading testID={`${testID}.name`} className={styles.memberName}>
                {name}
              </Heading>
              <Text testID={`${testID}.role`} className={styles.memberRole}>
                {role}
              </Text>
            </div>
          </div>

          <div className={styles.qualifications}>
            {qualifications.map((qualification, index) => (
              <Text
                key={index}
                testID={`${testID}.qual${index + 1}`}
                className={styles.qualification}
              >
                {qualification}
              </Text>
            ))}
          </div>

          <div className={styles.biography}>
            {biography.map((paragraph, index) => (
              <Text key={index} testID={`${testID}.bio${index + 1}`}>
                {paragraph}
              </Text>
            ))}
          </div>
        </BlockLayout>
      </InlineLayout>
    </Card>
  );
};
