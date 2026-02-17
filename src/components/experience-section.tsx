"use client";

import { motion, Variants } from "framer-motion";

export default function ExperiencesSection() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className="flex flex-col gap-5 bg-base dark:border-gray-700 border border-dashed border-r-gray-200 border-t-0 border-l-gray-200 border-b-gray-200 w-full p-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="flex flex-col gap-5"
      >
        <motion.div
          variants={itemVariants}
          className="flex justify-between items-center"
        >
          <h1 className="dark:text-blue-200 text-blue-600 text-sm md:text-md tracking-tight font-semibold">
            EXPERIENCE
          </h1>

          <a
            href="https://drive.google.com/file/d/1gwR3vl5qPW6ZEenwR2vzgsFuSrGvJInv/view?usp=sharing"
            target="_blank"
            className="text-xs md:text-sm border border-dashed border-gray-200 dark:border-gray-700 dark:text-blue-200 px-3 py-1 rounded-md text-blue-600 hover:bg-gray-900 dark:hover:text-blue-200 hover:text-blue-600 transition-all duration-300"
          >
            Download CV
          </a>
        </motion.div>

        <motion.div
          variants={containerVariants}
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
              variants={itemVariants}
              className="flex justify-between gap-6"
            >
              <div className="max-w-2xl">
                <h2 className="dark:text-gray-400 text-gray-700 text-sm font-medium">
                  {item.title}
                </h2>
                <p className="mt-1 dark:text-gray-600 text-gray-400 text-xs md:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <span className="dark:text-gray-600 text-gray-400 font-geist text-xs md:text-sm whitespace-nowrap">
                {item.year}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
