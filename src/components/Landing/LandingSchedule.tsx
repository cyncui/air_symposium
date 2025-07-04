import { useRef, useState } from "react";
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
    text: "This day centres the learnings and knowledge of Indigenous and Asian communities: community organizers, activists, scholars, and members come together to share resources and skills rooted in lived experiences and grassroots organizing with academics learning and reflecting. Workshops and dialogue circles explore how we can care for each other in our movements, build power together, and pass knowledge between generations. These spaces are committed to mutual learning and solidarity, recognizing that organizing is a form of knowledge.",
    image: "/images/day1_vector.png",
  },
  {
    text: "The first day of the conference will consist of various community-led sessions, where organizers will educate attendees on the struggles and experiences of Asian-Indigenous coalition building.",
    image: "/images/day2_vector.png",
  },
  {
    text: "The first day of the conference will consist of various community-led sessions, where organizers will educate attendees on the struggles and experiences of Asian-Indigenous coalition building.",
    image: "/images/day3_vector.png",
  },
];
export const LandingSchedule = () => {
  const ref = useRef(null);
  const [mode, setMode] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const insetReference = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

  const colorShift = useTransform(
    scrollYProgress,
    [0.1, 0.9],
    ["#fe0000", "#facc15"]
  );
  const inset = useMotionTemplate`inset(0 0 calc(100% - ${insetReference} * 100%) 0)`;
  const update = useTransform(scrollYProgress, [0.1, 0.7], [0, 3]);
  // const scale = useTransform(update, [1.5, 2, 2.5, 3], [2, 1.25, 1.25, 1]);
  useMotionValueEvent(update, "change", (latest) => {
    setMode(Math.floor(latest));
  });

  return (
    <motion.div
      className="relative subsection mx-auto min-h-[800lvh]"
      style={{ background: colorShift }}
    >
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
      <div className="sticky top-0 h-lvh min-h-[36rem] col-span-full grid grid-cols-subgrid grid-rows-[min-content_min-content] place-content-center-safe gap-y-4 overflow-hidden">
        <div className="col-span-5 col-start-2 sm:col-span-3 sm:col-start-3 ">
          {/* <h2 className="text-center air-heading-2 mb-4">Sessions</h2> */}
          <OrnamentMorph
            progress={scrollYProgress}
            className="relative w-full m-auto"
          />
        </div>
        <div className="col-span-full sm:col-start-2 sm:col-span-5 lg:col-span-2 lg:-order-1 self-center grid grid-cols-[3rem_1fr] gap-4">
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
                className="font-bold uppercase text-center"
              >
                <motion.time
                  dateTime={date}
                  className="flex flex-col"
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
            <div className="bg-red-500">
              <ul className="relative">
                {items.map((items, i) => (
                  <motion.li
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: mode === i + 1 ? 1 : 0,
                      y: mode === i + 1 ? 0 : 20,
                    }}
                    transition={{ duration: 0.3 }}
                    key={i}
                    className="absolute inset-0"
                  >
                    <article className="lg:text-xl">
                      <p className="mb-2">
                        From Day 1, we gather to share knowledge from a myriad
                        of Indigenous and Asian experiences.
                      </p>
                      <p>
                        With early discussions about our communities, we unravel
                        what solidarity looks like today and tomorrow.
                      </p>
                    </article>
                  </motion.li>
                ))}
              </ul>
            </div>
            {/* <p>Schedule coming soon</p> */}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
