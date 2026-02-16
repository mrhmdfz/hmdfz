"use client";

import { motion } from "framer-motion";
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

  return (
    <div
      className="flex flex-col gap-5
      bg-gray-50
      border border-dashed border-gray-200
      border-t-0 border-l-gray-200 border-r-gray-200 border-b-gray-200
      w-full
      p-6 overflow-hidden"
    >
      {/* Title */}
      <h1 className="text-blue-600 text-sm md:text-md tracking-tight font-semibold">
        SKILLS / TECH STACK
      </h1>
      {/* Skill Categories */}
      <div className="flex flex-wrap gap-3 text-xs md:text-sm">
        {[
          "Web Development",
          "UI/UX Thinking",
          "Graphic Design",
          "IT Support",
          "Project Management",
          "Team Leadership",
        ].map((skill, index) => (
          <div
            key={index}
            className="border rounded-xl border-gray-300 px-3 py-2 tracking-tighter text-gray-500/85 font-medium font-geist hover:text-gray-700 hover:bg-primary transition-all duration-300"
          >
            {skill}
          </div>
        ))}
      </div>
      <div className="border-b border-gray-200 w-full my-2"></div>
      {/* Logo Marquee */}
      <div className="relative w-full overflow-hidden">
        {/* Fade kiri */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-linear-to-r from-gray-50 to-transparent z-10" />
        {/* Fade kanan */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-linear-to-l from-gray-50 to-transparent z-10" />

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
            <div
              key={index}
              className="opacity-70 hover:opacity-100 transition duration-500 hover:scale-110"
            >
              <Image
                src={logo}
                alt="tech"
                width={42}
                height={42}
                className="grayscale hover:grayscale-0 transition duration-500"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
