import { Footer } from "~/components/Footer/Footer";
import { Header } from "~/components/Header/Header";
import { Panel } from "src/blocks/Panel/Panel";
import { Heading, Text, Subtitle, Paragraph } from "src/elements/Text/Text";
import { Button } from "src/elements/Buttons/Button";
import styles from "./results-portal.module.css";

export default async function ResultsPortal() {
  return (
    <div className="home wp-singular page-template page-template-page-home page-template-page-home-php page page-id-2 wp-theme-wholebodymri">
      <Header />
      <main role="main" className={styles.container}>
        <div className={styles.title}>
          <Heading
            testID="results-portal-title"
            component="h1"
            className={styles.titleHeading}
          >
            RESULTS PORTAL
          </Heading>
        </div>
        <div className={styles.inteleConnectSection}>
          <Panel testID="inteleconnect-panel" variant="glass">
            <div className={styles.panelContent}>
              <Subtitle
                testID="inteleconnect-subtitle"
                className={styles.subtitle}
              >
                IPGC/WiSERadiology InteleConnect for Clinicians
              </Subtitle>

              <Text
                testID="inteleconnect-description"
                component="p"
                className={styles.description}
              >
                InteleConnect is a no install, secure, web-portal which can be
                accessed from any browser, on any device.
              </Text>

              <Text
                testID="inteleconnect-features"
                component="p"
                className={styles.features}
              >
                View images and reports instantly and 24/7. Email notifications
                can be set up to alert you when reports have been completed.
              </Text>

              <div className={styles.loginButtonContainer}>
                <Button
                  testID="inteleconnect-login"
                  variant="secondary"
                  href="https://img.wisemedical.com.au/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Inteleconnect LOGIN
                </Button>
              </div>

              <div className={styles.newUserSection}>
                <Text
                  testID="new-user-text"
                  component="p"
                  className={styles.newUserText}
                >
                  New user? To request InteleConnect access please follow the
                  link below:
                </Text>

                <Button
                  testID="new-user-button"
                  href="https://wiseradiology.com.au/Portal/app#/terms-of-service/accept"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Request inteleconnect access
                </Button>
              </div>
            </div>
          </Panel>
        </div>

        <div className={styles.additionalInfo}>
          <Panel testID="additional-info-panel">
            <div className={styles.supportInfo}>
              <Text
                testID="portal-info"
                component="p"
                className={styles.supportText}
              >
                For technical support or assistance with accessing the results
                portal, please contact our support team at{" "}
                <a
                  href="mailto:support@ipgc.com.au"
                  className={styles.supportLink}
                >
                  support@ipgc.com.au
                </a>
              </Text>
            </div>
          </Panel>
        </div>
      </main>
      <Footer testID="footer" />
    </div>
  );
}
