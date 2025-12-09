import { Footer } from "~/components/Footer/Footer";
import { Header } from "~/components/Header/Header";
import { Heading, Text } from "src/elements/Text/Text";
import { Button } from "src/elements/Buttons/Button";
import { Card } from "src/elements/Card/Card";
import { BlockLayout } from "src/elements/BlockLayout/BlockLayout";
import { GridLayout } from "src/elements/GridLayout/GridLayout";
import styles from "./page.module.css";
import { BlankBlock } from "src/blocks/BlankBlock/BlankBlock";

export default function PatientPortalPage() {
  const testID = "patient-portal" as const;

  return (
    <div className="home wp-singular page-template page-template-page-home page-template-page-home-php page page-id-2 wp-theme-wholebodymri">
      <Header />
      <BlankBlock testID="blank-block" height="base" />
      <main role="main" className={styles.container}>
        <BlockLayout testID={`${testID}.header`}>
          <Heading testID={`${testID}.title`}>Patient Portal</Heading>
          <Text testID={`${testID}.description`} className={styles.description}>
            Access important patient information and resources
          </Text>
        </BlockLayout>

        <GridLayout testID={`${testID}.grid`}>
          <Card testID={`${testID}.rfa-fact-sheet`}>
            <BlockLayout testID={`${testID}.rfa-layout`} spacing={"tight"}>
              <Heading testID={`${testID}.rfa-title`}>
                Radiofrequency Ablation
                <br />
                (RFA) Fact Sheet
              </Heading>
              <Text testID={`${testID}.rfa-description`}>
                Learn about radiofrequency ablation procedures, what to expect,
                and important information for patients.
              </Text>
              <Button
                testID={`${testID}.rfa-download`}
                variant="primary"
                href="/pdf/rfa-fact-sheet.pdf"
                download="RFA-Fact-Sheet.pdf"
              >
                Download PDF
              </Button>
            </BlockLayout>
          </Card>

          <Card testID={`${testID}.patient-info-flyer`}>
            <BlockLayout testID={`${testID}.flyer-layout`} spacing={"tight"}>
              <Heading testID={`${testID}.flyer-title`}>
                Patient Information Flyer
              </Heading>
              <Text testID={`${testID}.flyer-description`}>
                Essential information for patients including preparation
                instructions, what to bring, and post-procedure care.
              </Text>
              <Button
                testID={`${testID}.flyer-download`}
                variant="primary"
                href="/pdf/patient-information-flyer.pdf"
                download="Patient-Information-Flyer.pdf"
              >
                Download PDF
              </Button>
            </BlockLayout>
          </Card>
        </GridLayout>
      </main>
      <Footer testID="footer" />
    </div>
  );
}
