import { useRef, useState } from "react";
import { OrnamentMorph } from "../Ornament/OrnamentMorph";
import { motion, useScroll } from "motion/react";
import Link from "next/link";

type DayKey = "day1" | "day2" | "day3";

const ctaContent: Record<
  DayKey,
  {
    text: string;
    image: string;
  }
> = {
  day1: {
    text: "This day centres the learnings and knowledge of Indigenous and Asian communities: community organizers, activists, scholars, and members come together to share resources and skills rooted in lived experiences and grassroots organizing with academics learning and reflecting. Workshops and dialogue circles explore how we can care for each other in our movements, build power together, and pass knowledge between generations. These spaces are committed to mutual learning and solidarity, recognizing that organizing is a form of knowledge.",
    image: "/images/day1_vector.png",
  },
  day2: {
    text: "The first day of the conference will consist of various community-led sessions, where organizers will educate attendees on the struggles and experiences of Asian-Indigenous coalition building.",
    image: "/images/day2_vector.png",
  },
  day3: {
    text: "The first day of the conference will consist of various community-led sessions, where organizers will educate attendees on the struggles and experiences of Asian-Indigenous coalition building.",
    image: "/images/day3_vector.png",
  },
};
export const LandingSchedule = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <div className="relative subsection mx-auto bg-gradient-to-b from-yellow-500 to-blue-500 min-h-[800lvh]">
      {/* motion handlers */}
      <div className="absolute inset-0" ref={ref} />
      <div
        id="test"
        className="absolute inset-x-0 h-1/8 top-1/4 bg-gradient-to-b from-green-500 to transparent"
      />
      <motion.div
        className="fixed top-4 left-4 size-8 bg-white border border-white rounded-full z-50"
        style={{ scale: scrollYProgress, opacity: scrollYProgress }}
      />
      {/* content */}
      <div className="sticky top-0 h-lvh min-h-[36rem] col-span-full grid grid-cols-subgrid auto-rows-min gap-y-6">
        <div className="col-span-5 col-start-2 lg:col-span-3 bg-green-500 pt-20">
          <h2 className="text-center">Sessions</h2>
          <OrnamentMorph
            progress={scrollYProgress}
            className="relative w-full"
          />
        </div>
        <nav className="bg-red-500 col-start-1 flex flex-col gap-6">
          <Link href="#test" className="font-bold uppercase text-center">
            <time dateTime="2025-09-16" className="flex flex-col">
              <span className="text-xs tracking-widest">Sep</span>
              16
            </time>
          </Link>
          <Link href="#test" className="font-bold uppercase text-center">
            <time dateTime="2025-09-17" className="flex flex-col">
              <span className="text-xs tracking-widest">Sep</span>
              17
            </time>
          </Link>
          <Link href="#test" className="font-bold uppercase text-center">
            <time dateTime="2025-09-18" className="flex flex-col">
              <span className="text-xs tracking-widest">Sep</span>
              18
            </time>
          </Link>
        </nav>
        <div className="col-span-6">
          <article>
            <p className="mb-2">
              From Day 1, we gather to share knowledge from a myriad of
              Indigenous and Asian experiences.
            </p>
            <p>
              With early discussions about our communities, we unravel what
              solidarity looks like today and tomorrow.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};
