import Link from "next/link";
import { motion, useScroll } from "motion/react";
import Image from "next/image";

import clsx from "clsx";
import { useState } from "react";

export const Header = () => {
  const { scrollY } = useScroll();

  const [scrolled, setScrolled] = useState(false);

  // useMotionValueEvent(scrollY, "change", (latest) => {
  //   console.log("Scrolled to:", latest);
  //   if (latest > 32 != scrolled) {
  //     console.log("Scrolled state changed:", latest > 32);
  //     setScrolled(latest > 32);
  //   }
  // });

  return (
    <motion.header
      className={clsx(
        "inset-x-0 fixed top-0 z-50 font-serif bg-gradient-to-b from-background to-transparent"
      )}
    >
      <nav className="py-4 px-7.5 max-w-[2160px] mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="hover:scale-110 hover:-rotate-5 ease-[cubic-bezier(0.34,1.86,0.64,1)] duration-500 transition-transform"
        >
          <Image src="/svgs/knot_sm.svg" alt="" width={64} height={64} />
        </Link>
        {/* <menu className="flex gap-8 justify-end">
          <LinkItem href="/schedule">Schedule</LinkItem>
        </menu> */}
      </nav>
    </motion.header>
  );
};

const LinkItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <li>
      <Link href={href} className="relative text-3xl">
        {children}
        {/* <div className="absolute right-0 bg-gray-200 w-40 h-10 border border-background" /> */}
      </Link>
    </li>
  );
};
