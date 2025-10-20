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

  // Refs for the button group
  const leftButtonRef = useRef<HTMLLIElement>(null);
  const rightButtonRef = useRef<HTMLLIElement>(null);
  const containerRef = useRef<HTMLUListElement>(null);

  const navigationItems = [
    { label: "Home", href: "/" },
    { label: "Patient", href: "/patient" },
    { label: "Doctor", href: "/doctor" },
    { label: "About", href: "/about" },
    { label: "Team", href: "/team" },
  ];

  // Handle hover on either button - determines which button was hovered
  const handleButtonHover = useCallback(
    (event: React.MouseEvent<HTMLLIElement>) => {
      if (
        !leftButtonRef.current ||
        !rightButtonRef.current ||
        !containerRef.current
      )
        return;

      const container = containerRef.current;
      const containerWidth = container.offsetWidth;
      const containerPadding =
        parseInt(getComputedStyle(container).paddingLeft) +
        parseInt(getComputedStyle(container).paddingRight);
      const gap = parseInt(getComputedStyle(container).gap);

      // Calculate expanded width (container minus padding and gap)
      const expandedWidth = containerWidth - containerPadding - gap;

      // Determine which button was hovered
      const isLeftButton = event.currentTarget === leftButtonRef.current;

      if (isLeftButton) {
        // Expand left button, collapse and slide right button
        leftButtonRef.current.style.width = `${expandedWidth}px`;
        leftButtonRef.current.style.transform = "translateX(0)";
        leftButtonRef.current.style.opacity = "1";
        leftButtonRef.current.style.pointerEvents = "auto";

        rightButtonRef.current.style.width = "0px";
        rightButtonRef.current.style.transform = `translateX(${
          expandedWidth + gap
        }px)`;
        rightButtonRef.current.style.opacity = "0";
        rightButtonRef.current.style.pointerEvents = "none";
      } else {
        // Expand right button, collapse and slide left button
        rightButtonRef.current.style.width = `${expandedWidth}px`;
        rightButtonRef.current.style.transform = "translateX(0)";
        rightButtonRef.current.style.opacity = "1";
        rightButtonRef.current.style.pointerEvents = "auto";

        leftButtonRef.current.style.width = "0px";
        leftButtonRef.current.style.transform = `translateX(-${gap}px)`;
        leftButtonRef.current.style.opacity = "0";
        leftButtonRef.current.style.pointerEvents = "none";
      }
    },
    []
  );

  // Reset to original state when mouse leaves the container
  const handleGroupBlur = useCallback(() => {
    if (!leftButtonRef.current || !rightButtonRef.current) return;

    // Reset both buttons to original state
    leftButtonRef.current.style.width = "";
    leftButtonRef.current.style.transform = "";
    leftButtonRef.current.style.opacity = "";
    leftButtonRef.current.style.pointerEvents = "";

    rightButtonRef.current.style.width = "";
    rightButtonRef.current.style.transform = "";
    rightButtonRef.current.style.opacity = "";
    rightButtonRef.current.style.pointerEvents = "";
  }, []);

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
          <ul ref={containerRef} onMouseLeave={handleGroupBlur}>
            <li ref={leftButtonRef} onMouseEnter={handleButtonHover}>
              <Link href="/locations" className={styles.link}>
                Locations
              </Link>
            </li>
            <li ref={rightButtonRef} onMouseEnter={handleButtonHover}>
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
