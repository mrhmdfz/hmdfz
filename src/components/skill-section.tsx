"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

export default function SkillsSection() {
  const techStack = [
    "/icons/nextjs.svg",
    "/icons/react.svg",
    "/icons/laravel.svg",
    "/icons/codeigniter.svg",
    "/icons/mysql.svg",
    "/icons/python.svg",
    "/icons/tailwind.svg",
  ];

  const containerVariant: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.08,
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
    <div className="flex flex-col gap-5 bg-base border border-dashed border-gray-200 dark:border-gray-700 border-t-0 border-l-gray-200 border-r-gray-200 border-b-gray-200 w-full p-6 overflow-hidden">
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col gap-5"
      >
        <motion.h1
          variants={itemVariant}
          className="text-blue-600 dark:text-blue-200 text-sm md:text-md tracking-tight font-semibold"
        >
          SKILLS/STACK
        </motion.h1>

        <motion.div
          variants={itemVariant}
          className="flex flex-wrap gap-3 text-xs md:text-sm"
        >
          {[
            "Web Development",
            "UI/UX Thinking",
            "Graphic Design",
            "IT Support",
            "Project Management",
            "Team Leadership",
          ].map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariant}
              className="border rounded-xl dark:border-gray-700 dark:text-gray-400 border-gray-300 px-3 py-2 tracking-tighter text-gray-500/85 font-medium font-geist hover:text-gray-700 hover:bg-primary transition-all duration-300"
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariant}
          className="border-b dark:border-gray-700 border-gray-200 w-full my-2"
        ></motion.div>

        <motion.div
          variants={itemVariant}
          className="relative w-full overflow-hidden"
        >
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-linear-to-r from-gray-50 dark:from-gray-950 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-linear-to-l from-gray-50 dark:from-gray-950 to-transparent z-10" />

          <motion.div
            className="flex gap-16 items-center w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 28,
              ease: "linear",
            }}
          >
            {[...techStack, ...techStack].map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 0.7, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="opacity-70 hover:opacity-100 transition duration-500 hover:scale-110"
              >
                <Image
                  src={logo}
                  alt="tech"
                  width={42}
                  height={42}
                  className="grayscale hover:grayscale-0 transition duration-500"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
