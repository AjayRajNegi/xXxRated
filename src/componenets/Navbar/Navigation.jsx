import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
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
      delay: 1,
      stagger: {
        amount: 0.3,
      },
    });
  });

  return (
    <div className="navBody">
      <div className="body-container" onClick={toggleMenu}>
        <div className="bars"></div>
      </div>
      <div className="nav-main">
        <div className="nav-main-text font-bold">XXXRATED</div>
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
            <Link to="/about">About</Link>
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
  );
};

export default Navigation;
