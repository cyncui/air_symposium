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
export const DayCTA = () => {
  const [selectedDay, setSelectedDay] = useState<DayKey>("day1");
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const { text, image } = ctaContent[selectedDay];
  return (
    <div className="bg-red-500 col-span-full md:col-span-5 md:col-start-2 grid grid-cols-subgrid">
      <div className="flex gap-4 mb-6 flex-col max-w-[100vw] md:max-w-[50vw] pt-[10vh] sm:justify-center">
        <div className="flex flex-row text-nowrap justify-between md:justify-start">
          {(Object.keys(ctaContent) as DayKey[]).map((day) => (
            <h2
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`font-serif text-ornament cursor-pointer transition-colors duration-200 mr-[6vw] text-nowrap${
                selectedDay === day
                  ? "text-theme-light"
                  : "text-[#F89C80] hover:text-gray-600"
              }`}
            >
              {day.replace("day", "Day ")}
            </h2>
          ))}
        </div>
        <div className="w-full lg:w-[40vw] lg:mr-[10vw]">
          <p>{text}</p>
          <a href="">
            <p className="font-script text-ornament text-theme-light mt-[15vh]">
              Learn more{" "}
            </p>
          </a>
        </div>
      </div>

      <div
        className="relative col-span-full bg-orange-500 min-h-[800lvh]"
        ref={ref}
      >
        <motion.div
          className="fixed top-4 left-4 size-8 bg-blue-500 rounded-full z-50"
          style={{ scale: scrollYProgress }}
        />
        <div className="sticky top-0 h-lvh bg-background flex items-center">
          <OrnamentMorph progress={scrollYProgress} className="" />
        </div>
      </div>
    </div>
  );
};
