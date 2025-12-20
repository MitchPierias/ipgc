"use client";

import React from "react";
import { Footer } from "~/components/Footer/Footer";
import { Header } from "~/components/Header/Header";
import {
  Heading,
  Microcopy,
  Paragraph,
  Subheading,
  Subtitle,
  Text,
  Title,
} from "src/elements/Text/Text";
import { Card } from "src/elements/Card/Card";
import { BlockLayout } from "src/elements/BlockLayout/BlockLayout";
import { GridLayout } from "src/elements/GridLayout/GridLayout";
import styles from "./page.module.css";
import { BlankBlock } from "src/blocks/BlankBlock/BlankBlock";
import { GoogleMapComponent } from "src/components/GoogleMap/GoogleMap";

export default function LocationsPage() {
  const testID = "locations" as const;

  return (
    <div data-testid={testID}>
      <Header />
      <BlankBlock testID="blank-block" height="base" />
      <main role="main" className={styles.container}>
        <BlockLayout testID={`${testID}.layout`} padding="base">
          <BlockLayout testID={`${testID}.header`}>
            <Heading testID={`${testID}.title`}>Contact our team</Heading>
            <Subheading testID={`${testID}.contact-title`}>
              One of our friendly staff will be able to assist you.
            </Subheading>
            <BlockLayout testID={`${testID}.phone-numbers`} spacing={"base"}>
              <Subtitle testID={`${testID}.phone`}>
                <strong>Phone:</strong> 0413 519 891
              </Subtitle>
              <Subtitle testID={`${testID}.email`}>
                <strong>Email:</strong> reception@ipgc.com.au
              </Subtitle>
            </BlockLayout>
          </BlockLayout>

          <GridLayout testID={`${testID}.grid`} padding="base">
            <Card testID={`${testID}.address-info`}>
              <BlockLayout
                testID={`${testID}.address-layout`}
                spacing={"tight"}
              >
                <Heading testID={`${testID}.address-title`}>
                  Interventional Pain GC
                </Heading>
                <Text
                  testID={`${testID}.address`}
                  className={styles.addressText}
                >
                  94 Laver Drive, Robina
                  <br />
                  Queensland 4226, Australia
                </Text>
                <Microcopy
                  testID={`${testID}.hint`}
                >{`Located inside WiSE Specialist Emergency Clinic`}</Microcopy>
              </BlockLayout>
            </Card>

            <Card testID={`${testID}.address-info`}>
              <BlockLayout testID={`${testID}.address-layout`} spacing={"base"}>
                <Heading testID={`${testID}.title`}>Opening Hours</Heading>
                <Subtitle
                  testID={`${testID}.open`}
                  className={styles.addressText}
                >
                  <strong>Monday - Friday:</strong> 9AM–5PM
                </Subtitle>
                <Subtitle
                  testID={`${testID}.closed`}
                  className={styles.addressText}
                >
                  <strong>Saturday - Sunday:</strong> CLOSED
                </Subtitle>
              </BlockLayout>
            </Card>
          </GridLayout>

          <BlockLayout testID={`${testID}.map-section`} padding="none">
            <GoogleMapComponent
              testID={`${testID}.map`}
              address="94 Laver Drive, Robina, Queensland 4226, Australia"
              height="400px"
            />
          </BlockLayout>
        </BlockLayout>

        <BlankBlock testID={`${testID}.blank`} height="base" />
      </main>
      <Footer testID="footer" />
    </div>
  );
}
