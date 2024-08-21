import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ChooseSection.css";
import vS1 from "../../../assets/videos/Sequence01.mp4";
import vS2 from "../../../assets/videos/Sequence02.mp4";
import vS3 from "../../../assets/videos/Sequence03.mp4";

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
              <h1>FREE FROM TRICLOSAN</h1>
              <p className="">
                Your health and well-being are our top priorities. That's why
                all XXX Rated perfumes and deodorants are completely free from
                triclosan.
              </p>
            </div>
            <div className="desktopContentSection">
              <h1>UNMATCHED QUALITY</h1>
              <p className="">
                We prioritize quality above all. Our perfumes and deodorants are
                crafted using the finest ingredients, ensuring a long-lasting
                and captivating fragrance that stands out.
              </p>
            </div>
            <div className="desktopContentSection">
              <h1>DIVERSE RANGE</h1>
              <p className="">
                XXX Rated offers a wide variety of scents, from floral and
                fruity to woody and oriental. Whether you’re looking for
                something fresh and invigorating or deep and sensual, we have
                the perfect scent for you.
              </p>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="mobileContent">
            <h1>FREE FROM TRICLOSAN</h1>
            <p className="">
              Your health and well-being are our top priorities. That's why all
              XXX Rated perfumes and deodorants are completely free from
              triclosan.
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

            <h1>UNMATCHED QUALITY</h1>
            <p className="">
              We prioritize quality above all. Our perfumes and deodorants are
              crafted using the finest ingredients, ensuring a long-lasting and
              captivating fragrance that stands out.
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

            <h1>DIVERSE RANGE</h1>
            <p className="">
              XXX Rated offers a wide variety of scents, from floral and fruity
              to woody and oriental. Whether you’re looking for something fresh
              and invigorating or deep and sensual, we have the
              perfect scent for you.
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
