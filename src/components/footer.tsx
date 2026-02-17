"use client";

import { motion, Variants } from "framer-motion";

export default function Footer() {
  const containerVariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const textVariant: Variants = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.1,
      },
    },
  };

  return (
    <div>
      <div className="flex justify-center items-center dark:border-gray-700 bg-base border border-dashed border-r-gray-200 border-t-0 border-l-gray-200 border-b-gray-200 w-full h-14 md:h-16 p-3">
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="flex justify-center items-center"
        >
          <motion.h1
            variants={textVariant}
            className="font-geist text-[12px] md:text-[13px] text-gray-500 dark:text-gray-300 transition-all duration-200 tracking-tight"
          >
            © 2026 Ahmad Fauzi
          </motion.h1>
        </motion.div>
      </div>
    </div>
  );
}
