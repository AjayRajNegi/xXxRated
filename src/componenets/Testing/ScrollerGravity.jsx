import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const ScrollerGravity = () => {
  useGSAP(() => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#main",
        start: "50% 50%",
        end: "150% 50%",
        scrub: 2,
        pin: true,
      },
    });
    tl.to(
      "#center",
      {
        height: "100vh",
      },
      "a",
    )
      .to(
        "#top",
        {
          top: "-50%",
        },
        "a",
      )
      .to(
        "#bottom",
        {
          bottom: "-50%",
        },
        "a",
      )
      // .to(
      //   "#top-h1",
      //   {
      //     top: "60%",
      //   },
      //   "a",
      // )
      // .to(
      //   "#bottom-h1",
      //   {
      //     bottom: "-30%",
      //   },
      //   "a",
      // )

      .to(".content", {
        delay: -0.2,
        marginTop: "0%",
      });
  });
  return (
    <>
      <div
        id="main"
        className="relative h-screen w-full"
        style={{ marginBottom: "50vh" }}
      >
        <div
          id="top"
          className="absolute top-0 h-1/2 w-full overflow-y-hidden bg-white"
        >
          <h1
            id="top-h1"
            className="bg-red absolute left-1/2 top-full m-0 -translate-x-1/2 -translate-y-1/2 transform"
            style={{
              fontSize: "20vw",
              margin: "0",
              lineHeight: "30vw",
              fontFamily: "Arial",
            }}
          >
            XXXRated
          </h1>
        </div>
        <div id="center" className="w-full bg-black">
          /*{" "}
          <div
            class="content flex w-full flex-col items-center justify-center gap-4 text-white"
            style={{ marginTop: "100%" }}
          >
            <div className="btn">
              <h5>ENTER GALLERY</h5>
            </div>
            <h3
              className="w-3/12 text-center font-normal"
              style={{ fontSize: "3vw", fontFamily: "CardinalR" }}
            >
              <i>Browse</i> the work that define a <i>movement</i> and created a
              craft.
            </h3>

            <h2 style={{ fontSize: "20vw", fontFamily: "Founder" }}>(17)</h2>
          </div>{" "}
          */
        </div>
        <div
          id="bottom"
          className="absolute bottom-0 h-1/2 w-full overflow-y-hidden bg-white"
          style={{ fontSize: "20vw" }}
        >
          <h1
            id="bottom-h1"
            className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 transform"
          >
            XXXRated
          </h1>
        </div>
      </div>
    </>
  );
};

export default ScrollerGravity;
