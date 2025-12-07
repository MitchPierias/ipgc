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
import { GridLayout } from "src/blocks/GridLayout/GridLayout";
import { InlineLayout } from "src/elements/InlineLayout/InlineLayout";

interface FooterProps extends Common.ComponentProps {}

export const Footer = ({ testID, ...props }: FooterProps) => {
  return (
    <footer data-testid={testID} className={styles.frame} role="contentinfo">
      <div
        data-testid={`${testID}.content`}
        className={clsx(styles.wrap, styles.contain)}
      >
        <div className={styles.leftColumn}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/images/logo-footer.png"
              alt="Interventional Pain GC"
              width={500}
              height={122}
            />
          </Link>

          {/* <SocialLinks testID="socials" items={socialLinks} /> */}
        </div>

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
        <div className={styles.contain}>
          <Button
            testID={`${testID}.download`}
            href={REFERRAL_FORM_PATH}
            download={REFERRAL_FORM_DOWNLOAD_NAME}
          >
            Download Referral Form
          </Button>
        </div>
      </div>
    </footer>
  );
};
