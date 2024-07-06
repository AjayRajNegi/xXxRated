import React from "react";
import "../componenets/styles/Gallery.css";
import d1 from "../componenets/images/dragon_1.jpg";
import d2 from "../componenets/images/dragon_2.jpg";
import d3 from "../componenets/images/dragon_3.jpg";
import d4 from "../componenets/images/dragon_4.jpg";
import d5 from "../componenets/images/dragon_5.jpg";
import d6 from "../componenets/images/dragon_6.jpg";
import d7 from "../componenets/images/dragon_7.jpg";
import d8 from "../componenets/images/dragon_8.jpg";
import d9 from "../componenets/images/dragon_9.jpg";
import d10 from "../componenets/images/dragon_10.jpg";
import { Navigation } from "../componenets/Index";

const Gallery = () => {
  return (
    <>
      <Navigation />
      <div className="galleryBody">
        <div className="banner">
          <div className="slider" style={{ "--quantity": 10 }}>
            <div className="item" style={{ "--position": 1 }}>
              <img src={d1} alt="" />
            </div>
            <div className="item" style={{ "--position": 2 }}>
              <img src={d2} alt="" />
            </div>
            <div className="item" style={{ "--position": 3 }}>
              <img src={d3} alt="" />
            </div>
            <div className="item" style={{ "--position": 4 }}>
              <img src={d4} alt="" />
            </div>
            <div className="item" style={{ "--position": 5 }}>
              <img src={d5} alt="" />
            </div>
            <div className="item" style={{ "--position": 6 }}>
              <img src={d6} alt="" />
            </div>
            <div className="item" style={{ "--position": 7 }}>
              <img src={d7} alt="" />
            </div>
            <div className="item" style={{ "--position": 8 }}>
              <img src={d8} alt="" />
            </div>
            <div className="item" style={{ "--position": 9 }}>
              <img src={d9} alt="" />
            </div>
            <div className="item" style={{ "--position": 10 }}>
              <img src={d10} alt="" />
            </div>
          </div>
          <div className="content">
            <h1 data-content="CSS ONLY">ANY TEXT</h1>
            <div className="author">
              <h2>any text</h2>
              <p>
                <b>lorem ipsum</b>
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto similique minima est
              </p>
            </div>
            <div className="model"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
