
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const statistics = [
  {
    number: "90",
    heading: "More than",
    description: "distribution points",
    color: "from-emerald-500 to-green-600",
    numberColor: "text-emerald-500",
  },
  {
    number: "25",
    heading: "million tonnes",
    description: "The Group's production capacity",
    color: "from-green-500 to-emerald-600",
    numberColor: "text-green-600",
  },
  {
    number: "99+",
    heading: "integrated",
    description: "business solutions",
    color: "from-emerald-600 to-slate-600",
    numberColor: "text-slate-600",
  },
];

export default function ScrollStats() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // The track moves left as the page scrolls down
  // and reverses naturally when the user scrolls up.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[200vh] bg-white"
      aria-label="Company statistics"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex w-max will-change-transform"
        >
          {statistics.map((stat, index) => (
            <article
              key={stat.number}
              className="flex h-[280px] w-[50vw] shrink-0 items-center
                border-r border-emerald-100 px-5 sm:h-[340px]
                sm:px-8 lg:h-[400px] lg:px-10"
            >
              {/* Oversized number */}
              <div className="flex min-w-0 flex-1 items-center">
                <span
                  className={`bg-gradient-to-r ${stat.color}
                    bg-clip-text text-transparent
                    text-[clamp(8rem,19vw,16rem)]
                    font-black leading-[0.8] tracking-[-0.09em]
                    whitespace-nowrap`}
                >
                  {stat.number}
                </span>
              </div>

              {/* Supporting text */}
              <div className="ml-4 flex w-[110px] shrink-0 flex-col
                justify-center sm:ml-6 sm:w-[150px]
                lg:ml-8 lg:w-[190px]"
              >
                <h2 className="text-xl  font-bold leading-tight
                  text-neutral-800 sm:text-2xl lg:text-4xl"
                >
                  {stat.heading}
                </h2>

                <p className="mt-2 text-sm leading-relaxed
                  text-neutral-600 sm:text-base lg:text-lg"
                >
                  {stat.description}
                </p>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
