"use client";

import React from "react";
import { Header } from "~/components/Header/Header";
import { Footer } from "~/components/Footer/Footer";
import { DualPanel } from "src/blocks/DualPanel/DualPanel";
import { Panel } from "src/blocks/Panel/Panel";
import { HeroBanner } from "~/components/HeroBanner/HeroBanner";
import { GridLayout } from "src/blocks/GridLayout/GridLayout";
import { IconBlock } from "src/blocks/IconBlock/IconBlock";
import { ImagePanel } from "src/blocks/ImagePanel/ImagePanel";
import { Button } from "src/elements/Buttons/Button";
import { Section } from "src/blocks/Section/Section";
import { MosaicLayout } from "src/blocks/MosaicLayout/MosaicLayout";
import { Subtitle, Title } from "src/elements/Text/Text";
import { ScrollBlock } from "src/blocks/ScrollBlock/ScrollBlock";
import { ParallaxProvider } from "react-scroll-parallax";

export default function HomePage() {
  return (
    <ParallaxProvider>
      <div className="home wp-singular page-template page-template-page-home page-template-page-home-php page page-id-2 ">
        <Header />
        <main role="main">
          <ScrollBlock testID="scroll-block">
            <div>
              <Title testID={"title"}>Our facility</Title>
              <Subtitle testID={"subtitle"}>
                Our World-class Gold Cast Facility
              </Subtitle>
            </div>
          </ScrollBlock>
          <Section
            testID="section"
            media={{
              type: "video",
              format: "mp4",
              src: "https://ipgc.com.au/wp-content/uploads/2024/11/whole-body-mri-journey-into-the-known.mp4",
            }}
          >
            <DualPanel testID="hero-section">
              <Panel
                testID="dual-panel-left"
                title={"Interventional Pain GC"}
                subtitle={
                  "Queensland's first and only clinic dedicated solely to imaging-guided procedures for spine, joint and musculoskeletal conditions."
                }
                variant={"invert"}
              />
              <div />
            </DualPanel>
          </Section>
          <Section testID="section">
            <DualPanel testID="hero-section">
              <Panel
                testID="dual-panel-left"
                title={"Specialists who care"}
                subtitle={
                  "We bulk bill most procedures, helping to ensure our services remain accessible to everyone."
                }
              />
              <Panel
                testID="dual-panel-right"
                description={
                  "Thank you for choosing the Interventional Radiologists at IPGC. As Queensland's only clinic dedicated solely to imaging-guided spine, joint, and musculoskeletal procedures, we deliver precise, expert care with a strong focus on achieving the best outcomes and on providing exceptional patient experience."
                }
                buttonText={"Request appointment"}
              />
            </DualPanel>
          </Section>
          <Section
            testID="section"
            media={{
              type: "image",
              format: "jpg",
              src: "https://ipgc.com.au/wp-content/uploads/2024/11/cta-bg.jpg",
            }}
          >
            <DualPanel testID="dual-panel">
              <Panel
                testID="dual-panel-left"
                subtitle="Precision. Commitment. Compassion."
                buttonText={"Request appointment"}
                variant={"invert"}
              />
              <div />
            </DualPanel>
          </Section>
          <HeroBanner
            testID="hero-banner"
            title="Why Choose Us?"
            description="State of the art equipment. Respected Doctors. Unparalleled experience."
          />
          <Section
            testID="section"
            media={{
              type: "image",
              format: "jpeg",
              src: "https://ipgc.com.au/wp-content/uploads/2024/11/cta-bg.jpg",
            }}
          >
            <DualPanel testID="dual-panel">
              <Panel
                testID="dual-panel-left"
                title={"Start your journey"}
                subtitle={
                  "Why should I consider a Interventional Pain GC scan?"
                }
                description="A Interventional Pain GC scan is ideal for proactive healthcare, particularly for individuals with a family history of certain diseases, those undergoing cancer treatment, or anyone seeking to take control of their health by detecting conditions early."
                buttonText={
                  "Journey into the known with a Interventional Pain GC scan"
                }
                variant={"overlay"}
              />
              <div />
            </DualPanel>
          </Section>

          <Section testID="section">
            <DualPanel testID="image-panel" full>
              <ImagePanel
                testID="image-panel"
                image="https://ipgc.com.au/wp-content/uploads/2024/11/experience-gallery-1.jpg"
              />
              <ImagePanel
                testID="image-panel"
                image="https://ipgc.com.au/wp-content/uploads/2024/11/experience-gallery-2.jpg"
              />
            </DualPanel>
          </Section>

          <Section testID="section">
            <MosaicLayout testID="mosaic-layout" width={"full"}>
              <div>
                <Title testID={"title"}>Our facility</Title>
                <Subtitle testID={"subtitle"}>
                  Our World-class Gold Cast Facility
                </Subtitle>
              </div>
              <ImagePanel
                testID="image-panel"
                image="/images/WBMRI-3-scaled.jpg"
              />
              <ImagePanel testID="image-panel" image="/images/WBMRI-34.jpg" />
              <div>
                <Button testID={"button"} variant={"secondary"}>
                  Learn more about our facility
                </Button>
              </div>
            </MosaicLayout>
          </Section>

          <GridLayout testID="grid-layout">
            <IconBlock
              testID="icon-block"
              title="Tailored Scanning Experience"
              description="Enjoy a painless 100-minute scan while watching your favourite movie, TV show, or listening to music of your choice."
            />
            <IconBlock
              testID="icon-block"
              title="Wide Bore MRI Scanner"
              description="Our MRI scanner is designed to minimise discomfort with its wide bore, reducing the risk of claustrophobia and ensuring a more comfortable experience."
            />
            <IconBlock
              testID="icon-block"
              title="Safe"
              description="There is no known harm from an MRI scan, making Interventional Pain GC a safe option for thorough screening."
            />
            <IconBlock
              testID="icon-block"
              title="Unmatched Accuracy"
              description="Leveraging cutting-edge 3 Tesla MRI technology, Interventional Pain GC offers unparalleled image quality, ensuring early and accurate detection of abnormalities."
            />
            <IconBlock
              testID="icon-block"
              title="Expertly Optimized"
              description="Each scan is meticulously calibrated by experts, guaranteeing the highest level of diagnostic confidence and ensuring reliable results every time."
            />
            <IconBlock
              testID="icon-block"
              title="Timely Reporting"
              description="Receive a comprehensive radiologist report and images within 7 days. Our reports focus on any abnormal findings, ensuring you get clear and timely information."
            />
          </GridLayout>
          <Section testID="section" padded>
            <DualPanel testID={"dual-panel"} variant={"card"} full>
              <Panel
                testID="dual-panel-left"
                subtitle="Journey into the known with a Interventional Pain GC scan"
              />
              <div>
                <Button
                  testID="dual-panel-button"
                  variant={"primary"}
                  size={"small"}
                >
                  Book your scan
                </Button>
              </div>
            </DualPanel>
          </Section>
        </main>
        <Footer testID="footer" />
      </div>
    </ParallaxProvider>
  );
}
