"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  const navigationItems = [
    { label: "About", href: "/about" },
    { label: "Packages", href: "/packages" },
    { label: "Reports", href: "/our-reports" },
    { label: "Experience", href: "/your-experience" },
    { label: "Technology", href: "/our-technology" },
    { label: "Difference", href: "/our-difference" },
    { label: "Resources", href: "/resources" },
    { label: "FAQ", href: "/frequently-asked-questions" },
    { label: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/wholebodymri/",
      icon: "/wp-content/themes/wholebodymri/img/linkedin.svg",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/whole.body.mri/",
      icon: "/wp-content/themes/wholebodymri/img/instagram.svg",
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@WholeBodyMRI",
      icon: "/wp-content/themes/wholebodymri/img/youtube.svg",
    },
  ];

  return (
    <footer
      id="footer"
      className="pt-8 pb-8 f-white bg-slate-900"
      role="contentinfo"
    >
      <div className="wrap">
        <div className="footer_top flex_2 mb-6">
          <div className="flex_col">
            <Link href="/" className="logo flex flex_cen mb-6">
              <img
                src="https://wholebodymri.com.au/wp-content/uploads/2024/10/logo-text.svg"
                alt="Whole Body MRI™"
                className="h-8 w-auto"
              />
            </Link>

            <div>
              <div className="f_24 fw-400 mb-1 f-white">
                Referral/Screening Request Form
              </div>
              <Link
                className="btn btn-o btn-pdf notanim"
                href="/wp-content/uploads/2025/01/WBMRI_Referral_v2_14Jan25.pdf"
                target="_blank"
              >
                <div>Download Form</div>
                <span></span>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="footer_menu flex">
              <nav
                className="f_42 notanim"
                itemScope
                itemType="https://schema.org/SiteNavigationElement"
              >
                <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {navigationItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="f-white hover:text-slate-300 transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="socwrap flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  className="soc w-8 h-8 flex items-center justify-center"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-6 h-6"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="footer_bottom flex_2">
          <div className="flex flex_end text-uppercase items-center gap-4">
            <Link href="/" className="logo flex flex_cen">
              <img
                src="https://wholebodymri.com.au/wp-content/uploads/2024/10/logo.svg"
                alt="Whole Body MRI™"
                className="h-6 w-auto"
              />
            </Link>
            <Link
              href="/privacy-policy"
              className="ff-roboto f-white opacity-05 f_16 text-uppercase hover:opacity-75"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="ff-roboto f-white opacity-05 f_16 text-uppercase hover:opacity-75"
            >
              Terms and Conditions
            </Link>
          </div>

          <div className="flex flex_end items-center gap-4">
            <span className="ff-roboto f_16 text-uppercase">
              <span className="opacity-05 f-white">Brand & Website by</span>{" "}
              <Link
                className="opacity-05 f-white hover:opacity-75"
                href="https://dsrb.com.au/"
                target="_blank"
                rel="noopener noreferrer"
              >
                DSR Branding
              </Link>
            </span>
            <div className="f_24 fw-400 f-white">Journey into the known.</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
