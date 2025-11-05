"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
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
        <div className={clsx(styles.overlay, styles.menu)}>
          <ExpandableMenuItems />
        </div>
      </div>
    </div>
  );
};

const ExpandableMenuItems = () => {
  // Refs for the button group
  const leftButtonRef = useRef<HTMLLIElement>(null);
  const rightButtonRef = useRef<HTMLLIElement>(null);
  const containerRef = useRef<HTMLUListElement>(null);

  const handleButtonHover = ({
    currentTarget,
  }: React.MouseEvent<HTMLLIElement>) => {
    if (currentTarget.tagName !== "LI") return;
    currentTarget.style.flexBasis = "100%";
  };

  const handleButtonBlur = ({
    currentTarget,
  }: React.MouseEvent<HTMLLIElement>) => {
    if (currentTarget.tagName !== "LI") return;
    currentTarget.style.flexBasis = "0%";
  };

  return (
    <ul className={styles.animated}>
      <li
        ref={leftButtonRef}
        onMouseEnter={handleButtonHover}
        onMouseLeave={handleButtonBlur}
      >
        <Link href="/locations" className={styles.link}>
          Locations
        </Link>
      </li>
      <li
        ref={rightButtonRef}
        onMouseEnter={handleButtonHover}
        onMouseLeave={handleButtonBlur}
      >
        <Link href="/contact" className={clsx(styles.link, styles.solid)}>
          Contact
        </Link>
      </li>
    </ul>
  );
};
