import Image from "next/image";
import { Github } from "lucide-react";
import { ProjectCardProps } from "@/app/types/project";

export default function ProjectCard({
  title,
  description,
  image,
  githubUrl,
  techStack,
}: ProjectCardProps) {
  return (
    <div className="group border border-dashed border-gray-200 rounded-xl overflow-hidden hover:bg-blue-50 transition-all duration-300">
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
          <h2 className="text-blue-600 font-medium text-sm md:text-lg tracking-tight">
            {title}
          </h2>
          <a
            href={githubUrl}
            target="_blank"
            className="flex items-center gap-1 text-blue-600 border border-dashed border-gray-200 px-3 py-1 rounded-md hover:bg-primary hover:text-blue-800 hover:border-primary transition-all duration-300 text-xs md:text-sm"
          >
            <Github size={16} />
            GitHub
          </a>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 text-[11px]">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="border border-dashed border-gray-200 px-2 py-1 rounded-md text-blue-600"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
