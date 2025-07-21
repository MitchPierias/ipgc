"use client";

import React from "react";
import Link from "next/link";

const JourneyIntro = () => {
  return (
    <section className="wrap pt-10 pb-10 section-white">
      <h2 className="f_42 mb-2 text-center font-medium">
        Journey into the known
      </h2>

      <div className="flex_2">
        <div>
          <h1 className="f_42 max-w-700 mb-2">
            Whole Body MRI™ offers Australia's most comprehensive proactive
            health screening, housed in a world-class facility on the Gold
            Coast.
          </h1>
        </div>

        <div>
          <div className="mb-2 f-onyx">
            <p>
              Our revolutionary scan delivers the most advanced anatomical and
              functional imaging, setting a new benchmark in early detection.
            </p>
            <p>
              When it comes to longevity, identifying diseases early gives you
              the ultimate advantage, minimising unnecessary interventions.
            </p>
          </div>

          <Link className="btn hidemobile" href="/contact">
            <div>Schedule your Whole Body MRI™</div>
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

export default JourneyIntro;
