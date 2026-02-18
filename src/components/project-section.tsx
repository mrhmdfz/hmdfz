"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import ProjectCard from "./commons/ProjectCard";
import DesignProjectCard from "./commons/DesignProjectCard";
import OtherProjectCard from "./commons/OtherProjectCard";

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
                    : "dark:text-slate-300 text-slate-600 dark:hover:text-primary/50 hover:text-slate-800"
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
                  className="flex flex-col gap-5"
                >
                  <ProjectCard
                    title="Sistem Manajemen Tugas Akhir"
                    description="A web-based thesis management system designed to digitize and streamline academic workflows."
                    image="/projects/project-1.png"
                    githubUrl="https://github.com/mrhmdfz/sista"
                    techStack={["CodeIgniter", "MySQL", "TailwindCSS"]}
                  />
                  <ProjectCard
                    title="BlueLotus"
                    description="Free to watch chinese drama streaming website with modern design and user-friendly interface."
                    image="/projects/project-2.png"
                    demoUrl="https://bluelotus.vercel.app"
                    githubUrl="https://github.com/mrhmdfz/bluelotus"
                    techStack={["NextJS", "TailwindCSS"]}
                  />
                </motion.div>
              )}

              {activeTab === "design" && (
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col gap-5"
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
                  className="flex flex-col gap-5"
                >
                  <OtherProjectCard
                    title="Python Object Detector"
                    description="Object detection using COCO SSD Trained Model + Python OpenCV to detect and classify objects in real-time video streams. The model is trained on the COCO dataset, which contains 50+ common object categories."
                    link="https://github.com/mrhmdfz/object_detector"
                  />
                  <OtherProjectCard
                    title="Whatsapp Chatbot"
                    description="mrhmdfz-bot is a chatbot built using JavaScript and the Baileys library, designed to provide automated responses and engage in conversations on WhatsApp."
                    link="https://github.com/mrhmdfz/mrhmdfz-bot"
                  />
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
