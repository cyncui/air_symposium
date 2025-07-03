import { useRef, useState } from "react";
import { OrnamentMorph } from "../Ornament/OrnamentMorph";
import { motion, useScroll } from "motion/react";

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
    <div className="subsection mx-auto bg-blue-500">
      <div
        className="relative col-span-5 col-start-2 lg:col-span-3 min-h-[800lvh]"
        ref={ref}
      >
        <motion.div
          className="fixed top-4 left-4 size-8 bg-blue-500 rounded-full z-50"
          style={{ scale: scrollYProgress }}
        />
        <div className="sticky top-0 h-lvh min-h-[36rem] bg-green-500 flex items-end py-16">
          <OrnamentMorph
            progress={scrollYProgress}
            className="absolute top-16 w-full"
          />
          <p className="text-center w-full">Test paragraph</p>
        </div>
      </div>
    </div>
  );
};
