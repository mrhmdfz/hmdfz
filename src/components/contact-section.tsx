"use client";

import { motion, Variants } from "framer-motion";

export default function ContactSection() {
  const containerVariant: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div className="flex flex-col gap-3 bg-base border border-dashed dark:border-gray-700 border-gray-200 border-r-gray-200 border-t-0 border-l-gray-200 border-b-gray-200 w-full p-6">
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col gap-3"
      >
        <motion.h1
          variants={itemVariant}
          className="dark:text-blue-200 text-blue-600 text-sm md:text-md tracking-tight font-semibold"
        >
          CONTACT
        </motion.h1>

        <motion.div
          variants={itemVariant}
          className="flex flex-col divide-y divide-dashed divide-gray-200 dark:divide-gray-700"
        >
          <motion.div
            variants={itemVariant}
            className="grid grid-cols-2 py-4 items-center"
          >
            <span className="dark:text-gray-600 text-gray-400 text-xs md:text-sm tracking-wide font-geist">
              EMAIL
            </span>
            <a
              href="mailto:hmdfzi15@gmail.com"
              className="flex items-center gap-2 justify-end text-xs md:text-sm dark:text-gray-400 text-blue-600 hover:text-blue-800 transition"
            >
              hmdfzi15@gmail.com
            </a>
          </motion.div>

          <motion.div
            variants={itemVariant}
            className="grid grid-cols-2 py-4 items-center"
          >
            <span className="dark:text-gray-600 text-gray-400 text-xs md:text-sm tracking-wide font-geist">
              INSTAGRAM
            </span>
            <a
              href="https://instagram.com/hmdfzzi"
              target="_blank"
              className="flex items-center gap-2 justify-end text-xs md:text-sm dark:text-gray-400 text-blue-600 hover:text-blue-800 transition"
            >
              @hmdfzzi
            </a>
          </motion.div>

          <motion.div
            variants={itemVariant}
            className="grid grid-cols-2 py-4 items-center"
          >
            <span className="dark:text-gray-600 text-gray-400 text-xs md:text-sm tracking-wide font-geist">
              GITHUB
            </span>
            <a
              href="https://github.com/mrhmdfz"
              target="_blank"
              className="flex items-center gap-2 text-xs md:text-sm justify-end dark:text-gray-400 text-blue-600 hover:text-blue-800 transition"
            >
              github.com/mrhmdfz
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
