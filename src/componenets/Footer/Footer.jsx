import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <hr className="footer-hr" />
        <div className="footer-heading text-4xl">XXXRated</div>
        <div className="footer-content flex flex-col justify-start pt-8 md:flex-row md:justify-between">
          <div className="footer-left mb-9">
            <p className="text-md mb-4">Products</p>
            <p className="footer-links mb-1 text-sm">ZIPLINE</p>
            <p className="footer-links mb-1 text-sm">NO GAS</p>
            <p className="footer-links mb-1 text-sm">GAS</p>
          </div>
          <div className="footer-center mb-9 text-left md:text-center">
            <p className="text-md mb-4">Company</p>

            <p className="footer-links mb-1 text-sm">
              <Link to="/products">Products</Link>
            </p>
            <p className="footer-links mb-1 text-sm">
              <Link to="/gallery">Gallery</Link>
            </p>
            <p className="footer-links mb-1 text-sm">
              <Link to="/about">Contact</Link>
            </p>
            <p className="footer-links mb-1 text-sm">
              <Link to="/">Home</Link>
            </p>
          </div>
          <div className="footer-right">
            <p className="text-md mb-4">About</p>
            <p className="footer-links mb-1 text-sm">(+39) 02 66.204.556</p>
            <p className="footer-links mb-1 text-sm">SALES@VIBOR.IT</p>
            <p className="footer-links mb-1 text-sm">
              VIA DON B.GRAZIOLI <br /> 57 20161 MILANO
            </p>
          </div>
        </div>
        <hr className="footer-hr" />
        <div className="footer-footer text-sm">
          ©2024 XXXRATED All Rights Reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
