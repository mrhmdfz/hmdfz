"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="relative bg-base border border-dashed dark:border-gray-700 border-gray-200 border-t-0 p-10 overflow-hidden">
      <h1 className="dark:text-blue-200 text-blue-600 text-sm tracking-tight font-semibold mb-12">
        ABOUT
      </h1>
      <div className="flex flex-col items-center text-center gap-5 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-44 h-44 md:w-48 md:h-48"
        >
          <div className="absolute inset-0 rounded-full bg-blue-100/40 dark:bg-blue-100/20 blur-2xl"></div>
          <Image
            src="/profile.jpg"
            alt="Profile"
            fill
            className="relative object-cover rounded-full border border-dashed dark:border-gray-700  transition-all duration-300 border-gray-200"
          />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="font-brico text-2xl md:text-3xl dark:text-blue-200 text-blue-600 leading-tight tracking-tight"
        >
          Crafting meaningful digital systems with clarity and purpose.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
          className="font-geist text-gray-600 dark:text-gray-500 text-sm md:text-base leading-relaxed"
        >
          I am a Junior Web Developer specializing in Laravel, Next.js, React,
          and CodeIgniter. With experience in graphic design and IT support, I
          bridge technical execution with visual awareness to deliver scalable,
          structured, and impactful digital solutions.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 text-xs tracking-wide text-gray-400 pt-4"
        >
          <span>Based in Indonesia</span>
          <span>•</span>
          <span>Open to Collaboration</span>
          <span>•</span>
          <span>Focused on Impact</span>
        </motion.div>
      </div>
    </section>
  );
}
