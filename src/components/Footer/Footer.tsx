import React from "react";
import Link from "next/link";

import styles from "./Footer.module.css";
import { navigationItems } from "./Footer.constants";
import clsx from "classnames";
import Image from "next/image";
import {
  REFERRAL_FORM_PATH,
  REFERRAL_FORM_DOWNLOAD_NAME,
} from "src/constants/app";
import { Title } from "src/elements/Text/Text";
import { BlockLayout } from "src/elements/BlockLayout/BlockLayout";
import { Button } from "src/elements/Buttons/Button";

interface FooterProps extends Common.ComponentProps {}

export const Footer = ({ testID, ...props }: FooterProps) => {
  return (
    <footer data-testid={testID} className={styles.frame} role="contentinfo">
      <div className={styles.wrap}>
        <div className={styles.leftColumn}>
          <Link href="/">
            <Image
              src="/images/logo-footer.png"
              alt="Interventional Pain GC"
              width={420}
              height={420}
            />
          </Link>

          <BlockLayout testID={`${testID}.downloads`}>
            <Title testID={`${testID}.title`}>Referral Form</Title>
            <Button
              testID={`${testID}.download`}
              href={REFERRAL_FORM_PATH}
              download={REFERRAL_FORM_DOWNLOAD_NAME}
            >
              Download Form
            </Button>
          </BlockLayout>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.navigation}>
            <nav
              className={styles.navigation}
              itemScope
              itemType="https://schema.org/SiteNavigationElement"
            >
              <ul className={styles.list}>
                {navigationItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      data-testid={`${testID}.link`}
                      href={item.href}
                      className={styles.link}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* <SocialLinks testID="socials" items={socialLinks} /> */}
        </div>
      </div>
    </footer>
  );
};
