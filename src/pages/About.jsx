import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import www from "../componenets/images/icons8-web.gif";
import bw from "../componenets/images/bwN.png";
import "../componenets/styles/About.css";
import { Footer } from "../componenets/Index";

const About = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);
  const closeRef = useRef(null);
  const tl = useRef(
    gsap.timeline({ defaults: { duration: 0.8, ease: "expo.inOut" } }),
  );

  useEffect(() => {
    tl.current
      .to(navRef.current, { right: 0 })
      .to(navRef.current, { height: "100vh" }, "-=.1")
      .to(
        "nav ul li a",
        { opacity: 1, pointerEvents: "all", stagger: 0.2 },
        "-=.8",
      )
      .to(closeRef.current, { opacity: 1, pointerEvents: "all" }, "-=.8")
      .to("nav h2", { opacity: 1 }, "-=1")
      .reverse();
  }, []);

  const toggleMenu = () => {
    if (!isMenuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
    setIsMenuOpen(!isMenuOpen);
  };
  useGSAP(() => {
    gsap.from(".nav-main-text", 1.8, {
      y: 200,
      ease: "power4.out",

      stagger: {
        amount: 0.3,
      },
    });
  });

  return (
    <>
      <div className="navBody">
        <div className="body-container" onClick={toggleMenu}>
          <div className="bars"></div>
        </div>
        <div className="nav-main">
          <div className="nav-main-text font-bold">
            CONTACT
            <div className="nav-main-subtext text-xl md:text-4xl">
              Intensify your Taste.
            </div>
          </div>
        </div>
        <nav ref={navRef}>
          <h2>XXXRated</h2>
          <div className="close" ref={closeRef} onClick={toggleMenu}>
            <div></div>
          </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* About body */}
      <div className="contact">
        <div className="mask-header flex justify-between">
          <div className="mask-header-first flex items-center gap-2 leading-4">
            <img src={www} alt="" />
            <p className="">
              BASED IN DELHI (INDIA) AND <br /> WORKING NATIONWIDE
            </p>
          </div>
          <div className="mask-header-second hidden text-right leading-4 md:flex">
            <p>
              ©2024 XXXRATED <br />
              ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
        <div className="main-contact flex flex-col items-center justify-center text-center">
          <div className="main-contact-content">
            <span className="text-sm md:text-base">FOR GENERAL ENQUIRY</span>
            <br />
            <p className="text-3xl md:text-7xl">INFO@VIBOR.IT</p>
          </div>
          <div className="main-contact-content">
            <span className="text-sm md:text-base">
              FOR WHOLESALE AND ORDERS
            </span>
            <br />
            <p className="text-3xl md:text-7xl">SALES@VIBOR.IT</p>
          </div>
          <div className="main-contact-content pb-9">
            <span className="text-sm md:text-base">PHONE</span>
            <br />
            <p className="text-3xl md:text-7xl">(+39) 02 66.204.556</p>
          </div>
        </div>
        <div className="contact-headquater grid grid-cols-1 md:grid-cols-2">
          <img src={bw} alt="" />
          <div className="contact-headquater-details flex flex-col justify-between gap-3">
            <p className="pt-5 text-xl">HEADQUATER</p>
            <p className="text-7xl">
              VIA DON B.GRAZIOLI 57 20161 MILANO (ITALY)
            </p>
          </div>
        </div>
        <hr className="mask-hr" />
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default About;
