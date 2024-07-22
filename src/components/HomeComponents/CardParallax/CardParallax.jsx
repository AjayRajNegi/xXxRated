import Card from "./Card";
import { projects } from "./Data";
import styles from "./Card.module.css";

export default function CardParallax() {
  return (
    <>
      <p className="bg-black pb-[4vw] pl-[4vw] pt-[4vw] text-4xl uppercase tracking-[-2px] text-white md:text-4xl md:tracking-[-5px] lg:text-7xl">
        why choose <br /> xxx rated
      </p>
      <main className={styles.main}>
        {projects.map((project, i) => {
          return <Card key={`p_${i}`} {...project} i={i} />;
        })}
      </main>
    </>
  );
}
