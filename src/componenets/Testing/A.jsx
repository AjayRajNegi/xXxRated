import React from "react";
import "./A.css";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const A = () => {
  const racesWrapperRef = useRef(null);
  const racesRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const races = racesRef.current;
    const racesWidth = races.scrollWidth;
    const scrollAmount = -(racesWidth - window.innerWidth);

    const tween = gsap.to(races, {
      x: scrollAmount,
      duration: 3,
      ease: "none",
    });

    ScrollTrigger.create({
      trigger: racesWrapperRef.current,
      start: "top top", // Fixed the start position
      end: () => `+=${scrollAmount}`, // Corrected the end position
      pin: true,
      animation: tween,
      scrub: 1,
      invalidateOnRefresh: true,
      markers: false, // Removed markers for cleaner presentation
    });
  }, []);

  return (
    <div>
      <div className="space-50vh lightBG"></div>

      <div className="racesWrapper" ref={racesWrapperRef}>
        <div className="races" ref={racesRef}>
          <h2>Monaco</h2>
          <h2>Austria</h2>
          <h2>Hungary</h2>
          <h2>Netherlands</h2>
          <h2>Japan</h2>
        </div>
      </div>

      <div className="space-100vh lightBG"></div>
    </div>
  );
};

export default A;
