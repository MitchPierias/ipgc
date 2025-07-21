"use client";

import React from "react";
import Link from "next/link";

const LearnSection = () => {
  const features = [
    {
      icon: "https://wholebodymri.com.au/wp-content/uploads/2024/10/Tailored-Scanning-Experience.svg",
      title: "Tailored Scanning Experience",
      description:
        "Enjoy a painless 100-minute scan while watching your favourite movie, TV show, or listening to music of your choice.",
      link: "/your-experience",
      linkText: "Your Experience",
    },
    {
      icon: "https://wholebodymri.com.au/wp-content/uploads/2024/10/World-class-Radiologists.svg",
      title: "World-class Radiologists",
      description:
        "Backed by over a decade of research, our team of renowned MRI scientists and radiologists deliver the most accurate full-body MRI screening available.",
      link: "/about",
      linkText: "Our Team",
    },
    {
      icon: "https://wholebodymri.com.au/wp-content/uploads/2024/10/Unmatched-Accuracy.svg",
      title: "Unmatched Accuracy",
      description:
        "Leveraging cutting-edge 3 Tesla MRI technology, Whole Body MRI™ ensures unparalleled image quality for early and accurate detection of abnormalities.",
      link: "/our-technology",
      linkText: "Our Technology",
    },
    {
      icon: "https://wholebodymri.com.au/wp-content/uploads/2024/10/Timely-Reporting.svg",
      title: "Timely Reporting",
      description:
        "Receive a comprehensive radiologist report and images within 7 days, highlighting any abnormal findings to ensure you get clear, actionable information.",
      link: "/our-reports",
      linkText: "Our Reports",
    },
  ];

  return (
    <section id="learn" className="wrap pt-10 pb-10 section-white">
      <h2 className="f_42 mb-2 text-center font-medium">Learn</h2>
      <h3 className="f_42 max-w-420 mb-2">
        The Ultimate Proactive Health Screening
      </h3>

      <div className="flex_2 mb-2">
        {features.slice(0, 2).map((feature, index) => (
          <div key={index} className="icon_block">
            <img
              src={feature.icon}
              alt={feature.title}
              className="w-16 h-16 object-contain mb-4"
            />
            <h4 className="f_24 mb-25">{feature.title}</h4>
            <div className="f_20 mb-25 max-w-360 f-onyx">
              {feature.description}
            </div>
            <Link className="btn btn-text" href={feature.link}>
              <div>{feature.linkText}</div>
              <span></span>
            </Link>
          </div>
        ))}
      </div>

      <div className="flex_2">
        {features.slice(2, 4).map((feature, index) => (
          <div key={index + 2} className="icon_block">
            <img
              src={feature.icon}
              alt={feature.title}
              className="w-16 h-16 object-contain mb-4"
            />
            <h4 className="f_24 mb-25">{feature.title}</h4>
            <div className="f_20 mb-25 max-w-360 f-onyx">
              {feature.description}
            </div>
            <Link className="btn btn-text" href={feature.link}>
              <div>{feature.linkText}</div>
              <span></span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LearnSection;
