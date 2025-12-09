import { Footer } from "~/components/Footer/Footer";
import { Header } from "~/components/Header/Header";
import { Heading, Text } from "src/elements/Text/Text";
import {
  REFERRAL_FORM_PATH,
  REFERRAL_FORM_DOWNLOAD_NAME,
} from "src/constants/app";
import { Button } from "src/elements/Buttons/Button";
import styles from "./page.module.css";
import { BlankBlock } from "src/blocks/BlankBlock/BlankBlock";
import { BlockLayout } from "src/elements/BlockLayout/BlockLayout";
import { Card } from "src/elements/Card/Card";

const testID = "doctor-portal" as const;

export default function DoctorPortalPage() {
  return (
    <div className="home wp-singular page-template page-template-page-home page-template-page-home-php page page-id-2 wp-theme-wholebodymri">
      <Header />
      <BlankBlock testID={`${testID}.spacer`} height="base" />
      <main role="main" className={styles.container}>
        <BlockLayout testID="referral-form-header">
          <Heading testID="referral-form-title">
            Clinicians are able to make referrals via:
          </Heading>
          <Text testID="all-referrals-accepted">All referrals accepted.</Text>
        </BlockLayout>

        {/* Download Section */}
        <Card testID="download-referral-form-card">
          <div className={styles.downloads}>
            <BlockLayout testID="download-referral-form-layout">
              <Heading testID="download-referral-form-title">
                Download Referral Form
              </Heading>
              <Text testID="download-referral-form-description">
                Download our referral form as a PDF to complete offline or print
              </Text>
            </BlockLayout>
            <Button
              testID="download-referral-form-button"
              href={REFERRAL_FORM_PATH}
              download={REFERRAL_FORM_DOWNLOAD_NAME}
            >
              Download PDF
            </Button>
          </div>
        </Card>

        {/* Referral Methods */}
        <div className={styles.referralMethods}>
          <div className={styles.methodsGrid}>
            <div className={styles.methodCard}>
              <div className={styles.methodContent}>
                <div className={styles.methodNumber}>1</div>
                <div>
                  <Heading testID="medical-objects-title">
                    Specialist Referral Letter via Medical Objects
                  </Heading>
                  <Text testID="medical-objects-description">
                    Send your referral letter through the Medical Objects
                    platform for secure electronic transmission.
                  </Text>
                </div>
              </div>
            </div>

            <div className={styles.methodCard}>
              <div className={styles.methodContent}>
                <div className={styles.methodNumber}>2</div>
                <div>
                  <Heading testID="medical-director-title">
                    Specialist Referral Letter via Medical Director or Best
                    Practice
                  </Heading>
                  <Text testID="medical-director-description">
                    Submit your referral letter through Medical Director or Best
                    Practice practice management systems.
                  </Text>
                </div>
              </div>
            </div>

            <div className={styles.methodCard}>
              <div className={styles.methodContent}>
                <div className={styles.methodNumber}>3</div>
                <div>
                  <Heading testID="referral-form-title-option">
                    Using the Referral Form below
                  </Heading>
                  <Text testID="referral-form-description-option">
                    Download and complete our PDF referral form, then submit it
                    according to the instructions provided.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <BlankBlock testID={`${testID}.spacer`} height="base" />
      <Footer testID="footer" />
    </div>
  );
}
