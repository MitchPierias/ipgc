"use client";

import React from "react";
import Link from "next/link";

import styles from "./Footer.module.css";
import { navigationItems, socialLinks } from "./Footer.constants";
import { SocialLinks } from "~/components/SocialLinks/SocialLinks";
import clsx from "classnames";
import { Button } from "src/elements/Buttons/Button";
import Image from "next/image";

interface FooterProps extends Common.ComponentProps {}

export const Footer = ({ testID, ...props }: FooterProps) => {
  return (
    <footer data-testid={testID} className={styles.frame} role="contentinfo">
      <div className={styles.wrap}>
        <div className={styles.topSection}>
          <div className={styles.leftColumn}>
            <Link href="/" className={styles.logo}>
              <img
                src="https://ipgc.com.au/wp-content/uploads/2024/10/logo-text.svg"
                alt="Interventional Pain GC"
                className={styles.logoImage}
              />
            </Link>

            <div className={styles.downloadSection}>
              <div className={styles.title}>
                Referral/Screening Request Form
              </div>
              <Button
                testID="download-button"
                variant="secondary"
                size={"small"}
              >
                Download Form
              </Button>
            </div>
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
                      <Link href={item.href} className={styles.link}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <SocialLinks testID="socials" items={socialLinks} />
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.panel}>
            <Link href="/" className={styles.logo}>
              <Image
                src="/svg/ipgc_logo.svg"
                alt="Interventional Pain GC"
                width={300}
                height={100}
              />
            </Link>
            <Link href="/privacy-policy" className={styles.link}>
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className={styles.link}>
              Terms and Conditions
            </Link>
          </div>

          <div className={styles.panel}>
            <div className={clsx(styles.text, styles.tagline)}>
              <span>Journey into</span>
              <span>the known.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
