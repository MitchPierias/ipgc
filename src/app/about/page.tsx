import { Footer } from "~/components/Footer/Footer";
import { Header } from "~/components/Header/Header";
import { Heading, Text } from "src/elements/Text/Text";
import { Card } from "src/elements/Card/Card";
import { BlockLayout } from "src/elements/BlockLayout/BlockLayout";
import Image from "next/image";
import styles from "./page.module.css";
import { InlineLayout } from "src/elements/InlineLayout/InlineLayout";
import { StaffCard } from "src/components/StaffCard/StaffCard";

export default function AboutPage() {
  const testID = "about" as const;

  return (
    <div className="home wp-singular page-template page-template-page-home page-template-page-home-php page page-id-2 wp-theme-wholebodymri">
      <Header />
      <main role="main" className={styles.container}>
        <div className={styles.wrapper}>
          <Card testID={`${testID}.card`} elevation="md">
            <BlockLayout testID={`${testID}.header`} align={"center"}>
              <Heading testID={`${testID}.title`}>About Us</Heading>
              <Text
                testID={`${testID}.description`}
                className={styles.description}
              >
                Meet our dedicated team of healthcare professionals
              </Text>
            </BlockLayout>

            <BlockLayout testID={`${testID}.team-grid`} spacing={"loose"}>
              <StaffCard
                testID={`${testID}.dr-ngo`}
                name="Dr. Don Van Ngo"
                role="Radiologist"
                qualifications={[
                  "Bachelor of Medicine, Bachelor of Surgery",
                  "Fellowship of the Royal Australian and New Zealand College of Radiologists",
                ]}
                biography={[
                  "Dr. Don Van Ngo was born and raised in Melbourne, and moved to Queensland in 2008 to commence his Bachelor of Medicine, Bachelor of Surgery degree. Don graduated with a Dean's award top 5 in his class.",
                  "He completed his Radiology training at the Gold Coast University Hospital. Dr. Ngo specialises in minimally invasive advanced pain management procedures including radiofrequency ablation, platelet rich plasma (PRP) and autologous tenocyte transplantation.",
                  "Dr. Ngo currently participates in the weekly Gold Coast Hospital multidisciplinary meeting where interventional treatment options for complex and pallative pain cases are discussed.",
                  "In 2019 Dr. Ngo was invited to present his findings on Spectral CT at the Asian Congress of Abdominal Radiology in Chengdu, China, for which he received the Top 20 prize.",
                  "Dr. Ngo is a Radiology lecturer for Year 2 and 3 medical students at Bond University. Dr. Ngo also holds a Staff Specialist appointment at the Gold Coast University Hospital as well as Lecturer title at Griffith University.",
                  "In his spare time Dr. Ngo will be spending his time with his wife and two sons on the water swimming and fishing.",
                ]}
                image={{
                  src: "/images/team/don-van-ngo.webp",
                  alt: "Dr. Don Van Ngo",
                  width: 400,
                  height: 400,
                }}
              />

              <StaffCard
                testID={`${testID}.deidre`}
                name="Deidre Basson"
                role="Practice Manager"
                qualifications={[]}
                biography={[]}
                image={{
                  src: "/images/team/deidre-basson.webp",
                  alt: "Deidre Basson",
                  width: 400,
                  height: 400,
                }}
              />

              <StaffCard
                testID={`${testID}.ines`}
                name="Ines Alansari"
                role="Patient Care Coordinator and Clinical Nurse"
                qualifications={[
                  "Bachelor of Nursing",
                  "Graduate Certificate in Clinical Nursing and Teaching",
                ]}
                biography={[]}
                image={{
                  src: "/images/team/ines-alansari.webp",
                  alt: "Ines Alansari",
                  width: 400,
                  height: 400,
                }}
              />

              <StaffCard
                testID={`${testID}.mersad`}
                name="Mersad Delic"
                role="Chief Radiographer"
                qualifications={[
                  "Masters in Diagnostic Radiology",
                  "Bachelor of Biomedical Science (Hons)",
                  "Graduate diploma in Science (Health)",
                ]}
                biography={[]}
                image={{
                  src: "/images/team/mersad-delic.webp",
                  alt: "Mersad Delic",
                  width: 400,
                  height: 400,
                }}
              />

              <StaffCard
                testID={`${testID}.lorraine`}
                name="Lorraine Landles"
                role="Clinical Assistant"
                qualifications={[]}
                biography={[]}
                image={{
                  src: "/images/team/lorraine-landles.webp",
                  alt: "Lorraine Landles",
                  width: 400,
                  height: 400,
                }}
              />

              <StaffCard
                testID={`${testID}.chloe`}
                name="Chloe Glen"
                role="Clinical Assistant"
                qualifications={[]}
                biography={[]}
                image={{
                  src: "/images/team/chloe-glen.webp",
                  alt: "Chloe Glen",
                  width: 400,
                  height: 400,
                }}
              />
            </BlockLayout>
          </Card>
        </div>
      </main>
      <Footer testID="footer" />
    </div>
  );
}
