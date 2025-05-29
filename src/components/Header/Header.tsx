import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import Image from "next/image";

import clsx from "clsx";
import { useEffect, useState } from "react";

export const Header = () => {
  const { scrollY } = useScroll();

  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Scrolled to:", latest);
    if (latest > 32 != scrolled) {
      console.log("Scrolled state changed:", latest > 32);
      setScrolled(latest > 32);
    }
  });

  return (
    <motion.header
      className={clsx(
        "sticky inset-x-0 top-0 z-50 font-serif bg-gradient-to-b from-background to-transparent"
      )}
    >
      <nav className="py-4 px-7.5 mx-auto flex justify-between items-center">
        <Link href="/">
          <Image
            src="/svgs/knot_sm.svg"
            alt=""
            width={64}
            height={64}
            className=""
          />
        </Link>
        <menu className="flex gap-8 justify-end">
          <LinkItem href="/schedule">Schedule</LinkItem>
        </menu>
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
