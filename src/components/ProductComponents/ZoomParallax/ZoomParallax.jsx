import Picture1 from "../../../assets/images/Image1Cut.webp";
import Picture2 from "../../../assets/images/bcomp.webp";
import Picture3 from "../../../assets/images/Image3.webp";
import Picture4 from "../../../assets/images/OUD/Roud.jpg";
import Picture5 from "../../../assets/images/Image2.webp";
import Picture6 from "../../../assets/images/OUD/Boud.jpg";
import Picture7 from "../../../assets/images/OUD/Woud.jpg";
import { useRef } from "react";
import styles from "./ZoomParallax.module.scss";
import { useScroll, useTransform, motion } from "framer-motion";

export default function Index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: Picture1,
      scale: scale4,
    },
    {
      src: Picture2,
      scale: scale5,
    },
    {
      src: Picture3,
      scale: scale6,
    },
    {
      src: Picture4,
      scale: scale5,
    },
    {
      src: Picture5,
      scale: scale6,
    },
    {
      src: Picture6,
      scale: scale8,
    },
    {
      src: Picture7,
      scale: scale9,
    },
  ];

  return (
    <div className="block lg:hidden">
      <div ref={container} className={styles.container}>
        <div className={styles.sticky}>
          {pictures.map(({ src, scale }, index) => {
            return (
              <motion.div key={index} style={{ scale }} className={styles.el}>
                <div className={styles.imageContainer}>
                  <img src={src} alt="image" placeholder="blur" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
