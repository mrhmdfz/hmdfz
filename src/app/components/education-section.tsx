"use client";

import { motion } from "framer-motion";

export default function EducationSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col gap-5
  bg-base 
  border border-dashed 
  border-r-gray-200 border-t-0 border-l-gray-200 border-b-gray-200 
  w-full
  p-6"
    >
      <h1 className="text-blue-600 text-sm md:text-md tracking-tight font-semibold">
        EDUCATION
      </h1>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
              delayChildren: 0.2,
            },
          },
        }}
        className="flex justify-between gap-5 font-brico"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl flex flex-col gap-2"
        >
          <h2 className="text-gray-700 font-medium text-sm md:text-base">
            Bachelor of Computer Science
          </h2>

          <p className="text-gray-700 text-sm italic">
            Institut Teknologi Pagar Alam
          </p>

          <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
            Graduated with honors (GPA 3.88/4.00). Recognized as Best Research
            Graduate and Outstanding Informatics Student for academic excellence
            and research contribution.
          </p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 15 },
              show: { opacity: 1, y: 0 },
            }}
            className="flex flex-wrap gap-2 mt-2 text-[11px]"
          >
            {["GPA 3.88", "Best Research Award", "Outstanding Student"].map(
              (item, index) => (
                <span
                  key={index}
                  className="border border-dashed border-gray-200 px-2 py-1 rounded-md text-blue-600"
                >
                  {item}
                </span>
              )
            )}
          </motion.div>
        </motion.div>

        <motion.span
          variants={{
            hidden: { opacity: 0, x: 20 },
            show: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.6 }}
          className="text-gray-400 whitespace-nowrap font-geist text-xs md:text-sm"
        >
          2021 - 2025
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
