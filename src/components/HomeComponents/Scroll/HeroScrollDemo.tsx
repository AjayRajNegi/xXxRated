import i from "./tab.jpg";
import j from "./tabS.jpg";
import { ContainerScroll } from "./ContainerScroll";

export default function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Unleash the power of <br />
              <span className="mt-1 text-4xl font-bold leading-none md:text-[6rem]">
                Fragrance
              </span>
            </h1>
          </>
        }
      >
        <img
          src={i}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto hidden h-full rounded-2xl object-cover object-left-top md:block"
          draggable={false}
        />
        <img
          src={j}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto block h-full rounded-2xl object-cover object-left-top md:hidden"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
