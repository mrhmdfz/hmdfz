import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { DesignProjectCardProps } from "@/types/project";

export default function DesignProjectCard({
  title,
  description,
  image,
  category,
  link = "#",
}: DesignProjectCardProps) {
  return (
    <div className="relative group rounded-2xl overflow-hidden border border-dashed dark:border-gray-700  border-gray-200">
      <div className="relative w-full h-60 md:h-80">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div
          className="absolute inset-0 
          bg-linear-to-t from-black/50 via-black/25 to-transparent 
          opacity-75 transition duration-500"
        />
        <div
          className="absolute inset-0 pointer-events-none 
          shadow-[inset_0_0_100px_rgba(0,0,0,0.65)]"
        />
      </div>
      <div className="absolute bottom-0 left-0 p-4 md:p-6 text-white w-full flex flex-col md:gap-2">
        {category && (
          <span className="text-xs uppercase tracking-wider text-blue-300">
            {category}
          </span>
        )}
        <h2 className="text-md md:text-xl font-medium tracking-tight">
          {title}
        </h2>
        <p className="text-xs md:text-sm text-gray-200 max-w-md leading-relaxed">
          {description}
        </p>
        <a
          href={link}
          target="_blank"
          className="mt-2 inline-flex items-center gap-1 text-sm text-blue-300 hover:text-white transition duration-300 group/link"
        >
          <span className="relative">
            View Design
            <span className="absolute left-0 -bottom-1 w-0 h-px bg-blue-300 transition-all duration-300 group-hover/link:w-full"></span>
          </span>
          <ArrowUpRight size={16} />
        </a>
      </div>
    </div>
  );
}
