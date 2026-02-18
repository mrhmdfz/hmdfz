import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { ProjectCardProps } from "@/types/project";

export default function ProjectCard({
  title,
  description,
  image,
  demoUrl,
  githubUrl,
  techStack,
}: ProjectCardProps) {
  return (
    <div className="group border border-dashed dark:border-gray-700 border-gray-200 rounded-xl overflow-hidden dark:hover:bg-gray-900 hover:bg-blue-50 transition-all duration-300">
      <div className="relative w-full h-36 md:h-48 bg-gray-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition duration-500"
        />
      </div>
      <div className="p-5 flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <h2 className="dark:text-blue-200 text-blue-600 font-medium text-[12px] md:text-lg tracking-tight">
            {title}
          </h2>
          <div className="flex gap-1 md:gap-2">
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                className="flex items-center gap-1 dark:text-blue-200 text-blue-600 dark:border-gray-700 border border-dashed border-gray-200 px-2 md:px-3 py-1 rounded-md hover:bg-primary dark:hover:bg-gray-800 dark:hover:text-blue-200 hover:text-blue-800  transition-all duration-300 text-[10px] md:text-sm"
              >
                <ExternalLink size={14} />
                Demo
              </a>
            )}
            <a
              href={githubUrl}
              target="_blank"
              className="flex items-center gap-1 dark:text-blue-200 text-blue-600 dark:border-gray-700 border border-dashed border-gray-200 px-2 md:px-3 py-1 rounded-md hover:bg-primary dark:hover:bg-gray-800 dark:hover:text-blue-200 hover:text-blue-800  transition-all duration-300 text-[10px] md:text-sm"
            >
              <Github size={14} />
              GitHub
            </a>
          </div>
        </div>
        <p className="dark:text-gray-400 text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 text-[11px]">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="dark:border-gray-700 dark:text-blue-200 border border-dashed border-gray-200 px-2 py-1 rounded-md text-blue-600"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
