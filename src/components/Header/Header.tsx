"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import Image from "next/image";
import { CrossIcon } from "src/elements/Icons/CrossIcon";
import { MenuIcon } from "src/elements/Icons";
import clsx from "classnames";
import { Logo } from "src/elements/Logo/Logo";

interface NavigationItem {
  label: string;
  href?: string;
  children?: NavigationItem[];
}

export const Header = () => {
  const pathname = usePathname();

  const navigationItems = [
    { label: "Home", href: "/" },
    { label: "Patient", href: "/patient" },
    { label: "Doctor", href: "/doctor" },
    { label: "About", href: "/about" },
    { label: "Team", href: "/team" },
  ];

  return (
    <div className={styles.frame}>
      <div className={styles.layout}>
        <div className={clsx(styles.overlay, styles.menu, styles.padded)}>
          <Link href="/" className={styles.logo}>
            <Logo testID="logo" />
          </Link>
          <nav>
            <ul className={styles.dense}>
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={clsx(styles.link, {
                      [styles.selected]: item.href === pathname,
                    })}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className={clsx(styles.overlay, styles.menu, styles.toggle)}>
          <ul>
            <li>
              <Link href="/locations" className={styles.link}>
                Locations
              </Link>
            </li>
            <li>
              <Link href="/contact" className={clsx(styles.link, styles.solid)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
