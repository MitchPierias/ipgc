import { Footer } from "~/components/Footer/Footer";
import { Header } from "~/components/Header/Header";
import { Heading, Text } from "src/elements/Text/Text";
import { BlockLayout } from "src/elements/BlockLayout/BlockLayout";
import styles from "./page.module.css";
import { StaffCard } from "~/components/StaffCard/StaffCard";

export default function TeamPage() {
  const testID = "team" as const;

  return (
    <div className="home wp-singular page-template page-template-page-home page-template-page-home-php page page-id-2 wp-theme-wholebodymri">
      <Header />
      <main role="main" className={styles.container}>
        <div className={styles.wrapper}>
          <BlockLayout testID={`${testID}.header`} className={styles.header}>
            <Heading testID={`${testID}.title`}>About Us</Heading>
            <Text testID={`${testID}.description`}>
              Meet our dedicated team of healthcare professionals
            </Text>
          </BlockLayout>

          <div className={styles.staffGrid}>
            <StaffCard
              name="Dr. Don Van Ngo"
              title="Radiologist"
              location="Gold Coast, AU"
              bio="Dr. Don Van Ngo graduated with a Dean's award top 5 in his class and completed his Radiology training at the Gold Coast University Hospital. He specialises in minimally invasive advanced pain management procedures and is a Radiology lecturer at Bond University."
              imageUrl="/images/don-van-ngo.webp"
            />

            <StaffCard
              name="Deidre Basson"
              title="Practice Manager"
              location="Gold Coast, AU"
              bio="Experienced practice manager ensuring smooth operations and exceptional patient care coordination. Dedicated to maintaining the highest standards of healthcare administration."
              imageUrl="/images/deidre-basson.webp"
            />

            <StaffCard
              name="Ines Alansari"
              title="Patient Care Coordinator"
              location="Gold Coast, AU"
              bio="Bachelor of Nursing with Graduate Certificate in Clinical Nursing and Teaching. Provides compassionate patient care and coordinates clinical activities to ensure optimal patient experiences."
              imageUrl="/images/ines-alansari.webp"
            />

            <StaffCard
              name="Mersad Delic"
              title="Chief Radiographer"
              location="Gold Coast, AU"
              bio="Masters in Diagnostic Radiology with Bachelor of Biomedical Science (Hons). Expert in advanced imaging techniques and leads the radiography team in delivering precise diagnostic results."
              imageUrl="/images/mersad-delic.webp"
            />

            <StaffCard
              name="Lorraine Landles"
              title="Clinical Assistant"
              location="Gold Coast, AU"
              bio="Dedicated clinical assistant providing essential support to our medical team. Ensures patient comfort and assists with various clinical procedures and administrative tasks."
              imageUrl="/images/lorraine-landles.webp"
            />

            <StaffCard
              name="Chloe Glen"
              title="Clinical Assistant"
              location="Gold Coast, AU"
              bio="Compassionate clinical assistant focused on patient care and support. Works closely with the medical team to ensure efficient clinic operations and positive patient experiences."
              imageUrl="/images/chloe-glen.webp"
            />
          </div>
        </div>
      </main>
      <Footer testID="footer" />
    </div>
  );
}
