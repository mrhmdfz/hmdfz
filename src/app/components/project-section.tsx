"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./commons/ProjectCard";
import DesignProjectCard from "./commons/DesignProjectCard";

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("website");
  const tabs = ["website", "design", "other"];

  return (
    <section className="flex flex-col gap-8 bg-gray-50 border border-dashed border-gray-200 border-t-0 p-8">
      <h1 className="text-blue-600 text-sm tracking-tight font-semibold">
        PROJECTS
      </h1>
      <div className="relative flex gap-4 border-b border-dashed border-gray-200 pb-3">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="relative px-4 py-1 font-brico text-sm md:text-base tracking-wide capitalize"
          >
            {activeTab === tab && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-primary/80 rounded-full -z-10"
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            )}
            <span
              className={`transition ${
                activeTab === tab
                  ? "text-gray-800"
                  : "text-slate-400 hover:text-blue-600"
              }`}
            >
              {tab === "other" ? "Other" : tab}
            </span>
          </button>
        ))}
      </div>
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-6"
          >
            {activeTab === "website" && (
              <ProjectCard
                title="Sistem Manajemen Tugas Akhir"
                description="A web-based thesis management system designed to digitize and streamline academic workflows."
                image="/projects/project-1.png"
                githubUrl="https://github.com/mrhmdfz/sista"
                techStack={["CodeIgniter", "MySQL", "TailwindCSS"]}
              />
            )}

            {activeTab === "design" && (
              <DesignProjectCard
                title="KKN Magazine Design"
                description="A thoughtfully designed community magazine documenting stories and impact during the KKN program."
                image="/projects/design-1.jpg"
                link="https://online.fliphtml5.com/drghh/hvlg"
              />
            )}

            {activeTab === "other" && (
              <div className="border border-dashed border-gray-200 p-6 rounded-xl hover:bg-blue-50/40 transition">
                <h2 className="text-blue-600 font-medium mb-2">
                  Additional Projects
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit rem, dolore vitae aliquid enim qui cupiditate
                  quo asperiores quasi facere magni eos temporibus saepe aliquam
                  voluptatem, voluptas nemo voluptatibus mollitia sint nulla
                  officia.
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
