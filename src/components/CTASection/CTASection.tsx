"use client";

import React from "react";
import Link from "next/link";

const CTASection = () => {
  return (
    <section
      id="cta"
      className="pt-10 pb-10 f-white relative"
      style={{
        backgroundImage:
          "url('https://wholebodymri.com.au/wp-content/uploads/2024/11/cta-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="wrap relative z-10">
        <div className="cta_in p-35 br-25">
          <h2 className="f_42 mb-2 f-white text-center font-medium">
            Start Your Journey
          </h2>
          <h3 className="f_42 max-w-480 mb-2 f-white">
            Why should I consider a Whole Body MRI™ scan?
          </h3>
          <div className="f_20 mb-25 max-w-520 f-white">
            A Whole Body MRI™ scan is ideal for proactive healthcare,
            particularly for individuals with a family history of certain
            diseases, those undergoing cancer treatment, or anyone seeking to
            take control of their health by detecting conditions early.
          </div>

          <Link className="btn hidemobile" href="/contact">
            <div>Journey into the known with a Whole Body MRI™ scan</div>
            <span></span>
          </Link>

          <Link className="btn showmobile" href="/contact">
            <div>Book Now</div>
            <span></span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
