import { Footer } from "~/components/Footer/Footer";
import { Header } from "~/components/Header/Header";
import { Heading, Leading, Subheading, Text } from "src/elements/Text/Text";
import { BlockLayout } from "src/elements/BlockLayout/BlockLayout";
import styles from "./page.module.css";
import { ImagePanel } from "src/blocks/ImagePanel/ImagePanel";
import { ImageContainer } from "src/blocks/ImageContainer/ImageContainer";
import clsx from "classnames";
import Link from "next/link";
import { SectionContainer } from "src/blocks/SectionContainer/SectionContainer";
import { LayoutPanel } from "src/blocks/LayoutPanel/LayoutPanel";
import Image from "next/image";

export default function AboutPage() {
  const testID = "about" as const;

  return (
    <div className="home wp-singular page-template page-template-page-home page-template-page-home-php page page-id-2 wp-theme-wholebodymri">
      <Header />
      <main role="main" className={styles.container}>
        <ImageContainer
          testID={`${testID}.section`}
          media={{
            type: "image",
            format: "webp",
            src: "/images/ipgc-about-hero.png",
          }}
          width="full"
          height="full"
          className={styles.header}
        >
          <SectionContainer
            testID={`${testID}.section`}
            width="content"
            height="full"
          >
            <BlockLayout
              testID={`${testID}.content`}
              className={styles.content}
              align="center"
            >
              <Leading testID={`${testID}.title`} align="center">
                {`Where expertise meets care`}
              </Leading>
              <Subheading testID={`${testID}.description`} align="center">
                {`We have recruited a team of doctors with the highest level of expertise.`}
              </Subheading>
            </BlockLayout>
          </SectionContainer>
        </ImageContainer>
        <div className={styles.wrapper}>
          <BlockLayout testID={`${testID}.header`} align={"center"}>
            <Heading
              testID={`${testID}.title`}
              align={"center"}
            >{`Raising the standard in care`}</Heading>
            <Subheading
              testID={`${testID}.description`}
              className={styles.description}
              align={"center"}
            >
              {`IPGC was founded with a simple goal: to bring class leading, minimally invasive spine and joint treatments to patients seeking precise, minimally invasive treatment. Since opening our doors in 2023, we’ve expanded our capabilities, refined our techniques, and helped shape the region’s standard for procedural excellence.`}
            </Subheading>
            <Subheading
              testID={`${testID}.description`}
              className={styles.description}
              align={"center"}
            >
              {`Today, our specialist team continues to lead with innovation, technical expertise, and a commitment to patient-centered care. Meet the clinicians and professionals driving our mission—where expertise meets care, every day.`}
            </Subheading>
          </BlockLayout>
        </div>
        <div className={clsx(styles.section, styles.tint)}>
          <SectionContainer testID={`${testID}.section`}>
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
                <Subheading testID={`${testID}.description`}>
                  {`An Interventional Radiologist is a highly subspecialised doctor who has at least 15 years of medical training. Radiologists specialise in using ultrasound, CT and MRI to diagnose your condition and the origin of your pain.`}
                </Subheading>
                <Subheading testID={`${testID}.description`}>
                  {`Using the same equipment and with high precision they can then administer steroid and other pain killers to the exact sites that cause pain, potentially reducing or limiting the use of tablets and the need for surgery.`}
                </Subheading>
                <Link href="/team">Meet our team</Link>
              </BlockLayout>
            </LayoutPanel>
          </SectionContainer>
        </div>
        <div className={clsx(styles.section)}>
          <SectionContainer testID={`${testID}.section`}>
            <LayoutPanel testID={`${testID}.layout`} columns={2}>
              <BlockLayout testID={`${testID}.content`}>
                <Heading testID={`${testID}.title`}>
                  {`Why choose IPGC?`}
                </Heading>
                <Subheading testID={`${testID}.description`}>
                  {`The specialists at IPGC have cumulatively treated tens of thousands of patient's with back, spine and joint related issues, with decades of cumulative experience.`}
                </Subheading>
                <Subheading testID={`${testID}.description`}>
                  {`Our success is measured in how many patients we can help return to normality! We do this by performing minimally invasive procedures with minimal risk and virtually no down time.`}
                </Subheading>
              </BlockLayout>
              <Image
                src={"/images/ipgc-about-2.png"}
                width={1280}
                height={1280}
                alt="Committed to best-in-class security"
                className={styles.image}
              />
            </LayoutPanel>
          </SectionContainer>
        </div>
      </main>
      <Footer testID="footer" />
    </div>
  );
}
