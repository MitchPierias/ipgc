"use client";

import React from "react";
import Link from "next/link";

const ResourcesSection = () => {
  const resources = [
    {
      id: 834,
      title:
        "Beyond the Narrative: What the Evidence Really Says About Full-Body MRI",
      image:
        "https://wholebodymri.com.au/wp-content/uploads/2025/07/national-cancer-institute-SP2C8o2EZBw-unsplash-scaled.jpg",
      categories: [
        "Benefits",
        "Disadvantages",
        "DWIBS",
        "Full-body MRI",
        "MRI",
        "Overdiagnosis",
        "Screening",
        "Technology differences",
      ],
      href: "/resources/benefits/beyond-the-narrative-what-the-evidence-really-says-about-full-body-mri/",
    },
    {
      id: 818,
      title: "The Evolution of Full-body MRI",
      image:
        "https://wholebodymri.com.au/wp-content/uploads/2025/07/WBMRI-Blog_Image-HistoryOfScanning.png",
      categories: ["Full-body MRI", "Imaging Science", "MRI", "Screening"],
      href: "/resources/the-evolution-of-full-body-mri/",
    },
    {
      id: 724,
      title: "Is your brain ageing faster than it should?",
      image: "https://wholebodymri.com.au/wp-content/uploads/2025/05/114.jpg",
      categories: ["Brain Health", "Conditions Detected", "MRI"],
      href: "/resources/brain-health/is-your-brain-ageing-faster/",
    },
    {
      id: 628,
      title: "Can Whole Body MRI™ detect Pancreatic Cancer?",
      image:
        "https://wholebodymri.com.au/wp-content/uploads/2024/11/experience-gallery-2.jpg",
      categories: ["Conditions Detected", "Full-body MRI", "Pancreatic Cancer"],
      href: "/resources/can-whole-body-mri-detect-pancreatic-cancer/",
    },
    {
      id: 617,
      title: "Why We Require a Referral for our Whole Body MRI™ Scan",
      image:
        "https://wholebodymri.com.au/wp-content/uploads/2024/11/cta-bg.jpg",
      categories: ["Full-body MRI", "MRI", "Screening"],
      href: "/resources/why-we-require-a-referral-for-our-whole-body-mri-scan/",
    },
    {
      id: 610,
      title:
        "The Best of Both Worlds: Why Whole Body MRI™ Includes Low-Dose CT Chest Screening",
      image:
        "https://wholebodymri.com.au/wp-content/uploads/2024/10/WBMRI-34.jpg",
      categories: ["Full-body MRI", "Imaging Science", "MRI", "Screening"],
      href: "/resources/the-best-of-both-worlds-why-whole-body-mri-includes-low-dose-ct-chest-screening/",
    },
  ];

  return (
    <section className="pt-10 pb-10">
      <div className="wrap">
        <div className="mb-3 flex_cen flex_full-320 justify-between items-center">
          <div>
            <h2 className="f_42 mb-0">Latest Resources</h2>
          </div>
          <div>
            <Link className="btn btn-b btn-small" href="/resources">
              View All
            </Link>
          </div>
        </div>

        <div className="resources_slider">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-25">
            {resources.map((resource) => (
              <article key={resource.id} className="resource_item bg-grey">
                <Link
                  href={resource.href}
                  title={resource.title}
                  className="d-block mb-2"
                >
                  <img
                    className="br-25 w-full h-48 object-cover"
                    src={resource.image}
                    alt={resource.title}
                  />
                </Link>

                <div className="resource_item-body">
                  <div>
                    <div className="mb-05">
                      {resource.categories.map((category, index) => (
                        <span key={index} className="resource_item-cat br-25">
                          {category}
                        </span>
                      ))}
                    </div>
                    <h2 className="mb-15">
                      <Link
                        href={resource.href}
                        title={resource.title}
                        className="notanim text-onyx hover:text-slate-600"
                      >
                        {resource.title}
                      </Link>
                    </h2>
                  </div>

                  <Link
                    className="btn notanim btn-b btn-small"
                    href={resource.href}
                    title={resource.title}
                  >
                    Read More
                    <span></span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="flex flex_cen justify-center">
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                {/* Pagination dots */}
                <span className="w-2 h-2 bg-slate-400 rounded-full"></span>
                <span className="w-2 h-2 bg-slate-900 rounded-full"></span>
                <span className="w-2 h-2 bg-slate-400 rounded-full"></span>
              </div>
              <div className="flex gap-2">
                <button className="slider-prev p-2 border border-slate-300 rounded-full">
                  ←
                </button>
                <button className="slider-next p-2 border border-slate-300 rounded-full">
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
