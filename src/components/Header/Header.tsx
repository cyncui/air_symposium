import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "motion/react";

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
        "p-4 sticky top-0 z-50 font-serif bg-gradient-to-b from-background to-transparent"
      )}
    >
      <nav className="container mx-auto">
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
