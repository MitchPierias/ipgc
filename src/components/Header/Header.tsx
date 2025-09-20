"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";
import { CrossIcon } from "src/elements/Icons/CrossIcon";
import { MenuIcon } from "src/elements/Icons";

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "FAQ", href: "/faq" },
    { label: "Referral Form", href: "/referral" },
    { label: "Patient Portal", href: "/patient-portal" },
    { label: "Results Portal", href: "/results-portal" },
    { label: "About", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <header id="header" role="banner" className={styles.frame}>
      <Link href="/" className={styles.logo}>
        <Image
          src="/svg/ipgc_logo.svg"
          alt="Interventional Pain GC"
          width={300}
          height={100}
        />
      </Link>

      <div className={styles.controls}>
        <nav
          className={styles.nav}
          itemScope
          itemType="https://schema.org/SiteNavigationElement"
        >
          <ul>
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={styles.navLink}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Controls */}
        <div className={styles.mobileControls}>
          <button
            className={styles.hamburger}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <CrossIcon size={24} /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <nav className={styles.mobileNav}>
            <ul className={styles.mobileNavList}>
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={styles.mobileNavLink}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};
