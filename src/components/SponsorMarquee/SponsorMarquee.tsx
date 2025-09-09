import React, { useState } from "react";
import SimpleMarquee from "@/components/Marquee/Marquee";

const sponsorList = [
  {
    name: "SFU David Lam Centre",
  },
  {
    name: "UBC Hampton Matching Program",
  },
  {
    name: "UBC CMS",
  },
  {
    name: "SFU Global Asia",
  },
  {
    name: "SFU Faculty of Arts and Social Sciences",
  },
  {
    name: "SFU Gender and Sexuality Studies",
  },
  {
    name: "SFU Indigenous Studies",
  },
  {
    name: "SFU Sociology and Anthropology",
  },
  {
    name: "UBC Asian Studies",
  },
  {
    name: "UBC History",
  },
];

const MarqueeItem = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-2 sm:mx-3 md:mx-4 lg:mx-5 hover:scale-110 cursor-pointer duration-300 ease-in-out flex items-center justify-center">
    {children}
  </div>
);

const DotSeparator = () => (
  <span className="mx-2 sm:mx-3 md:mx-4 lg:mx-5 text-base sm:text-lg md:text-xl lg:text-2xl">
    ✸
  </span>
);

export default function SimpleMarqueeDemo() {
  const sponsors = sponsorList;

  const [container, setContainer] = useState<HTMLElement | null>(null);

  return (
    <div
      className="flex w-full h-auto relative justify-center items-center flex-col mb-4 sm:mb-6 md:mb-8"
      ref={(node) => setContainer(node)}
    >
      <div className="w-full sm:w-10/12 md:w-full lg:w-full justify-center items-center flex flex-col">
        <SimpleMarquee
          className="w-full overflow-hidden"
          baseVelocity={2}
          repeat={5}
          draggable={false}
          scrollSpringConfig={{ damping: 50, stiffness: 400 }}
          slowDownFactor={0.3}
          slowdownOnHover
          slowDownSpringConfig={{ damping: 60, stiffness: 300 }}
          scrollAwareDirection={true}
          scrollContainer={container ? { current: container } : undefined}
          useScrollVelocity={true}
          direction="left"
        >
          {sponsors.map((src, i) => (
            <React.Fragment key={i}>
              <MarqueeItem>
                <h2 className="text-base max-sm:text-xs md:text-base lg:text-xl uppercase tracking-wide whitespace-nowrap font-medium">
                  {src.name}
                </h2>
              </MarqueeItem>
              <DotSeparator />
            </React.Fragment>
          ))}
        </SimpleMarquee>
      </div>
    </div>
  );
}
