import { Footer } from "~/components/Footer/Footer";
import { Header } from "~/components/Header/Header";
import { Heading, Text } from "src/elements/Text/Text";
import { BlockLayout } from "src/elements/BlockLayout/BlockLayout";
import styles from "./page.module.css";
import { ImagePanel } from "src/blocks/ImagePanel/ImagePanel";
import { ImageContainer } from "src/blocks/ImageContainer/ImageContainer";

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
        >
          <ImagePanel
            testID={`${testID}.image`}
            image="/images/about-us.webp"
          />
        </ImageContainer>
        <div className={styles.wrapper}>
          <BlockLayout testID={`${testID}.header`} align={"center"}>
            <Heading testID={`${testID}.title`}>About Us</Heading>
            <Text
              testID={`${testID}.description`}
              className={styles.description}
            >
              Meet our dedicated team of healthcare professionals
            </Text>
          </BlockLayout>
        </div>
      </main>
      <Footer testID="footer" />
    </div>
  );
}
