"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, X } from "lucide-react";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navigationItems = [
    { label: "About", href: "/about" },
    { label: "Packages", href: "/packages" },
    { label: "Experience", href: "/your-experience" },
    { label: "Technology", href: "/our-technology" },
    { label: "Difference", href: "/our-difference" },
    { label: "Resources", href: "/resources" },
    { label: "FAQs", href: "/frequently-asked-questions" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header id="header" role="banner" className={styles.header}>
      <Link href="/" className={styles.logo}>
        <img src="/svg/logo.svg" alt="Logo" />
      </Link>

      <div className={styles.headerRight}>
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

        <form
          action="/"
          method="get"
          className={`${styles.searchForm} ${isSearchOpen ? "w-64" : "w-8"}`}
          autoComplete="off"
        >
          <div className="relative flex items-center">
            <input
              type="text"
              name="s"
              className={`${styles.searchInput} ${
                isSearchOpen ? "w-64 opacity-100" : "w-0 opacity-0"
              }`}
              placeholder="Enter search..."
            />
            <button
              type="button"
              className={styles.searchButton}
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search size={18} />
            </button>
          </div>
        </form>
      </div>

      {/* Mobile Controls */}
      <div className={styles.mobileControls}>
        <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
          <Search size={20} />
        </button>
        <button
          className={styles.hamburger}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X size={24} />
          ) : (
            <>
              <span className={styles.hamburgerLine}></span>
              <span className={styles.hamburgerLine}></span>
              <span className={styles.hamburgerLine}></span>
            </>
          )}
        </button>
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

      {/* Mobile Search */}
      {isSearchOpen && (
        <div className={styles.mobileSearch}>
          <div className={styles.mobileSearchForm}>
            <form action="/" method="get" autoComplete="off">
              <input
                type="text"
                name="s"
                className={styles.mobileSearchInput}
                placeholder="Enter search..."
              />
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
