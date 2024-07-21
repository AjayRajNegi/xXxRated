import styles from "./Card.module.css";
import { projects } from "./Data";
import Card from "./Card";

export default function CardParallax() {
  return (
    <>
      <p className="bg-white pb-[4vw] pl-[4vw] pt-[4vw] text-2xl uppercase tracking-[-5px] text-black md:text-4xl lg:text-7xl">
        why choose <br /> xxxrated
      </p>
      <main className={styles.main}>
        {projects.map((project, i) => {
          return <Card key={`p_${i}`} {...project} i={i} />;
        })}
      </main>
    </>
  );
}
