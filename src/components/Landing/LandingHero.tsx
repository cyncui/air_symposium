import Image from "next/image";
import {
  OrnamentFlourishA,
  OrnamentFlourishB,
} from "../Ornament/OrnamentFlourish";
import { motion } from "motion/react";

export const LandingHero = () => {
  return (
    <section className="min-h-[30rem] h-[80svh] max-h-[50rem] w-full flex flex-col justify-center items-center bg-background">
      <div className="px-7.5 mx-auto my-auto">
        <div className="relative">
          <motion.h1
            className="text-heading-1 font-serif text-center text-foreground relative"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Asian-Indigenous Symposium
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 0 }}
            animate={{ opacity: 1, scale: 1, y: -8 }}
            transition={{ duration: 1 }}
            className="absolute top-0 -translate-y-full md:-translate-y-9/10 lg:-translate-y-4/5 left-1/2 -translate-x-1/2 origin-bottom"
          >
            <Image
              src="/svgs/knot_top.svg"
              alt="Top SVG"
              width={200}
              height={200}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 0 }}
            animate={{ opacity: 1, scale: 1, y: 8 }}
            transition={{ duration: 1 }}
            className="absolute bottom-0 translate-y-full md:translate-y-9/10 lg:translate-y-9/10 left-1/2 -translate-x-1/2 origin-top"
          >
            <Image
              src="/svgs/knot_bottom.svg"
              alt="Bottom SVG"
              width={200}
              height={140}
            />
          </motion.div>
          <OrnamentFlourishA className="max-md:hidden absolute -top-0 right-0 -translate-y-full" />
          <OrnamentFlourishB className="max-md:hidden absolute bottom-0 left-0 translate-y-full" />
        </div>

        {/* <div className="absolute left-1/2 top-[calc(50%-1rem)] transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <Image
            src="/../../../svgs/knot_top.svg"
            alt="Mobile SVG"
            width={200}
            height={200}
            // className=" max-sm:hidden mx-auto"
          />
          <Image
            src="/../../..\svgs\landingFlowerMobile204x414.svg"
            alt="Desktop SVG"
            width={200}
            height={400}
            className="sm:hidden mx-auto"
          />
        </div> */}
      </div>
    </section>
  );
};
