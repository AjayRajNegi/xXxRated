import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/ChooseSection.css";
import vS1 from "../componenets/videos/Sequence1.mp4";
import vS2 from "../componenets/videos/Sequence2.mp4";
import vS3 from "../componenets/videos/Sequence3.mp4";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const ChooseSection = () => {
  useGSAP(() => {
    const details = gsap.utils.toArray(
      ".desktopContentSection:not(:first-child)",
    );
    const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)");

    gsap.set(photos, { yPercent: 101 });

    const allPhotos = gsap.utils.toArray(".desktopPhoto");

    let mm = gsap.matchMedia();

    mm.add("(min-width: 600px)", () => {
      console.log("desktop");

      ScrollTrigger.create({
        trigger: ".gallery",
        start: "top top",
        end: "bottom bottom",
        pin: ".right",
      });

      details.forEach((detail, index) => {
        let headline = detail.querySelector("h1");
        let animation = gsap
          .timeline()
          .to(photos[index], { yPercent: 0 })
          .set(allPhotos[index], { autoAlpha: 0 });
        ScrollTrigger.create({
          trigger: headline,
          start: "top 80%",
          end: "top 50%",
          animation: animation,
          scrub: true,
          markers: false,
        });
      });

      return () => {
        console.log("mobile");
      };
    });
  });

  return (
    <div>
      <p className="spacer uppercase">
        why choose <br /> xxxrated
      </p>

      <div className="gallery">
        <div className="left">
          <div className="desktopContent">
            <div className="desktopContentSection">
              <h1>TECHNICAL SUPPORT</h1>
              <p className="uppercase">
                Red is a color often associated with strong emotions such as
                passion, love, and anger.
              </p>
            </div>
            <div className="desktopContentSection">
              <h1>PRODUCTS QUALITY</h1>
              <p className="uppercase">
                Green is a color that is often associated with nature, growth,
                and harmony. It is a calming and relaxing color that can evoke
                feelings of balance, stability, and freshness.
              </p>
            </div>
            <div className="desktopContentSection">
              <h1>CUSTOMIZATION</h1>
              <p className="uppercase">
                Pink is a color that is often associated with femininity,
                romance, and sweetness.
              </p>
            </div>
            <div className="desktopContentSection">
              <h1>PERSONAL PREFERENCES</h1>
              <p className="uppercase">
                Blue is a color that is often associated with calmness, trust,
                and reliability.
              </p>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="mobileContent">
            <h1>TECHNICAL SUPPORT</h1>
            <p className="uppercase" muted>
              Red is a color often associated with strong emotions such as
              passion, love, and anger.
            </p>
            <div className="mobilePhoto red">
              <video
                src={vS1}
                controls
                preload="none"
                autoPlay
                loop
                muted
              ></video>
            </div>

            <h1>PRODUCTS QUALITY</h1>
            <p className="uppercase">
              Green is a color that is often associated with nature, growth, and
              harmony.
            </p>
            <div className="mobilePhoto green">
              <video
                src={vS2}
                controls
                muted
                loop
                preload="none"
                autoPlay
              ></video>
            </div>

            <h1>CUSTOMIZATION</h1>
            <p className="uppercase">
              Pink is a color that is often associated with femininity, romance,
              and sweetness.
            </p>
            <div className="mobilePhoto pink">
              <video
                src={vS3}
                controls
                muted
                loop
                preload="none"
                autoPlay
              ></video>
            </div>

            <h1>PERSONAL PREFERENCES</h1>
            <p className="uppercase">
              Blue is a color that is often associated with calmness, trust, and
              reliability.
            </p>
            <div className="mobilePhoto blue">
              <video
                src={vS1}
                controls
                muted
                loop
                preload="none"
                autoPlay
              ></video>
            </div>
          </div>

          <div className="desktopPhotos">
            <div className="desktopPhoto red">
              <video
                src={vS1}
                controls
                muted
                loop
                preload="none"
                autoPlay
              ></video>
            </div>
            <div className="desktopPhoto green">
              <video
                src={vS2}
                controls
                muted
                loop
                preload="none"
                autoPlay
              ></video>
            </div>
            <div className="desktopPhoto pink">
              <video
                src={vS3}
                controls
                muted
                loop
                preload="none"
                autoPlay
              ></video>
            </div>
            <div className="desktopPhoto blue">
              <video
                src={vS1}
                controls
                muted
                loop
                preload="none"
                autoPlay
              ></video>
            </div>
          </div>
        </div>
      </div>

      <div className="spacer"></div>
      <div className="spacer"></div>
      <div className="spacer"></div>
    </div>
  );
};

export default ChooseSection;
