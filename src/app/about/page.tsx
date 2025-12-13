import { Footer } from "~/components/Footer/Footer";
import { Header } from "~/components/Header/Header";
import { Heading, Leading, Paragraph } from "src/elements/Text/Text";
import { BlockLayout } from "src/elements/BlockLayout/BlockLayout";
import styles from "./page.module.css";
import { Section } from "src/blocks/Section/Section";
import { LayoutPanel } from "src/blocks/LayoutPanel/LayoutPanel";
import Image from "next/image";
import { Button } from "src/elements/Buttons/Button";
import { Panel } from "src/blocks/Panel/Panel";

export default function AboutPage() {
  const testID = "about" as const;

  return (
    <div className="home wp-singular page-template page-template-page-home page-template-page-home-php page page-id-2 wp-theme-wholebodymri">
      <Header />
      <main role="main" className={styles.container}>
        <Section
          testID={`${testID}.section`}
          media={{
            type: "image",
            format: "png",
            src: "/images/ipgc-about-hero.png",
          }}
        >
          <Panel testID={`${testID}.panel`}>
            <Leading testID={`${testID}.title`} align="center">
              {`Where expertise meets care`}
            </Leading>
            <Paragraph testID={`${testID}.description`} align="center">
              {`We have recruited a team of doctors with the highest level of expertise.`}
            </Paragraph>
          </Panel>
        </Section>
        <Section testID={`${testID}.section`}>
          <Panel testID={`${testID}.panel`}>
            <Heading
              testID={`${testID}.title`}
              align={"center"}
            >{`Raising the standard in care`}</Heading>
            <Paragraph testID={`${testID}.description`} align={"center"}>
              {`IPGC was founded with a simple goal: to bring class leading, minimally invasive spine and joint treatments to patients seeking precise, minimally invasive treatment. Since opening our doors in 2023, we’ve expanded our capabilities, refined our techniques, and helped shape the region’s standard for procedural excellence.`}
            </Paragraph>
            <Paragraph testID={`${testID}.description`} align={"center"}>
              {`Today, our specialist team continues to lead with innovation, technical expertise, and a commitment to patient-centered care. Meet the clinicians and professionals driving our mission—where expertise meets care, every day.`}
            </Paragraph>
          </Panel>
        </Section>
        <Section testID={`${testID}.section`} variant="tinted">
          <LayoutPanel testID={`${testID}.layout`} columns={2}>
            <Image
              src={"/images/ipgc-about-1.png"}
              width={1280}
              height={1280}
              alt="Committed to best-in-class security"
              className={styles.image}
            />
            <BlockLayout testID={`${testID}.content`}>
              <Heading testID={`${testID}.title`}>
                {`Interventional Radiologist`}
              </Heading>
              <Paragraph testID={`${testID}.description`}>
                {`An Interventional Radiologist is a highly subspecialised doctor who has at least 15 years of medical training. Radiologists specialise in using ultrasound, CT and MRI to diagnose your condition and the origin of your pain.`}
              </Paragraph>
              <Paragraph testID={`${testID}.description`}>
                {`Using the same equipment and with high precision they can then administer steroid and other pain killers to the exact sites that cause pain, potentially reducing or limiting the use of tablets and the need for surgery.`}
              </Paragraph>
              <Button
                testID={`${testID}.button`}
                variant="tertiary"
                href="/team"
              >
                Meet our team
              </Button>
            </BlockLayout>
          </LayoutPanel>
        </Section>
        <Section testID={`${testID}.section`}>
          <LayoutPanel testID={`${testID}.layout`} columns={2}>
            <BlockLayout testID={`${testID}.content`}>
              <Heading testID={`${testID}.title`}>{`Why choose IPGC?`}</Heading>
              <Paragraph testID={`${testID}.description`}>
                {`The specialists at IPGC have cumulatively treated tens of thousands of patient's with back, spine and joint related issues, with decades of cumulative experience.`}
              </Paragraph>
              <Paragraph testID={`${testID}.description`}>
                {`Our success is measured in how many patients we can help return to normality! We do this by performing minimally invasive procedures with minimal risk and virtually no down time.`}
              </Paragraph>
            </BlockLayout>
            <Image
              src={"/images/ipgc-about-2.png"}
              width={1280}
              height={1280}
              alt="Committed to best-in-class security"
              className={styles.image}
            />
          </LayoutPanel>
        </Section>
      </main>
      <Footer testID="footer" />
    </div>
  );
}
