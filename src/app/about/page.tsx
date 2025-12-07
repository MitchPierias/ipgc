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
            src: "/images/mosaic-still-02.png",
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
                {`The World’s Identity Company`}
              </Leading>
              <Subheading testID={`${testID}.description`} align="center">
                {`We’re the leading independent partner for Identity management. Our vision is to free everyone to safely use any technology. Now that might sound like a seriously lofty pursuit, but we’re proving it’s possible — with seamless and secure access, authentication, and authorization.`}
              </Subheading>
            </BlockLayout>
          </SectionContainer>
        </ImageContainer>
        <div className={styles.wrapper}>
          <BlockLayout testID={`${testID}.header`} align={"center"}>
            <Heading
              testID={`${testID}.title`}
              align={"center"}
            >{`We're building a world where identity belongs to you`}</Heading>
            <Subheading
              testID={`${testID}.description`}
              className={styles.description}
              align={"center"}
            >
              {`We embrace neutrality to give organizations, employees, and end users greater flexibility, regardless of the devices or technology at hand. Learn about the Okta Platform and Auth0 Platform and how they’re helping everyone secure and control their digital presence.`}
            </Subheading>
          </BlockLayout>
        </div>
        <div className={clsx(styles.section, styles.tint)}>
          <SectionContainer testID={`${testID}.section`}>
            <LayoutPanel testID={`${testID}.layout`} columns={2}>
              <Image
                src={
                  "https://www.okta.com/adobe/dynamicmedia/deliver/dm-aid--91a265b6-de5d-4e87-b641-1f2fcc070ce1/body-company-1-webp.webp?preferwebp=true&width=1280"
                }
                width={1280}
                height={1280}
                alt="Committed to best-in-class security"
                className={styles.image}
              />
              <BlockLayout testID={`${testID}.content`}>
                <Heading testID={`${testID}.title`}>
                  Setting the bar for the industry
                </Heading>
                <Subheading testID={`${testID}.description`}>
                  {`In 2009, Todd McKinnon and Frederic Kerrest co-founded Okta, and the Identity-as-a-Service (IDaaS) market was born. Since then, we’ve completed multiple acquisitions and garnered top recognition for our influence and industry contributions. Get to know the executives at the forefront of our innovations, operations, and more.`}
                </Subheading>
                <Link href="/team">Meet our leaders</Link>
              </BlockLayout>
            </LayoutPanel>
          </SectionContainer>
        </div>
        <div className={clsx(styles.section)}>
          <SectionContainer testID={`${testID}.section`}>
            <LayoutPanel testID={`${testID}.layout`} columns={2}>
              <BlockLayout testID={`${testID}.content`}>
                <Heading testID={`${testID}.title`}>
                  Committed to best-in-class security
                </Heading>
                <Subheading testID={`${testID}.description`}>
                  {`To get security right, you have to get Identity right. The Okta Secure Identity Commitment is our long-term initiative to lead the industry in the fight against Identity attacks. `}
                </Subheading>
                <Link href="/">Learn more</Link>
              </BlockLayout>
              <Image
                src={
                  "https://www.okta.com/adobe/dynamicmedia/deliver/dm-aid--014fffa8-07ee-4d20-8db9-e6de1f45bcf7/body-company-2-webp.webp?preferwebp=true&width=1280"
                }
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
