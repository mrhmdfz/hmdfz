"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import ProjectCard from "./commons/ProjectCard";
import DesignProjectCard from "./commons/DesignProjectCard";

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("website");
  const tabs = ["website", "design", "other"];

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="flex flex-col gap-8 bg-base border border-dashed dark:border-gray-700 border-gray-200 border-t-0 p-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col gap-8"
      >
        <motion.h1
          variants={itemVariants}
          className="dark:text-blue-200 text-blue-600 text-sm tracking-tight font-semibold"
        >
          PROJECTS
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="relative flex gap-4 border-b border-dashed dark:border-gray-700 border-gray-200 pb-3"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="relative px-4 py-1 font-brico text-sm md:text-base tracking-wide capitalize"
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 dark:bg-primary bg-primary/80 rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span
                className={`transition ${
                  activeTab === tab
                    ? "text-gray-900"
                    : "dark:text-slate-300 text-slate-600 hover:text-primary/50"
                }`}
              >
                {tab === "other" ? "Other" : tab}
              </span>
            </button>
          ))}
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-6"
            >
              {activeTab === "website" && (
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ProjectCard
                    title="Sistem Manajemen Tugas Akhir"
                    description="A web-based thesis management system designed to digitize and streamline academic workflows."
                    image="/projects/project-1.png"
                    githubUrl="https://github.com/mrhmdfz/sista"
                    techStack={["CodeIgniter", "MySQL", "TailwindCSS"]}
                  />
                </motion.div>
              )}

              {activeTab === "design" && (
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <DesignProjectCard
                    title="KKN Magazine Design"
                    description="A thoughtfully designed community magazine documenting stories and impact during the KKN program."
                    image="/projects/design-1.jpg"
                    link="https://online.fliphtml5.com/drghh/hvlg"
                  />
                </motion.div>
              )}

              {activeTab === "other" && (
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="border border-dashed dark:border-gray-700 border-gray-200 p-6 rounded-xl dark:hover:bg-gray-900 hover:bg-blue-50/40 transition"
                >
                  <h2 className="dark:text-blue-200 text-blue-600 font-medium mb-2">
                    Additional Projects
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit rem, dolore vitae aliquid enim qui cupiditate
                    quo asperiores quasi facere magni eos temporibus saepe
                    aliquam voluptatem, voluptas nemo voluptatibus mollitia sint
                    nulla officia.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
