import { use, useRef, useState } from "react";
import { OrnamentMorph } from "../Ornament/OrnamentMorph";
import {
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import Link from "next/link";

const items = [
  {
    text: [
      <>
        From Day 1, we gather to share knowledge from a myriad of Indigenous and
        Asian experiences.
      </>,
      <>
        With <strong>early discussions about our communities</strong>, we
        unravel what solidarity looks like today and tomorrow.
      </>,
    ],
  },
  {
    text: [
      <>
        Day 2 presents <strong>five guided dialogues</strong> on histories of
        Asian-Indigenous relations.
      </>,
      <>
        Exhibits and talks highlight researched insights across topics from
        housing and climate justice, to diaspora and decolonizing the arts.
      </>,
    ],
  },
  {
    text: [
      <>
        <strong>A final day of co-creation</strong>, strengthening
        relationships, new and old, whether over brunch or during workshops.
      </>,
      <>
        Activities focus on putting new learnings into practice; creating
        resources to pass on knowledge.
      </>,
    ],
  },
];
export const LandingSchedule = () => {
  const ref = useRef(null);
  const [mode, setMode] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const insetReference = useTransform(scrollYProgress, [0.1, 0.7], [0, 1]);
  const insetTransform = useTransform(
    scrollYProgress,
    [0.125, 0.25, 0.375, 0.5, 0.625, 0.75],
    [3 / 26, 6 / 26, 13 / 26, 16 / 26, 23 / 26, 1]
  );
  const inset = useMotionTemplate`inset(0 0 calc(100% - ${insetTransform} * 100%) 0)`;
  const update = useTransform(scrollYProgress, [0, 0.125, 0.625], [0, 1, 3]);
  // const scale = useTransform(update, [1.5, 2, 2.5, 3], [2, 1.25, 1.25, 1]);
  useMotionValueEvent(update, "change", (latest) => {
    setMode(Math.round(latest));
  });

  return (
    <div className="relative subsection mx-auto min-h-[800lvh]">
      {/* motion handlers */}
      <div className="absolute inset-0" ref={ref} />
      {items.map((_, i) => (
        <div
          key={i}
          id={`day${i + 1}`}
          className="absolute inset-x-0 h-1/8"
          style={{
            top: `${(1 + 2 * i) * 12.5}%`,
          }}
        />
      ))}
      {/* content */}
      <div className="sticky top-0 h-lvh min-h-[36rem] col-span-full grid grid-cols-subgrid grid-rows-[min-content_min-content] place-content-center-safe gap-y-9 overflow-hidden">
        <div className="col-span-5 col-start-2 sm:col-span-3 sm:col-start-3 lg:col-start-2">
          {/* <h2 className="text-center air-heading-2 mb-4">Sessions</h2> */}
          <OrnamentMorph
            progress={scrollYProgress}
            className="relative w-full m-auto"
          />
        </div>
        <div className="col-span-full xs:col-start-2 xs:col-span-5 sm:col-start-3 sm:col-span-3 lg:col-span-2 self-center grid grid-cols-[3rem_1fr] gap-1.5">
          <nav className="flex flex-col gap-6 sticky top-0 h-fit">
            <div className="absolute inset-y-0 left-0 w-0.5 bg-foreground/20">
              <motion.div
                className="bg-foreground origin-top size-full"
                style={{ clipPath: inset }}
              />
            </div>
            {[
              { id: "day1", date: "2025-09-16", month: "Sep", day: "16" },
              { id: "day2", date: "2025-09-17", month: "Sep", day: "17" },
              { id: "day3", date: "2025-09-18", month: "Sep", day: "18" },
            ].map(({ id, date, month, day }, i) => (
              <Link
                key={id}
                href={`#${id}`}
                className="font-bold uppercase text-center h-9"
              >
                <motion.time
                  dateTime={date}
                  className="flex flex-col leading-none"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity:
                      mode === 0 && i === 0 ? 1 : mode === i + 1 ? 1 : 0.5,
                  }}
                >
                  <span className="text-xs tracking-widest">{month}</span>
                  {day}
                </motion.time>
              </Link>
            ))}
          </nav>
          <div>
            <div>
              <ul className="relative">
                {items.map((items, i) => (
                  <motion.li
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: mode === i + 1 || (mode === 0 && i == 0) ? 1 : 0,
                      y:
                        mode === i + 1 || (mode === 0 && i == 0)
                          ? 0
                          : mode > i
                          ? -20
                          : 20,
                    }}
                    transition={{ duration: 0.3 }}
                    key={i}
                    className="absolute inset-0"
                  >
                    <article className="lg:text-xl">
                      {items.text.map((text, j) => (
                        <p
                          className="mb-2 last-of-type:mb-0"
                          key={`schedule-text-${i}-${j}`}
                        >
                          {text}
                        </p>
                      ))}
                    </article>
                  </motion.li>
                ))}
              </ul>
            </div>
            {/* <p>Schedule coming soon</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};
