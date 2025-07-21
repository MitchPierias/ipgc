"use client";

import React from "react";
import Link from "next/link";

const FacilitySection = () => {
  return (
    <section id="facility" className="wrap pb-10 section-white">
      <div className="bubblewrap relative">
        <div className="bubble absolute top-0 left-0 w-32 h-32 bg-slate-100 rounded-full opacity-50"></div>
      </div>

      <h2 className="f_42 mb-2 text-center font-medium">Our Facility</h2>
      <h3 className="f_42 max-w-360 mb-2">
        Our World-class, Gold Coast Facility
      </h3>

      <div className="relative">
        <div className="flex_2 flex_acen flex_full-480 mb-2">
          <div className="facility_item">
            <img
              className="br-25 h-75 w-full object-cover"
              src="https://wholebodymri.com.au/wp-content/uploads/2024/10/WBMRI-3-scaled.jpg"
              alt="Whole Body MRI Facility Interior"
            />
          </div>
          <div className="facility_item">
            <img
              className="br-25 h-75 w-full object-cover"
              src="https://wholebodymri.com.au/wp-content/uploads/2024/10/WBMRI-34.jpg"
              alt="Whole Body MRI Equipment"
            />
          </div>
        </div>

        <Link className="btn hidemobile" href="/our-technology">
          <div>Learn more about our facility</div>
          <span></span>
        </Link>

        <Link className="btn showmobile" href="/our-technology">
          <div>Learn More</div>
          <span></span>
        </Link>
      </div>
    </section>
  );
};

export default FacilitySection;
