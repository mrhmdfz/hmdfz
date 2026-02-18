"use client";

import { motion } from "framer-motion";
export default function HeroIntro() {
  const roles = ["JUNIOR WEB DEVELOPER", "GRAPHIC DESIGNER", "EDITOR"];

  return (
    <section className="flex flex-col gap-6 bg-base border border-dashed dark:border-gray-700 border-gray-200 border-t-0 w-full p-6 overflow-hidden">
      <motion.div
        className="flex flex-wrap gap-3"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
      >
        {roles.map((role, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 10 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="dark:text-blue-200 text-blue-600 rounded-md font-brico text-[10px] md:text-[13px] dark:border-gray-700 border-gray-200 border border-dashed px-3 py-2 hover:bg-blue-50 dark:hover:bg-gray-900 transition-all duration-300"
          >
            {role}
          </motion.div>
        ))}
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="text-xl md:text-[28px] tracking-tight leading-tight dark:text-blue-200 text-blue-600 text-left font-brico font-medium max-w-3xl"
      >
        I{" "}
        <motion.span
          initial={{ backgroundPosition: "0% 50%" }}
          animate={{ backgroundPosition: "100% 50%" }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
          className="bg-gradient-to-r from-primary via-blue-400 to-primary bg-[length:200%_200%] rounded-xl px-2 py-1 text-white"
        >
          create
        </motion.span>{" "}
        thoughtful digital solutions where innovation, clarity, and real-world
        impact come together.
      </motion.p>
    </section>
  );
}
