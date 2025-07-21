"use client";

import React from "react";

const JourneyAnimation = () => {
  return (
    <section
      id="journey"
      className="bg-darkgrey f-white flex flex_cen flex_jcen min-h-100 relative overflowh"
    >
      <div>
        <div className="journey_item">
          <h3 className="f_54 notanim text-center">Journey into the known</h3>
        </div>
      </div>

      <div className="journey_bg absolute inset-0 flex items-center justify-center opacity-10">
        <img
          src="https://wholebodymri.com.au/wp-content/uploads/2024/10/WBMRI-Icon-Platinum.svg"
          alt="Whole Body MRI Icon"
          className="w-96 h-96 object-contain"
        />
      </div>

      <div className="journey_circle absolute inset-0">
        {/* Animated circles can be added here with CSS animations */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white rounded-full opacity-30 animate-pulse"></div>
        <div
          className="absolute top-1/3 right-1/4 w-3 h-3 bg-white rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-white rounded-full opacity-25 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/3 right-1/3 w-5 h-5 bg-white rounded-full opacity-15 animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>
    </section>
  );
};

export default JourneyAnimation;
