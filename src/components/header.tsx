"use client";

import { Github, Instagram, Mail, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: -25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className="relative flex justify-between items-center bg-base border border-dashed dark:border-gray-700 border-gray-200 border-t-0 w-full h-14 md:h-16 px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="contents"
      >
        <motion.h1
          variants={itemVariants}
          whileHover={{ x: 4 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="dark:text-blue-100 dark:hover:text-blue-300 font-geist text-[12px] md:text-[13px] text-blue-600 hover:text-blue-800 transition-all duration-200 tracking-tight"
        >
          HMDFZ
        </motion.h1>

        <div className="flex gap-2 md:gap-3">
          {[
            {
              href: "mailto:hmdfzi15@gmail.com",
              icon: <Mail className="text-gray-50" size={14} />,
            },
            {
              href: "https://instagram.com/hmdfzzi",
              icon: <Instagram className="text-gray-50" size={14} />,
            },
            {
              href: "https://github.com/mrhmdfz",
              icon: <Github className="text-gray-50" size={14} />,
            },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              className="dark:bg-gray-950 dark:hover:bg-gray-800 dark:border border-dashed border-gray-200 border dark:border-dashed dark:border-gray-700 p-1 bg-indigo-300 rounded hover:bg-indigo-400 transition-all duration-200"
            >
              {item.icon}
            </a>
          ))}
        </div>

        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="absolute -bottom-4 right-6 bg-base border border-dashed dark:border-gray-700 border-gray-200 rounded-full px-3 py-1.5 shadow-sm backdrop-blur-md hover:scale-105 transition-all duration-300"
        >
          {mounted && theme === "dark" ? (
            <div
              key="sun"
              className="flex items-center gap-2 dark:text-blue-200 text-blue-600"
            >
              <Sun size={14} />
            </div>
          ) : (
            <div key="moon" className="flex items-center gap-2 text-blue-600">
              <Moon size={14} />
            </div>
          )}
        </button>
      </motion.div>
    </div>
  );
}
