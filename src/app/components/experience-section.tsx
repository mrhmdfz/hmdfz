"use client";

import { motion } from "framer-motion";

export default function ExperiencesSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col gap-5
  bg-base 
  border border-dashed 
  border-r-gray-200 border-t-0 border-l-gray-200 border-b-gray-200 
  w-full
  p-6"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="flex justify-between items-center"
      >
        <h1 className="text-blue-600 text-sm md:text-md tracking-tight font-semibold">
          EXPERIENCE
        </h1>

        <a
          href="https://drive.google.com/file/d/1gwR3vl5qPW6ZEenwR2vzgsFuSrGvJInv/view?usp=sharing"
          target="_blank"
          className="text-xs md:text-sm border border-dashed border-gray-200 px-3 py-1 rounded-md text-blue-600 hover:bg-primary hover:text-blue-600 hover:border-primary transition-all duration-300"
        >
          Download CV
        </a>
      </motion.div>

      {/* Experience List */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
              delayChildren: 0.3,
            },
          },
        }}
        className="flex flex-col gap-6 font-brico"
      >
        {[
          {
            title: "Freelance Web Developer & IT Services",
            desc: "Developing web applications using Laravel, Next.js, React, and CodeIgniter while providing digital solutions and IT support for business digitalization.",
            year: "2020 - Present",
          },
          {
            title: "Web & Data Mentor – Carrier and Training Center",
            desc: "Guided students in web development and data analysis, assisting them in building structured systems and solving technical challenges during training sessions.",
            year: "2024",
          },
          {
            title: "Administrative Intern – Civil Registry Office",
            desc: "Supported public administration services including digital document processing, citizen data management, and ensuring efficient service delivery.",
            year: "2024",
          },
          {
            title: "Printing Production Staff – Surya Mandiri Printing",
            desc: "Operated printing machines, managed design adjustments, handled customer orders, and ensured production quality standards were consistently met.",
            year: "2021 - 2022",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex justify-between gap-6"
          >
            <div className="max-w-2xl">
              <h2 className="text-gray-700 text-sm font-medium">
                {item.title}
              </h2>
              <p className="mt-1 text-gray-400 text-xs md:text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
            <span className="text-gray-400 font-geist text-xs md:text-sm whitespace-nowrap">
              {item.year}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
