import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const MyComponent = () => {
  const svgRef = useRef(null);
  const initialPathRef = useRef(`M 00 100 Q 500 100 1000 100`);
  const finalPathRef = useRef(`M 00 100 Q 500 100 1000 100`);

  useEffect(() => {
    const string = svgRef.current;

    const handleMouseMove = (event) => {
      const initialPath = `M 00 100 Q ${event.clientX} ${event.clientY} 1000 100`;

      gsap.to(string.querySelector("path"), {
        attr: { d: initialPath },
        duration: 0.3,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(string.querySelector("path"), {
        attr: { d: finalPathRef.current },
        duration: 1.3,
        ease: "elastic.out(1,0.2)",
      });
    };

    string.addEventListener("mousemove", handleMouseMove);
    string.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      string.removeEventListener("mousemove", handleMouseMove);
      string.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="bg-red">
      <div className="string m-0 bg-black p-0" ref={svgRef}>
        <svg width="1000" height="200" className="m-0 mx-auto p-0">
          <path
            d="M 0 100 Q 500 100 1000 100"
            stroke="white"
            fill="transparent"
          />
        </svg>
      </div>
    </div>
  );
};

export default MyComponent;
