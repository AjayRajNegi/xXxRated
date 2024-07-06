import "./AnimatedText.css";
import gsap from "gsap";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";

const AnimatedText = () => {
  useGSAP(() => {
    const myText = new SplitType("#my-text");
    gsap.to(".char", {
      y: 0,
      stagger: 0.05,
      delay: 0.2,
      duration: 0.1,
    });
  });
  return (
    <>
      <div className="ani">
        <h1 id="my-text">woah.text</h1>
      </div>
    </>
  );
};

export default AnimatedText;
