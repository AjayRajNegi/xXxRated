import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./styles/Scroller.css";
import { useGSAP } from "@gsap/react";
import { Footer } from "./Index";

gsap.registerPlugin(ScrollTrigger);

const Scroller = () => {
  useGSAP(() => {
    gsap.to(".page2 .slider", {
      transform: "translateX(-150%)",
      duration: 2,
      scrollTrigger: {
        trigger: ".page2",
        scroller: "body",
        start: "top 0%",
        end: "top -100%",
        scrub: 5,
        pin: true,
        pinSpacing: true,
      },
    });
  });
  return (
    <div className="scrollerBody">
      <div className="page2">
        <div className="slider">
          EXPERIENCE_<span className="italic">peak_with</span>_US
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Scroller;
