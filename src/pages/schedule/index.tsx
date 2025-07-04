import { MobileSchedule } from "@/components/MobileSchedule/MobileSchedule";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function Home() {
  const [state, setState] = useState(true);
  const child = {
    small: { opacity: 0, scale: 0.5 },
    big: { opacity: 1, scale: 1 },
  };
  return (
    <main className="min-h-[60dvh] flex items-center justify-center">
      <motion.div
        className="flex gap-16"
        initial="small"
        animate="big"
        transition={{ duration: 0.5, delayChildren: 2, staggerChildren: 0.5 }}
      >
        <motion.div
          className="size-8 bg-green-500 rounded-full"
          variants={child}
        />
        <motion.div className="size-8 bg-blue-500" variants={child} />
        <motion.div
          className="size-8 bg-green-500 rounded-full"
          variants={child}
        />
        <motion.div className="size-8 bg-blue-500" variants={child} />
      </motion.div>
    </main>
  );
}
