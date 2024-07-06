import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useSpring, animated } from "react-spring";

function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}
function LodingAnimation() {
  useGSAP(() => {
    gsap.to(".counter", 0.25, {
      delay: 3.5,
      opacity: 0,
    });
    gsap.to(".bar", 1.5, {
      delay: 3.5,
      height: 0,
      stagger: {
        amount: 0.5,
      },
      ease: "power4.inOut",
    });
    gsap.to(".all", { display: "none", delay: 5 });

    // gsap.from(".container", { y: 2000, delay: 6 });
  });

  return (
    <>
      <div className="all h-screen w-full overflow-x-hidden">
        <h1 className="counter fixed z-20 flex h-screen w-screen items-center justify-center font-serif text-6xl text-white lg:text-8xl">
          <Number n={100} /> %
        </h1>
        <div className="overlay fixed flex h-screen w-screen">
          <div className="bar h-screen w-1/12 bg-black"></div>
          <div className="bar h-screen w-1/12 bg-black"></div>
          <div className="bar h-screen w-1/12 bg-black"></div>
          <div className="bar h-screen w-1/12 bg-black"></div>
          <div className="bar h-screen w-1/12 bg-black"></div>
          <div className="bar h-screen w-1/12 bg-black"></div>
          <div className="bar h-screen w-1/12 bg-black"></div>
          <div className="bar h-screen w-1/12 bg-black"></div>
          <div className="bar h-screen w-1/12 bg-black"></div>
          <div className="bar h-screen w-1/12 bg-black"></div>
          <div className="bar h-screen w-1/12 bg-black"></div>
          <div className="bar h-screen w-1/12 bg-black"></div>
        </div>
        {/* <div className="container z-0">
          <h1>Hellow</h1>
        </div> */}
      </div>
    </>
  );
}

export default LodingAnimation;
